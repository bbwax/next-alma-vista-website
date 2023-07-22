import { IconList } from "@/components/IconList";
import { destinations } from "@/data/destinations";
import Guidebook from "@/components/Guidebook";
import ReviewCarousel from "@/components/ReviewCarousel";
import { amenities } from "@/data/amenities";
import Carousel from "@/components/Carousel";
import FadeIn from "@/components/FadeIn";
import images from "@/data/images";

export default function Home() {
  return (
    <>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold flex justify-center">Welcome</h1>
        <p className=' text-lg p-2 sm:p-4 flex justify-center'>
          to Alma Vista, the gateway to exploring the Sierra Nevadas. A place to connect with nature, people, and the moment.
        </p>
      </div>
      <div>
        <IconList list={amenities} />
      </div>
      <div>
        <FadeIn>
          <div>
            <Carousel images={images} />
          </div>
        </FadeIn>
      </div >
      <div className="py-6 px-3">
        <ReviewCarousel />
      </div>
      <div className="p-4 pt-8">
        <IconList list={destinations} />
      </div>
      <div className='p-4 sm:p-12'>
        <Guidebook />
      </div>
    </>
  );
}