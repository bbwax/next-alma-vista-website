import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar({ className }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <nav className={`${className} sm:text-xl text-md sticky container w-screen pb-3 ${isHomePage ? 'text-white' : ' text-gray-200 bg-transparent'} font-recoleta`}>
      <ul className="flex flex-row justify-center space-x-4 ">
       
          <li>
            <Link className="sm:m-4 hover:text-zinc-400 p-2" href="/about">About</Link>
          </li>
          <li>
            <Link className="sm:m-4 hover:text-zinc-400 p-2" href="/photos">Photos</Link>
          </li>
          <li>
            <Link className="sm:m-4 hover:text-zinc-400 p-2" href="/contact">Contact</Link>
          </li>
        
        <li>
          <a href="/reservations" className="px-3 py-2 text-lg font-semibold bg-white rounded-full shadow-md hover:bg-gray-100 text-gray-500 ">Book Now</a>
        </li>
      </ul>
    </nav>
  );
}