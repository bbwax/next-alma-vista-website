import BookingWidget from '@/components/BookingWidget';
import { useState, useEffect } from 'react';
import Carousel from '@/components/Carousel';
import images from "@/data/images";
import FadeIn from '@/components/FadeIn';

export default function Reservations() {
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now());
  }, []);

  return (
    <div>
      <div className='container mx-auto p-4 font-sans flex justify-center'>
        <h1 className='text-3xl font-semibold'>Select Dates</h1>
      </div>
      <BookingWidget key={key} />
      <div>
        <FadeIn>
          <div>
            <Carousel images={images} />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}