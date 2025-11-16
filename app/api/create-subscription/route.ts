import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-10-29.clover',
});

export async function POST(request: NextRequest) {
  try {
    const { elderName, elderId } = await request.json();

    // In production, you'd create a Stripe Price ID for monthly subscriptions
    // For now, we'll use a fixed $10/month subscription
    const session = await stripe.checkout.sessions.create({
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
      metadata: {
        elderId,
        elderName,
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
