import { IconList } from "@/components/IconList";
import { amenities } from "@/data/amenities";
import { destinations } from "@/data/destinations";
import { DescriptionWithPhotos } from "@/components/DescriptionWithPhotos";
import Guidebook from "@/components/Guidebook";

export default function About() {
    return (
        <>
            <div className="container mx-auto p-4 flex flex-col justify-center">
                <h1 className="text-3xl font-semibold flex justify-center ">About </h1>
                <p className=' text-xl sm:text-3xl p-2 sm:p-4'> Welcome to Alma Vista, a secluded cabin nestled in the mountains of Soulsbyville, California. With stunning views of the surrounding peaks and valleys, this is the perfect getaway.
                </p>

            </div>
            <div>
                <IconList list={amenities} />
            </div>
            <div>
                <DescriptionWithPhotos />
            </div>
            <div>
                <IconList list={destinations} />
            </div>
            <div className='p-4 sm:p-12'>
                <Guidebook/>
            </div>
        </>
    );
}