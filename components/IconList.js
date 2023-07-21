export function IconList({ list =[] }) {
    return (
      <div className="grid grid-cols-2  md:flex md:flex-wrap md:justify-center space-y-2 sm:space-x-4 text-xl sm:text-2xl">
        {list.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 sm:p-2 pl-8">
            <div className="w-4 h-4 border-2 border-black rounded-full" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    );
}