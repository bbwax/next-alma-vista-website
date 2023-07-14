import React, { useEffect, useState } from 'react';

export default function AnimateDownArrow() {
  const [opacity, setOpacity] = useState(1);

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setOpacity(0);
    } else {
      setOpacity(1);
    }
  }

  useEffect(() => {
    // check if window is defined (this is for SSR)
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", checkScroll);

      // Cleanup after the effect:
      return () => {
        window.removeEventListener("scroll", checkScroll);
      }
    }
  }, []);  // Empty dependency array means this effect runs once on mount and clean up on unmount.

  return (
    <div className="flex justify-center" style={{opacity: opacity, transition: 'opacity 2s'}}>
      <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
        <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}