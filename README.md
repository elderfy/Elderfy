# Elderfy - Share Wisdom Across Generations

A platform where seniors can share their wisdom through videos, writing, music, and art. People can support elders through donations and subscriptions.

## Features

- **Elder Profiles**: Beautiful profile pages showcasing elder information and expertise
- **Multi-Format Content**: Support for videos, text articles, music, and artwork
- **Accessible Design**: Large buttons, high contrast, and senior-friendly interface
- **Payment Integration**: Stripe integration for donations and subscriptions
- **Responsive**: Works beautifully on desktop, tablet, and mobile devices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payments**: Stripe
- **Images**: Next.js Image optimization

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Elderfy
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Stripe API keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys).

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Elderfy/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── donate/        # Stripe payment endpoint
│   ├── elder/[id]/        # Elder profile pages
│   ├── elders/            # Elder directory
│   ├── content/[id]/      # Content detail pages
│   ├── upload/            # Content upload page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Button.tsx         # Accessible button component
│   ├── ElderCard.tsx      # Elder profile card
│   ├── ContentCard.tsx    # Content preview card
│   └── Navigation.tsx     # Site navigation
├── data/                  # Mock data
│   └── mockData.ts        # Sample elders and content
├── lib/                   # Utility functions
│   └── data.ts            # Data access functions
├── types/                 # TypeScript types
│   └── index.ts           # Type definitions
└── public/                # Static assets
```

## Accessibility Features

This platform is designed with seniors in mind:

- **Large Text**: Base font size of 1.125rem (18px)
- **High Contrast**: WCAG AA compliant color contrasts
- **Large Buttons**: Minimum 60px height for easy clicking
- **Clear Focus Indicators**: 3px blue outline on focused elements
- **Simple Navigation**: Intuitive menu structure
- **Semantic HTML**: Proper heading hierarchy and ARIA labels

## Stripe Integration

To enable payments:

1. Create a [Stripe account](https://dashboard.stripe.com/register)
2. Get your API keys from the [API Keys page](https://dashboard.stripe.com/apikeys)
3. Add keys to `.env.local`:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your publishable key
   - `STRIPE_SECRET_KEY`: Your secret key
4. For production, use live keys instead of test keys

## Data Storage

This MVP uses mock data stored in `data/mockData.ts`. For production:

1. Set up a database (PostgreSQL, MongoDB, etc.)
2. Replace mock data functions in `lib/data.ts` with database queries
3. Add authentication for elder accounts
4. Implement file upload for videos, images, and audio

## Future Enhancements

- User authentication and authorization
- Real database integration
- File upload functionality
- Comment system
- Search and filtering
- Email notifications
- Subscription management dashboard
- Social sharing
- Mobile app

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

ISC

## Support

For questions or issues, please open a GitHub issue.
