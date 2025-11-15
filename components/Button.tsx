'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'large',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 hover:from-warmOrange-600 hover:to-warmOrange-700 text-white focus:ring-warmOrange-400',
    secondary: 'bg-gradient-to-r from-warmPurple-500 to-warmPurple-600 hover:from-warmPurple-600 hover:to-warmPurple-700 text-white focus:ring-warmPurple-400',
    outline: 'border-3 border-warmOrange-500 text-warmOrange-700 hover:bg-warmOrange-50 focus:ring-warmOrange-400 shadow-md',
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-base',
    medium: 'px-6 py-3 text-lg',
    large: 'px-8 py-4 text-xl min-h-[60px]',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
