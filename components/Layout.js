import { useRouter } from 'next/router';
import HomePageHeader from './HomePageHeader';
import StandardHeader from './StandardHeader';
import Footer from './Footer';
import BackgroundWrapper from './BackgroundWrapper';
import NavbarIcon from './NavbarIcon';



export default function Layout({ children }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (

    <div className="relative min-h-screen font-recoleta">
    <BackgroundWrapper>
      {isHomePage ? (
        <>
          <HomePageHeader />
          <NavbarIcon />
        </>
      ) : (
        <StandardHeader />
      )}
      <main className="pt-6">{children}</main>
      <div>
        <Footer />
      </div>
    </BackgroundWrapper>
  </div>

  );
}