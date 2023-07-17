import { Amenities } from "@/components/Amenities";
import { DescriptionWithPhotos } from "@/components/DescriptionWithPhotos";

export default function About() {
    return (
        <>
            <div className="container mx-auto p-4 font-sans flex justify-center">
                <h1 className="text-3xl font-semibold ">About </h1>
               
            </div>
            <div>
                <Amenities />
            </div>
            <div>
                <DescriptionWithPhotos />
            </div>
        </>
    );
}