'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function UploadPage() {
  const [contentType, setContentType] = useState<'video' | 'text' | 'music' | 'art'>('text');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [textContent, setTextContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a database
    console.log({ contentType, title, description, textContent });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-3 border-emerald-400 rounded-3xl p-16 text-center shadow-2xl">
          <div className="text-8xl mb-8 animate-bounce">✅</div>
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-6">
            Content Submitted Successfully!
          </h1>
          <p className="text-3xl text-emerald-700 mb-12 leading-relaxed">
            Thank you for sharing your wisdom with the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              variant="primary"
              size="large"
              onClick={() => {
                setSubmitted(false);
                setTitle('');
                setDescription('');
                setTextContent('');
              }}
            >
              ✨ Share More Wisdom
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => window.location.href = '/'}
            >
              🏠 Go Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Registration Notice */}
      <div className="bg-gradient-to-r from-warmOrange-500 to-warmPurple-500 rounded-3xl shadow-2xl p-8 md:p-10 text-white mb-12 border-4 border-warmOrange-300">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-7xl">👋</div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              New to Elderfy?
            </h2>
            <p className="text-xl md:text-2xl opacity-95 mb-4">
              Register as an elder first to create your profile and start sharing wisdom with the community!
            </p>
            <a
              href="/register"
              className="inline-block bg-white text-warmOrange-600 px-8 py-4 rounded-full text-xl md:text-2xl font-bold hover:bg-warmOrange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🚀 Register Now
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <div className="text-7xl mb-6">✨</div>
        <h1 className="text-6xl md:text-7xl font-bold text-sage-900 mb-6">
          Share Your Wisdom
        </h1>
        <p className="text-3xl text-sage-600 leading-relaxed max-w-3xl mx-auto">
          Upload your content and inspire others with your experiences and knowledge.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white to-warmOrange-50 rounded-3xl shadow-2xl p-10 md:p-14 space-y-10 border-2 border-warmOrange-200">
        {/* Content Type Selection */}
        <div>
          <label className="block text-3xl font-bold text-sage-900 mb-6">
            What type of content do you want to share?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { type: 'video' as const, icon: '🎥', label: 'Video' },
              { type: 'text' as const, icon: '📝', label: 'Writing' },
              { type: 'music' as const, icon: '🎵', label: 'Music' },
              { type: 'art' as const, icon: '🎨', label: 'Art' },
            ].map(({ type, icon, label }) => (
              <button
                key={type}
                type="button"
                onClick={() => setContentType(type)}
                className={`p-8 rounded-2xl border-3 transition-all duration-300 transform hover:-translate-y-1 shadow-lg ${
                  contentType === type
                    ? 'border-orange-500 bg-gradient-to-br from-orange-100 to-orange-200 shadow-xl scale-105'
                    : 'border-sage-300 bg-white hover:border-orange-400 hover:shadow-xl'
                }`}
              >
                <div className="text-6xl mb-3">{icon}</div>
                <div className="text-2xl font-bold text-sage-900">{label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-3xl font-bold text-sage-900 mb-6">
            Give it a title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-8 py-6 text-2xl border-3 border-sage-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-400 focus:border-orange-500 shadow-lg"
            placeholder="Give your content a memorable title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-3xl font-bold text-sage-900 mb-6">
            Describe your content
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-8 py-6 text-2xl border-3 border-sage-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-400 focus:border-orange-500 shadow-lg leading-relaxed"
            placeholder="Briefly describe what your content is about"
            required
          />
        </div>

        {/* Content Upload/Input */}
        {contentType === 'text' && (
          <div>
            <label htmlFor="content" className="block text-3xl font-bold text-sage-900 mb-6">
              Your Writing
            </label>
            <textarea
              id="content"
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              rows={14}
              className="w-full px-8 py-6 text-2xl border-3 border-sage-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-400 focus:border-orange-500 shadow-lg leading-relaxed"
              placeholder="Share your thoughts, stories, or knowledge..."
              required
            />
          </div>
        )}

        {contentType === 'video' && (
          <div>
            <label htmlFor="video" className="block text-3xl font-bold text-sage-900 mb-6">
              Video URL or Upload
            </label>
            <input
              id="video"
              type="text"
              className="w-full px-8 py-6 text-2xl border-3 border-sage-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-400 focus:border-orange-500 shadow-lg"
              placeholder="Paste YouTube or Vimeo URL"
            />
            <p className="mt-4 text-xl text-sage-600">
              You can paste a video URL or upload a video file (in a full implementation)
            </p>
          </div>
        )}

        {contentType === 'music' && (
          <div>
            <label htmlFor="music" className="block text-3xl font-bold text-sage-900 mb-6">
              Music File or URL
            </label>
            <input
              id="music"
              type="text"
              className="w-full px-8 py-6 text-2xl border-3 border-sage-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-400 focus:border-orange-500 shadow-lg"
              placeholder="Paste SoundCloud URL or click to upload audio"
            />
            <p className="mt-4 text-xl text-sage-600">
              Upload MP3, WAV, or paste a SoundCloud URL
            </p>
          </div>
        )}

        {contentType === 'art' && (
          <div>
            <label htmlFor="art" className="block text-3xl font-bold text-sage-900 mb-6">
              Artwork Image
            </label>
            <div className="border-3 border-dashed border-sage-300 rounded-2xl p-16 text-center hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 cursor-pointer shadow-lg">
              <div className="text-8xl mb-6">🎨</div>
              <p className="text-2xl font-bold text-sage-900 mb-3">Click to upload your artwork</p>
              <p className="text-xl text-sage-600">PNG, JPG, or GIF up to 10MB</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row gap-6 pt-8">
          <Button type="submit" variant="primary" size="large" className="flex-1 text-2xl py-6">
            ✨ Publish Content
          </Button>
          <Button
            type="button"
            variant="outline"
            size="large"
            className="text-2xl py-6"
            onClick={() => window.location.href = '/'}
          >
            Cancel
          </Button>
        </div>
      </form>

      {/* Help Section */}
      <div className="mt-10 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-10 border-2 border-purple-200 shadow-xl">
        <h2 className="text-4xl font-bold text-sage-900 mb-6 flex items-center gap-3">
          <span className="text-5xl">💡</span>
          Tips for Sharing
        </h2>
        <ul className="space-y-4 text-2xl text-sage-700 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-orange-500 font-bold mt-1">•</span>
            <span>Use clear, descriptive titles that capture attention</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 font-bold mt-1">•</span>
            <span>Write detailed descriptions to help people find your content</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 font-bold mt-1">•</span>
            <span>For videos, good lighting and clear audio make a big difference</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 font-bold mt-1">•</span>
            <span>Be authentic - people connect with genuine stories and experiences</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 font-bold mt-1">•</span>
            <span>Share regularly to build an engaged audience</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
