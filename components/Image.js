
export default function Image({ src, alt, description, className, index, total, onClick }) {
  return (
    <div className={`${className} flex flex-col items-center bg-white rounded-lg shadow-lg`} onClick={onClick}>
      <img className="object-cover p-1 rounded-lg" src={src} alt={alt} />
      <p className="text-center h-32 sm:h-auto p-2">{description}</p>
      {typeof index === 'number' && typeof total === 'number' && (
        <p className="text-center pb-2">{`${index }/${total}`}</p>
      )}
    </div>
  );
}

