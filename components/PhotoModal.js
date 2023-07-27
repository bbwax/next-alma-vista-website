import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineClose } from 'react-icons/ai'
import ModalComponent from './ModalComponent';

export default function PhotoModal({ isOpen, onClose, images, currentIndex }) {
  const [index, setIndex] = useState(currentIndex);
  const modalRef = useRef();
  const [startX, setStartX] = useState(null);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  }

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 100) {
      nextImage();
    } else if (startX - endX < -100) {
      prevImage();
    }
  }

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

  return (
    <ModalComponent isOpen={isOpen} onRequestClose={onClose}>
      <div ref={modalRef} className="flex items-center justify-center h-full bg-white relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
        <button onClick={onClose} className="absolute top-1 right-1 text-black bg-sunset font-bold rounded-full p-2 transform active:scale-90 transition duration-150">
          <AiOutlineClose />
        </button>
        <img src={images[index].src} alt={images[index].alt} />
        <button onClick={prevImage} className="md:block hidden absolute top-1/2 left-2 m-2 bg-sunset text-black rounded-full p-2 ">
          <AiOutlineDoubleLeft />
        </button>
        <button onClick={nextImage} className="md:block hidden absolute top-1/2 right-2 m-2 bg-sunset text-black rounded-full p-2 ">
          <AiOutlineDoubleRight />
        </button>
      </div>
    </ModalComponent>
  );
}