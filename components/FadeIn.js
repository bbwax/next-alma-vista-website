import React, { useEffect, useRef } from 'react';

export default function FadeIn({ children }) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add the "visible" class when the element is in view
        if (entry.isIntersecting) {
          ref.current.classList.add('visible');
        }
      },
      {
        // Start the observer when the element is 10% in view
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up on unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return <div ref={ref} className="fade-in">{children}</div>;
}