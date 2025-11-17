import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { DonationEmailTemplate, SubscriptionEmailTemplate } from '@/lib/email-templates';

// Lazy initialization of Stripe to avoid build-time errors
let stripe: Stripe | null = null;

function getStripe(): Stripe {
  if (!stripe) {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      throw new Error('Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable.');
    }
    stripe = new Stripe(secretKey, {
      apiVersion: '2025-10-29.clover',
    });
  }
  return stripe;
}

// Initialize Resend lazily to avoid build-time errors if API key is missing
const getResend = () => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(process.env.RESEND_API_KEY);
};

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe webhooks are not configured' },
        { status: 503 }
      );
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      return NextResponse.json(
        { error: 'Stripe webhook secret is not configured' },
        { status: 503 }
      );
    }

    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'No signature provided' },
        { status: 400 }
      );
    }

    // Verify the webhook signature
    let event: Stripe.Event;
    try {
      const stripeClient = getStripe();
      event = stripeClient.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Webhook signature verification failed' },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;

      case 'customer.subscription.created':
        await handleSubscriptionCreated(event.data.object as Stripe.Subscription);
        break;

      case 'charge.succeeded':
        await handleChargeSucceeded(event.data.object as Stripe.Charge);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  console.log('Checkout completed:', session.id);

  // Get elder information from metadata
  const elderName = session.metadata?.elderName || 'Elder';
  const elderEmail = session.metadata?.elderEmail;
  const donorName = session.customer_details?.name;
  const amount = session.amount_total || 0;

  if (!elderEmail) {
    console.error('No elder email in metadata');
    return;
  }

  // Determine if it's a one-time donation or subscription
  if (session.mode === 'payment') {
    // One-time donation
    try {
      const resend = getResend();
      await resend.emails.send({
        from: 'Elderfy <notifications@elderfy.com>',
        to: elderEmail,
        subject: `💝 You received a ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount / 100)} donation!`,
        html: DonationEmailTemplate({
          elderName,
          donorName: donorName || undefined,
          amount,
        }),
      });
      console.log(`Donation email sent to ${elderEmail}`);
    } catch (error) {
      console.error('Failed to send donation email:', error);
    }
  }
}

async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  console.log('Subscription created:', subscription.id);

  // Get customer details
  const stripeClient = getStripe();
  const customer = await stripeClient.customers.retrieve(subscription.customer as string);

  if (customer.deleted) {
    console.error('Customer was deleted');
    return;
  }

  const elderEmail = subscription.metadata?.elderEmail;
  const elderName = subscription.metadata?.elderName || 'Elder';
  const subscriberName = 'name' in customer ? customer.name : undefined;

  if (!elderEmail) {
    console.error('No elder email in subscription metadata');
    return;
  }

  // Get subscription amount
  const amount = subscription.items.data[0]?.price.unit_amount || 0;
  const interval = subscription.items.data[0]?.price.recurring?.interval || 'month';

  try {
    const resend = getResend();
    await resend.emails.send({
      from: 'Elderfy <notifications@elderfy.com>',
      to: elderEmail,
      subject: `🎊 New monthly subscriber! (+${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount / 100)}/${interval})`,
      html: SubscriptionEmailTemplate({
        elderName,
        subscriberName: subscriberName || undefined,
        amount,
        interval,
      }),
    });
    console.log(`Subscription email sent to ${elderEmail}`);
  } catch (error) {
    console.error('Failed to send subscription email:', error);
  }
}

async function handleChargeSucceeded(charge: Stripe.Charge) {
  console.log('Charge succeeded:', charge.id);
  // Additional charge handling logic can be added here if needed
}
