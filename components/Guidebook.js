import Image from 'next/image';
import FadeIn from './FadeIn';

export default function Guidebook() {
    const destinations = [
        {
            name: 'Pinecrest Lake',
            description: 'Pinecrest Lake is a true gem of the Sierra Nevadas. Here, you can enjoy boat rentals and explore the lake at your own pace. Don’t forget to try the local cuisine at the lakeside restaurant. If you’re feeling more adventurous, there are several hiking trails that offer stunning views of the lake and surrounding forest.',
            image: '/images/pinecrest_Lake.jpg',
            thingsToDo: ['Boat Rentals', 'Restaurant', 'Hiking Trails'],
        },
        {
            name: 'Yosemite',
            description: 'Yosemite National Park is world-renowned for its breathtaking landscapes. It offers a diverse array of trails for all levels, from leisurely walks to challenging climbs. You can marvel at the iconic Yosemite Falls, which is especially spectacular in the spring. Don’t miss the opportunity to explore the expansive park and its diverse flora and fauna.',
            image: '/images/yosemite.jpg',
            thingsToDo: ['Trails', 'Park', 'Waterfall'],
        },
        {
            name: 'Dodge Ridge Ski Resort',
            description: 'No matter the season, Dodge Ridge Ski Resort is the perfect mountain escape. In the winter, the resort becomes a paradise for skiers and snowboarders, offering a variety of trails for all skill levels. If you’re visiting in the summer, you can take advantage of their disc golf course or just enjoy a picnic amidst the stunning mountain scenery. Embrace the adventure at Dodge Ridge, where the fun doesn’t stop when the snow melts!',
            image: '/images/Dodge-Ridge.jpg',
            thingsToDo: ['Skiing', 'Snowboarding', 'Disc Golf', 'Hiking'],
          },
        {
            name: 'Kennedy Meadows',
            description: 'Kennedy Meadows is a summer haven. It’s the perfect place to escape the city heat and immerse yourself in nature. One of the highlights of Kennedy Meadows is horseback riding. Whether you’re a seasoned rider or a beginner, you’ll enjoy this unique way to explore the beautiful meadows.',
            image: '/images/kennedy-meadows.jpg',
            thingsToDo: ['Horseback Riding, Hiking'],
        },
        {
            name: 'Tuolumne Grove',
            description: 'Tuolumne Grove is home to some of the most majestic trees on the planet. The grove offers a moderately challenging hike that takes you among massive sequoias. The trail is well-maintained and suitable for most fitness levels. Walking among these ancient giants, you can’t help but feel a sense of awe and reverence for nature.',
            image: '/images/tuolumne-grove.jpg',
            thingsToDo: ['Hiking'],
        },
        {
            name: 'Downtown Sonora',
            description: 'Downtown Sonora is a charming blend of history and modernity. The city boasts a lively downtown with a variety of shops, restaurants, and historical landmarks. Take a stroll down Washington Street and step back in time with its well-preserved Gold Rush-era architecture. Don’t forget to visit the Tuolumne County Museum to learn more about the area’s rich gold mining history.',
            image: '/images/downtown-sonora.jpg',
            thingsToDo: ['Shopping', 'Dining', 'Historical Landmarks'],
        },
        {
            name: 'Murphys',
            description: 'Murphys, often dubbed as the "Queen of the Sierra", is renowned for its vibrant wine scene. The charming downtown area is lined with over two dozen wine tasting rooms representing local vineyards. Take a wine tour and sample the region’s finest Cabernet Sauvignon and Chardonnay. Make sure to also visit the unique shops and gourmet restaurants in the area.',
            image: '/images/downtown-murphys.jpg',
            thingsToDo: ['Wine Tasting', 'Shopping', 'Dining'],
        },
    ];

    return (
        <div className="space-y-8">
            <h1  className='text-3xl flex justify-center'> 3 Day Guidebook</h1>
            {destinations.map((destination, index) => (
                <FadeIn key={index}>
                    <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                        <Image className="object-cover w-full md:w-1/2" src={destination.image} alt={destination.name} width={500} height={300} />
                        <div className="md:w-1/2">
                            <p className="my-4">{destination.description}</p>
                            <h3 className="text-xl font-bold mb-2">Things to Do</h3>
                            <ul className="list-disc list-inside space-y-2">
                                {destination.thingsToDo.map((thing, idx) => (
                                    <li key={idx}>{thing}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>
    );
}