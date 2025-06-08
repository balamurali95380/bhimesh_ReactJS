// 32. Lazy Loading Components
// Lazy loading improves performance by loading components only when needed. React.lazy() allows us to dynamically import a component, and Suspense provides a fallback UI.
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LazyComponent />
    </Suspense>
  );
}
// Here, LazyComponent is loaded only when it is needed, reducing the initial bundle size.
