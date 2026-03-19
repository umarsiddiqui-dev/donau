import { useEffect, useRef } from 'react';

const useIntersectionObserver = (options = { threshold: 0.1 }) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const currentElements = elementsRef.current;
    currentElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [options]);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addToRefs;
};

export default useIntersectionObserver;
