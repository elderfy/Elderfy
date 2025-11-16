# Stripe Payment Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Stripe Account
1. Go to https://dashboard.stripe.com/register
2. Sign up with your email
3. Complete the basic info (business name, etc.)

### Step 2: Get Your API Keys
1. Once logged in, go to https://dashboard.stripe.com/test/apikeys
2. You'll see two keys:
   - **Publishable key** (starts with `pk_test_...`)
   - **Secret key** (starts with `sk_test_...`) - Click "Reveal test key"

### Step 3: Add Keys to Vercel

**Via Vercel Dashboard (Mobile-Friendly):**
1. Go to https://vercel.com/dashboard
2. Click your **elderfy** project
3. Click **Settings** → **Environment Variables**
4. Add these TWO variables:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_test_...` (your publishable key) |
| `STRIPE_SECRET_KEY` | `sk_test_...` (your secret key) |

5. Click **Save** for each one
6. Go to **Deployments** tab
7. Click **...** on latest deployment → **Redeploy**

### Step 4: Test Payments

Once redeployed, test with these Stripe test cards:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- Use any future expiry date (e.g., 12/25)
- Use any 3-digit CVC (e.g., 123)
- Use any ZIP code

## How It Works

### Donations
1. User clicks amount button ($5, $10, $25, $50) OR enters custom amount
2. Redirects to Stripe Checkout (secure payment page)
3. User enters card info
4. On success → `/success` page
5. On cancel → back to elder profile

### Subscriptions
1. User clicks "Subscribe" button
2. Creates $10/month recurring subscription
3. Redirects to Stripe Checkout
4. User enters card info
5. Auto-charges monthly until cancelled

## Going Live (Production)

When ready for real payments:

1. **Complete Stripe Onboarding**:
   - Go to https://dashboard.stripe.com/account/onboarding
   - Add business details, bank account info
   - Complete identity verification

2. **Get Live API Keys**:
   - Go to https://dashboard.stripe.com/apikeys
   - Toggle from "Test mode" to "Live mode"
   - Copy the live keys (start with `pk_live_` and `sk_live_`)

3. **Update Vercel Environment Variables**:
   - Replace test keys with live keys
   - Redeploy

4. **Set Up Webhooks** (Optional but recommended):
   - Go to https://dashboard.stripe.com/webhooks
   - Add endpoint: `https://your-domain.vercel.app/api/webhooks`
   - Listen for `checkout.session.completed` event
   - Use webhook to save payment data to database

## Pricing

Stripe charges:
- **2.9% + $0.30** per successful transaction
- No monthly fees, setup fees, or hidden costs
- Only pay when you get paid

## Support

- Stripe Docs: https://stripe.com/docs
- Test Cards: https://stripe.com/docs/testing
- Dashboard: https://dashboard.stripe.com

## Current Implementation

✅ One-time donations ($5, $10, $25, $50, custom)
✅ Monthly subscriptions ($10/month)
✅ Success/cancel pages
✅ Secure Stripe Checkout
✅ Mobile responsive
✅ Test mode ready

To customize subscription amount, edit:
`app/api/create-subscription/route.ts` (line 23)

To add different pricing tiers, you can create multiple subscription buttons with different amounts!
