import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Header() {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <header className={`sticky container mx-auto ${isHomePage ? 'text-white' : 'bg-sunset'}`}>
      <Image src="/images/logo.png" alt="Alma Vista Logo" width={300} height={300} />
      
    </header>
  );
}
