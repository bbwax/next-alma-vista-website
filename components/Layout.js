import Header from './Header';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}