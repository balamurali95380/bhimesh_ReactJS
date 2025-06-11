import React from 'react';
import { useTabsContext } from './Tabs';

export function TabPanels({ children }) {
  const { activeIndex } = useTabsContext();
  return <div className="tab-panels">{children[activeIndex]}</div>;
}