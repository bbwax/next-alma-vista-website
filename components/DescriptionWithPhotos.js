import FadeIn from "./FadeIn";

export function DescriptionWithPhotos({ items = [
    { src: '/images/livingroom1.png', description: ' The cabin features a 2-story wrap-around deck with breathtaking views and starry nights.' },
    { src: '/images/hottub4.png', description: ' After a day of exploring, unwind in the 6 person hot tub.' },
    { src: '/images/livingroom2.png', description: 'Inside, the cabin is cozy and comfortable with all the amenities you need.' },
    { src: '/images/hottub2.png', description: ' Book your stay at Alma Vista and experience the beauty of the 108!' },
    // add more items as needed
] }) {




    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
        <div>
            {items.map((item, index) => (
                <FadeIn key={index}>
                    <div key={index} className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 justify-center">
                        {/* For mobile screens: photo and description are always in this order */}
                        <div className="md:hidden px-3 pt-6">
                            <img className="object-cover w-full rounded-xl shadow-lg" src={item.src} alt={item.description} />
                            <p className="text-center text-2xl py-12 px-2">{item.description}</p>
                        </div>
                        {/* For larger screens: order of photo and description alternates */}
                        <div className="hidden md:flex">
                            {index % 2 === 0 ? (
                                <>
                                    <div className=" flex items-center">
                                        <div className="w-2/3 p-8 py-6 px-2">
                                            <img className="object-cover  rounded-xl shadow-lg" src={item.src} alt={item.description} />
                                        </div>
                                        <div className="w-1/2 flex items-center justify-center p-8 py-12">
                                            <p className="text-4xl px-2">{item.description}</p>
                                        </div>
                                    </div>

                                </>
                            ) : (
                                <>
                                    <div className=" flex items-center">
                                        <div className="w-1/2 flex items-center justify-center p-8 py-12">
                                            <p className="text-4xl px-2">{item.description}</p>
                                        </div>
                                        <div className="w-2/3 p-8 py-6 px-2">
                                            <img className="object-cover  rounded-xl shadow-lg" src={item.src} alt={item.description} />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>
    );
}