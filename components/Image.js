
export default function Image({ src, alt, description, className, index, total, onClick }) {
  return (
    <div className={`${className} flex flex-col items-center`} onClick={onClick}>
      <img className="object-cover" src={src} alt={alt} />
      <p className="text-center">{description}</p>
      {typeof index === 'number' && typeof total === 'number' && (
        <p className="text-center">{`${index + 1}/${total}`}</p>
      )}
    </div>
  );
}