export function DescriptionWithPhotos({ items = [
    { src: '/images/livingroom1.png', description: 'Default Description 1' },
    { src: '/images/hottub4.png', description: 'Default Description 2' },
    // add more items as needed
  ] }) {
    return (
      <div>
        {items.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row h-[500px] space-y-2 md:space-y-0 md:space-x-2">
            {index % 2 === 0 ? (
              <>
                <img className="object-cover flex-1 sm:w-2/3 sm:p-8 py-6" src={item.src} alt={item.description} />
                <p className="flex sm:pr-12 items-center justify-center text-2xl py-12">{item.description}</p>
              </>
            ) : (
              <>
                <p className="flex sm:pl-12 items-center justify-center text-2xl">{item.description}</p>
                <img className="object-cover flex-1 sm:w-2/3 sm:p-8 py-12" src={item.src} alt={item.description} />
              </>
            )}
          </div>
        ))}
      </div>
    );
  }