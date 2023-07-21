import { Carousel } from 'react-responsive-carousel';
import { reviews } from '../data/reviews';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

function StarRating({ stars }) {
    return (
        <div className="flex">
            {[...Array(stars)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 15.898l-6.816 3.584 1.303-7.588L.389 7.269l7.605-1.106L10 .389l3.006 5.774 7.605 1.106-5.098 4.625 1.303 7.588L10 15.898z" />
                </svg>
            ))}
        </div>
    );
}

export default function ReviewCarousel() {
    return (
        <div className='shadow-xl bg-white w-full sm:w-2/3 lg:w-1/2 mx-auto rounded-lg'>
            <Carousel autoPlay interval={5000} infiniteLoop useKeyboardArrows showThumbs={false}>
                {reviews.map((review) => (
                    <div key={review.id} className="p-8  bg-white rounded-xl text-center ">
                        <StarRating stars={review.stars} />
                        <p className="mb-4 italic text-gray-500 pt-2">"{review.review}"</p>
                        <p className="mb-2 text-xl font-semibold">{review.reviewer}</p>
                        <p className="text-sm text-gray-400">{review.date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}