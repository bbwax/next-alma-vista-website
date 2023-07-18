import React from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiTwotoneHome} from 'react-icons/ai'; 



export default function Footer() {
    return (
        <div className="relative h-[33vh] w-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/pinecrestmarina.png')" }}>
            <div className="absolute inset-0 bg-opacity-50 bg-black flex justify-between items-center px-4 md:px-16 py-8">

                <a href="/reservations" className="px-6 py-3 text-lg font-semibold bg-white rounded-full shadow-md hover:bg-gray-100">Book Now</a>

                <div className="space-y-3">
                    <div className="border-l-2 border-white pl-4">
                        <Link href="/" className="text-white">Home</Link>
                    </div>
                    <div className="border-l-2 border-white pl-4">
                        <Link href="/about" className="text-white">About</Link>
                    </div>
                    <div className="border-l-2 border-white pl-4">
                        <Link href="/contact" className="text-white">Contact</Link>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="border-l-2 border-white pl-4">
                        <a href="https://www.instagram.com/the.alma.vista/" target="_blank" rel="noreferrer" className="text-white"><AiFillInstagram size={24} /></a>
                    </div>
                    <div className="border-l-2 border-white pl-4">
                        <a href="https://www.airbnb.com/h/almavista" target="_blank" rel="noreferrer" className="text-white"><AiTwotoneHome size={24} /></a>
                    </div>
                </div>

            </div>
        </div>
    );
}