import BookingWidget from '@/components/BookingWidget';
import { useState, useEffect } from 'react';
import Carousel from '@/components/Carousel';
import images from "@/data/images";
import FadeIn from '@/components/FadeIn';
import ReviewCarousel from '@/components/ReviewCarousel';

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
      <div>
        <BookingWidget key={key} />
      </div>
      <div>
        <FadeIn>
          <div className='w-full sm:w-2/3 lg:w-1/2 mx-auto'>
            <ReviewCarousel />
          </div>
          <div>
            <Carousel images={images} />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}