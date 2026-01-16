'use client';

import Link from 'next/link';
import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { navLinks } from '@/lib/constants';
import MobileMenu from './mobile-menu';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-[#FDFCFB]/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-8 transition-transform duration-500 ease-out hover:rotate-12">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FGrowshare%20Capital%20Transparent.png?alt=media&token=b53577e6-eb64-409d-aa7a-e9aa4fe01c49"
              alt="GrowShare Capital Logo"
              fill
              sizes="32px"
              className="object-contain"
            />
          </div>
          <span className="hidden font-serif text-xl font-medium tracking-wider text-stone-900 sm:block">
            GrowShare Capital
          </span>
        </Link>

        <nav className="hidden">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-600 transition-colors duration-300 hover:text-[#D4AF37]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <div className="hidden">
                <Link href="/contact" className="rounded-full border border-stone-300 px-6 py-2 text-xs font-semibold text-stone-700 transition-all duration-300 hover:bg-stone-900 hover:text-white hover:border-stone-900">
                    Contact
                </Link>
            </div>
            <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
