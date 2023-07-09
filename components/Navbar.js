import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <nav className={`fixed top-0 z-10 p-4 w-full ${isHomePage ? 'bg-transparent' : 'bg-sunset'}`}>
      <ul className="flex justify-center space-x-4 ">
        <li>
          <Link href="/"
            className="text-white hover:text-blue-700">Home
          </Link>
        </li>
        <li>
          <Link href="/about"
            className="text-white hover:text-blue-700">About
          </Link>
        </li>
        <li>
          <Link href="/photos"
             className="text-white hover:text-blue-700">Photos
          </Link>
        </li>
        <li>
          <Link href="/contact"
            className="text-white hover:text-blue-700">Contact
          </Link>
        </li>
        <li>
          <Link href="/reservations"
             className="text-white hover:text-blue-700">Reservations
          </Link>
        </li>
      </ul>
    </nav>
  );
}