// The useRef hook lets us directly access a DOM element and modify it without causing a re-render. A common use case is focusing an input field when a button is clicked


import { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
// When the button is clicked, the input field receives focus, without requiring a state update.