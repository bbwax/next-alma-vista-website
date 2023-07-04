import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white p-4 shadow-md">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-blue-500 hover:text-blue-700">
            About
          </Link>
        </li>
        <li>
          <Link href="/photos" className="text-blue-500 hover:text-blue-700">
            Photos
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-blue-500 hover:text-blue-700">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/reservations" className="text-blue-500 hover:text-blue-700">
             Reservations
          </Link>
        </li>
      </ul>
    </nav>
  );
}