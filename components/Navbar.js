import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <nav className={`sticky container mx-auto ${isHomePage ? 'text-white' : 'bg-sunset'}`}>
      <ul className="flex justify-center space-x-4 ">
        <li>
          <Link className="sm:m-4" href="/about">About</Link>
        </li>
        <li>
          <Link className="sm:m-4" href="/photos">Photos</Link>
        </li>
        <li>
          <Link className="sm:m-4" href="/contact">Contact</Link>
        </li>
        <li>
          <Link className="sm:m-4" href="/reservations">Reservations</Link>
        </li>
      </ul>
    </nav>
  );
}