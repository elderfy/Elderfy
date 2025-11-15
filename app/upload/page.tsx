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
      <div className="max-w-2xl mx-auto">
        <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Content Submitted Successfully!
          </h1>
          <p className="text-2xl text-green-700 mb-8">
            Thank you for sharing your wisdom with the community.
          </p>
          <div className="flex gap-4 justify-center">
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
              Share More
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => window.location.href = '/'}
            >
              Go Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Share Your Wisdom
        </h1>
        <p className="text-2xl text-gray-700">
          Upload your content and inspire others with your experiences.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
        {/* Content Type Selection */}
        <div>
          <label className="block text-2xl font-semibold text-gray-900 mb-4">
            Content Type
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                className={`p-6 rounded-xl border-2 transition-all ${
                  contentType === type
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="text-4xl mb-2">{icon}</div>
                <div className="text-lg font-semibold">{label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-2xl font-semibold text-gray-900 mb-4">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Give your content a memorable title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-2xl font-semibold text-gray-900 mb-4">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Briefly describe what your content is about"
            required
          />
        </div>

        {/* Content Upload/Input */}
        {contentType === 'text' && (
          <div>
            <label htmlFor="content" className="block text-2xl font-semibold text-gray-900 mb-4">
              Your Writing
            </label>
            <textarea
              id="content"
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              rows={12}
              className="w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 font-mono"
              placeholder="Share your thoughts, stories, or knowledge..."
              required
            />
          </div>
        )}

        {contentType === 'video' && (
          <div>
            <label htmlFor="video" className="block text-2xl font-semibold text-gray-900 mb-4">
              Video URL or Upload
            </label>
            <input
              id="video"
              type="text"
              className="w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Paste YouTube or Vimeo URL, or click to upload"
            />
            <p className="mt-3 text-lg text-gray-600">
              You can paste a video URL or upload a video file (in a full implementation)
            </p>
          </div>
        )}

        {contentType === 'music' && (
          <div>
            <label htmlFor="music" className="block text-2xl font-semibold text-gray-900 mb-4">
              Music File or URL
            </label>
            <input
              id="music"
              type="text"
              className="w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Paste SoundCloud URL or click to upload audio"
            />
            <p className="mt-3 text-lg text-gray-600">
              Upload MP3, WAV, or paste a SoundCloud URL
            </p>
          </div>
        )}

        {contentType === 'art' && (
          <div>
            <label htmlFor="art" className="block text-2xl font-semibold text-gray-900 mb-4">
              Artwork Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer">
              <div className="text-6xl mb-4">🎨</div>
              <p className="text-xl text-gray-700 mb-2">Click to upload your artwork</p>
              <p className="text-lg text-gray-500">PNG, JPG, or GIF up to 10MB</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex gap-4 pt-6">
          <Button type="submit" variant="primary" size="large" className="flex-1">
            Publish Content
          </Button>
          <Button
            type="button"
            variant="outline"
            size="large"
            onClick={() => window.location.href = '/'}
          >
            Cancel
          </Button>
        </div>
      </form>

      {/* Help Section */}
      <div className="mt-8 bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          💡 Tips for Sharing
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>• Use clear, descriptive titles that capture attention</li>
          <li>• Write detailed descriptions to help people find your content</li>
          <li>• For videos, good lighting and clear audio make a big difference</li>
          <li>• Be authentic - people connect with genuine stories and experiences</li>
          <li>• Share regularly to build an engaged audience</li>
        </ul>
      </div>
    </div>
  );
}
