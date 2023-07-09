import Header from './Header';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Header />
      <main className="pt-24">{children}</main>
    </div>
  );
}