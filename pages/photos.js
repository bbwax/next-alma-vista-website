import images from "@/data/images";
import Carousel from "@/components/Carousel";

export default function Photos() {
  return (
    <>
      <div className="container mx-auto p-4 font-sans flex justify-center">
        <h1 className="text-3xl font-semibold">Photos</h1>
      </div>
      <div>
        <Carousel images={images}/>
      </div>
    </>
  );
}