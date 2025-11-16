# Email Notification Setup Guide

This guide explains how to set up email notifications for Elderfy so that elders receive emails when they get donations or new subscribers.

## Prerequisites

- Resend account (sign up at https://resend.com)
- Stripe account with webhook capabilities
- Access to your `.env.local` file

## Step 1: Set Up Resend API Key

1. **Create a Resend Account**
   - Go to https://resend.com and sign up for a free account
   - Verify your email address

2. **Get Your API Key**
   - Log in to your Resend dashboard
   - Navigate to **API Keys** section
   - Click **Create API Key**
   - Give it a name like "Elderfy Notifications"
   - Copy the API key (you'll only see it once!)

3. **Add to Environment Variables**
   - Open your `.env.local` file in the root directory
   - Add the following line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

4. **Configure Your Domain (Optional but Recommended)**
   - In Resend dashboard, go to **Domains**
   - Add your domain (e.g., elderfy.com)
   - Follow DNS verification instructions
   - Once verified, update `from` address in `app/api/webhooks/stripe/route.ts` to use your domain

## Step 2: Set Up Stripe Webhook Secret

1. **Access Stripe Webhooks**
   - Log in to your Stripe Dashboard
   - Go to **Developers** → **Webhooks**

2. **Add Webhook Endpoint**
   - Click **Add endpoint**
   - Enter your webhook URL:
     - For production: `https://your-domain.com/api/webhooks/stripe`
     - For development: Use Stripe CLI (see below)
   - Select events to listen to:
     - `checkout.session.completed`
     - `customer.subscription.created`
     - `charge.succeeded`
   - Click **Add endpoint**

3. **Get Webhook Secret**
   - After creating the endpoint, click on it
   - Find **Signing secret** section
   - Click **Reveal** and copy the secret (starts with `whsec_`)

4. **Add to Environment Variables**
   - Open your `.env.local` file
   - Add the following line:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_your_actual_webhook_secret_here
   ```

## Step 3: Test Locally with Stripe CLI

For local development and testing:

1. **Install Stripe CLI**
   ```bash
   # macOS
   brew install stripe/stripe-cli/stripe

   # Windows
   scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
   scoop install stripe

   # Linux
   # See: https://stripe.com/docs/stripe-cli#install
   ```

2. **Login to Stripe**
   ```bash
   stripe login
   ```

3. **Forward Webhook Events to Localhost**
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

   This will output a webhook signing secret (starts with `whsec_`)

   Add this to your `.env.local`:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_output_from_stripe_listen
   ```

4. **Test Webhook Events**

   In another terminal, trigger test events:
   ```bash
   # Test donation (one-time payment)
   stripe trigger checkout.session.completed

   # Test subscription
   stripe trigger customer.subscription.created
   ```

## Step 4: Environment Variables Summary

Your `.env.local` file should contain:

```env
# Stripe Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Resend API Key
RESEND_API_KEY=re_your_api_key

# Other existing variables...
```

## Step 5: Verify Email Delivery

1. **Start Your Development Server**
   ```bash
   npm run dev
   ```

2. **Make a Test Donation**
   - Navigate to an elder's profile page
   - Click a donation amount or enter a custom amount
   - Complete the Stripe checkout (use test card: `4242 4242 4242 4242`)
   - Check the Stripe CLI output for webhook events

3. **Check Email Delivery**
   - For development: Resend will send emails to your verified email address
   - Check your inbox for the donation notification email
   - Verify the email looks correct and has proper formatting

4. **Monitor Webhook Logs**
   - Check Stripe Dashboard → Webhooks → Your endpoint
   - View recent webhook deliveries
   - Ensure they're returning `200 OK` responses

## Troubleshooting

### Emails Not Sending

1. **Check Resend API Key**
   - Verify `RESEND_API_KEY` is set correctly in `.env.local`
   - Ensure no extra spaces or quotes around the key
   - Verify the key is valid in Resend dashboard

2. **Check Webhook Secret**
   - Verify `STRIPE_WEBHOOK_SECRET` matches your Stripe webhook endpoint
   - For local development, use the secret from `stripe listen` output

3. **Check Webhook Events**
   - In Stripe Dashboard, check if webhooks are being delivered
   - Look for failed deliveries and error messages
   - Verify the webhook URL is correct

### Webhook Signature Verification Failed

- Ensure `STRIPE_WEBHOOK_SECRET` is correct
- Check that you're not modifying the request body before verification
- For local testing, make sure you're using the secret from `stripe listen`

### Elder Not Receiving Emails

1. **Verify Elder Email in Database**
   - Check that the elder's email is correctly stored
   - Ensure it's being passed through the payment flow

2. **Check Spam Folder**
   - Emails might be filtered to spam
   - Add `notifications@elderfy.com` to safe senders

3. **Resend Domain Verification**
   - If using a custom domain, ensure it's verified in Resend
   - Check DNS records are properly configured

## Email Templates

The system includes three email templates:

1. **DonationEmailTemplate** - Sent when elder receives a one-time donation
2. **SubscriptionEmailTemplate** - Sent when elder gets a new subscriber
3. **WelcomeEmailTemplate** - Sent when elder first registers (not yet implemented)

All templates are located in `lib/email-templates.tsx` and can be customized.

## Production Deployment

When deploying to production:

1. **Update Webhook URL**
   - In Stripe Dashboard, update webhook endpoint to production URL
   - Get new webhook secret and update `STRIPE_WEBHOOK_SECRET`

2. **Verify Domain in Resend**
   - Add and verify your production domain
   - Update `from` addresses in webhook handler

3. **Set Production Environment Variables**
   - Add all required environment variables to your hosting platform
   - Use production Stripe keys
   - Use production Resend API key

4. **Test End-to-End**
   - Make a real test donation in production
   - Verify webhook is received
   - Confirm email is delivered

## Security Notes

- Never commit `.env.local` to version control
- Keep webhook secrets secure
- Verify webhook signatures on all incoming requests
- Use HTTPS in production for webhook endpoints
- Rotate API keys periodically

## Support

For issues with:
- **Resend**: https://resend.com/docs
- **Stripe Webhooks**: https://stripe.com/docs/webhooks
- **Stripe CLI**: https://stripe.com/docs/stripe-cli

---

Last updated: 2025-11-16
