import { IconList } from "@/components/IconList";
import { destinations } from "@/data/destinations";
import { DescriptionWithPhotos } from "@/components/DescriptionWithPhotos";
import Guidebook from "@/components/Guidebook";
import { homeInfo } from "@/data/homeInfo";
import Head from "next/head";
import dynamic from 'next/dynamic';

const CesiumViewer = dynamic(() => import('@/components/CesiumViewer'), {
    ssr: false // This line is important. It disables server-side rendering for this component.
});

export default function About() {
    return (
        <>
            <div>
                <Head>
                    <meta charset="utf-8" />
                    <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.105/Build/Cesium/Cesium.js"></script>
                    <link href="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.105/Build/Cesium/Widgets/widgets.css" rel="stylesheet" />
                </Head>
            </div>
          
            <div>
                <CesiumViewer />
            </div>
            <div className="container mx-auto p-4 flex flex-col justify-center">
                <h1 className="text-3xl font-semibold flex justify-center ">About </h1>
                <p className=' text-xl sm:text-3xl p-2 sm:p-4'> Welcome to Alma Vista, a secluded cabin nestled in the mountains of Soulsbyville, California. With stunning views of the surrounding peaks and valleys, this is the perfect getaway.
                </p>

            </div>
            <div>
                <IconList list={homeInfo} />
            </div>
            <div>
                <DescriptionWithPhotos />
            </div>
            <div>
                <IconList list={destinations} />
            </div>
            <div className='p-4 sm:p-12 pt-8'>
                <Guidebook />
            </div>
        </>
    );
}