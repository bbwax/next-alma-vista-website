import React, { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`transition-all duration-300 ${
        scrolled
          ? 'bg-transparent'
          : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
      }`}
    >
      <div className="container mx-auto p-4">
      <h1 className="text-2xl text-amber-600">My Header</h1>
      </div>
    </header>
  );
}