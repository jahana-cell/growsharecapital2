'use client';

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, Baby, TrendingUp, ArrowRight,
  HeartHandshake, BrainCircuit, Users, Activity, Clock, 
  Target, CheckCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// --- ELEVATED COPY & DATA ---
const valueProps = [
    {
        icon: TrendingUp,
        title: "Market Velocity",
        description: "The global FemTech sector is projected to surpass $1.1 Trillion by 2027, with maternal health serving as a critical, high-engagement growth engine."
    },
    {
        icon: HeartHandshake,
        title: "Societal Imperative",
        description: "Our capital allocation directly addresses systemic care gaps, aiming to significantly reduce maternal mortality rates and improve neonatal outcomes globally."
    },
    {
        icon: BrainCircuit,
        title: "Predictive Precision",
        description: "Leveraging vast datasets to transition care from reactive to preventative, utilizing AI to predict complications before they become critical."
    },
];

const investmentAreas = [
    {
        icon: Activity,
        title: "Distributed Diagnostics",
        subtitle: "Monitoring",
        description: "Clinical-grade wearables and at-home diagnostic ecosystems allowing for continuous, real-time tracking of maternal and fetal vitals."
    },
    {
        icon: Users,
        title: "Virtual Care Continuum",
        subtitle: "Access",
        description: "On-demand, specialized telehealth infrastructure connecting patients with lactation consultants, doulas, and perinatal mental health experts."
    },
    {
        icon: Clock,
        title: "Computational Obstetrics",
        subtitle: "Intelligence",
        description: "Algorithmic risk stratification tools capable of predicting pre-eclampsia, pre-term labor, and hemorrhage risks for early intervention."
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

export default function MaternalHealthClientPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    
    // Parallax effect for the hero image
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    return (
        <div ref={containerRef} className="bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            
            {/* --- HERO SECTION --- */}
            <header className="relative h-[90vh] w-full overflow-hidden flex items-end pb-24">
                <motion.div style={{ y }} className="absolute inset-0 z-0 h-full w-full">
                    <Image
                        src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=2070"
                        alt="Maternal Health Innovation"
                        fill
                        sizes="100vw"
                        className="object-cover scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </motion.div>

                <div className="container mx-auto px-6 md:px-12 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="max-w-5xl"
                    >
                        <Link href="/healthcare" className="group inline-flex items-center gap-3 text-white/70 text-[10px] tracking-[0.3em] uppercase font-bold mb-10 hover:text-white transition-colors">
                            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> 
                            Return to Healthcare
                        </Link>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tight">
                            The Genesis of <br/>
                            <span className="italic text-white/90">Care.</span>
                        </h1>
                        <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/80 font-light leading-relaxed tracking-wide">
                            A GrowShare Capital thesis on high-growth technology for prenatal, delivery, and postnatal resilience.
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
                                        The Thesis
                                    </h2>
                                    <h3 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">The Maternal Health Revolution.</h3>
                                </FadeIn>
                             </div>
                             <div className="lg:col-span-8">
                                <FadeIn delay={0.2}>
                                    <p className="text-xl md:text-3xl font-serif leading-relaxed text-foreground/90">
                                        The journey of motherhood is one of life&apos;s most critical periods, yet it remains significantly underserved by modern technology infrastructure.
                                    </p>
                                    <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed">
                                        GrowShare Capital identifies Maternal Health Technology not merely as a niche, but as a cornerstone of global health resilience. This sector represents a massive market opportunity characterized by legacy inefficiencies, urgent care gaps, and a deeply motivated consumer base.
                                    </p>
                                    
                                    <div className="mt-16 pl-8 border-l border-primary/40">
                                        <p className="text-lg md:text-xl font-serif italic text-foreground/80 leading-relaxed">
                                            &quot;We are not just funding applications; we are investing in the platforms that safeguard the health of future generations and restore dignity to the care experience.&quot;
                                        </p>
                                    </div>
                                </FadeIn>
                             </div>
                        </div>
                    </div>
                </section>

                <Separator className="opacity-30 max-w-[90vw] mx-auto" />

                {/* --- VALUE PROPS --- */}
                <section className="py-24 md:py-32 bg-background">
                    <div className="container mx-auto px-6 md:px-12">
                        <FadeIn>
                            <div className="text-center max-w-3xl mx-auto mb-24">
                                <h2 className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-bold mb-6">Market Drivers</h2>
                                <h3 className="text-3xl md:text-5xl font-serif text-foreground">Why This Sector, Why Now?</h3>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                            {valueProps.map((prop, i) => (
                                <FadeIn key={i} delay={i * 0.15}>
                                    <div className="group text-center">
                                        <div className="mx-auto w-16 h-16 rounded-full border border-border/50 flex items-center justify-center mb-8 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-700">
                                            <prop.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors stroke-[1px]"/>
                                        </div>
                                        <h4 className="font-serif text-2xl mb-4 text-foreground">{prop.title}</h4>
                                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">{prop.description}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* --- INVESTMENT AREAS (Dark Mode) --- */}
                <section className="py-24 md:py-32 bg-foreground text-background">
                    <div className="container mx-auto px-6 md:px-12">
                         <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
                             <FadeIn>
                                 <h2 className="text-[10px] tracking-[0.4em] uppercase text-background/60 font-bold mb-6">Strategy</h2>
                                 <h3 className="text-3xl md:text-5xl font-serif text-background">Core Investment Areas</h3>
                             </FadeIn>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {investmentAreas.map((area, i) => (
                                <FadeIn key={i} delay={i * 0.2}>
                                    <div className="h-full p-10 border border-white/5 hover:border-white/20 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.05] flex flex-col group">
                                        <div className="flex justify-between items-start mb-10">
                                            <area.icon className="w-8 h-8 text-background/80 group-hover:text-white transition-colors stroke-[1px]"/>
                                            <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-background/30 group-hover:text-background/50 transition-colors">{area.subtitle}</span>
                                        </div>
                                        <h4 className="font-serif text-2xl mb-4 text-background">{area.title}</h4>
                                        <p className="text-sm text-background/70 leading-relaxed font-light mt-auto">{area.description}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- IDEAL PARTNER --- */}
                <section className="py-24 md:py-32">
                    <div className="container mx-auto px-6 md:px-12">
                        <FadeIn>
                            <div className="max-w-4xl mx-auto text-center mb-16">
                                <Target className="w-12 h-12 text-primary mx-auto mb-8 stroke-[1px]" />
                                <h2 className="text-3xl md:text-5xl font-serif mb-6 text-foreground">Our Ideal Partner</h2>
                                <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-2xl mx-auto">
                                    We seek early-stage ventures (Seed to Series A) demonstrating a validated clinical need, a founding team with deep medical-technical synergy, and a clear trajectory toward regulatory approval and reimbursement.
                                </p>
                            </div>
                        </FadeIn>
                        
                        <div className="flex justify-center">
                            <FadeIn delay={0.2}>
                                <Button asChild variant="outline" className="border-border hover:bg-muted/50 h-auto py-6 px-8 rounded-none">
                                    <Link href="/healthcare/telemedicine/export-lab-equipment" className="flex items-center gap-4">
                                        <div className="text-left">
                                            <span className="block text-[10px] tracking-[0.2em] uppercase font-bold text-muted-foreground">Reference Case</span>
                                            <span className="block font-serif text-lg">Lab Equipment Export Strategy</span>
                                        </div>
                                        <ArrowRight className="ml-4 w-4 h-4"/>
                                    </Link>
                                </Button>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* --- THE ASK --- */}
                <section className="py-20 md:py-32 bg-muted/10">
                    <div className="container mx-auto px-6 md:px-12">
                        <FadeIn>
                            <div className="bg-background border border-border/80 p-12 md:p-24 text-center max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary/60" />
                                
                                <Baby className="w-10 h-10 text-foreground mx-auto mb-10 stroke-[1px]"/>
                                <h3 className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-bold mb-8">Collaboration</h3>
                                <h2 className="text-4xl md:text-6xl font-serif mb-10 text-foreground tracking-tight">Join Our Thesis</h2>
                                
                                <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-14 leading-relaxed">
                                    If you are a founder building the future of maternal health, or an investor passionate about this transformative space, we invite you to align with us.
                                </p>
                                
                                <Button asChild size="lg" className="rounded-none px-12 py-8 text-xs uppercase tracking-[0.25em] font-bold hover:bg-primary/90 transition-all duration-300">
                                    <Link href="/contact?subject=Maternal Health Tech Inquiry">
                                        Connect With Our Team
                                    </Link>
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </section>

            </main>
        </div>
    );
}