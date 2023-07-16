import React from 'react';
import Image from './Image';

export default function Navigation({ direction, onClick, image }) {
  return (
    <button className="w-1/4 flex justify-center items-center" onClick={onClick}>
      <Image className="w-1/2 opacity-50" {...image} />
    </button>
  );
}