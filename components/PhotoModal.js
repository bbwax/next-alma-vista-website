import React, { useState, useEffect, useRef } from 'react';

export default function PhotoModal({ isOpen, onClose, images, currentIndex }) {
  const [index, setIndex] = useState(currentIndex);
  const modalRef = useRef();

  useEffect(() => {
    setIndex(currentIndex);
    const handleEscapePress = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscapePress);
    return () => {
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [currentIndex, onClose]);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleClickOutside}>
      <div ref={modalRef} className="bg-white relative">
        <button onClick={onClose} className="absolute top-0 right-0 text-black bg-gray-300 font-bold p-2 transform active:scale-90 transition duration-150">
          X
        </button>
        <img src={images[index].src} alt={images[index].alt} />
        <button onClick={prevImage} className="absolute top-1/2 left-0 m-2 bg-cyan-300 text-black rounded-full p-2 transform active:scale-90 transition duration-150">
          Prev
        </button>
        <button onClick={nextImage} className="absolute top-1/2 right-0 m-2 bg-cyan-300 text-black rounded-full p-2 transform active:scale-90 transition duration-150">
          Next
        </button>
      </div>
    </div>
  );
}