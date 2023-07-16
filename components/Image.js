import React from 'react';

export default function Image({ src, alt, description, className, index, total }) {
  return (
    <div className={`${className} flex flex-col items-center`}>
      <img className="object-cover" src={src} alt={alt} />
      {description ? <p className="text-center">{description}</p> : null} {/* Only display the description if it's not empty */}
      {index && total ? <p className="text-center">{index}/{total}</p> : null} {/* Only display the image number and total if they are not null */}
    </div>
  );
}