'use client';

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, Stethoscope, TestTube2, Laptop, Baby, Users, 
  ShieldCheck, BrainCircuit
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { LazyVideo } from "@/components/lazy-video"; 
import { Separator } from "@/components/ui/separator";

// --- ELEVATED DATA ---
const initiatives = [
  {
    title: "Global Rehab Initiative",
    category: "Infrastructure",
    description: "A strategic multi-phase capital deployment to develop rehabilitation and healthcare service centers in key global locations, targeting high-growth underserved markets.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1652650445101-3bb4f755b67c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/healthcare/global-rehab",
    aiHint: "modern hospital rehabilitation center"
  },
  {
    title: "Pharmaceutical Innovations",
    category: "Life Sciences",
    description: "Catalyzing the R&D of next-generation therapeutics and medical technologies to capture value in emerging healthcare ecosystems.",
    icon: TestTube2,
    image: "https://images.unsplash.com/photo-1698506455775-42635fdd16a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/healthcare/pharmaceutical-innovations",
    aiHint: "pharmaceutical laboratory research"
  },
  {
    title: "Digital Health & Global Trade",
    category: "HealthTech",
    description: "Backing scalable technology platforms and strategic export ventures to democratize patient access and fortify global healthcare infrastructure.",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1705615791240-c35f4799863b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/healthcare/telemedicine",
    aiHint: "digital health telemedicine interface"
  },
  {
    title: "Maternal Health Tech",
    category: "Specialized Care",
    description: "A dedicated investment thesis focused on high-growth technologies that redefine the standard of care for prenatal, delivery, and postnatal journeys.",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/healthcare/maternal-health",
    aiHint: "pregnant woman medical consultation"
  },
  {
    title: "Senior Care Workforce",
    category: "Social Impact",
    description: "Partnering with nonprofits to construct a skilled senior care workforce, simultaneously creating jobs and delivering profound community impact.",
    icon: Users,
    image: "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg",
    link: "/healthcare/senior-care-workforce",
    aiHint: "senior care assistance"
  }
];

