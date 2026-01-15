'use client';

import { CheckCircle2, ShoppingBasket } from 'lucide-react';
import { WHATSAPP_LINK } from '../config';

export function Cta() {
    return (
        <section id="csa" className="py-24 md:py-40 px-6 bg-[#141F14] text-[#E8E8E3]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
                <div className="flex-1 space-y-10">
                    <div className="inline-flex items-center gap-3 border border-[#D4AF37]/30 px-4 py-2 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Limited Availability</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">The Reserve Membership.</h2>
                    <p className="text-neutral-400 font-sans leading-loose font-light">
                        Secure your family&apos;s food sovereignty. Our CSA (Community Supported Agriculture) membership guarantees you a weekly share of our premium harvest—hand-selected, peak-ripeness produce, eggs, and priority access to livestock.
                    </p>
                    <ul className="space-y-4">
                        {["Weekly Seasonal Box", "Priority Lamb & Poultry", "Invites to Farm Dinners", "Direct Farmer Connection"].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-sm font-light">
                                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <a href={WHATSAPP_LINK} className="inline-block bg-[#D4AF37] text-[#141F14] px-10 py-5 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-500">
                        Apply for Membership
                    </a>
                </div>
                <div className="flex-1 w-full relative">
                    <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>
                    <div className="relative aspect-[4/5] bg-neutral-900 border border-white/10 p-8 flex flex-col justify-center items-center text-center">
                        <ShoppingBasket className="w-16 h-16 text-[#D4AF37] mb-8 opacity-80" />
                        <h3 className="font-serif text-2xl text-white mb-2">Weekly Harvest</h3>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-8">Starting at $45 / Week</p>
                        <p className="text-sm text-neutral-400 font-light italic leading-relaxed">&quot;The difference in taste is undeniable. It&apos;s not just food; it&apos;s a connection to the land we live on.&quot;</p>
                    </div>
                </div>
            </div>
        </section>
    );
}