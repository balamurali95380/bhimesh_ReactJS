import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

export function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

export function useTabsContext() {
  return useContext(TabsContext);
}