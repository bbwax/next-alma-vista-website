import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar({ className }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <nav className={`${className} sm:text-xl text-md sticky container w-screen ${isHomePage ? 'text-white' : ' text-gray-200 bg-transparent'} font-recoleta`}>
      <ul className="flex flex-row justify-center space-x-4 ">
       
          <li className='pt-2'>
            <Link className="sm:m-4 hover:text-zinc-400 px-2" href="/about">About</Link>
          </li>
          <li className='pt-2'>
            <Link className="sm:m-4 hover:text-zinc-400 px-2" href="/photos">Photos</Link>
          </li>
          <li className='pt-2'>
            <Link className="sm:m-4 hover:text-zinc-400 px-2" href="/contact">Contact</Link>
          </li>
        
        <li className='sm:pr-2 md:pt-2'>
          <a href="/reservations" className="flex flex-row shrink-0 px-3 pb-1 pt-2 sm:pt-1 text-lg font-semibold bg-white rounded-full shadow-md hover:bg-gray-100 text-gray-500 min-w-[110px] ">Book Now</a>
        </li>
      </ul>
    </nav>
  );
}