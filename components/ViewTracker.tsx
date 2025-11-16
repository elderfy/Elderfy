'use client';

import { useEffect } from 'react';

interface ViewTrackerProps {
  type: 'elder' | 'content';
  id: string;
}

export default function ViewTracker({ type, id }: ViewTrackerProps) {
  useEffect(() => {
    // Track view on component mount
    const trackView = async () => {
      try {
        const endpoint = type === 'elder'
          ? '/api/analytics/track-elder-view'
          : '/api/analytics/track-content-view';

        const bodyKey = type === 'elder' ? 'elderId' : 'contentId';

        await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ [bodyKey]: id }),
        });
      } catch (error) {
        // Silently fail - analytics shouldn't break the user experience
        console.error('Failed to track view:', error);
      }
    };

    // Use a small delay to ensure the page is fully loaded
    const timer = setTimeout(trackView, 1000);

    return () => clearTimeout(timer);
  }, [type, id]);

  // This component doesn't render anything
  return null;
}
