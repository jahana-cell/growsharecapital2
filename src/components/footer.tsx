'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { navLinks } from '@/lib/constants';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];

  return (
    <footer className="bg-truffle-dark text-cream-base font-sans">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          
          {/* Column 1: Logo and Ethos */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="relative h-10 w-10">
                    <Image
                    src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FGrowshare%20Capital%20Transparent.png?alt=media&token=b53577e6-eb64-409d-aa7a-e9aa4fe01c49"
                    alt="GrowShare Capital Logo"
                    fill
                    sizes="40px"
                    className="object-contain"
                    />
                </div>
                <span className="font-serif text-2xl font-medium tracking-wider text-white">
                    GrowShare Capital
                </span>
            </Link>
            <p className="text-sm text-stone-400 font-light max-w-sm leading-relaxed">
              Investing in the permanent assets that underpin civilization: real estate, agriculture, and healthcare.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-stone-300 mb-6">Menu</h3>
            <nav className="space-y-4">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="block text-stone-400 hover:text-gold-accent transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Social */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-stone-300 mb-6">Connect</h3>
            <nav className="flex gap-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-gold-accent transition-colors duration-300">
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Newsletter/Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-stone-300 mb-6">Stay Informed</h3>
            <p className="text-stone-400 text-sm mb-4 font-light">Subscribe to our investor journal.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-stone-800/50 border border-stone-700 text-sm text-white placeholder-stone-500 px-4 py-2 w-full focus:ring-1 focus:ring-gold-accent focus:outline-none transition-all duration-300 rounded-l-md"
              />
              <button type="submit" className="bg-gold-accent px-4 py-2 text-truffle-dark font-bold text-sm rounded-r-md hover:bg-white transition-colors duration-300">
                Sign Up
              </button>
            </form>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-stone-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GrowShare Capital. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map(link => (
              <Link key={link.name} href={link.href} className="text-stone-500 hover:text-white transition-colors duration-300">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
