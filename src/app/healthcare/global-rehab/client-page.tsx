'use client';

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, BrainCircuit, Users, TrendingUp, 
  ShieldCheck, Handshake, MessageSquare, DollarSign, Target, 
  CheckCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// --- ELEVATED COPY & DATA ---
const valueProps = [
    {
        icon: TrendingUp,
        title: "Operational Scalability",
        description: "AI-driven autonomous check-ins empower a single clinician to oversee an expanded caseload without compromising care quality, radically optimizing operational costs."
    },
    {
        icon: ShieldCheck,
        title: "Clinical Excellence",
        description: "Continuous, adaptive engagement fosters superior patient compliance, accelerates recovery trajectories, and significantly mitigates relapse risks."
    },
    {
        icon: Handshake,
        title: "Predictive Intelligence",
        description: "Harvesting granular, anonymized efficacy data to refine clinical protocols and unlock predictive care models—transforming raw data into intellectual property."
    },
];

const modelLayers = [
    {
        icon: MessageSquare,
        title: "The Engagement Layer",
        subtitle: "Interface",
        description: "An AI Co-Pilot & Virtual Coach facilitating journaling, mood tracking, and adaptive, empathetic dialogue."
    },
    {
        icon: BrainCircuit,
        title: "The Intelligence Layer",
        subtitle: "Aggregation",
        description: "Synthesizing behavioral and biometric data into concise, actionable therapist dashboards in real-time."
    },
    {
        icon: Users,
        title: "The Integration Layer",
        subtitle: "Deployment",
        description: "Equipping clinicians with synthesized reports, predictive risk alerts, and clear KPIs for outcome tracking."
    }
];

const phases = [
    { phase: "01", title: "Bangladesh & Southeast Asia", desc: "Capitalizing on established local expertise to forge the foundational infrastructure." },
    { phase: "02", title: "Middle East & North Africa", desc: "Expanding into the high-velocity private healthcare sector across the MENA region." },
    { phase: "03", title: "Sub-Saharan Africa", desc: "Establishing strategic Public-Private Partnerships (PPPs) with national health systems." }
];

// --- ANIMATION COMPONENT ---
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }} // Custom "luxury" ease curve
  >
    {children}
  </motion.div>
);

