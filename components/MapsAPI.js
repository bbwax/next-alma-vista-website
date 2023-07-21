import React, { useState, useEffect } from 'react';
import { AiFillCompass, AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Please adjust these styles according to your needs.
Modal.setAppElement('#__next');

export default function MapsAPI() {
    const [isOpen, setIsOpen] = useState(false);
    const [center, setCenter] = useState({ lat: 37.996967, lng: -120.263707
    });

    const toggleModal = () => setIsOpen(!isOpen);

    const handleMarkerClick = () => {
        // Use the current coordinates to generate a Google Maps directions URL
        const url = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
        // Open the URL in a new tab
        window.open(url, '_blank');
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);


    return (
        <div>
            <button
                onClick={toggleModal}
                className="text-white"
            >
                <AiFillCompass size={24} />
            </button>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="relative bg-white p-2 border-2 rounded-xl w-3/4 h-auto sm:h-auto sm:max-w-xl top-8"
                overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
            >
                <button
                    onClick={toggleModal}
                    className="relative left-3 top-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl"
                >
                    <AiOutlineClose size={24} />
                </button>
                <div className='p-4'>
                    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                        <div className='rounded-xl'>
                            <GoogleMap
                                mapContainerStyle={{ width: '100%', height: '50vh' }}
                                center={center}
                                zoom={10}
                            >
                                <Marker
                                    onClick={handleMarkerClick}
                                    position={center} />
                            </GoogleMap>
                        </div>
                    </LoadScript>
                </div>
            </Modal>
        </div>
    );
}