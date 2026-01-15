'use client';

import { ArrowRight, Calendar, ShoppingBasket } from "lucide-react";

export function LeadMagnets() {
    return (
        <section className="py-24 md:py-40 px-6 bg-[#F4F4F2]">
            <div className="max-w-4xl mx-auto bg-white border border-[#141F14]/5 p-8 md:p-20 rounded-sm relative overflow-hidden shadow-lg shadow-[#141F14]/5">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>

                <div className="relative z-10 text-center">
                    <div className="mb-16">
                        <h2 className="font-serif text-3xl md:text-6xl text-[#141F14] mb-6 leading-tight">Seasonal Availability.</h2>
                        <p className="text-neutral-500 font-light max-w-lg mx-auto text-sm md:text-base leading-loose font-sans">
                            Don't miss out on peak harvest. Download our seasonal guide to plan your menu or family meals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div className="bg-[#F9F9F7] border border-[#141F14]/5 p-8 flex flex-col gap-6 hover:border-[#D4AF37]/40 transition-all duration-500 group cursor-pointer">
                            <div className="flex justify-between items-start">
                                <Calendar className="w-6 h-6 text-[#D4AF37] opacity-80" />
                                <span className="text-[8px] bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded-sm uppercase tracking-widest font-bold font-sans">PDF</span>
                            </div>
                            <div>
                                <h4 className="text-[#141F14] font-serif text-xl mb-2 group-hover:text-[#D4AF37] transition-colors">Harvest Calendar</h4>
                                <button className="text-[9px] uppercase tracking-[0.2em] text-[#141F14] flex items-center gap-3 group-hover:gap-5 transition-all font-bold border-b border-[#141F14]/10 pb-2 w-fit">
                                    Download <ArrowRight size={12} className="text-[#D4AF37]"/>
                                </button>
                            </div>
                        </div>
                        <div className="bg-[#F9F9F7] border border-[#141F14]/5 p-8 flex flex-col gap-6 hover:border-[#D4AF37]/40 transition-all duration-500 group cursor-pointer">
                            <div className="flex justify-between items-start">
                                <ShoppingBasket className="w-6 h-6 text-[#D4AF37] opacity-80" />
                                <span className="text-[8px] bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded-sm uppercase tracking-widest font-bold font-sans">CATALOG</span>
                            </div>
                            <div>
                                <h4 className="text-[#141F14] font-serif text-xl mb-2 group-hover:text-[#D4AF37] transition-colors">Wholesale Meat</h4>
                                <button className="text-[9px] uppercase tracking-[0.2em] text-[#141F14] flex items-center gap-3 group-hover:gap-5 transition-all font-bold border-b border-[#141F14]/10 pb-2 w-fit">
                                    Request Access <ArrowRight size={12} className="text-[#D4AF37]"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}