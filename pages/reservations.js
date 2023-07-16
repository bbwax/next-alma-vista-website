import BookingWidget from '@/components/BookingWidget';
import { useState, useEffect } from 'react';
import Carousel from '@/components/Carousel';
import images from "@/data/images";

export default function Reservations() {
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now());
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold">Reservations Page</h1>
        <p className="mt-4">
          This is the reservations page. Here you can allow users to make reservations.
        </p>
      <BookingWidget key={key} />
      <Carousel images={images}/>
    </div>
  );
}