import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <header className={`container mx-auto p-4 ${isHomePage ? 'bg-transparent' : 'bg-sunset'}`}>
      <h1 className="text-2xl text-white">Alma Vista</h1>
    </header>
  );
}