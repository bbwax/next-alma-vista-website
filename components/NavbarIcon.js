import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function NavbarIcon() {
    const [isOpen, setIsOpen] = useState(false);
    const [quote, setQuote] = useState('Fetching an inspiring quote...');

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
    };

    const fetchQuote = async () => {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setQuote(`${data.content} — ${data.author}`);
    }

    useEffect(() => {
        if (isOpen) {
            fetchQuote();
        }
    }, [isOpen]);

    return (
        <>
            <div className="sticky top-0 z-50 flex justify-end p-4">
                {!isOpen && (
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <div className='bg-peach rounded-full p-3'>
                            <AiOutlineMenu size={40} color='white' />
                        </div>
                    </button>
                )}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed top-0 left-0 w-screen h-screen bg-peach flex flex-col justify-center items-center text-white text-5xl z-40 pb-24"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants}
                        transition={{ duration: 0.8 }}
                    >
                        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
                            <AiOutlineClose size={40} />
                        </button>
                        <nav className="space-y-12 flex flex-col justify-center items-center">
                            {['about', 'contact', 'photos', 'reservations'].map(page => (
                                <Link key={page} href={`/${page}`}>
                                    <motion.a
                                        className="cursor-pointer hover:text-blue-400 "
                                        onClick={() => setIsOpen(false)}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {page.charAt(0).toUpperCase() + page.slice(1)}
                                    </motion.a>
                                </Link>
                            ))}
                        </nav>
                        <motion.p
                            className="mt-12 text-center text-lg opacity-70 px-8 pt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            {quote}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}