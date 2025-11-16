'use client';

import { useState } from 'react';
import Link from 'next/link';

interface OnboardingFormData {
  // Profile data
  name: string;
  age: string;
  email: string;
  bio: string;
  expertise: string[];
  photoUrl: string;

  // Content data
  contentType: 'video' | 'text' | 'music' | 'art' | '';
  contentTitle: string;
  contentDescription: string;
  contentUrl: string;

  // Payment data
  paymentSetup: boolean;
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingFormData>({
    name: '',
    age: '',
    email: '',
    bio: '',
    expertise: [],
    photoUrl: '',
    contentType: '',
    contentTitle: '',
    contentDescription: '',
    contentUrl: '',
    paymentSetup: false,
  });

  const totalSteps = 3;

  const updateFormData = (updates: Partial<OnboardingFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const skipStep = () => {
    nextStep();
  };

  const handleSubmit = () => {
    // In a real app, this would save to database
    console.log('Onboarding complete!', formData);
    alert('Welcome to Elderfy! Your profile is ready.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warmOrange-50 to-warmPurple-50 py-12 page-transition">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="text-6xl mb-4">🌟</div>
          <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-4">
            Welcome to Elderfy!
          </h1>
          <p className="text-2xl text-sage-700">
            Let's get you set up in just 3 simple steps
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold transition-all duration-300 ${
                      step < currentStep
                        ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg'
                        : step === currentStep
                        ? 'bg-gradient-to-br from-warmOrange-500 to-warmOrange-600 text-white shadow-xl scale-110'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step < currentStep ? '✓' : step}
                  </div>
                  <p className={`mt-3 text-center text-lg md:text-xl font-bold ${
                    step === currentStep ? 'text-warmOrange-700' : 'text-sage-600'
                  }`}>
                    {step === 1 && 'Create Profile'}
                    {step === 2 && 'Add Content'}
                    {step === 3 && 'Set Up Payments'}
                  </p>
                </div>
                {step < 3 && (
                  <div className={`h-2 flex-1 mx-2 rounded transition-all duration-300 ${
                    step < currentStep
                      ? 'bg-gradient-to-r from-green-500 to-green-600'
                      : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-warmOrange-200 animate-scale-in">
          {currentStep === 1 && (
            <Step1ProfileCreation
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onSkip={skipStep}
            />
          )}

          {currentStep === 2 && (
            <Step2ContentUpload
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onBack={prevStep}
              onSkip={skipStep}
            />
          )}

          {currentStep === 3 && (
            <Step3PaymentSetup
              formData={formData}
              updateFormData={updateFormData}
              onBack={prevStep}
              onComplete={handleSubmit}
              onSkip={skipStep}
            />
          )}
        </div>

        {/* Help Text */}
        <div className="text-center mt-8 text-xl text-sage-600">
          <p>
            Need help? Check out our{' '}
            <Link href="/tutorials" className="text-warmOrange-600 hover:text-warmOrange-700 font-bold underline">
              tutorials page
            </Link>{' '}
            or{' '}
            <Link href="/faq" className="text-warmOrange-600 hover:text-warmOrange-700 font-bold underline">
              FAQ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Step 1: Profile Creation
function Step1ProfileCreation({
  formData,
  updateFormData,
  onNext,
  onSkip,
}: {
  formData: OnboardingFormData;
  updateFormData: (data: Partial<OnboardingFormData>) => void;
  onNext: () => void;
  onSkip: () => void;
}) {
  const [expertiseInput, setExpertiseInput] = useState('');

  const addExpertise = () => {
    if (expertiseInput.trim() && formData.expertise.length < 5) {
      updateFormData({ expertise: [...formData.expertise, expertiseInput.trim()] });
      setExpertiseInput('');
    }
  };

  const removeExpertise = (index: number) => {
    updateFormData({
      expertise: formData.expertise.filter((_, i) => i !== index),
    });
  };

  const canProceed = formData.name && formData.age && formData.email && formData.bio;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="text-6xl mb-4">👤</div>
        <h2 className="text-4xl font-bold text-sage-900 mb-3">Create Your Profile</h2>
        <p className="text-xl text-sage-600">
          Tell us about yourself so people can get to know you
        </p>
      </div>

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-2xl font-bold text-sage-900 mb-3">
            Your Name <span className="text-warmOrange-600">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
            placeholder="Enter your full name"
            className="w-full px-6 py-4 text-xl border-2 border-sage-300 rounded-xl focus:border-warmOrange-500 focus:ring-4 focus:ring-warmOrange-200 transition-all"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-2xl font-bold text-sage-900 mb-3">
            Your Age <span className="text-warmOrange-600">*</span>
          </label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => updateFormData({ age: e.target.value })}
            placeholder="Enter your age"
            className="w-full px-6 py-4 text-xl border-2 border-sage-300 rounded-xl focus:border-warmOrange-500 focus:ring-4 focus:ring-warmOrange-200 transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-2xl font-bold text-sage-900 mb-3">
            Email Address <span className="text-warmOrange-600">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            placeholder="your.email@example.com"
            className="w-full px-6 py-4 text-xl border-2 border-sage-300 rounded-xl focus:border-warmOrange-500 focus:ring-4 focus:ring-warmOrange-200 transition-all"
          />
          <p className="text-lg text-sage-600 mt-2">
            We'll send you notifications about donations and new subscribers
          </p>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-2xl font-bold text-sage-900 mb-3">
            About You <span className="text-warmOrange-600">*</span>
          </label>
          <textarea
            value={formData.bio}
            onChange={(e) => updateFormData({ bio: e.target.value })}
            placeholder="Tell your story... What are you passionate about? What experiences do you want to share?"
            rows={6}
            className="w-full px-6 py-4 text-xl border-2 border-sage-300 rounded-xl focus:border-warmOrange-500 focus:ring-4 focus:ring-warmOrange-200 transition-all resize-none"
          />
          <p className="text-lg text-sage-600 mt-2">
            Aim for 2-3 paragraphs. Be yourself!
          </p>
        </div>

        {/* Expertise */}
        <div>
          <label className="block text-2xl font-bold text-sage-900 mb-3">
            Areas of Expertise (Optional)
          </label>
          <div className="flex gap-3 mb-3">
            <input
              type="text"
              value={expertiseInput}
              onChange={(e) => setExpertiseInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addExpertise())}
              placeholder="e.g., Cooking, Gardening, History"
              className="flex-1 px-6 py-4 text-xl border-2 border-sage-300 rounded-xl focus:border-warmOrange-500 focus:ring-4 focus:ring-warmOrange-200 transition-all"
            />
            <button
              onClick={addExpertise}
              className="px-8 py-4 bg-warmPurple-500 hover:bg-warmPurple-600 text-white text-xl font-bold rounded-xl transition-all"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {formData.expertise.map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-warmOrange-100 to-warmPurple-100 text-sage-900 px-5 py-3 rounded-full text-lg font-bold border-2 border-warmOrange-300 flex items-center gap-2"
              >
                {skill}
                <button
                  onClick={() => removeExpertise(index)}
                  className="text-warmOrange-700 hover:text-warmOrange-900 font-bold text-2xl"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4 pt-6">
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="flex-1 px-8 py-6 bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 hover:from-warmOrange-600 hover:to-warmOrange-700 disabled:from-gray-300 disabled:to-gray-400 text-white text-2xl font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 disabled:cursor-not-allowed disabled:transform-none"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

// Step 2: Content Upload
function Step2ContentUpload({
  formData,
  updateFormData,
  onNext,
  onBack,
  onSkip,
}: {
  formData: OnboardingFormData;
  updateFormData: (data: Partial<OnboardingFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}) {
  const contentTypes: Array<{ value: 'video' | 'text' | 'music' | 'art'; label: string; icon: string; description: string }> = [
    { value: 'video', label: 'Video', icon: '🎥', description: 'Share stories, tutorials, or advice' },
    { value: 'text', label: 'Writing', icon: '📝', description: 'Articles, poems, or memoirs' },
    { value: 'music', label: 'Music', icon: '🎵', description: 'Songs or performances' },
    { value: 'art', label: 'Art', icon: '🎨', description: 'Paintings, drawings, or photos' },
  ];

  const canProceed = formData.contentType && formData.contentTitle && formData.contentDescription;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="text-6xl mb-4">📤</div>
        <h2 className="text-4xl font-bold text-sage-900 mb-3">Share Your First Content</h2>
        <p className="text-xl text-sage-600">
          What would you like to share with the world? (You can skip this for now)
        </p>
      </div>

      <div className="space-y-6">
        {/* Content Type Selection */}
        <div>
          <label className="block text-2xl font-bold text-sage-900 mb-4">
            What type of content?
          </label>
          <div className="grid grid-cols-2 gap-4">
            {contentTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => updateFormData({ contentType: type.value })}
                className={`p-6 rounded-2xl border-3 text-left transition-all duration-300 ${
                  formData.contentType === type.value
                    ? 'border-warmOrange-500 bg-gradient-to-br from-warmOrange-50 to-warmPurple-50 shadow-lg'
                    : 'border-gray-300 hover:border-warmOrange-300 hover:bg-warmOrange-50'
                }`}
              >
                <div className="text-5xl mb-3">{type.icon}</div>
                <h3 className="text-2xl font-bold text-sage-900 mb-2">{type.label}</h3>
                <p className="text-lg text-sage-600">{type.description}</p>
              </button>
            ))}
          </div>
        </div>

        {formData.contentType && (
          <>
            {/* Title */}
            <div>
              <label className="block text-2xl font-bold text-sage-900 mb-3">
                Title
              </label>
              <input
                type="text"
                value={formData.contentTitle}
                onChange={(e) => updateFormData({ contentTitle: e.target.value })}
                placeholder="Give your content a catchy title"
                className="w-full px-6 py-4 text-xl border-2 border-sage-300 rounded-xl focus:border-warmOrange-500 focus:ring-4 focus:ring-warmOrange-200 transition-all"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-2xl font-bold text-sage-900 mb-3">
                Description
              </label>
              <textarea
                value={formData.contentDescription}
                onChange={(e) => updateFormData({ contentDescription: e.target.value })}
                placeholder="Describe what people will learn or experience"
                rows={4}
                className="w-full px-6 py-4 text-xl border-2 border-sage-300 rounded-xl focus:border-warmOrange-500 focus:ring-4 focus:ring-warmOrange-200 transition-all resize-none"
              />
            </div>

            {/* Content URL/Upload */}
            <div>
              <label className="block text-2xl font-bold text-sage-900 mb-3">
                {formData.contentType === 'video' && 'Video URL (YouTube, etc.)'}
                {formData.contentType === 'text' && 'Your Text Content'}
                {formData.contentType === 'music' && 'Music URL'}
                {formData.contentType === 'art' && 'Image URL or Upload'}
              </label>
              <input
                type="text"
                value={formData.contentUrl}
                onChange={(e) => updateFormData({ contentUrl: e.target.value })}
                placeholder={`Enter your ${formData.contentType} URL or paste text`}
                className="w-full px-6 py-4 text-xl border-2 border-sage-300 rounded-xl focus:border-warmOrange-500 focus:ring-4 focus:ring-warmOrange-200 transition-all"
              />
              <p className="text-lg text-sage-600 mt-2">
                Don't worry, you can upload files later from your profile
              </p>
            </div>
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-4 pt-6">
        <button
          onClick={onBack}
          className="px-8 py-6 bg-gray-200 hover:bg-gray-300 text-sage-900 text-2xl font-bold rounded-xl transition-all"
        >
          ← Back
        </button>
        <button
          onClick={onSkip}
          className="px-8 py-6 border-3 border-warmPurple-500 text-warmPurple-700 hover:bg-warmPurple-50 text-2xl font-bold rounded-xl transition-all"
        >
          Skip for Now
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="flex-1 px-8 py-6 bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 hover:from-warmOrange-600 hover:to-warmOrange-700 disabled:from-gray-300 disabled:to-gray-400 text-white text-2xl font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 disabled:cursor-not-allowed disabled:transform-none"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

// Step 3: Payment Setup
function Step3PaymentSetup({
  formData,
  updateFormData,
  onBack,
  onComplete,
  onSkip,
}: {
  formData: OnboardingFormData;
  updateFormData: (data: Partial<OnboardingFormData>) => void;
  onBack: () => void;
  onComplete: () => void;
  onSkip: () => void;
}) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="text-6xl mb-4">💰</div>
        <h2 className="text-4xl font-bold text-sage-900 mb-3">Set Up Payments</h2>
        <p className="text-xl text-sage-600">
          Start receiving donations and subscriptions from your supporters
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
        <h3 className="text-3xl font-bold text-sage-900 mb-4 flex items-center gap-3">
          <span className="text-4xl">ℹ️</span>
          How It Works
        </h3>
        <div className="space-y-3 text-xl text-sage-700">
          <p>• We use Stripe, a secure payment platform trusted by millions</p>
          <p>• You receive 97%+ of every donation (Stripe takes ~3% fee)</p>
          <p>• Money is deposited directly to your bank account</p>
          <p>• Setup takes about 5 minutes</p>
          <p>• All your financial info is encrypted and secure</p>
        </div>
      </div>

      <div className="text-center py-8">
        <p className="text-2xl text-sage-700 mb-6">
          Click below to set up your Stripe account
        </p>
        <button
          onClick={() => {
            // In a real app, this would redirect to Stripe Connect
            alert('This would redirect to Stripe setup. For demo purposes, we\'ll mark it as complete.');
            updateFormData({ paymentSetup: true });
          }}
          className="px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-2xl font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
        >
          <span className="flex items-center gap-3">
            <span className="text-3xl">🔒</span>
            Connect Stripe Account
          </span>
        </button>
      </div>

      {formData.paymentSetup && (
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center animate-scale-in">
          <div className="text-5xl mb-3">✅</div>
          <h3 className="text-3xl font-bold mb-2">Payment Setup Complete!</h3>
          <p className="text-xl">You're ready to start receiving support</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-4 pt-6">
        <button
          onClick={onBack}
          className="px-8 py-6 bg-gray-200 hover:bg-gray-300 text-sage-900 text-2xl font-bold rounded-xl transition-all"
        >
          ← Back
        </button>
        {!formData.paymentSetup && (
          <button
            onClick={onSkip}
            className="px-8 py-6 border-3 border-warmPurple-500 text-warmPurple-700 hover:bg-warmPurple-50 text-2xl font-bold rounded-xl transition-all"
          >
            Skip for Now
          </button>
        )}
        <button
          onClick={onComplete}
          className="flex-1 px-8 py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-2xl font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {formData.paymentSetup ? '🎉 Complete Setup' : 'Finish Later'}
        </button>
      </div>

      {!formData.paymentSetup && (
        <p className="text-center text-lg text-sage-600 italic">
          You can always set up payments later from your profile settings
        </p>
      )}
    </div>
  );
}
