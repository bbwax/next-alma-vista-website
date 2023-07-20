
export default function Image({ src, alt, description, className, index, total, onClick }) {
  return (
    <div className={`${className} flex flex-col items-center bg-white p-2 rounded-lg shadow-lg`} onClick={onClick}>
      <img className="object-cover" src={src} alt={alt} />
      <p className="text-center h-32 sm:h-auto pt-2">{description}</p>
      {typeof index === 'number' && typeof total === 'number' && (
        <p className="text-center">{`${index }/${total}`}</p>
      )}
    </div>
  );
}

