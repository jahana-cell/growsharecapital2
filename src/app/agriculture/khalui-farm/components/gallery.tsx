'use client';

import { GALLERY_IMAGES, WHATSAPP_LINK } from '../config';

export function Gallery() {
    return (
        <section id="produce" className="py-24 md:py-40 px-6 bg-white border-t border-[#141F14]/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-lg">
                        <h2 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-6">Visual Chronicle</h2>
                        <h3 className="font-serif text-3xl md:text-5xl text-[#141F14] leading-tight">Authentic Cultivation.</h3>
                    </div>
                    <div className="flex gap-4">
                        <a href={WHATSAPP_LINK} className="text-[10px] uppercase tracking-[0.2em] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors text-[#141F14]">Request Catalog</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {GALLERY_IMAGES.map((img, i) => (
                        <div key={i} className={`relative aspect-[4/5] group overflow-hidden bg-neutral-100 ${i % 2 !== 0 ? 'md:mt-12' : ''}`}>
                            <img 
                                src={img.src} 
                                alt={img.alt} 
                                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-[#141F14]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            <div className="absolute bottom-6 left-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="bg-[#141F14]/90 backdrop-blur-md px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white border border-white/10">
                                    {img.caption}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}