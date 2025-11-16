'use client';

import { ReactNode, Children, cloneElement, isValidElement } from 'react';

interface StaggeredGridProps {
  children: ReactNode;
  className?: string;
}

export default function StaggeredGrid({ children, className = '' }: StaggeredGridProps) {
  const childArray = Children.toArray(children);

  return (
    <div className={className}>
      {childArray.map((child, index) => {
        if (isValidElement(child)) {
          const delayClass = `animate-delay-${Math.min(index * 100, 500)}`;
          return cloneElement(child as any, {
            key: index,
            className: `${(child.props as any).className || ''} ${delayClass}`.trim(),
          });
        }
        return child;
      })}
    </div>
  );
}
