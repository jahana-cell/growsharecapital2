'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Sun, Droplets, MapPin 
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { initiatives, impactStats } from "@/lib/constants";

export default function AgricultureClientPage() {
  return (
    <div className="bg-cream-base min-h-screen text-truffle-dark selection:bg-gold-accent selection:text-white">
      
      {/* --- 1. CINEMATIC HERO --- */}
      <section className="relative w-full h-[85vh] flex items-end pb-12 md:pb-20">
        <Image 
           src="https://images.pexels.com/photos/3013440/pexels-photo-3013440.jpeg" 
           alt="Agriculture Hero" 
           fill
           sizes="100vw"
           className="z-0 object-cover"
           priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-5xl"
          >
            <p className="text-white text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-bold mb-4 md:mb-6">
              Division: Agriculture
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.9]">
              Cultivating<br />
              The Future of America.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THESIS --- */}
      <section className="w-full py-20 md:py-32 bg-[#FDFCFB]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
             <div>
                <h2 className="text-[12px] tracking-[0.4em] uppercase text-stone-400 mb-6">Our Mission</h2>
                <p className="text-3xl md:text-4xl font-serif leading-tight text-truffle-dark">
                  High-yield investments in America&apos;s food sovereignty.
                </p>
             </div>
             <div>
                <p className="text-lg font-light text-stone-500 leading-relaxed">
                  We partner with American farmers and entrepreneurs to build resilient, profitable food systems. By connecting investors directly to the source, we create sustainable returns while ensuring food security for our communities.
                </p>
                <div className="mt-8 pt-8 border-t border-stone-200">
                   <Link href="/contact" className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-bold text-truffle-dark hover:text-gold-accent transition-colors">
                      Join the Movement <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 3. FEATURED INVESTMENT (Livestock) --- */}
      <section className="w-full border-y border-stone-200">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center p-8 md:p-12 lg:p-24 bg-cream-dark order-2 lg:order-1">
            <div className="space-y-6 md:space-y-8">
              <span className="inline-block px-3 py-1 border border-gold-accent text-gold-accent text-[10px] tracking-[0.2em] uppercase font-bold">
                Featured Investment
              </span>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight text-truffle-dark">
                Community Livestock Program
              </h2>
              <p className="text-stone-500 font-light leading-relaxed max-w-md">
                Our asset-backed investment program connects investors directly with sustainable livestock farming, offering tangible returns and a stake in a resilient American food economy.
              </p>
              
              <div className="pt-6">
                <Link 
                     href="/agriculture/livestock" 
                    className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-bold border-b border-truffle-dark pb-1 text-truffle-dark hover:text-gold-accent transition-colors"
                >
                    View Opportunity <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-[60vh] lg:h-auto bg-stone-200 order-1 lg:order-2">
            <Image 
               src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1600" 
               alt="Livestock"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- 4. KHALUI FARM SPOTLIGHT --- */}
      <section className="w-full py-20 md:py-32 bg-[#FDFCFB]" id="khalui-farm">
        <div className="container mx-auto px-6 md:px-12">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 pb-8 border-b border-stone-200">
                <div>
                    <h2 className="text-[12px] tracking-[0.4em] uppercase text-stone-400 mb-4">Flagship Operation</h2>
                    <h3 className="text-4xl md:text-6xl font-serif text-truffle-dark">Khalui Farm</h3>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <MapPin className="h-4 w-4 text-stone-400" />
                    <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-stone-500">Memphis, Tennessee</span>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                
                <div className="lg:col-span-5 space-y-8 md:space-y-12 order-2 lg:order-1">
                    <div className="space-y-6">
                        <p className="text-xl font-light text-truffle-dark leading-relaxed">
                            Khalui Farm is the cornerstone of our agricultural services, pioneering regenerative urban farming in America.
                        </p>
                        <div className="flex items-center gap-4 bg-emerald-50 text-emerald-800 p-4 rounded-md border border-emerald-200">
                           <ShieldCheck className="h-8 w-8 flex-shrink-0 text-emerald-600" />
                           <p className="text-sm font-semibold">
                              A fully USDA Certified Organic operation, offering farm training, CSA memberships, and wholesale produce.
                           </p>
                        </div>
                        <p className="text-stone-500 font-light leading-relaxed">
                            Situated in Memphis, Khalui Farm operates as an educational hub and a proof-of-concept for scalable, sustainable urban agriculture, now part of our Services division.
                        </p>
                    </div>

                    <Link href="/khaluifarm" className="inline-flex items-center gap-3 px-8 py-4 bg-truffle-dark text-white hover:bg-stone-700 transition-all text-[10px] tracking-[0.3em] uppercase w-full md:w-auto justify-center md:justify-start rounded-sm">
                        Explore Farm Services <ArrowRight className="h-3 w-3" />
                    </Link>
                </div>

                <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] bg-stone-100 overflow-hidden order-1 lg:order-2 rounded-sm shadow-lg shadow-stone-200/50">
                     <Image 
                        src="https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?q=80&w=1200"
                        alt="Khalui Farm Operations"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                    <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-6 max-w-xs border border-white/50 rounded-sm">
                        <p className="text-[9px] tracking-[0.2em] uppercase text-stone-500 mb-2">Production</p>
                        <p className="text-2xl font-serif text-truffle-dark">Seasonal Organic Produce & Herbs</p>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* --- 5. ALABAMA PROJECT --- */}
      <section className="w-full py-20 md:py-32 bg-truffle-dark text-white">
        <div className="container mx-auto px-6 md:px-12">
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-[4/5] bg-stone-800 order-1 h-[60vh] lg:h-auto rounded-sm overflow-hidden">
                 <Image 
                    src="https://images.unsplash.com/photo-1589922585952-b31ed31b2c92?q=80&w=1080" 
                    alt="Alabama Project"
                   fill
                   sizes="(max-width: 1024px) 100vw, 50vw"
                   className="object-cover opacity-80"
                 />
              </div>
              <div className="order-2">
                 <h2 className="text-[12px] tracking-[0.4em] uppercase text-stone-500 mb-6">Expansion</h2>
                 <h3 className="text-4xl md:text-5xl font-serif mb-8 text-white">Alabama Livestock & Co-Housing</h3>
                 <p className="text-stone-400 font-light leading-relaxed mb-10 text-lg">
                   A foundational American project in Birmingham, AL combining poultry operations with resilient community housing. This initiative represents the intersection of food security and living security.
                 </p>
                 <Link href="/agriculture/alabama-livestock" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 bg-white/10 hover:bg-white hover:text-truffle-dark transition-all text-[10px] tracking-[0.3em] uppercase rounded-sm">
                     Invest Now <ArrowRight className="h-3 w-3" />
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* --- 6. SAVOIR-FAIRE --- */}
      <section className="w-full py-20 md:py-32 bg-[#FDFCFB]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
             <div className="lg:col-span-5 relative aspect-[3/4] bg-stone-100 order-1 lg:order-1 rounded-sm overflow-hidden shadow-lg shadow-stone-200/50">
                <Image 
                    src="https://picsum.photos/seed/101/800/1000" // Replace with real image
                    alt="Brittney Sessoms"
                   fill
                   sizes="(max-width: 1024px) 100vw, 50vw"
                   className="object-cover"
                />
             </div>
             <div className="lg:col-span-7 lg:pl-12 order-2 lg:order-2">
                <h2 className="text-[12px] tracking-[0.4em] uppercase text-stone-400 mb-6">Savoir-Faire</h2>
                <h3 className="text-4xl md:text-5xl font-serif mb-8 text-truffle-dark">The Hands That Feed America</h3>
                <p className="text-stone-500 font-light leading-relaxed mb-6">
                   We believe that strong partnerships are the bedrock of a resilient food system. We highlight the expertise of local leaders who turn our investments into nourishment.
                </p>
                <div className="bg-cream-dark p-8 border-l-2 border-gold-accent rounded-sm">
                   <h4 className="text-xl font-serif mb-1 text-truffle-dark">Brittney Sessoms</h4>
                   <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Founder, Charlotte & Pickens</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 7. OTHER INITIATIVES --- */}
      <section className="w-full py-20 md:py-32 border-t border-stone-200 bg-cream-base">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12 md:mb-16 pb-6">
             <h2 className="text-3xl md:text-4xl font-serif text-truffle-dark">More Initiatives</h2>
             <span className="hidden md:block text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">Portfolio</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {initiatives.map((item, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-stone-200 mb-6 rounded-sm shadow-md shadow-stone-200/50 group-hover:shadow-lg group-hover:shadow-stone-300/50 transition-shadow duration-500">
                  {item.image && (
                    <Image 
                         src={item.image} 
                         alt={item.title} 
                         fill 
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                     />
                  )}
                  <div className="absolute top-4 left-4">
                     <span className="bg-white/90 backdrop-blur text-[9px] tracking-[0.2em] uppercase px-3 py-2 font-bold text-truffle-dark rounded-sm">
                        {item.category}
                     </span>
                  </div>
                </div>
                <div className="space-y-3 px-2 md:px-0">
                   <h3 className="text-xl font-serif text-truffle-dark group-hover:text-gold-accent transition-colors">{item.title}</h3>
                   <p className="text-xs text-stone-500 font-light leading-relaxed line-clamp-2">
                     {item.description}
                   </p>
                   {item.link && (
                       <Link href={item.link} className="text-[10px] tracking-[0.2em] uppercase font-bold border-b border-transparent group-hover:border-gold-accent transition-colors inline-block pb-1 mt-2 text-truffle-dark">
                         Explore
                       </Link>
                   )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. IMPACT & CTA --- */}
      <section className="w-full py-20 bg-truffle-dark text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
            {impactStats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-4xl md:text-5xl font-serif text-gold-accent">{stat.target}</p>
                <p className="text-[9px] tracking-[0.25em] uppercase text-stone-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 text-center bg-cream-base">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-truffle-dark">Invest in American Food Sovereignty</h2>
          <Link href="/contact?subject=Agriculture Inquiry" className="inline-block text-[11px] tracking-[0.3em] uppercase font-bold border-b-2 border-gold-accent pb-2 text-truffle-dark hover:opacity-70 transition-opacity">
            Contact Agriculture
          </Link>
        </div>
      </section>
    </div>
  );
}
