import { useRouter } from 'next/router';
import HomePageHeader from './HomePageHeader';
import StandardHeader from './StandardHeader';
import Footer from './Footer';
import BackgroundWrapper from './BackgroundWrapper';



export default function Layout({ children }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (

    <div className="relative min-h-screen font-recoleta">
      <BackgroundWrapper>
        {isHomePage ? <HomePageHeader /> : <StandardHeader />}
        <main className="">{children}</main>
        <div>
          <Footer />
        </div>
      </BackgroundWrapper>
    </div>

  );
}