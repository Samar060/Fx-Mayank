// src/hooks/useInView.js
import { useState, useEffect, useRef } from 'react';

/**
 * Hook to determine if an element is currently in the viewport.
 * Used for scroll-reveal animations.
 */
export function useInView(options = { threshold: 0.1, once: true }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.once) {
          observer.unobserve(element);
        }
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [ref, isInView];
}