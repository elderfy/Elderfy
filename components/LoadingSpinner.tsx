'use client';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'white';
}

export default function LoadingSpinner({ size = 'medium', color = 'primary' }: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'w-8 h-8 border-2',
    medium: 'w-16 h-16 border-4',
    large: 'w-24 h-24 border-4',
  };

  const colorClasses = {
    primary: 'border-warmOrange-500 border-t-transparent',
    secondary: 'border-warmPurple-500 border-t-transparent',
    white: 'border-white border-t-transparent',
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
