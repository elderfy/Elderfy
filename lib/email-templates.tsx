// Email templates for Elderfy notifications

interface DonationEmailProps {
  elderName: string;
  donorName?: string;
  amount: number;
  message?: string;
}

export function DonationEmailTemplate({ elderName, donorName, amount, message }: DonationEmailProps) {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount / 100); // Stripe amounts are in cents

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You received a donation!</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #fffbf5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #f97316 0%, #a855f7 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">🎉 You received a donation!</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="font-size: 20px; color: #2d332d; margin: 0 0 20px;">Dear ${elderName},</p>

              <p style="font-size: 18px; color: #2d332d; margin: 0 0 30px; line-height: 1.6;">
                Great news! ${donorName || 'A supporter'} just made a donation of <strong style="color: #f97316; font-size: 24px;">${formattedAmount}</strong> to support your work on Elderfy.
              </p>

              ${message ? `
              <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 20px; margin: 30px 0; border-radius: 8px;">
                <p style="margin: 0; font-size: 16px; color: #2d332d; font-style: italic;">
                  "${message}"
                </p>
              </div>
              ` : ''}

              <p style="font-size: 18px; color: #2d332d; margin: 30px 0 0; line-height: 1.6;">
                Your wisdom and contributions are making a real difference in people's lives. Thank you for sharing your knowledge with the community!
              </p>

              <div style="text-align: center; margin: 40px 0;">
                <a href="https://elderfy.com/dashboard" style="display: inline-block; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-size: 18px; font-weight: bold;">
                  View Your Dashboard
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #2d332d; padding: 30px; text-align: center;">
              <p style="margin: 0; color: #ffffff; font-size: 16px;">🌟 Elderfy - Connecting Generations Through Shared Wisdom</p>
              <p style="margin: 10px 0 0; color: #a0a0a0; font-size: 14px;">
                This is an automated notification. Please do not reply to this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

interface SubscriptionEmailProps {
  elderName: string;
  subscriberName?: string;
  amount: number;
  interval: string;
}

export function SubscriptionEmailTemplate({ elderName, subscriberName, amount, interval }: SubscriptionEmailProps) {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount / 100);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You have a new subscriber!</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #fffbf5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #a855f7 0%, #f97316 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">🎊 New Subscriber!</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="font-size: 20px; color: #2d332d; margin: 0 0 20px;">Dear ${elderName},</p>

              <p style="font-size: 18px; color: #2d332d; margin: 0 0 30px; line-height: 1.6;">
                Wonderful news! ${subscriberName || 'Someone'} just subscribed to support your work with a <strong style="color: #a855f7;">${interval}</strong> subscription of <strong style="color: #a855f7; font-size: 24px;">${formattedAmount}</strong>.
              </p>

              <div style="background: linear-gradient(135deg, #faf5ff 0%, #fff7ed 100%); padding: 25px; margin: 30px 0; border-radius: 12px; border: 2px solid #a855f7;">
                <p style="margin: 0; font-size: 18px; color: #2d332d; text-align: center;">
                  <strong>Your recurring monthly income</strong><br>
                  <span style="font-size: 28px; color: #a855f7; font-weight: bold;">${formattedAmount}/${interval}</span>
                </p>
              </div>

              <p style="font-size: 18px; color: #2d332d; margin: 30px 0 0; line-height: 1.6;">
                This subscriber believes in the value of your wisdom and wants to support you on an ongoing basis. Keep creating and sharing your amazing content!
              </p>

              <div style="text-align: center; margin: 40px 0;">
                <a href="https://elderfy.com/dashboard" style="display: inline-block; background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-size: 18px; font-weight: bold;">
                  View Your Subscribers
                </a>
              </div>

              <div style="background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 20px; margin: 30px 0; border-radius: 8px;">
                <p style="margin: 0; font-size: 16px; color: #2d332d;">
                  💡 <strong>Tip:</strong> Subscribers appreciate regular content. Consider creating new posts to keep them engaged and show your appreciation for their support!
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #2d332d; padding: 30px; text-align: center;">
              <p style="margin: 0; color: #ffffff; font-size: 16px;">🌟 Elderfy - Connecting Generations Through Shared Wisdom</p>
              <p style="margin: 10px 0 0; color: #a0a0a0; font-size: 14px;">
                This is an automated notification. Please do not reply to this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

interface WelcomeEmailProps {
  elderName: string;
  elderEmail: string;
}

export function WelcomeEmailTemplate({ elderName, elderEmail }: WelcomeEmailProps) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Elderfy!</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #fffbf5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #f97316 0%, #a855f7 100%); padding: 50px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 36px; font-weight: bold;">🌟 Welcome to Elderfy!</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="font-size: 20px; color: #2d332d; margin: 0 0 20px;">Dear ${elderName},</p>

              <p style="font-size: 18px; color: #2d332d; margin: 0 0 30px; line-height: 1.6;">
                We're thrilled to have you join the Elderfy community! Your wisdom, experience, and knowledge are invaluable, and we can't wait to see you share them with the world.
              </p>

              <h2 style="color: #f97316; font-size: 24px; margin: 30px 0 20px;">📚 Your next steps:</h2>

              <ol style="font-size: 18px; color: #2d332d; line-height: 1.8; margin: 0 0 30px; padding-left: 25px;">
                <li style="margin-bottom: 12px;"><strong>Complete your profile</strong> - Add your bio, expertise, and photo</li>
                <li style="margin-bottom: 12px;"><strong>Create your first content</strong> - Share a video, story, or artwork</li>
                <li style="margin-bottom: 12px;"><strong>Connect with supporters</strong> - Build your audience</li>
                <li style="margin-bottom: 12px;"><strong>Start earning</strong> - Receive donations and subscriptions</li>
              </ol>

              <div style="text-align: center; margin: 40px 0;">
                <a href="https://elderfy.com/upload" style="display: inline-block; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-size: 18px; font-weight: bold;">
                  Create Your First Post
                </a>
              </div>

              <div style="background-color: #fff7ed; padding: 25px; margin: 30px 0; border-radius: 12px; border: 2px solid #f97316;">
                <h3 style="margin: 0 0 15px; color: #f97316; font-size: 20px;">💡 Pro Tips:</h3>
                <ul style="margin: 0; padding-left: 20px; font-size: 16px; color: #2d332d; line-height: 1.6;">
                  <li>Share authentic stories from your life experiences</li>
                  <li>Post regularly to keep your audience engaged</li>
                  <li>Respond to comments and messages from supporters</li>
                  <li>Use high-quality photos and videos when possible</li>
                </ul>
              </div>

              <p style="font-size: 18px; color: #2d332d; margin: 30px 0 0; line-height: 1.6;">
                If you need any help getting started, our support team is here for you at <a href="mailto:support@elderfy.com" style="color: #f97316; text-decoration: none;">support@elderfy.com</a>.
              </p>

              <p style="font-size: 18px; color: #2d332d; margin: 20px 0 0; line-height: 1.6;">
                Welcome aboard!<br>
                <strong style="color: #a855f7;">The Elderfy Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #2d332d; padding: 30px; text-align: center;">
              <p style="margin: 0; color: #ffffff; font-size: 16px;">🌟 Elderfy - Connecting Generations Through Shared Wisdom</p>
              <p style="margin: 10px 0 0; color: #a0a0a0; font-size: 14px;">
                Questions? Email us at <a href="mailto:support@elderfy.com" style="color: #f97316; text-decoration: none;">support@elderfy.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
