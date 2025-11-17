import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

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

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Payment processing is not configured. Please contact support.' },
        { status: 503 }
      );
    }

    const { elderName, elderId, elderEmail } = await request.json();

    // In production, you'd create a Stripe Price ID for monthly subscriptions
    // For now, we'll use a fixed $10/month subscription
    const stripeClient = getStripe();
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Monthly Support for ${elderName}`,
              description: `Monthly subscription to support ${elderName} on Elderfy`,
            },
            unit_amount: 1000, // $10.00
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/elder/${elderId}`,
      subscription_data: {
        metadata: {
          elderId,
          elderName,
          elderEmail,
          type: 'subscription',
        },
      },
      metadata: {
        elderId,
        elderName,
        elderEmail,
        type: 'subscription',
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to create subscription session' },
      { status: 500 }
    );
  }
}
