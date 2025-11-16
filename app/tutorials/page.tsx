'use client';

import { useState } from 'react';
import Link from 'next/link';

interface TutorialStep {
  number: number;
  title: string;
  description: string;
  tips?: string[];
}

interface Tutorial {
  id: string;
  title: string;
  icon: string;
  description: string;
  videoPlaceholder: string;
  steps: TutorialStep[];
  nextSteps?: string;
}

const tutorials: Tutorial[] = [
  {
    id: 'create-profile',
    title: 'Creating Your Elder Profile',
    icon: '👤',
    description: 'Learn how to set up your profile and introduce yourself to the Elderfy community.',
    videoPlaceholder: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      {
        number: 1,
        title: 'Click "Register as an Elder"',
        description: 'From the homepage, find the bright orange "Register as an Elder" button. You can find it in the navigation menu at the top, or in the main sections of the homepage.',
        tips: [
          'The button is large and easy to click',
          'You can also access it from the mobile menu (three lines icon)',
        ],
      },
      {
        number: 2,
        title: 'Fill in Your Basic Information',
        description: 'Enter your name, age, and email address. Your email will be used to send you notifications when someone supports your content.',
        tips: [
          'Use an email you check regularly',
          'Your age helps people connect with your life experiences',
        ],
      },
      {
        number: 3,
        title: 'Write Your Bio',
        description: 'Tell people about yourself! Share your life story, what you\'re passionate about, and what makes you unique. Don\'t worry about being perfect - just be yourself.',
        tips: [
          'Aim for 2-3 paragraphs',
          'Mention your hobbies, career, or what you love to talk about',
          'This helps people understand why they should follow you',
        ],
      },
      {
        number: 4,
        title: 'Add Your Areas of Expertise',
        description: 'List topics you know a lot about or enjoy sharing. This could be cooking, gardening, history, woodworking, knitting, music, or anything else!',
        tips: [
          'Add 3-5 areas you\'re comfortable talking about',
          'These appear as tags on your profile',
        ],
      },
      {
        number: 5,
        title: 'Upload a Profile Photo',
        description: 'Choose a clear, friendly photo of yourself. This helps people feel connected to you and makes your profile more welcoming.',
        tips: [
          'Use a recent photo where your face is clearly visible',
          'Natural lighting works best',
          'A smile goes a long way!',
        ],
      },
      {
        number: 6,
        title: 'Review and Submit',
        description: 'Double-check all your information, then click "Create Profile". Your profile will be live immediately and you can start sharing content right away!',
      },
    ],
    nextSteps: 'Once your profile is created, you\'re ready to start sharing your wisdom with the world!',
  },
  {
    id: 'upload-content',
    title: 'Uploading and Sharing Content',
    icon: '📤',
    description: 'Discover how to share your videos, writing, music, and art with your audience.',
    videoPlaceholder: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      {
        number: 1,
        title: 'Go to "Share Your Wisdom"',
        description: 'Click the "Share Your Wisdom" button in the navigation menu. This takes you to the content upload page.',
        tips: [
          'You can upload content at any time',
          'There\'s no limit to how much you can share',
        ],
      },
      {
        number: 2,
        title: 'Choose Your Content Type',
        description: 'Select what type of content you want to share: Video, Writing, Music, or Art. Each type has different options.',
        tips: [
          'Videos: Upload recordings, tutorials, or stories',
          'Writing: Share articles, poems, or memoirs',
          'Music: Share songs or performances',
          'Art: Display paintings, drawings, or photography',
        ],
      },
      {
        number: 3,
        title: 'Add a Title',
        description: 'Give your content a clear, descriptive title that tells people what it\'s about. Make it interesting to catch people\'s attention!',
        tips: [
          'Keep it under 60 characters for best display',
          'Be specific: "My Mother\'s Secret Cookie Recipe" is better than "Cookies"',
        ],
      },
      {
        number: 4,
        title: 'Write a Description',
        description: 'Explain what your content is about. Give people a preview of what they\'ll learn or experience. This helps them decide if they want to view it.',
        tips: [
          'Include what makes this content special',
          'Mention any key takeaways or lessons',
          '2-3 sentences is usually perfect',
        ],
      },
      {
        number: 5,
        title: 'Upload Your File or Link',
        description: 'For videos, you can upload a file or paste a YouTube link. For writing, paste your text or upload a document. For music and art, upload your files.',
        tips: [
          'Videos can be up to 100MB',
          'Use common formats: MP4 for video, JPG/PNG for images',
          'YouTube links work great for longer videos',
        ],
      },
      {
        number: 6,
        title: 'Add a Thumbnail (Optional)',
        description: 'Upload an eye-catching image that represents your content. This is what people see before they click.',
        tips: [
          'Use a clear, colorful image',
          'Make sure it relates to your content',
          'This step is optional but recommended',
        ],
      },
      {
        number: 7,
        title: 'Publish Your Content',
        description: 'Review everything, then click "Publish". Your content will appear on your profile immediately and be visible to everyone on Elderfy!',
      },
    ],
    nextSteps: 'Share your profile link with friends and family so they can see your content and support you!',
  },
  {
    id: 'receive-donations',
    title: 'Setting Up Payments & Receiving Support',
    icon: '💰',
    description: 'Learn how to set up your payment account so you can receive donations and subscriptions.',
    videoPlaceholder: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      {
        number: 1,
        title: 'Understand How Payments Work',
        description: 'Elderfy uses Stripe, a secure payment platform, to handle all money. Supporters can send you one-time donations or subscribe for monthly support.',
        tips: [
          'All payment info is secure and encrypted',
          'You receive 97%+ of each donation (Stripe takes a small fee)',
          'Money goes directly to your bank account',
        ],
      },
      {
        number: 2,
        title: 'Click "Set Up Payments"',
        description: 'From your profile page or settings, click the "Set Up Payments" button. This will take you to a secure Stripe form.',
        tips: [
          'You only need to do this once',
          'The setup takes about 5 minutes',
        ],
      },
      {
        number: 3,
        title: 'Enter Your Personal Information',
        description: 'Stripe needs to verify your identity for security. Enter your full legal name, date of birth, and address exactly as they appear on official documents.',
        tips: [
          'This is required by law to prevent fraud',
          'All information is kept private and secure',
          'Use your government ID or driver\'s license as reference',
        ],
      },
      {
        number: 4,
        title: 'Add Your Bank Account Details',
        description: 'Enter your bank account number and routing number. This is where your money will be deposited.',
        tips: [
          'You can find these numbers on a check or your bank statement',
          'Call your bank if you need help finding them',
          'Double-check the numbers before submitting',
        ],
      },
      {
        number: 5,
        title: 'Verify Your Information',
        description: 'Stripe may ask you to verify your identity by uploading a photo of your ID. This is a one-time security measure.',
        tips: [
          'Use a government-issued photo ID',
          'Make sure the photo is clear and all text is readable',
          'This usually takes 1-2 business days to process',
        ],
      },
      {
        number: 6,
        title: 'Start Receiving Support!',
        description: 'Once approved, your profile will show donation and subscription buttons. When someone supports you, you\'ll get an email notification and the money will be deposited in 2-7 business days.',
        tips: [
          'You can track all your earnings in your Stripe dashboard',
          'You\'ll receive email notifications for each donation',
          'Subscriptions renew automatically each month',
        ],
      },
    ],
    nextSteps: 'Remember to thank your supporters! A personal message goes a long way in building a loyal community.',
  },
  {
    id: 'getting-started',
    title: 'Quick Start Guide',
    icon: '🚀',
    description: 'New to Elderfy? Start here for a quick overview of everything you need to know.',
    videoPlaceholder: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    steps: [
      {
        number: 1,
        title: 'Watch the Welcome Video',
        description: 'Get a 3-minute overview of what Elderfy is and how it works. This video covers the basics and helps you decide if Elderfy is right for you.',
      },
      {
        number: 2,
        title: 'Browse Existing Profiles',
        description: 'Take some time to look at other elders\' profiles to get inspiration for your own. See what types of content they share and how they present themselves.',
        tips: [
          'Notice how they write their bios',
          'Look at different content types',
          'See what gets the most engagement',
        ],
      },
      {
        number: 3,
        title: 'Create Your Profile',
        description: 'Follow the "Creating Your Elder Profile" tutorial to set up your account. Take your time and make it personal!',
      },
      {
        number: 4,
        title: 'Share Your First Piece of Content',
        description: 'Don\'t overthink it! Share something simple to start - maybe a short introduction video or a story from your life.',
        tips: [
          'Your first piece doesn\'t have to be perfect',
          'Start with something you\'re comfortable with',
          'You can always add more later',
        ],
      },
      {
        number: 5,
        title: 'Tell Friends and Family',
        description: 'Share your profile link with people you know. They can subscribe, donate, or just enjoy your content!',
        tips: [
          'Post on Facebook or email your link',
          'Ask family members to share with their friends',
          'Word of mouth is powerful!',
        ],
      },
      {
        number: 6,
        title: 'Set Up Payments When Ready',
        description: 'Once you have some content up and people are interested, set up your payment account following the "Setting Up Payments" tutorial.',
      },
    ],
    nextSteps: 'You\'re all set! Keep sharing regularly and engaging with your supporters to build your Elderfy community.',
  },
];

