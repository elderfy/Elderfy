'use client';

import { useState } from 'react';
import Button from './Button';

interface SubscribeButtonProps {
  elderName: string;
  elderId: string;
}

export default function SubscribeButton({ elderName, elderId }: SubscribeButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          elderName,
          elderId,
        }),
      });

      const { url, error } = await response.json();

      if (error) {
        alert('Subscription error: ' + error);
        setLoading(false);
        return;
      }

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Failed to process subscription. Please try again.');
      setLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="large"
      onClick={handleSubscribe}
      disabled={loading}
    >
      {loading ? '...' : '⭐ Subscribe ($10/month)'}
    </Button>
  );
}
