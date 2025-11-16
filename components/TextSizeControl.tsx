'use client';

import { useTextSize } from '@/contexts/TextSizeContext';

export default function TextSizeControl() {
  const { textSize, setTextSize } = useTextSize();

  const sizes = [
    { value: 'small' as const, label: 'A', description: 'Small text' },
    { value: 'medium' as const, label: 'A', description: 'Medium text (default)' },
    { value: 'large' as const, label: 'A', description: 'Large text' },
    { value: 'extra-large' as const, label: 'A', description: 'Extra large text' },
  ];

  return (
    <div className="bg-white border-4 border-warmOrange-200 rounded-2xl p-4 shadow-lg">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg font-bold text-sage-900" id="text-size-label">
          Text Size:
        </span>
      </div>
      <div className="flex gap-2" role="radiogroup" aria-labelledby="text-size-label">
        {sizes.map((size, index) => (
          <button
            key={size.value}
            onClick={() => setTextSize(size.value)}
            className={`relative flex items-center justify-center min-w-[48px] min-h-[48px] rounded-xl border-3 font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-warmOrange-400 active:scale-95 ${
              textSize === size.value
                ? 'bg-gradient-to-r from-warmOrange-500 to-warmOrange-600 text-white border-warmOrange-600 shadow-lg scale-110'
                : 'bg-white text-sage-700 border-sage-300 hover:border-warmOrange-400 hover:bg-warmOrange-50'
            }`}
            role="radio"
            aria-checked={textSize === size.value}
            aria-label={size.description}
            style={{
              fontSize: index === 0 ? '16px' : index === 1 ? '20px' : index === 2 ? '24px' : '28px',
            }}
          >
            {size.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-3 text-center">
        {textSize === 'small' && 'Compact view'}
        {textSize === 'medium' && 'Default size'}
        {textSize === 'large' && 'Easy to read'}
        {textSize === 'extra-large' && 'Maximum readability'}
      </p>
    </div>
  );
}
