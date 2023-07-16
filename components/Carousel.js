import React, { useState } from 'react';
import Image from './Image';
import Navigation from './Navigation';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex justify-center items-center w-screen h-4/6 pt-24 pb-24">
      <Navigation direction="prev" onClick={prevImage} image={{...images[(currentIndex - 1 + images.length) % images.length], index: null, total: null, description: ''}} />
      <Image className="w-1/2" index={currentIndex + 1} total={images.length} {...images[currentIndex]} />
      <Navigation direction="next" onClick={nextImage} image={{...images[(currentIndex + 1) % images.length], index: null, total: null, description: ''}} />
    </div>
  );
}