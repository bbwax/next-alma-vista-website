import FadeIn from "./FadeIn";

export function DescriptionWithPhotos({ items = [
    { src: '/images/livingroom1.png', description: 'Default Description 1' },
    { src: '/images/hottub4.png', description: 'Default Description 2' },
    { src: '/images/livingroom2.png', description: 'Default Description 3' },
    { src: '/images/hottub2.png', description: 'Default Description 4' },
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
                        <div className="md:hidden">
                            <img className="object-cover w-full py-6" src={item.src} alt={item.description} />
                            <p className="text-center text-2xl py-12">{item.description}</p>
                        </div>
                        {/* For larger screens: order of photo and description alternates */}
                        <div className="hidden md:flex">
                            {index % 2 === 0 ? (
                                <>
                                    <img className="object-cover w-2/3 p-8 py-6" src={item.src} alt={item.description} />
                                    <div className="w-1/2 flex items-center justify-center p-8 py-12">
                                        <p className="text-2xl">{item.description}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-1/2 flex items-center justify-center p-8 py-12">
                                        <p className="text-2xl">{item.description}</p>
                                    </div>
                                    <img className="object-cover w-2/3 p-8 py-6" src={item.src} alt={item.description} />
                                </>
                            )}
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>
    );
}