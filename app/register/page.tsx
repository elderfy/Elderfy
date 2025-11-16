'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    location: '',
    expertise: [] as string[],
    bio: '',
    contentTypes: [] as string[],
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const expertiseOptions = [
    'Life Lessons & Wisdom',
    'Career & Business',
    'Cooking & Recipes',
    'Gardening',
    'Crafts & Hobbies',
    'History & Storytelling',
    'Music & Arts',
    'Health & Wellness',
    'Relationships & Family',
    'Technology Tips',
    'Financial Advice',
    'Travel Experiences',
    'Other',
  ];

  const contentTypeOptions = [
    'Video Lessons',
    'Written Stories',
    'Music Performances',
    'Art & Paintings',
    'Poetry',
    'Audio Stories',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (field: 'expertise' | 'contentTypes', value: string) => {
    const currentArray = formData[field];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];

    setFormData({
      ...formData,
      [field]: newArray,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Elder registration submitted:', formData);
      setStatus('success');

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          age: '',
          email: '',
          phone: '',
          location: '',
          expertise: [],
          bio: '',
          contentTypes: [],
        });
      }, 3000);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warmOrange-50 via-white to-warmPurple-50 flex items-center justify-center px-4">
        <div className="max-w-3xl w-full bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl shadow-2xl p-12 border-4 border-green-500 text-center animate-fade-in">
          <div className="text-8xl mb-8">🎉</div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            Welcome to Elderfy!
          </h1>
          <p className="text-2xl md:text-3xl text-green-700 mb-8">
            Thank you for registering, <span className="font-bold">{formData.name}</span>!
          </p>
          <div className="bg-white rounded-2xl p-8 mb-8 border-2 border-green-300">
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              We've received your registration and will review it shortly.
            </p>
            <p className="text-xl md:text-2xl text-gray-700">
              You'll receive an email at <span className="font-semibold text-warmOrange-600">{formData.email}</span> with next steps to set up your profile and start sharing your wisdom.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-2xl text-green-800 font-semibold">
              What happens next?
            </p>
            <ul className="text-xl text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-2xl">1️⃣</span>
                <span>We'll review your application (usually within 24-48 hours)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">2️⃣</span>
                <span>You'll receive an email with your profile setup instructions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">3️⃣</span>
                <span>Create your first piece of content to share with the community</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">4️⃣</span>
                <span>Start earning income from your wisdom!</span>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <a
              href="/"
              className="inline-block bg-gradient-to-r from-warmOrange-500 to-warmPurple-500 text-white px-12 py-6 rounded-full text-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warmOrange-50 via-white to-warmPurple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-warmOrange-500 to-warmPurple-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Join Elderfy
          </h1>
          <p className="text-2xl md:text-3xl font-light opacity-95">
            Share your wisdom. Earn income. Leave a legacy.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-warmPurple-600 opacity-20 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-warmOrange-100 to-warmOrange-50 rounded-2xl p-6 text-center border-2 border-warmOrange-300">
            <div className="text-5xl mb-3">💰</div>
            <h3 className="text-2xl font-bold text-warmOrange-700 mb-2">Earn Income</h3>
            <p className="text-lg text-gray-700">Receive donations and subscriptions from supporters</p>
          </div>
          <div className="bg-gradient-to-br from-warmPurple-100 to-warmPurple-50 rounded-2xl p-6 text-center border-2 border-warmPurple-300">
            <div className="text-5xl mb-3">🌟</div>
            <h3 className="text-2xl font-bold text-warmPurple-700 mb-2">Share Wisdom</h3>
            <p className="text-lg text-gray-700">Create videos, write stories, share your expertise</p>
          </div>
          <div className="bg-gradient-to-br from-sage-100 to-emerald-50 rounded-2xl p-6 text-center border-2 border-sage-300">
            <div className="text-5xl mb-3">📚</div>
            <h3 className="text-2xl font-bold text-sage-700 mb-2">Leave Legacy</h3>
            <p className="text-lg text-gray-700">Preserve your knowledge for future generations</p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-warmOrange-200">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-8 text-center">
            Elder Registration Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Personal Information Section */}
            <div className="bg-gradient-to-r from-warmOrange-50 to-warmPurple-50 rounded-2xl p-8 border-2 border-warmOrange-200">
              <h3 className="text-3xl font-bold text-warmOrange-700 mb-6 flex items-center gap-3">
                <span>👤</span> Personal Information
              </h3>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-2xl font-bold text-sage-900 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-5 text-2xl border-4 border-warmOrange-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-warmPurple-500 focus:border-warmPurple-500 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Age */}
                <div>
                  <label htmlFor="age" className="block text-2xl font-bold text-sage-900 mb-3">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min="55"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-6 py-5 text-2xl border-4 border-warmOrange-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-warmPurple-500 focus:border-warmPurple-500 transition-all duration-300"
                    placeholder="Your age"
                  />
                  <p className="text-lg text-gray-600 mt-2">Must be 55 or older to register</p>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-2xl font-bold text-sage-900 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-5 text-2xl border-4 border-warmOrange-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-warmPurple-500 focus:border-warmPurple-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-2xl font-bold text-sage-900 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-5 text-2xl border-4 border-warmOrange-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-warmPurple-500 focus:border-warmPurple-500 transition-all duration-300"
                    placeholder="(123) 456-7890"
                  />
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-2xl font-bold text-sage-900 mb-3">
                    Location (City, State/Country) *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-6 py-5 text-2xl border-4 border-warmOrange-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-warmPurple-500 focus:border-warmPurple-500 transition-all duration-300"
                    placeholder="e.g., Portland, Oregon"
                  />
                </div>
              </div>
            </div>

            {/* Expertise Section */}
            <div className="bg-gradient-to-r from-warmPurple-50 to-warmOrange-50 rounded-2xl p-8 border-2 border-warmPurple-200">
              <h3 className="text-3xl font-bold text-warmPurple-700 mb-6 flex items-center gap-3">
                <span>🎯</span> Your Expertise
              </h3>

              <div className="space-y-6">
                {/* Expertise Areas */}
                <div>
                  <label className="block text-2xl font-bold text-sage-900 mb-4">
                    Areas of Expertise * (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {expertiseOptions.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-4 p-4 rounded-xl border-3 cursor-pointer transition-all duration-300 ${
                          formData.expertise.includes(option)
                            ? 'bg-warmPurple-200 border-warmPurple-500'
                            : 'bg-white border-gray-300 hover:border-warmPurple-400'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.expertise.includes(option)}
                          onChange={() => handleCheckboxChange('expertise', option)}
                          className="w-8 h-8 rounded-lg cursor-pointer"
                        />
                        <span className="text-xl font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label htmlFor="bio" className="block text-2xl font-bold text-sage-900 mb-3">
                    Tell Us About Yourself *
                  </label>
                  <p className="text-lg text-gray-600 mb-3">
                    Share your life experiences, career highlights, or what you're passionate about teaching others.
                  </p>
                  <textarea
                    id="bio"
                    name="bio"
                    required
                    value={formData.bio}
                    onChange={handleChange}
                    rows={8}
                    className="w-full px-6 py-5 text-2xl border-4 border-warmOrange-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-warmPurple-500 focus:border-warmPurple-500 transition-all duration-300 resize-vertical"
                    placeholder="Example: I'm a retired chef with 40 years of experience in Italian cuisine. I want to share my family recipes and cooking techniques that I learned from my grandmother in Sicily..."
                  />
                </div>
              </div>
            </div>

            {/* Content Types Section */}
            <div className="bg-gradient-to-r from-sage-50 to-emerald-50 rounded-2xl p-8 border-2 border-sage-200">
              <h3 className="text-3xl font-bold text-sage-700 mb-6 flex items-center gap-3">
                <span>🎨</span> Content You'll Create
              </h3>

              <div>
                <label className="block text-2xl font-bold text-sage-900 mb-4">
                  What types of content will you share? * (Select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {contentTypeOptions.map((option) => (
                    <label
                      key={option}
                      className={`flex items-center gap-4 p-4 rounded-xl border-3 cursor-pointer transition-all duration-300 ${
                        formData.contentTypes.includes(option)
                          ? 'bg-sage-200 border-sage-500'
                          : 'bg-white border-gray-300 hover:border-sage-400'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.contentTypes.includes(option)}
                        onChange={() => handleCheckboxChange('contentTypes', option)}
                        className="w-8 h-8 rounded-lg cursor-pointer"
                      />
                      <span className="text-xl font-medium">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="bg-red-100 border-4 border-red-500 rounded-2xl p-6 animate-fade-in">
                <p className="text-2xl font-bold text-red-800 flex items-center gap-3">
                  <span className="text-4xl">✗</span>
                  Oops! Something went wrong.
                </p>
                <p className="text-xl text-red-700 mt-2">
                  Please check your information and try again.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center pt-6">
              <Button
                type="submit"
                variant="primary"
                size="large"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? '⏳ Submitting Registration...' : '🚀 Submit Registration'}
              </Button>
              <p className="text-xl text-gray-600 mt-6">
                * Required fields
              </p>
              <p className="text-lg text-gray-500 mt-4">
                By submitting, you agree to share your wisdom with the Elderfy community.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Help Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-warmOrange-100 to-warmPurple-100 rounded-2xl p-8 border-2 border-warmOrange-300 text-center">
          <h3 className="text-3xl font-bold text-sage-900 mb-4">
            Need Help with Registration?
          </h3>
          <p className="text-xl text-gray-700 mb-6">
            We're here to assist you! Contact us if you have questions or need technical support.
          </p>
          <a
            href="/about#contact"
            className="inline-block bg-gradient-to-r from-warmOrange-500 to-warmPurple-500 text-white px-10 py-5 rounded-full text-2xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
