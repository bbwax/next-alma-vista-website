import { IconList } from "@/components/IconList";
import { destinations } from "@/data/destinations";
import Guidebook from "@/components/Guidebook";
import ReviewCarousel from "@/components/ReviewCarousel";

export default function Home() {
  return (
    <>
    <IconList list={destinations}/>
      <div className="font-sans container mx-auto p-4">
        <h1 className="text-3xl font-semibold flex justify-center">Welcome</h1>
        <p className=' text-lg p-2 sm:p-4 flex justify-center'>
          to Alma Vista, the gateway to exploring the Sierra Nevadas. A place to connect with nature, people, and the moment. 
        </p>
      </div>
      <div className="py-6">
        <ReviewCarousel/>
      </div>
      <div className='p-4 sm:p-12'>
        <Guidebook/>
      </div>
    </>
  );
}