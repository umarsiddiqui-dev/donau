import { useEffect, useState } from 'react';

const useCountUp = (target, duration = 2000, trigger = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const totalMiliseconds = duration;
    const increment = end / (totalMiliseconds / 25);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
};

export default useCountUp;
