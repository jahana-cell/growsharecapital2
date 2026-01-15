'use client';

import React from 'react';
import { ArrowRight, DollarSign, HelpCircle, BookOpen, CheckCircle2, MapPin, Users, Home, Sprout, Building2, Globe } from "lucide-react";
import Link from 'next/link';

export function AgricultureNav() {
  const navItems = [
    { name: 'Operation Plan', href: '/agriculture/alabama-livestock/operation-plan', icon: BookOpen },
    { name: 'Project Q&A', href: '/agriculture/alabama-livestock/faq', icon: HelpCircle },
    { name: 'Invest Now', href: '/agriculture/alabama-livestock/payment', icon: DollarSign },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/agriculture/alabama-livestock" className="text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <Sprout className="w-5 h-5" />
            Alabama Livestock
        </Link>
        <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
                <Link 
                    key={item.name} 
                    href={item.href}
                    className="text-[11px] tracking-[0.1em] uppercase font-medium text-neutral-600 hover:text-black transition-colors flex items-center gap-2"
                >
                    <item.icon className="w-3.5 h-3.5" />
                    {item.name}
                </Link>
            ))}
        </div>
         <Link href="/" className="md:hidden">
            <Home className="w-5 h-5" />
         </Link>
      </div>
    </nav>
  );
}
