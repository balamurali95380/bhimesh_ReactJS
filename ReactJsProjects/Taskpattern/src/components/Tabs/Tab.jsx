import React from 'react';
import { useTabsContext } from './Tabs';

export function Tab({ index, children }) {
  const { activeIndex, setActiveIndex } = useTabsContext();
  const isActive = index === activeIndex;

  return (
    <button
      onClick={() => setActiveIndex(index)}
      style={{ fontWeight: isActive ? 'bold' : 'normal' }}
    >
      {children}
    </button>
  );
}