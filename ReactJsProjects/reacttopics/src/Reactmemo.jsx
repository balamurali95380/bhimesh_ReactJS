// 31. React.memo for Functional Component Optimization
// React.memo prevents unnecessary re-renders by only updating when props change.
import React, { useState } from 'react';

const MemoizedComponent = React.memo(({ count }) => {
  console.log('Rendering Memoized Component');
  return <p>Count: {count}</p>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <MemoizedComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}
// Since the MemoizedComponent only depends on count, it does not re-render when text changes.
