'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Leaf } from 'lucide-react';
import { HERO_VIDEO_URL, LOGO_URL, LOGO_TEXT } from '../config';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
};

export function Hero() {
    return (
        <section className="relative min-h-[100svh] flex flex-col justify-end pt-32 pb-20 md:pb-32 px-6 md:px-12 border-b border-[#141F14]/10 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none bg-[#F4F4F2]">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 scale-105 saturate-0 contrast-125">
                    <source src={HERO_VIDEO_URL} type="video/mp4" />
                </video>
                {/* Light Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#F4F4F2] via-[#F4F4F2]/50 to-transparent" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col min-h-[100svh]">
                
                {/* BRAND HEADER - LOGO IN FRONT OF TITLE */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="pt-10 pb-20 md:pt-16 md:pb-24 flex justify-center items-center gap-6 md:gap-8"
                >
                    {/* Logo Image */}
                    <div className="relative w-16 h-16 md:w-24 md:h-24 shrink-0">
                        <Image 
                            src={LOGO_URL} 
                            alt="Khalui Farm Logo" 
                            fill
                            sizes="(max-width: 768px) 64px, 96px"
                            className="object-contain mix-blend-multiply filter sepia-[0.3] contrast-125" 
                        />
                    </div>
                    
                    {/* Title Text */}
                    <h1 className="font-serif text-3xl md:text-5xl tracking-[0.2em] text-[#141F14] border-b-2 border-[#D4AF37]/50 pb-2">
                        {LOGO_TEXT}
                    </h1>
                </motion.div>

                <div className="flex-grow" />

                {/* NAV & INTRO */}
                <div className="mb-10 text-left flex justify-between items-end">
                    <Link href="/" className="group inline-flex items-center gap-3 md:gap-4 text-[#141F14]/60 hover:text-[#141F14] transition-all duration-500">
                        <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#141F14]/10 bg-white/40 backdrop-blur-xl group-hover:border-[#D4AF37]/50 transition-all">
                            <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform text-[#141F14]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[6px] md:text-[7px] uppercase tracking-[0.4em] font-bold text-[#D4AF37] mb-0.5 font-sans">Return</span>
                            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-medium font-sans">GrowShare Home</span>
                        </div>
                    </Link>
                </div>

                <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-left">
                    <div className="flex items-center gap-4 mb-6 md:mb-8">
                        <div className="h-[1px] w-10 md:w-12 bg-[#D4AF37]"></div>
                        <span className="text-[#D4AF37] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] font-sans">
                            Memphis, Tennessee
                        </span>
                    </div>
                    
                    <h2 className="font-serif text-4xl md:text-8xl font-medium leading-[1.1] md:leading-[1] mb-8 tracking-tight text-[#141F14]">
                        USDA Certified <br/> 
                        <span className="italic text-[#D4AF37] font-light">Sovereignty.</span>
                    </h2>
                    <p className="text-neutral-600 text-base md:text-2xl font-light leading-relaxed max-w-xl mb-12 border-l border-[#D4AF37]/40 pl-6 md:pl-8 font-sans">
                        Reclaiming agriculture through regenerative practices. <strong>USDA Certified Organic produce</strong>, pasture-raised lamb, and heritage poultry raised with integrity in the heart of the city.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                        <a href="#produce" className="group inline-flex justify-center items-center gap-4 bg-[#141F14] text-white px-8 py-4 md:px-12 md:py-6 rounded-sm text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all duration-700 w-full sm:w-auto font-sans shadow-xl shadow-[#141F14]/10">
                            View Harvest
                            <Leaf className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#method" className="group inline-flex justify-center items-center gap-4 bg-transparent border border-[#141F14]/20 text-[#141F14] px-8 py-4 md:px-12 md:py-6 rounded-sm text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/50 transition-all duration-700 w-full sm:w-auto font-sans">
                            Our Standards
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}