interface TutorialSectionProps {
  tutorial: Tutorial;
  isOpen: boolean;
  onToggle: () => void;
}

function TutorialSection({ tutorial, isOpen, onToggle }: TutorialSectionProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl border-2 border-warmOrange-200 overflow-hidden animate-fade-in-up">
      <button
        onClick={onToggle}
        className="w-full text-left p-8 md:p-10 flex items-center justify-between gap-6 hover:bg-warmOrange-50 transition-all duration-300"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-6 flex-1">
          <div className="text-6xl md:text-7xl">{tutorial.icon}</div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-2">
              {tutorial.title}
            </h2>
            <p className="text-xl text-sage-600">
              {tutorial.description}
            </p>
          </div>
        </div>
        <div className={`text-5xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <span aria-hidden="true">▼</span>
        </div>
      </button>

      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-8 md:p-10 pt-0 space-y-8">
          {/* Video Placeholder */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-6xl mb-4">🎥</div>
                <h3 className="text-3xl font-bold mb-3">Video Tutorial Coming Soon!</h3>
                <p className="text-xl opacity-90">
                  We're creating step-by-step video guides to make learning even easier.
                </p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-sage-900 flex items-center gap-3">
              <span className="text-4xl">📋</span>
              Step-by-Step Instructions
            </h3>

            {tutorial.steps.map((step) => (
              <div
                key={step.number}
                className="bg-gradient-to-br from-warmOrange-50 to-warmPurple-50 rounded-2xl p-6 md:p-8 border-2 border-warmOrange-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-warmOrange-500 to-warmOrange-600 text-white rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-bold text-sage-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-xl text-sage-700 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {step.tips && step.tips.length > 0 && (
                      <div className="bg-white/80 rounded-xl p-4 border-l-4 border-warmPurple-500">
                        <p className="text-lg font-bold text-warmPurple-700 mb-2 flex items-center gap-2">
                          <span className="text-2xl">💡</span>
                          Helpful Tips:
                        </p>
                        <ul className="space-y-2">
                          {step.tips.map((tip, index) => (
                            <li key={index} className="text-lg text-sage-700 flex items-start gap-2">
                              <span className="text-warmOrange-500 font-bold flex-shrink-0">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Steps */}
          {tutorial.nextSteps && (
            <div className="bg-gradient-to-r from-warmOrange-500 to-warmPurple-500 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">🎯</span>
                What's Next?
              </h3>
              <p className="text-xl leading-relaxed">
                {tutorial.nextSteps}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TutorialsPage() {
  const [openTutorial, setOpenTutorial] = useState<string>('getting-started');

  return (
    <div className="space-y-12 page-transition">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-warmOrange-500 to-warmPurple-500 rounded-3xl shadow-2xl p-10 md:p-14 text-white text-center animate-scale-in">
        <div className="text-7xl mb-6">📚</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Elderfy Tutorials
        </h1>
        <p className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed opacity-95">
          Easy-to-follow guides to help you create your profile, share your wisdom, and start earning
        </p>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-warmOrange-200">
        <h2 className="text-3xl font-bold text-sage-900 mb-6 text-center">
          Jump to Tutorial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tutorials.map((tutorial) => (
            <button
              key={tutorial.id}
              onClick={() => setOpenTutorial(tutorial.id)}
              className="bg-gradient-to-br from-warmOrange-100 to-warmPurple-100 hover:from-warmOrange-200 hover:to-warmPurple-200 text-sage-900 font-bold text-xl py-6 px-6 rounded-xl text-center transition-all duration-300 border-2 border-warmOrange-300 hover:border-warmOrange-500 hover-lift"
            >
              <div className="text-5xl mb-3">{tutorial.icon}</div>
              <div>{tutorial.title.replace('Creating Your Elder Profile', 'Create Profile').replace('Uploading and Sharing Content', 'Upload Content').replace('Setting Up Payments & Receiving Support', 'Set Up Payments')}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Tutorials */}
      <div className="space-y-6">
        {tutorials.map((tutorial) => (
          <TutorialSection
            key={tutorial.id}
            tutorial={tutorial}
            isOpen={openTutorial === tutorial.id}
            onToggle={() => setOpenTutorial(openTutorial === tutorial.id ? '' : tutorial.id)}
          />
        ))}
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-br from-warmOrange-50 to-warmPurple-50 rounded-3xl shadow-xl p-10 text-center border-2 border-warmOrange-200">
        <div className="text-6xl mb-6">🤝</div>
        <h2 className="text-4xl font-bold text-sage-900 mb-4">
          Need More Help?
        </h2>
        <p className="text-2xl text-sage-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Still have questions? Check out our FAQ page or contact our support team. We're here to help you succeed!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/faq">
            <button className="bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 hover:from-warmOrange-600 hover:to-warmOrange-700 text-white px-10 py-5 rounded-xl text-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
              View FAQ
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-gradient-to-r from-warmPurple-500 to-warmPurple-600 hover:from-warmPurple-600 hover:to-warmPurple-700 text-white px-10 py-5 rounded-xl text-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
