'use client';

import { AlertCircle, CheckCircle2, Leaf, MapPin, Sun, XCircle } from "lucide-react";

export function Standard() {
    return (
        <section id="method" className="py-24 md:py-40 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 md:mb-24 px-4">
                    <h2 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500 mb-4 md:mb-6 font-sans">The Standard</h2>
                    <h3 className="font-serif text-3xl md:text-6xl text-[#141F14] italic leading-tight">Taste The Truth.</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative text-left">
                    <div className="p-8 md:p-16 border border-neutral-200 rounded-sm bg-[#F9F9F7] relative overflow-hidden group">
                        <h4 className="text-xl md:text-2xl font-serif text-neutral-500 mb-8 md:mb-12 flex items-center gap-3 md:gap-4">
                            <XCircle className="text-red-800/50 w-5 h-5 md:w-6 md:h-6" /> Industrial Ag
                        </h4>
                        <ul className="space-y-6 md:space-y-10 relative z-10 font-sans text-left text-neutral-600">
                            <li className="flex gap-4 md:gap-6">
                                <AlertCircle className="shrink-0 w-5 h-5 text-red-800/30" />
                                <p className="text-xs md:text-base leading-relaxed font-light">Harvested weeks early for transport, losing vital nutrients.</p>
                            </li>
                            <li className="flex gap-4 md:gap-6">
                                <AlertCircle className="shrink-0 w-5 h-5 text-red-800/30" />
                                <p className="text-xs md:text-base leading-relaxed font-light">Heavy use of synthetic pesticides and herbicides.</p>
                            </li>
                            <li className="flex gap-4 md:gap-6">
                                <AlertCircle className="shrink-0 w-5 h-5 text-red-800/30" />
                                <p className="text-xs md:text-base leading-relaxed font-light">Average travel distance: 1,500 miles.</p>
                            </li>
                            <li className="flex gap-4 md:gap-6">
                                <AlertCircle className="shrink-0 w-5 h-5 text-red-800/30" />
                                <p className="text-xs md:text-base leading-relaxed font-light">Animals confined in high-stress feedlots (CAFOs).</p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-8 md:p-16 border border-[#D4AF37]/20 rounded-sm bg-[#141F14] text-white relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] text-left">
                        <h4 className="text-2xl font-serif text-white mb-8 md:mb-12 flex items-center gap-3 md:gap-4 font-bold uppercase tracking-tight text-left">
                            <CheckCircle2 className="text-[#D4AF37] w-5 h-5 md:w-6 md:h-6" /> Khalui Method
                        </h4>
                        <ul className="space-y-6 md:space-y-10 relative z-10 font-sans text-left text-white/90">
                            <li className="flex gap-4 md:gap-6">
                                <Sun className="shrink-0 w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]/80" />
                                <div>
                                    <strong className="block text-[#E8E8E3] font-serif text-base md:text-lg mb-1">Peak Ripeness</strong>
                                    <p className="text-xs md:text-sm leading-relaxed font-light text-neutral-400">Harvested within 24 hours of delivery for maximum flavor.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 md:gap-6">
                                <Leaf className="shrink-0 w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]/80" />
                                <div>
                                    <strong className="block text-[#E8E8E3] font-serif text-base md:text-lg mb-1">Beyond Organic</strong>
                                    <p className="text-xs md:text-sm leading-relaxed font-light text-neutral-400">Regenerative soil practices that sequester carbon.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 md:gap-6">
                                <MapPin className="shrink-0 w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]/80" />
                                <div>
                                    <strong className="block text-[#E8E8E3] font-serif text-base md:text-lg mb-1">Zero Mile</strong>
                                    <p className="text-xs md:text-sm leading-relaxed font-light text-neutral-400">Grown right here in Memphis. Farm to fork in minutes.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 md:gap-6">
                                <CheckCircle2 className="shrink-0 w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]/80" />
                                <div>
                                    <strong className="block text-[#E8E8E3] font-serif text-base md:text-lg mb-1">Ethical Livestock</strong>
                                    <p className="text-xs md:text-sm leading-relaxed font-light text-neutral-400">Free-range Sheep, Lamb, and Chicken on rotation.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}