'use client';

import Button from './Button';

interface DonateButtonProps {
  elderFirstName: string;
}

export default function DonateButton({ elderFirstName }: DonateButtonProps) {
  const handleScrollToDonate = () => {
    const donateSection = document.getElementById('donate');
    donateSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button
      variant="primary"
      size="large"
      onClick={handleScrollToDonate}
    >
      💝 Support {elderFirstName}
    </Button>
  );
}
