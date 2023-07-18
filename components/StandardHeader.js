import Header from './Header';
import Navbar from './Navbar';

export default function StandardHeader() {
  return (
    <>
      <div className='sm:flex w-full bg-peach sticky top-0 z-50 items-center'>
        <Header className="sm:w-full justify-center sm:justify-start flex sm:text-left max-h-[100px] p-1 sm:pl-4 w-auto" />
        <Navbar className="text-center md:text-left"/>
      </div>
    </>
  );
}