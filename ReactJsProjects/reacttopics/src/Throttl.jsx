// 34. Throttling Scroll Events
// Throttling limits the rate at which a function executes, useful for performance-heavy events like scrolling.
import { useEffect } from 'react';
import { throttle } from 'lodash';

function ScrollThrottling() {
  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log('Scrolled!');
    }, 1000); // Executes at most once per second

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <p>Scroll to see throttled log messages.</p>;
}
// This reduces the frequency of scroll event handling, improving performance.