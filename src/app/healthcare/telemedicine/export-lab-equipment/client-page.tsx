'use client';

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, Droplets, Globe, TrendingUp, 
  Factory, ShieldCheck, Container, FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// --- ELEVATED COPY & DATA ---
const marketDrivers = [
    {
        icon: Factory,
        title: "Industrial Compliance",
        description: "Bangladesh's textile and pharmaceutical sectors face immense pressure to meet international wastewater discharge standards (Zero Discharge), driving demand for precision testing."
    },
    {
        icon: ShieldCheck,
        title: "Regulatory Rigor",
        description: "New environmental policies from the Department of Environment (DoE) mandate real-time water quality monitoring for all industrial units."
    },
    {
        icon: TrendingUp,
        title: "Market Gap",
        description: "While demand is surging, the local supply chain for high-end instrumentation (like Hach) remains fragmented and inefficient, creating a prime arbitrage opportunity."
    },
];

const operationalModel = [
    {
        icon: Globe,
        title: "Strategic Sourcing",
        subtitle: "Procurement",
        description: "Direct procurement of Hach instrumentation and reagents from US/EU hubs to ensure authenticity and preferred pricing."
    },
    {
        icon: Container,
        title: "Lean Logistics",
        subtitle: "Supply Chain",
        description: "A streamlined import model utilizing bonded warehouse facilities to minimize overhead while ensuring just-in-time delivery for critical reagents."
    },
    {
        icon: FileText,
        title: "Technical Service",
        subtitle: "Retention",
        description: "Differentiation through after-sales support and calibration services, creating a recurring revenue moat beyond hardware sales."
    }
];

