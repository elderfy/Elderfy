'use client';

import { useState } from 'react';
import Button from './Button';

interface DonationFormProps {
  elderName: string;
  elderId: string;
}

export default function DonationForm({ elderName, elderId }: DonationFormProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDonate = async (amount: number) => {
    if (amount < 1) {
      alert('Please enter an amount of at least $1');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          elderName,
          elderId,
        }),
      });

      const { url, error } = await response.json();

      if (error) {
        alert('Payment error: ' + error);
        setLoading(false);
        return;
      }

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Failed to process payment. Please try again.');
      setLoading(false);
    }
  };

  const handleCustomDonate = () => {
    const amount = parseFloat(customAmount);
    if (isNaN(amount) || amount < 1) {
      alert('Please enter a valid amount');
      return;
    }
    handleDonate(amount);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[5, 10, 25, 50].map((amount) => (
          <button
            key={amount}
            onClick={() => {
              setSelectedAmount(amount);
              handleDonate(amount);
            }}
            disabled={loading}
            className="bg-white text-warmPurple-700 px-6 py-5 rounded-2xl text-2xl font-bold hover:bg-warmOrange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading && selectedAmount === amount ? '...' : `$${amount}`}
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="number"
          placeholder="Custom amount"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className="flex-1 px-6 py-4 rounded-xl text-xl text-sage-900 focus:outline-none focus:ring-4 focus:ring-warmOrange-300 shadow-lg"
          min="1"
          disabled={loading}
        />
        <Button
          variant="secondary"
          size="large"
          className="bg-white text-warmPurple-700 hover:bg-warmOrange-50"
          onClick={handleCustomDonate}
          disabled={loading}
        >
          {loading && !selectedAmount ? '...' : '💳 Donate Now'}
        </Button>
      </div>
    </div>
  );
}
