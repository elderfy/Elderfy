'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-warmOrange-200 overflow-hidden transition-all duration-300 hover:border-warmOrange-400">
      <button
        onClick={onClick}
        className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 hover:bg-warmOrange-50 transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-sage-900 flex-1">
          {question}
        </h3>
        <div className={`text-4xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <span aria-hidden="true">▼</span>
        </div>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 md:p-8 pt-0 text-xl text-sage-700 leading-relaxed space-y-4">
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      </div>
    </div>
  );
}

interface FAQ {
  question: string;
  answer: string | React.ReactNode;
  category: string;
}

const faqs: FAQ[] = [
  // How Elderfy Works
  {
    category: 'How Elderfy Works',
    question: 'What is Elderfy?',
    answer: (
      <div className="space-y-4">
        <p>
          Elderfy is a unique platform where seniors share their wisdom, creativity, and life experiences
          with the world through videos, writing, music, and art. It's a space designed specifically for
          older adults to connect with people who value their knowledge and want to support them.
        </p>
        <p>
          Unlike traditional social media, Elderfy focuses on meaningful content and provides a way for
          elders to earn income through donations and subscriptions from people who appreciate their contributions.
        </p>
      </div>
    ),
  },
  {
    category: 'How Elderfy Works',
    question: 'Who can share content on Elderfy?',
    answer: 'Elderfy is designed for seniors and older adults who want to share their life experiences, expertise, and creative work. While we welcome wisdom-sharers of all ages, our platform is specifically built to serve and celebrate older adults.',
  },
  {
    category: 'How Elderfy Works',
    question: 'What kind of content can I share?',
    answer: (
      <div className="space-y-4">
        <p>You can share four types of content on Elderfy:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Videos:</strong> Share stories, tutorials, advice, or any video content</li>
          <li><strong>Writing:</strong> Publish articles, memoirs, poetry, or written wisdom</li>
          <li><strong>Music:</strong> Share your musical creations or performances</li>
          <li><strong>Art:</strong> Display your paintings, drawings, photography, or other visual art</li>
        </ul>
        <p>
          There are no restrictions on topics - share what you're passionate about and what you think
          others will find valuable!
        </p>
      </div>
    ),
  },
  {
    category: 'How Elderfy Works',
    question: 'Do I need technical skills to use Elderfy?',
    answer: 'Not at all! Elderfy is designed to be senior-friendly with large buttons, clear text, and simple navigation. We also offer text size controls and accessibility features to make the platform easy to use for everyone. If you can browse the web, you can use Elderfy.',
  },
  {
    category: 'How Elderfy Works',
    question: 'How do people find my content?',
    answer: (
      <div className="space-y-4">
        <p>Your content can be discovered in several ways:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Your elder profile page lists all your content</li>
          <li>Recent content appears on the homepage</li>
          <li>The analytics dashboard highlights popular content</li>
          <li>Visitors can browse all elders and their content</li>
        </ul>
        <p>
          The platform tracks views and engagement, so popular content naturally gets more visibility.
        </p>
      </div>
    ),
  },

  // Signing Up
  {
    category: 'Signing Up',
    question: 'How do I sign up as an elder?',
    answer: (
      <div className="space-y-4">
        <p>Getting started is simple:</p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>Click "Register as an Elder" on the homepage or navigation menu</li>
          <li>Fill out your profile with your name, age, bio, and areas of expertise</li>
          <li>Upload a profile photo</li>
          <li>Set up your payment information to receive donations and subscriptions</li>
          <li>Start sharing your wisdom!</li>
        </ol>
        <p>Registration is completely free with no monthly fees or hidden costs.</p>
      </div>
    ),
  },
  {
    category: 'Signing Up',
    question: 'Is there a minimum age requirement?',
    answer: 'While Elderfy is designed for seniors and older adults, we welcome anyone who wants to share genuine wisdom and life experience. However, our platform is optimized for and marketed toward users 55 and older.',
  },
  {
    category: 'Signing Up',
    question: 'How long does it take to get approved?',
    answer: 'Your account is activated immediately after registration! You can start uploading content and receiving support right away. There is no waiting period or approval process.',
  },
  {
    category: 'Signing Up',
    question: 'Can I create a profile for someone else?',
    answer: 'Yes! If you want to help a parent, grandparent, or other elder set up their profile and share their wisdom, you can create and manage their account with their permission. Just make sure the content and bio accurately represent them.',
  },
  {
    category: 'Signing Up',
    question: 'What information do I need to provide?',
    answer: (
      <div className="space-y-4">
        <p>To create your elder profile, you'll need:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Your name</li>
          <li>Your age</li>
          <li>A brief bio about yourself</li>
          <li>Your areas of expertise or interests</li>
          <li>A profile photo</li>
          <li>An email address (for notifications)</li>
        </ul>
        <p>
          To receive payments, you'll also need to set up a payment account through our secure
          payment processor (Stripe).
        </p>
      </div>
    ),
  },

  // Payments
  {
    category: 'Payments',
    question: 'How do donations work?',
    answer: (
      <div className="space-y-4">
        <p>
          Visitors can support you through one-time donations of any amount they choose. Common donation
          amounts are $5, $10, $25, and $50, but supporters can also enter custom amounts.
        </p>
        <p>
          When someone makes a donation, you'll receive an email notification with the donor's name (if they
          chose to share it), the amount, and any message they included.
        </p>
        <p>
          All donations go directly to you, minus a small processing fee from our payment processor (Stripe).
        </p>
      </div>
    ),
  },
  {
    category: 'Payments',
    question: 'What are subscriptions?',
    answer: (
      <div className="space-y-4">
        <p>
          Subscriptions allow supporters to provide you with recurring monthly income. They can choose to
          subscribe at different tiers (typically $5, $10, or $25 per month).
        </p>
        <p>
          Subscribers automatically support you each month until they choose to cancel. You'll receive an
          email notification each time you gain a new subscriber.
        </p>
        <p>
          This provides you with more predictable, stable income from your most dedicated supporters.
        </p>
      </div>
    ),
  },
  {
    category: 'Payments',
    question: 'How and when do I get paid?',
    answer: 'Payments are processed through Stripe, a secure payment platform. Funds from donations and subscriptions are deposited directly into your bank account according to Stripe\'s standard payout schedule (typically 2-7 business days after the payment).',
  },
  {
    category: 'Payments',
    question: 'Are there any fees?',
    answer: (
      <div className="space-y-4">
        <p>
          Elderfy is <strong>completely free to join and use</strong>. There are no monthly fees, no listing fees,
          and no commission on your earnings.
        </p>
        <p>
          The only fees are standard payment processing fees charged by Stripe (typically around 2.9% + $0.30
          per transaction). These are industry-standard rates and go directly to the payment processor, not to Elderfy.
        </p>
      </div>
    ),
  },
  {
    category: 'Payments',
    question: 'Is payment information secure?',
    answer: 'Absolutely! All payment processing is handled by Stripe, one of the world\'s most trusted and secure payment platforms. Elderfy never stores your credit card or banking information. All financial data is encrypted and protected by industry-leading security measures.',
  },
  {
    category: 'Payments',
    question: 'Can supporters remain anonymous?',
    answer: 'Yes, supporters can choose whether to share their name when making donations. If they prefer to remain anonymous, you\'ll still receive the donation and email notification, but without the donor\'s identifying information.',
  },

  // What Makes Elderfy Different
  {
    category: 'What Makes Elderfy Different',
    question: 'How is Elderfy different from YouTube or other platforms?',
    answer: (
      <div className="space-y-4">
        <p>Elderfy is uniquely designed for seniors with several key differences:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Senior-friendly design:</strong> Large text, simple navigation, and accessibility features</li>
          <li><strong>Multiple content types:</strong> Share videos, writing, music, AND art all in one place</li>
          <li><strong>Direct support:</strong> Receive donations and subscriptions without needing millions of views</li>
          <li><strong>No algorithm gaming:</strong> All content is valued equally, not just what goes viral</li>
          <li><strong>Focused community:</strong> Connect with people who specifically value elder wisdom</li>
          <li><strong>Simpler monetization:</strong> Start earning from day one without complex requirements</li>
        </ul>
      </div>
    ),
  },
  {
    category: 'What Makes Elderfy Different',
    question: 'Why should I use Elderfy instead of social media?',
    answer: (
      <div className="space-y-4">
        <p>
          Traditional social media platforms can be overwhelming, complicated, and often prioritize viral
          content over meaningful wisdom. Elderfy is different because:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>It's built specifically for seniors, with easy-to-use features</li>
          <li>Your content is presented beautifully without distracting ads or clutter</li>
          <li>You can earn income without needing thousands of followers</li>
          <li>The community values quality over quantity</li>
          <li>There's no pressure to post constantly or follow trends</li>
        </ul>
      </div>
    ),
  },
  {
    category: 'What Makes Elderfy Different',
    question: 'Do I need a lot of followers to earn money?',
    answer: 'No! Unlike other platforms where you need thousands or millions of followers to monetize, Elderfy allows anyone to receive donations and subscriptions from day one. Even if just a few people find your content valuable, they can support you directly.',
  },
  {
    category: 'What Makes Elderfy Different',
    question: 'Can I use Elderfy on my phone or tablet?',
    answer: 'Yes! Elderfy works on any device - desktop computers, laptops, tablets, and smartphones. The interface automatically adjusts to your screen size, and we have a mobile-friendly menu designed with large, easy-to-tap buttons.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-warmOrange-500 to-warmPurple-500 rounded-3xl shadow-2xl p-10 text-white text-center">
        <div className="text-7xl mb-6">❓</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-2xl opacity-90 max-w-3xl mx-auto">
          Everything you need to know about Elderfy - how it works, signing up, payments, and more
        </p>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-warmOrange-200">
        <h2 className="text-3xl font-bold text-sage-900 mb-6 text-center">
          Jump to Section
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-gradient-to-r from-warmOrange-100 to-warmPurple-100 hover:from-warmOrange-200 hover:to-warmPurple-200 text-sage-900 font-bold text-xl py-4 px-6 rounded-xl text-center transition-all duration-300 border-2 border-warmOrange-300 hover:border-warmOrange-500"
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      {/* FAQ Categories */}
      {categories.map((category) => {
        const categoryFAQs = faqs.filter(faq => faq.category === category);

        return (
          <div
            key={category}
            id={category.toLowerCase().replace(/\s+/g, '-')}
            className="scroll-mt-8"
          >
            <div className="bg-gradient-to-r from-warmOrange-500 to-warmPurple-500 rounded-2xl p-6 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3">
                <span>{
                  category === 'How Elderfy Works' ? '🌟' :
                  category === 'Signing Up' ? '✍️' :
                  category === 'Payments' ? '💰' :
                  '🎯'
                }</span>
                {category}
              </h2>
            </div>

            <div className="space-y-4">
              {categoryFAQs.map((faq, index) => {
                const globalIndex = faqs.indexOf(faq);
                return (
                  <FAQItem
                    key={globalIndex}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === globalIndex}
                    onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Still Have Questions */}
      <div className="bg-gradient-to-br from-warmOrange-50 to-warmPurple-50 rounded-3xl shadow-xl p-10 text-center border-2 border-warmOrange-200">
        <div className="text-6xl mb-6">💬</div>
        <h2 className="text-4xl font-bold text-sage-900 mb-4">
          Still Have Questions?
        </h2>
        <p className="text-2xl text-sage-700 mb-8 max-w-2xl mx-auto">
          We're here to help! Check out our About page or reach out to our support team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/about"
            className="bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 hover:from-warmOrange-600 hover:to-warmOrange-700 text-white px-8 py-4 rounded-xl text-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Learn More About Us
          </a>
          <a
            href="/register"
            className="bg-gradient-to-r from-warmPurple-500 to-warmPurple-600 hover:from-warmPurple-600 hover:to-warmPurple-700 text-white px-8 py-4 rounded-xl text-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}
