export function Amenities({ list = ['10 Guests', '3 Bedrooms', '9 Beds', '2 Baths'] }) {
    return (
      <div className="grid grid-cols-2 sm:flex sm:justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        {list.map((amenity, index) => (
          <div key={index} className="flex items-center space-x-2 sm:p-2 pl-8">
            <div className="w-4 h-4 border-2 border-black rounded-full" />
            <p>{amenity}</p>
          </div>
        ))}
      </div>
    );
  }