import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <header className={`sticky container mx-auto ${isHomePage ? 'text-white' : 'bg-sunset'}`}>
      <Link href="/">
        <Image  src="/images/logo.png" alt="Alma Vista Logo" width={300} height={300} />
      </Link>
    </header>
  );
}
