'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type TextSize = 'small' | 'medium' | 'large' | 'extra-large';

interface TextSizeContextType {
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
}

const TextSizeContext = createContext<TextSizeContextType | undefined>(undefined);

export function TextSizeProvider({ children }: { children: ReactNode }) {
  const [textSize, setTextSizeState] = useState<TextSize>('medium');
  const [mounted, setMounted] = useState(false);

  // Load saved preference from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('elderfy-text-size') as TextSize;
    if (saved && ['small', 'medium', 'large', 'extra-large'].includes(saved)) {
      setTextSizeState(saved);
    }
  }, []);

  // Save preference to localStorage whenever it changes
  const setTextSize = (size: TextSize) => {
    setTextSizeState(size);
    localStorage.setItem('elderfy-text-size', size);

    // Apply to document root
    document.documentElement.setAttribute('data-text-size', size);
  };

  // Apply initial size after mount
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-text-size', textSize);
    }
  }, [mounted, textSize]);

  return (
    <TextSizeContext.Provider value={{ textSize, setTextSize }}>
      {children}
    </TextSizeContext.Provider>
  );
}

export function useTextSize() {
  const context = useContext(TextSizeContext);
  if (context === undefined) {
    throw new Error('useTextSize must be used within a TextSizeProvider');
  }
  return context;
}