export default function GlobalRehabClientPage() {
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
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
                        alt="Digital Health Interface"
                        fill
                        className="object-cover scale-105"
                        priority
                        data-ai-hint="doctor tablet"
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
                        <Link href="/healthcare" className="group inline-flex items-center gap-3 text-white/70 text-[10px] tracking-[0.3em] uppercase font-bold mb-10 hover:text-white transition-colors">
                            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> 
                            Return to Healthcare
                        </Link>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tight">
                            The Future of <br/>
                            <span className="italic text-white/90">Human Restoration.</span>
                        </h1>
                        <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/80 font-light leading-relaxed tracking-wide">
                            A paradigm shift in rehabilitative care. AI-Integrated. Data-Driven. Human-Centric.
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
                                        The Vision
                                    </h2>
                                    <h3 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">Redefining the Standard of Care.</h3>
                                </FadeIn>
                             </div>
                             <div className="lg:col-span-8">
                                <FadeIn delay={0.2}>
                                    <p className="text-xl md:text-3xl font-serif leading-relaxed text-foreground/90">
                                        The Global Rehab Initiative represents a strategic investment thesis: the deployment of AI-augmented rehabilitation centers across high-opportunity global markets.
                                    </p>
                                    <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed">
                                        By seamlessly integrating an AI Co-Pilot into the traditional therapeutic model, we unlock unprecedented clinical efficiency, elevate patient outcomes, and establish a scalable, high-yield operational framework.
                                    </p>
                                    
                                    <div className="mt-16 pl-8 border-l border-primary/40">
                                        {/* Escaped quotes for Next.js build safety */}
                                        <p className="text-lg md:text-xl font-serif italic text-foreground/80 leading-relaxed">
                                            &quot;With the digital therapeutics market projected to surpass <span className="text-primary font-medium not-italic">$56 billion</span> by 2027, our initiative is positioned to capture significant value by transforming the underserved rehabilitation sector.&quot;
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
                                <h2 className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-bold mb-6">Strategic Advantage</h2>
                                <h3 className="text-3xl md:text-5xl font-serif text-foreground">The Value Proposition</h3>
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
                
                {/* --- TECH STACK (Inverted / Dark Mode) --- */}
                <section className="py-24 md:py-32 bg-foreground text-background">
                    <div className="container mx-auto px-6 md:px-12">
                         <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
                             <FadeIn>
                                 <h2 className="text-[10px] tracking-[0.4em] uppercase text-background/60 font-bold mb-6">Architecture</h2>
                                 <h3 className="text-3xl md:text-5xl font-serif text-background">The Tech Stack</h3>
                             </FadeIn>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {modelLayers.map((layer, i) => (
                                <FadeIn key={i} delay={i * 0.2}>
                                    <div className="h-full p-10 border border-white/5 hover:border-white/20 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.05] flex flex-col group">
                                        <div className="flex justify-between items-start mb-10">
                                            <layer.icon className="w-8 h-8 text-background/80 group-hover:text-white transition-colors stroke-[1px]"/>
                                            <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-background/30 group-hover:text-background/50 transition-colors">{layer.subtitle}</span>
                                        </div>
                                        <h4 className="font-serif text-2xl mb-4 text-background">{layer.title}</h4>
                                        <p className="text-sm text-background/70 leading-relaxed font-light mt-auto">{layer.description}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- ROLLOUT STRATEGY --- */}
                <section className="py-24 md:py-32">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="max-w-5xl mx-auto">
                            <FadeIn>
                                <div className="text-center mb-24">
                                    <Target className="w-12 h-12 text-primary mx-auto mb-8 stroke-[1px]" />
                                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-foreground">Phased Global Deployment</h2>
                                    <p className="text-muted-foreground font-light max-w-2xl mx-auto text-lg leading-relaxed">
                                        A calculated expansion strategy prioritizing high-demand markets, favorable regulatory landscapes, and robust local partnerships.
                                    </p>
                                </div>
                            </FadeIn>

                            <div className="space-y-6">
                                {phases.map((item, index) => (
                                    <FadeIn key={index} delay={index * 0.1}>
                                        <div className="flex flex-col md:flex-row md:items-center gap-8 p-8 md:p-10 border border-border/60 hover:border-primary/30 hover:bg-muted/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                                            <span className="text-5xl font-serif text-muted-foreground/10 group-hover:text-primary/80 transition-colors duration-500">{item.phase}</span>
                                            <div className="flex-grow">
                                                <h4 className="text-xl md:text-2xl font-serif text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                                                <p className="text-sm md:text-base text-muted-foreground mt-3 font-light leading-relaxed">{item.desc}</p>
                                            </div>
                                            <CheckCircle2 className="w-6 h-6 text-primary/0 group-hover:text-primary ml-auto transition-all transform scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100" />
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- THE ASK --- */}
                <section className="py-20 md:py-32 bg-muted/10">
                    <div className="container mx-auto px-6 md:px-12">
                        <FadeIn>
                            <div className="bg-background border border-border/80 p-12 md:p-24 text-center max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
                                {/* Elegant Top Line Accent */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary/60" />
                                
                                <DollarSign className="w-10 h-10 text-foreground mx-auto mb-10 stroke-[1px]"/>
                                <h3 className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-bold mb-8">Investment Opportunity</h3>
                                <h2 className="text-4xl md:text-6xl font-serif mb-10 text-foreground tracking-tight">The Capital Call</h2>
                                
                                <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-14 leading-relaxed">
                                    We are inviting strategic partners to contribute <strong className="text-foreground font-medium">$1.2M in seed funding</strong>. This capital will catalyze the launch of our flagship center in Bangladesh, finalize our proprietary AI platform, and secure initial operational contracts.
                                </p>
                                
                                <Button asChild size="lg" className="rounded-none px-12 py-8 text-xs uppercase tracking-[0.25em] font-bold hover:bg-primary/90 transition-all duration-300">
                                    <Link href="/contact?subject=Global Rehab Initiative Inquiry">
                                        Request Pitch Deck
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