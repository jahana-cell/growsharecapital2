'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { navLinks } from '@/lib/constants';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div>
      <button onClick={toggleMenu} className="p-2 z-50 relative">
        <Menu className="h-6 w-6 text-stone-900" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-[#FDFCFB] z-40 p-8 flex flex-col justify-between"
          >
            <div>
                <div className="flex justify-between items-center mb-16">
                    <Link href="/" onClick={toggleMenu} className="font-bold text-lg tracking-wider">
                        GSC
                    </Link>
                    <button onClick={toggleMenu} className="p-2">
                        <X className="h-6 w-6 text-stone-900" />
                    </button>
                </div>

                <nav className="flex flex-col items-center text-center space-y-6">
                {navLinks.map((link, i) => (
                    <motion.div key={link.href} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                        <Link href={link.href} onClick={toggleMenu} className="font-serif text-4xl text-stone-800 hover:text-[#D4AF37] transition-colors duration-300">
                            {link.label}
                        </Link>
                    </motion.div>
                ))}
                </nav>
            </div>

            <motion.div custom={navLinks.length} variants={linkVariants} initial="hidden" animate="visible" className="text-center">
                 <Link href="/contact" onClick={toggleMenu} className="font-sans text-sm tracking-widest uppercase text-stone-500 hover:text-[#D4AF37]">
                    Contact Us
                </Link>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
