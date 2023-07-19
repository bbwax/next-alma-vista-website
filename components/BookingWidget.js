import React from 'react';
import { useRouter } from 'next/router';

export default function BookingWidget() {
  const router = useRouter();

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.igms.com/app/widgets/direct-booking/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [router.asPath]); // dependency array includes router.asPath

  return (
    <div
      className="igms-direct-booking-widget p-2 sm:p-24 "
      id="directBooking1689466769227"
      data-listing-id="b8df0b8b-0d39-4a9b-adb0-538929bb13c7"
      data-widget-color="#DD831D"
      data-text-check-availability="Check Availability"
      data-text-book-now="Book Now"
    ></div>
  );
}