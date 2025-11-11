import React from 'react';

export type TechItem = {
  name: string;
  icon: string; // image url
};

interface ScrollingRowProps {
  items: TechItem[];
  direction?: 'left' | 'right';
  speedSec?: number; // animation duration in seconds
}

const ScrollingRow: React.FC<ScrollingRowProps> = ({ items, direction = 'left', speedSec = 35 }) => {
  // Duplicate items 4x to create a seamless infinite loop
  const content = [...items, ...items, ...items, ...items];

  const style = { '--duration': `${speedSec}s` } as React.CSSProperties & { '--duration': string };

  return (
    <div className="scroller" data-direction={direction} style={style} aria-label="Scrolling list of technical skills">
      <div className="scroller__inner">
        {content.map((item, idx) => (
          <div key={`${item.name}-${idx}`} className="scroller__item">
            <img
              src={item.icon}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
            <span className="text-gray-300 text-sm sm:text-base font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingRow;