const impactStats = [
    { target: 15, suffix: '+', label: 'Clinics Funded' },
    { target: 50000, suffix: '+', label: 'Patients Served Annually' },
    { target: 3, suffix: '', label: 'New Technologies Launched' },
    { target: 25, suffix: '%', label: 'Reduction in Care Gaps' },
    { target: 500, suffix: '+', label: 'Healthcare Jobs Created' }
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

export default function HealthcareClientPage() {
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
                        src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Website%20Pictures%2Fhealth%20care.png?alt=media&token=5c1e73a0-2ed8-4d6b-898a-e3fab6f77233" 
                        alt="Healthcare & Pharmaceuticals" 
                        fill
                        sizes="100vw"
                        className="object-cover scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </motion.div>
                
                <div className="container mx-auto px-6 md:px-12 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="max-w-5xl"
                    >
                        <p className="text-white/80 text-[10px] tracking-[0.4em] uppercase font-bold mb-8 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-white/60"></span>
                            Division: Healthcare
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tight">
                            Investing in the <br/>
                            <span className="italic text-white/90">Future of Wellness.</span>
                        </h1>
                        <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/80 font-light leading-relaxed tracking-wide">
                            We fund high-growth ventures that close critical care gaps, drive innovation, and build healthier, more resilient communities.
                        </p>
                    </motion.div>
                </div>
            </header>

            <main>
                {/* --- THESIS --- */}
                <section className="py-24 md:py-32">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                             <FadeIn>
                                <h2 className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-bold mb-6">The Thesis</h2>
                                <h3 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
                                    Bridging the gap between financial success and positive health outcomes.
                                </h3>
                             </FadeIn>
                             <FadeIn delay={0.2}>
                                <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
                                    GrowShare Capital targets investments that bridge critical gaps in the healthcare system, from funding innovative treatments to building accessible clinics in underserved communities. Our goal is to create a robust healthcare ecosystem that is both profitable and profoundly impactful.
                                </p>
                             </FadeIn>
                        </div>
                    </div>
                </section>

                <Separator className="opacity-50 max-w-[90vw] mx-auto" />

                {/* --- FEATURED STORY --- */}
                <section className="py-24 md:py-32 bg-background">
                    <div className="container mx-auto px-6 md:px-12">
                         <div className="grid lg:grid-cols-2">
                            {/* Content */}
                            <div className="flex flex-col justify-center p-8 md:p-16 bg-muted/20 order-2 lg:order-1">
                                <FadeIn>
                                    <span className="inline-block px-3 py-1 border border-foreground/10 text-[10px] tracking-[0.2em] uppercase font-bold mb-8">
                                        Spotlight Story
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">The Invisible Threat: A Physicist&apos;s Fight for Safer Implants</h3>
                                    <p className="text-muted-foreground font-light leading-relaxed mb-10 text-lg">
                                        Discover the pioneering work of Dr. Muhammad Shah Jahan, whose research into free radicals transformed the safety and longevity of orthopedic implants, preventing countless revision surgeries.
                                    </p>
                                    <Link href="/news/the-invisible-threat-how-one-physicists-fight-against-free-radicals-revolutionized-orthopedic-implant-safety" className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-bold border-b border-foreground/20 pb-1 hover:border-foreground transition-all">
                                        Read The Full Story <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </FadeIn>
                            </div>
                            {/* Image */}
                            <div className="relative h-[400px] lg:h-full min-h-[500px] w-full order-1 lg:order-2 overflow-hidden group">
                                <Image 
                                    src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                                    alt="Scientist in laboratory" 
                                    fill 
                                    sizes="(max-width: 768px) 100vw, 50vw" 
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    data-ai-hint="scientist laboratory"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- VIDEO SECTION --- */}
                <section className="py-24 md:py-32 bg-muted/30">
                    <div className="container mx-auto px-6 md:px-12 text-center mb-16">
                        <FadeIn>
                            <h2 className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-bold mb-6">Our Vision</h2>
                            <h3 className="text-3xl md:text-5xl font-serif text-foreground">Building a Healthier Future</h3>
                            <p className="mt-6 text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                                Discover how we are building a healthier future through strategic, impact-driven investments.
                            </p>
                        </FadeIn>
                    </div>
                    <div className="container mx-auto px-4 md:px-12 max-w-6xl">
                        <FadeIn delay={0.2}>
                            <div className="relative aspect-video w-full overflow-hidden bg-black shadow-2xl border border-border/50">
                                <LazyVideo src="https://www.youtube.com/embed/gD2hFOExxlg?si=1tnuJXcM-R7rkB0i" />
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* --- INNOVATION LIFECYCLE (Dark Mode) --- */}
                <section className="py-24 md:py-32 bg-foreground text-background">
                    <div className="container mx-auto px-6 md:px-12">
                         <div className="mb-20 text-center">
                             <FadeIn>
                                 <h2 className="text-[10px] tracking-[0.4em] uppercase text-background/60 font-bold mb-4">Methodology</h2>
                                 <h3 className="text-3xl md:text-5xl font-serif text-background">The Innovation Lifecycle</h3>
                             </FadeIn>
                         </div>

                         <div className="grid md:grid-cols-3 gap-12 lg:gap-24 border-t border-background/20 pt-16">
                            {[
                              { icon: TestTube2, title: "Research & Discovery", desc: "Identifying early-stage biotechs with scientifically rigorous, first-in-class solutions for unmet medical needs." },
                              { icon: ShieldCheck, title: "Strategic Investment", desc: "Providing capital and strategic guidance to help companies navigate clinical trials, regulatory approval, and IP protection." },
                              { icon: BrainCircuit, title: "Market Entry & Growth", desc: "Leveraging our network to facilitate market entry, M&A opportunities, and long-term growth for patients and investors." }
                            ].map((item, idx) => (
                              <FadeIn key={idx} delay={idx * 0.2}>
                                <div className="group relative text-center md:text-left">
                                  <div className="mb-8 flex flex-col md:flex-row items-center md:items-start md:justify-between">
                                     <span className="text-5xl font-serif text-background/20 group-hover:text-background transition-colors duration-500 mb-4 md:mb-0">0{idx + 1}</span>
                                     <item.icon className="h-8 w-8 stroke-[1px] text-background/50 group-hover:text-background transition-colors" />
                                  </div>
                                  <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{item.title}</h3>
                                  <p className="text-sm text-background/70 leading-relaxed font-light">{item.desc}</p>
                                </div>
                              </FadeIn>
                            ))}
                          </div>
                    </div>
                </section>

                {/* --- INITIATIVES (Editorial Grid) --- */}
                <section className="py-24 md:py-32 bg-background">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border pb-6">
                            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Key Initiatives</h2>
                            <span className="hidden md:block text-[10px] tracking-[0.2em] uppercase font-bold text-muted-foreground">Portfolio</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10">
                            {initiatives.map((item, index) => (
                              <FadeIn key={index} delay={index * 0.1}>
                                <Link href={item.link} className="group cursor-pointer block h-full flex flex-col">
                                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-muted mb-6">
                                    <Image 
                                      src={item.image} 
                                      alt={item.title} 
                                      fill 
                                      sizes="(max-width: 768px) 100vw, 33vw"
                                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                                      data-ai-hint={item.aiHint}
                                    />
                                    <div className="absolute top-6 left-6">
                                       <span className="bg-background/90 backdrop-blur-md text-foreground text-[9px] tracking-[0.2em] uppercase px-4 py-2 font-bold shadow-sm">
                                         {item.category}
                                       </span>
                                    </div>
                                  </div>
                                  <div className="space-y-4 flex-grow">
                                     <div className="flex justify-between items-baseline">
                                        <h3 className="text-2xl font-serif text-foreground group-hover:italic transition-all duration-300">{item.title}</h3>
                                        <ArrowRight className="w-4 h-4 -rotate-45 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                     </div>
                                     <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-3">
                                       {item.description}
                                     </p>
                                  </div>
                                </Link>
                              </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- IMPACT STATS --- */}
                <section className="py-24 border-t border-border bg-background">
                    <div className="container mx-auto px-6 md:px-12 text-center">
                        <FadeIn>
                            <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-bold mb-4">Our Impact</p>
                            <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-16">Investing in Community Wellness</h3>
                        </FadeIn>
                        
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
                            {impactStats.map((stat, i) => (
                              <FadeIn key={i} delay={i * 0.1}>
                                <div className="space-y-3">
                                  <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary flex justify-center">
                                    <AnimatedCounter 
                                        duration={3000} 
                                        target={stat.target} 
                                        suffix={stat.suffix} 
                                    />
                                  </div>
                                  <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground font-bold">{stat.label}</p>
                                </div>
                              </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="py-32 text-center bg-muted/10">
                    <div className="container mx-auto px-6">
                        <FadeIn>
                             <div className="max-w-2xl mx-auto">
                                <h2 className="text-4xl md:text-6xl font-serif mb-6 text-foreground">Have Questions?</h2>
                                <p className="text-muted-foreground font-light text-lg mb-10">
                                    Contact us to learn more about our healthcare investment thesis and discuss partnership opportunities.
                                </p>
                                <Button asChild size="lg" className="rounded-none px-10 py-8 text-xs uppercase tracking-[0.25em] font-bold">
                                    <Link href="/contact?subject=Healthcare Inquiry">
                                        Contact Us
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