// --- ANIMATION COMPONENT ---
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function ExportLabClientPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    
    // Parallax effect
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    return (
        <div ref={containerRef} className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            
            {/* --- HERO SECTION --- */}
            <header className="relative h-[90vh] w-full overflow-hidden flex items-end pb-24">
                <motion.div style={{ y }} className="absolute inset-0 z-0 h-full w-full">
                    <Image
                        src="https://images.unsplash.com/photo-1581093588401-fbb073d78124?q=80&w=2070"
                        alt="Water Quality Analysis"
                        fill
                        sizes="100vw"
                        className="object-cover scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </motion.div>

                <div className="container mx-auto px-6 md:px-12 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="max-w-5xl"
                    >
                        <Link href="/healthcare/telemedicine" className="group inline-flex items-center gap-3 text-white/70 text-[10px] tracking-[0.3em] uppercase font-bold mb-10 hover:text-white transition-colors">
                            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> 
                            Return to Strategy
                        </Link>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tight">
                            Precision for a <br/>
                            <span className="italic text-white/90">Thirsty World.</span>
                        </h1>
                        <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/80 font-light leading-relaxed tracking-wide">
                            Hach Analytics Bangladesh: A strategic initiative to modernize water quality infrastructure in high-growth industrial sectors.
                        </p>
                    </motion.div>
                </div>
            </header>
            
            <main>
                
                {/* --- INTRO & THESIS --- */}
                <section className="py-24 md:py-32">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="grid lg:grid-cols-12 gap-12 items-start">
                             <div className="lg:col-span-4 sticky top-24">
                                <FadeIn>
                                    <h2 className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-bold mb-6 flex items-center gap-3">
                                        <span className="w-6 h-[1px] bg-primary"></span>
                                        Executive Summary
                                    </h2>
                                    <h3 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">The Water Intelligence Gap.</h3>
                                </FadeIn>
                             </div>
                             <div className="lg:col-span-8">
                                <FadeIn delay={0.2}>
                                    <p className="text-xl md:text-3xl font-serif leading-relaxed text-foreground/90">
                                        Bangladesh is undergoing an industrial renaissance, yet the infrastructure for environmental monitoring has not kept pace with manufacturing growth.
                                    </p>
                                    <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed">
                                        This venture establishes a specialized export and distribution channel for <strong>Hach</strong>—the global gold standard in water analysis. By bridging the gap between US/EU precision engineering and Bengali industrial demand, we address a critical environmental need while capitalizing on a high-margin, recurring-revenue market.
                                    </p>
                                    
                                    <div className="mt-16 pl-8 border-l border-primary/40">
                                        <p className="text-lg md:text-xl font-serif italic text-foreground/80 leading-relaxed">
                                            &quot;Clean water is the next oil. As regulations tighten, the data derived from water testing becomes as valuable as the water itself.&quot;
                                        </p>
                                    </div>
                                </FadeIn>
                             </div>
                        </div>
                    </div>
                </section>

                <Separator className="opacity-30 max-w-[90vw] mx-auto" />

                {/* --- MARKET DRIVERS --- */}
                <section className="py-24 md:py-32 bg-background">
                    <div className="container mx-auto px-6 md:px-12">
                        <FadeIn>
                            <div className="text-center max-w-3xl mx-auto mb-24">
                                <h2 className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-bold mb-6">Market Opportunity</h2>
                                <h3 className="text-3xl md:text-5xl font-serif text-foreground">Why Bangladesh? Why Now?</h3>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                            {marketDrivers.map((item, i) => (
                                <FadeIn key={i} delay={i * 0.15}>
                                    <div className="group text-center">
                                        <div className="mx-auto w-16 h-16 rounded-full border border-border/50 flex items-center justify-center mb-8 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-700">
                                            <item.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors stroke-[1px]"/>
                                        </div>
                                        <h4 className="font-serif text-2xl mb-4 text-foreground">{item.title}</h4>
                                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">{item.description}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* --- OPERATIONAL MODEL (Dark Mode) --- */}
                <section className="py-24 md:py-32 bg-foreground text-background">
                    <div className="container mx-auto px-6 md:px-12">
                         <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
                             <FadeIn>
                                 <h2 className="text-[10px] tracking-[0.4em] uppercase text-background/60 font-bold mb-6">Business Model</h2>
                                 <h3 className="text-3xl md:text-5xl font-serif text-background">Operational Blueprint</h3>
                             </FadeIn>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {operationalModel.map((item, i) => (
                                <FadeIn key={i} delay={i * 0.2}>
                                    <div className="h-full p-10 border border-white/5 hover:border-white/20 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.05] flex flex-col group">
                                        <div className="flex justify-between items-start mb-10">
                                            <item.icon className="w-8 h-8 text-background/80 group-hover:text-white transition-colors stroke-[1px]"/>
                                            <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-background/30 group-hover:text-background/50 transition-colors">{item.subtitle}</span>
                                        </div>
                                        <h4 className="font-serif text-2xl mb-4 text-background">{item.title}</h4>
                                        <p className="text-sm text-background/70 leading-relaxed font-light mt-auto">{item.description}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- THE ASK / CTA --- */}
                <section className="py-20 md:py-32 bg-muted/10">
                    <div className="container mx-auto px-6 md:px-12">
                        <FadeIn>
                            <div className="bg-background border border-border/80 p-12 md:p-24 text-center max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary/60" />
                                
                                <Droplets className="w-10 h-10 text-foreground mx-auto mb-10 stroke-[1px]"/>
                                <h3 className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-bold mb-8">Status: Development</h3>
                                <h2 className="text-4xl md:text-6xl font-serif mb-10 text-foreground tracking-tight">Request Full Prospectus</h2>
                                
                                <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-14 leading-relaxed">
                                    We are currently finalizing the supply chain logistics and partnership agreements. Accredited investors and industry partners are invited to review the detailed business plan.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Button asChild size="lg" className="rounded-none px-12 py-8 text-xs uppercase tracking-[0.25em] font-bold hover:bg-primary/90 transition-all duration-300">
                                        <Link href="/contact?subject=Hach Analytics Business Plan Request">
                                            Request Access
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="rounded-none px-12 py-8 text-xs uppercase tracking-[0.25em] font-bold border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300">
                                        <Link href="/healthcare/telemedicine">
                                            Back to Strategy
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

            </main>
        </div>
    );
}