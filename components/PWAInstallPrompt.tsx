'use client';

import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Listen for the beforeinstallprompt event
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Show prompt after a short delay to not be intrusive
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Check if app was installed
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setShowPrompt(false);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    await deferredPrompt.prompt();

    // Wait for the user's response
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }

    // Clear the prompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Store dismissal in localStorage to not show again for a while
    localStorage.setItem('pwa-prompt-dismissed', Date.now().toString());
  };

  // Don't show if already installed or prompt not available
  if (isInstalled || !showPrompt || !deferredPrompt) {
    return null;
  }

  // Check if user dismissed recently (within 7 days)
  const dismissed = localStorage.getItem('pwa-prompt-dismissed');
  if (dismissed) {
    const dismissedTime = parseInt(dismissed);
    const daysSinceDismissal = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
    if (daysSinceDismissal < 7) {
      return null;
    }
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white rounded-2xl shadow-soft-xl border border-sage-100 p-6 z-50 animate-slide-in-up">
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-sage-400 hover:text-sage-600 transition-colors"
        aria-label="Dismiss"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-softTerracotta-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-sage-900 mb-1">Install Elderfy</h3>
          <p className="text-sm text-sage-600 mb-4">
            Install Elderfy on your device for quick access and offline viewing.
          </p>

          <div className="flex gap-3">
            <button
              onClick={handleInstall}
              className="bg-sage-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-sage-700 shadow-soft transition-all duration-200"
            >
              Install
            </button>
            <button
              onClick={handleDismiss}
              className="text-sage-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-sage-50 transition-all duration-200"
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
