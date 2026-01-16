'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  expansionStrategyItems, 
  coreValues, 
  investmentPhilosophy, 
  companyTimeline 
} from "@/lib/constants";
import LeadershipTeam from '@/components/leadership-team';

export default function AboutPage() {
    const [activeStrategy, setActiveStrategy] = useState(expansionStrategyItems[0]);

    return (
        <div className="bg-[#FDFCFB] min-h-screen text-truffle-dark selection:bg-gold-accent selection:text-white">
            
            {/* --- 1. HERO --- */}
            <section className="relative w-full h-[60vh] flex items-center justify-center bg-cream-base">
                <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-[11px] tracking-[0.4em] uppercase font-bold mb-6 text-stone-400">
                            Our Story
                        </p>
                        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
                            Purpose-Driven Private Equity.
                        </h1>
                        <p className="text-xl font-light text-stone-500 leading-relaxed max-w-2xl mx-auto">
                            An American investment platform building resilient communities through intelligent, ethical, and high-yield investments.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- 2. FOUNDING STORY --- */}
            <section id="founding-story" className="w-full border-y border-stone-200">
                <div className="grid lg:grid-cols-2 min-h-[80vh]">
                    <div className="relative bg-cream-dark order-2 lg:order-1 h-[50vh] lg:h-auto flex items-center justify-center p-12 overflow-hidden">
                         <div className="relative w-full h-full p-8 md:p-16">
                            <Image
                                src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FGrowshare%20Capital%20Transparent.png?alt=media&token=b53577e6-eb64-409d-aa7a-e9aa4fe01c49"
                                alt="GrowShare Monogram"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain"
                                priority
                            />
                         </div>
                    </div>
                    
                    <div className="flex items-center p-12 lg:p-24 order-1 lg:order-2 bg-[#FDFCFB]">
                        <div className="space-y-10">
                            <h2 className="text-[12px] tracking-[0.4em] uppercase text-stone-400">Origin</h2>
                            <h3 className="text-4xl md:text-5xl font-serif leading-tight text-truffle-dark">
                                Bridging the Gap.
                            </h3>
                            <div className="space-y-6 text-stone-500 font-light leading-relaxed text-lg">
                                <p>
                                    GrowShare Capital was founded by seasoned executives with decades of experience in finance, real estate, and corporate strategy. We identified a critical gap in the American market: traditional private equity often overlooks community impact and long-term resilience.
                                </p>
                                <p>
                                    We created GrowShare to bridge that gap. Our mission is to demonstrate that high-yield, principled investing is not only possible but is the most effective means of building prosperous, enduring American communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. THE ATELIER --- */}
            <section className="w-full py-24 md:py-32 bg-cream-base">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="mb-12 md:mb-20 max-w-2xl">
                        <h2 className="text-[12px] tracking-[0.4em] uppercase text-stone-400 mb-4">The Atelier</h2>
                        <p className="text-3xl md:text-4xl font-serif leading-tight mb-6 text-truffle-dark">
                            Dedication in Every Detail.
                        </p>
                        <p className="text-lg font-light text-stone-500 leading-relaxed">
                            From the boardroom to on-site project management, our team is deeply involved in every stage of the investment lifecycle.
                        </p>
                    </div>

                    <div className="hidden md:grid grid-cols-12 gap-4 h-[85vh]">
                        <div className="col-span-4 row-span-2 relative bg-cream-dark border border-stone-200 group rounded-sm overflow-hidden">
                            <Image 
                                src="https://i.imgur.com/E5sgG8k.jpeg" 
                                alt="Team Discussion" 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover p-4 grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="col-span-5 relative bg-cream-dark border border-stone-200 group rounded-sm overflow-hidden">
                            <Image 
                                src="https://i.imgur.com/zhT82As.jpeg" 
                                alt="Site Planning" 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover p-4 grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="col-span-3 relative bg-cream-dark border border-stone-200 group rounded-sm overflow-hidden">
                            <Image 
                                src="https://i.imgur.com/ltVswqz.jpeg" 
                                alt="Executive Focus" 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover p-4 grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="col-span-3 relative bg-cream-dark border border-stone-200 group rounded-sm overflow-hidden">
                            <Image 
                                src="https://i.imgur.com/NFJSDkA.jpeg" 
                                alt="Collaboration" 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover p-4 grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="col-span-5 relative bg-cream-dark border border-stone-200 group rounded-sm overflow-hidden">
                            <Image 
                                src="https://i.imgur.com/fqd0FsC.jpeg" 
                                alt="Strategic Meeting" 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover p-4 grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. CORE VALUES --- */}
            <section id="core-values" className="w-full py-24 md:py-32 bg-cream-dark">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-20">
                        <h2 className="text-[12px] tracking-[0.4em] uppercase text-stone-400 mb-4">Ethos</h2>
                        <p className="text-3xl md:text-4xl font-serif text-truffle-dark">Guiding Principles</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12">
                        {coreValues.map((value, index) => (
                            <div key={index} className="space-y-4 group">
                                <div className="text-4xl font-serif text-stone-300 group-hover:text-gold-accent transition-colors">
                                    0{index + 1}
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-truffle-dark">{value.title}</h3>
                                <p className="text-sm text-stone-500 leading-relaxed font-light">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 5. STRATEGY --- */}
            <section id="strategy" className="w-full py-24 md:py-32 bg-[#FDFCFB]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        <div className="lg:col-span-4 space-y-8">
                            <div>
                                <h2 className="text-[12px] tracking-[0.4em] uppercase text-stone-400 mb-4">Strategy</h2>
                                <p className="text-3xl md:text-4xl font-serif text-truffle-dark">The Framework</p>
                            </div>
                            <div className="space-y-2">
                                {expansionStrategyItems.map((item) => (
                                    <button
                                        key={item.slug}
                                        onClick={() => setActiveStrategy(item)}
                                        className={cn(
                                            "w-full text-left py-4 px-6 text-[10px] tracking-[0.2em] uppercase font-bold border-l-2 transition-all duration-300",
                                            activeStrategy.slug === item.slug
                                                ? "border-gold-accent text-truffle-dark bg-cream-dark"
                                                : "border-transparent text-stone-400 hover:text-truffle-dark hover:border-stone-300"
                                        )}
                                    >
                                        {item.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                             <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStrategy.slug}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-cream-dark p-12 h-full min-h-[400px] flex flex-col justify-center border border-stone-200 rounded-sm"
                                >
                                    <h3 className="text-2xl font-serif mb-6 text-truffle-dark">{activeStrategy.title}</h3>
                                    <p className="text-stone-500 font-light leading-relaxed text-lg">
                                        {activeStrategy.content}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 6. TIMELINE --- */}
            <section id="timeline" className="w-full py-24 md:py-32 bg-cream-base">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <div className="text-center mb-20">
                        <h2 className="text-[12px] tracking-[0.4em] uppercase text-stone-400 mb-4">Milestones</h2>
                        <p className="text-3xl md:text-4xl font-serif text-truffle-dark">Our Journey</p>
                    </div>

                    <div className="relative border-l-2 border-gold-accent ml-6 md:ml-1/2 space-y-16">
                        {companyTimeline.map((item, index) => (
                            <div key={index} className="relative pl-12">
                                <div className="absolute -left-[7px] top-2 w-3 h-3 bg-gold-accent rounded-full ring-4 ring-cream-base" />
                                <div className="space-y-2">
                                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-serif text-truffle-dark">{item.event}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 7. PHILOSOPHY --- */}
            <section id="philosophy" className="w-full py-24 md:py-32 bg-truffle-dark text-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-20">
                        <h2 className="text-[12px] tracking-[0.4em] uppercase text-stone-500 mb-4">Philosophy</h2>
                        <p className="text-3xl md:text-4xl font-serif">Investment Criteria</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                         {investmentPhilosophy.map(({ icon: Icon, title, description }, index) => (
                            <div key={index} className="space-y-4">
                                {Icon && <Icon className="h-8 w-8 stroke-[1px] text-gold-accent mb-4" />}
                                <h3 className="text-lg font-bold uppercase tracking-widest text-white">{title}</h3>
                                <p className="text-sm text-stone-400 leading-relaxed font-light">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <LeadershipTeam />

            {/* --- 8. CTA --- */}
            <section className="py-32 text-center bg-cream-dark">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif mb-8 text-truffle-dark">Ready to Invest?</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto mb-10 font-light">
                        Join us in building a more resilient and prosperous future. Explore our investment opportunities or get in touch to discuss a strategic partnership.
                    </p>
                    <Link href="/contact" className="inline-block text-[11px] tracking-[0.3em] uppercase font-bold border-b-2 border-gold-accent pb-2 text-truffle-dark hover:opacity-70 transition-opacity">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
