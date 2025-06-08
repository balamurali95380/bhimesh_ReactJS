// 33. Debouncing Input Events
// Debouncing prevents unnecessary function calls by ensuring the callback runs only after a specified delay
import { useState, useEffect } from 'react';

function DebouncedInput() {
  const [text, setText] = useState('');
  const [debouncedText, setDebouncedText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500); // Wait 500ms before updating debouncedText

    return () => clearTimeout(timer); // Cleanup previous timer
  }, [text]);

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <p>Debounced Output: {debouncedText}</p>
    </div>
  );
}
// This ensures that rapid keystrokes do not trigger excessive updates, improving efficiency