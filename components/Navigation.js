import React from 'react';
import Image from './Image';

export default function Navigation({ direction, onClick, image }) {
  return (
    <button className="w-1/4 flex justify-center items-center transform active:scale-90 transition duration-150 bg-transparent " onClick={onClick}>
      <Image className="w-1/2 opacity-50 p-0 h-0" {...image} />
    </button>
  );
}