'use client';

import { useState } from 'react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8" aria-label="Contact form">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-2xl font-bold text-sage-900 mb-3">
          Your Name <span aria-label="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-required="true"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-6 py-5 text-2xl border-4 border-warmOrange-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-warmPurple-500 focus:border-warmPurple-500 transition-all duration-300"
          placeholder="Enter your full name"
          autoComplete="name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-2xl font-bold text-sage-900 mb-3">
          Email Address <span aria-label="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-6 py-5 text-2xl border-4 border-warmOrange-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-warmPurple-500 focus:border-warmPurple-500 transition-all duration-300"
          placeholder="your.email@example.com"
          autoComplete="email"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-2xl font-bold text-sage-900 mb-3">
          Subject <span aria-label="required">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          aria-required="true"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-6 py-5 text-2xl border-4 border-warmOrange-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-warmPurple-500 focus:border-warmPurple-500 transition-all duration-300 bg-white"
        >
          <option value="">Select a subject...</option>
          <option value="elder">I want to join as an elder</option>
          <option value="support">I want to support elders</option>
          <option value="partnership">Partnership opportunity</option>
          <option value="technical">Technical support</option>
          <option value="feedback">Feedback or suggestions</option>
          <option value="other">Other inquiry</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-2xl font-bold text-sage-900 mb-3">
          Message <span aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-6 py-5 text-2xl border-4 border-warmOrange-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-warmPurple-500 focus:border-warmPurple-500 transition-all duration-300 resize-vertical"
          placeholder="Tell us how we can help you..."
          aria-describedby="message-description"
        />
        <p id="message-description" className="sr-only">
          Provide details about your inquiry or how we can help you
        </p>
      </div>

      {/* Success Message */}
      {status === 'success' && (
        <div
          className="bg-green-100 border-4 border-green-500 rounded-2xl p-6 animate-fade-in"
          role="alert"
          aria-live="polite"
        >
          <p className="text-2xl font-bold text-green-800 flex items-center gap-3">
            <span className="text-4xl" aria-hidden="true">✓</span>
            Thank you! Your message has been sent successfully.
          </p>
          <p className="text-xl text-green-700 mt-2">
            We'll get back to you as soon as possible.
          </p>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div
          className="bg-red-100 border-4 border-red-500 rounded-2xl p-6 animate-fade-in"
          role="alert"
          aria-live="assertive"
        >
          <p className="text-2xl font-bold text-red-800 flex items-center gap-3">
            <span className="text-4xl" aria-hidden="true">✗</span>
            Oops! Something went wrong.
          </p>
          <p className="text-xl text-red-700 mt-2">
            Please try again or email us directly.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div className="text-center">
        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? '📤 Sending...' : '📧 Send Message'}
        </Button>
      </div>

      <p className="text-lg text-gray-600 text-center">
        * Required fields
      </p>
    </form>
  );
}
