import React, { useEffect } from 'react';

function CesiumViewer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set the Cesium Ion token
      Cesium.Ion.defaultAccessToken = process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN;

      // Use Cesium Ion's global imagery layer
      const viewer = new Cesium.Viewer('cesiumContainer', {
        imageryProvider: false,
        baseLayerPicker: false,
        requestRenderMode: true,
      });

      const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      const tilesetUrl = `https://tile.googleapis.com/v1/3dtiles/root.json?key=${googleApiKey}`;

      const tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
        url: tilesetUrl,
        showCreditsOnScreen: true,
      }));

      viewer.scene.globe.show = false;

      // Start from a high altitude above the earth
      const initialLocation = new Cesium.Cartesian3.fromDegrees(-122.877363, 37.662871, 1e6);

      viewer.camera.flyTo({
        destination: initialLocation,
        orientation: {
          heading: 0.0,
          pitch: Cesium.Math.toRadians(-90), // look straight down
          roll: 0.0
        },
        maximumHeight: 1e7,
        duration: 0 // instantly move to the starting position
      });

      // After some delay, move the camera to the first location
      setTimeout(() => {
        const firstLocation = new Cesium.Cartesian3.fromDegrees(-122.555738, 37.794703, 2000);

        viewer.camera.flyTo({
          destination: firstLocation,
          orientation: {
            heading: Cesium.Math.toRadians(90), // heading
            pitch: Cesium.Math.toRadians(-20), // pitch
            roll: 0.0
          },
          maximumHeight: 6000,
          duration: 4 // flight duration in seconds
        });
      }, 4000); // in ms 

      // After some more delay, move the camera to the second location
      setTimeout(() => {
        const secondLocation = new Cesium.Cartesian3.fromDegrees(-120.251042, 37.997956, 1200);
        viewer.camera.flyTo({
          destination: secondLocation,
          orientation: {
            heading: Cesium.Math.toRadians(215),
            pitch: Cesium.Math.toRadians(-20),
            roll: 0.0
          },
          maximumHeight: 6000,
          duration: 10 // flight duration in seconds
        });
      }, 9000); // in ms 
    }
  }, []);

  return (
    <div className='p-4 rounded-xl space-x-4 w-full h-80 md:h-auto' >
      <div id="cesiumContainer" className='h-full md:h-auto'/>
    </div>
  );
}

export default CesiumViewer;