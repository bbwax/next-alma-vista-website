import React, { useState, useRef } from 'react';
import Image from './Image';
import Navigation from './Navigation';
import PhotoModal from './PhotoModal';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [startX, setStartX] = useState(null);
  const carouselRef = useRef();

  const openModal = () => {
    console.log('Opening modal');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  }

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      nextImage();
    } else if (startX - endX < -50) {
      prevImage();
    }
  }

  return (
    <div
      ref={carouselRef}
      className="flex justify-center items-center w-screen h-4/6 pt-10 pb-24"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
      <Navigation direction="prev" onClick={prevImage} image={{ ...images[(currentIndex - 1 + images.length) % images.length], index: null, total: null, description: '' }} />
      <Image className="w-1/2 cursor-pointer" index={currentIndex + 1} total={images.length} {...images[currentIndex]} onClick={openModal} />
      <Navigation direction="next" onClick={nextImage} image={{ ...images[(currentIndex + 1) % images.length], index: null, total: null, description: '' }} />

      <PhotoModal isOpen={isModalOpen} onClose={closeModal} images={images} currentIndex={currentIndex} />
    </div>
  );
}