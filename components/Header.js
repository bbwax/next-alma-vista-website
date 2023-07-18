import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ className }) { // accept className as a prop
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <header className={`${className} ${isHomePage ? 'text-white' : 'bg-transparent py-3 pl-4'} font-sans`}>
      <Link href="/" >
        <Image className={` ${className} ${isHomePage ? 'sm:max-h-[300px] max-h-[150px]' : 'max-h-[100px] pl-4'}`} src="/images/logo_2.png" alt="Alma Vista Logo" width={300} height={300} layout='responsive' />
      </Link>
    </header>
  );
}