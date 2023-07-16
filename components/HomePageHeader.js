import Header from './Header';
import Navbar from './Navbar';
import Image from 'next/image';
import AnimatedText from './AnimatedText';
import AnimateDownArrow from './AnimateDownArrow';

export default function HomePageHeader() {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-center">
      <Image src="/images/AlmaVistaSunset.jpg" layout="fill" objectFit="cover" objectPosition="right" alt="Background" className="absolute z-0" />
      <div className="relative z-10 flex flex-col items-center justify-start h-full space-y-10">
        <div className="pt-5">
          <Header className='container mx-auto flex justify-center items-center' />
        </div>
        <Navbar />
        <AnimatedText />
      </div>
      <AnimateDownArrow/>
    </div>
  );
}