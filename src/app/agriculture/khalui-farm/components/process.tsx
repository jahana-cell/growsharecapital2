'use client';

import { CheckCircle2, ChefHat, Droplets, Package, Scissors, Sun, ThermometerSnowflake } from "lucide-react";

export function Process() {
    return (
        <section id="process" className="py-24 md:py-40 px-6 bg-[#1A2E1A] text-[#E8E8E3] relative overflow-hidden">
            {/* Texture Overlay for organic feel */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20 md:mb-28">
                        <p className="text-[#D4AF37] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] mb-6 font-sans">Transparency</p>
                        <h2 className="font-serif text-3xl md:text-6xl text-white italic leading-tight">From Pasture to Pot.</h2>
                        <p className="text-neutral-400 font-light max-w-xl mx-auto text-sm md:text-lg leading-relaxed mt-6 font-sans">
                            We honor the life of the animal through a rigorous, ethical, and sanitary process.
                        </p>
                </div>

                <div className="relative">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#D4AF37]/20 -translate-x-1/2"></div>

                    <div className="space-y-16 md:space-y-24">
                        {[
                            { step: "01", title: "Pasture Raised", desc: "Animals roam freely on organic pastures, eating a natural diet.", icon: Sun },
                            { step: "02", title: "Zabiha Harvest", desc: "Ethical hand-slaughter following strict Zabiha guidelines for spiritual & physical purity.", icon: CheckCircle2 },
                            { step: "03", title: "Clean Processing", desc: "Immediate skin removal and cleaning to ensure hygiene standards.", icon: Droplets },
                            { step: "04", title: "Cold Chain", desc: "Rapid cooling and temperature-controlled storage to lock in freshness.", icon: ThermometerSnowflake },
                            { step: "05", title: "Artisan Cut", desc: "Expert butchery into specific cuts (whole, half, or custom).", icon: Scissors },
                            { step: "06", title: "Vacuum Seal", desc: "Professional packaging to maintain quality during transport.", icon: Package },
                            { step: "07", title: "Culinary Ready", desc: "Delivered ready for your pot, grill, or oven.", icon: ChefHat },
                        ].map((item, i) => (
                            <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1 text-center md:text-right">
                                    {/* Text Content - Alignment flips based on row */}
                                    <div className={i % 2 !== 0 ? 'md:text-left' : ''}>
                                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">{item.title}</h3>
                                            <p className="text-neutral-400 text-sm font-sans font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                                
                                {/* Center Icon Node */}
                                <div className="relative z-10 shrink-0 w-16 h-16 rounded-full bg-[#0B0C0B] border border-[#D4AF37] flex items-center justify-center shadow-lg shadow-black/40">
                                    <item.icon className="w-6 h-6 text-[#D4AF37]" />
                                    <span className="absolute -top-3 bg-[#1A2E1A] px-2 text-[9px] text-[#D4AF37] font-bold tracking-widest">{item.step}</span>
                                </div>

                                <div className="flex-1 hidden md:block"></div> {/* Spacer */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}