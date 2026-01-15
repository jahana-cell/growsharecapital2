'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, Home, ShoppingCart, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

const projectAreas = [
  {
    icon: Home,
    title: "Dignity-Driven Workforce Housing",
    description: "We develop and acquire high-quality, accessible housing for essential workers, fostering stable communities and providing a foundation for families to thrive.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600"
  },
  {
    icon: ShoppingCart,
    title: "Community-Centric Retail Hubs",
    description: "Our retail developments are designed to be vibrant local centers, providing essential services, creating jobs, and serving as gathering places for the community.",
    image: "https://images.unsplash.com/photo-1583325958579-3912549236e7?q=80&w=1600"
  },
  {
    icon: Building2,
    title: "Mixed-Use & Commercial Properties",
    description: "By integrating residential, commercial, and recreational spaces, we build dynamic environments that enhance quality of life and create lasting economic value.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600"
  }
];

export default function RealEstatePage() {
  return (
    <div className="bg-cream-base min-h-screen text-truffle-dark selection:bg-gold-accent selection:text-white">

      {/* --- 1. HERO --- */}
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600" 
          alt="Modern architecture" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="relative z-10 max-w-4xl px-6"
        >
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-6 opacity-80">Strategic Real Estate</p>
          <h1 className="text-4xl md:text-7xl font-serif leading-tight mb-8">
            Building the Foundations for Growth
          </h1>
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto opacity-90">
            We invest in tangible assets that create community value, from workforce housing to the commercial hubs that anchor local economies.
          </p>
        </motion.div>
      </section>

      {/* --- 2. INVESTMENT PHILOSOPHY --- */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-stone-400 font-bold mb-4">Our Thesis</h2>
            <p className="text-3xl md:text-4xl font-serif text-truffle-dark leading-snug">
              Investing in the <span className="italic text-stone-500">physical infrastructure</span> of opportunity and stability.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }} className="text-stone-600 font-light space-y-6 leading-relaxed">
            <p>Our real estate strategy is not about speculation; it is about stewardship. We identify and cultivate properties that are fundamental to the well-being and economic health of a community. </p>
            <p>By focusing on long-term value and social impact, we generate resilient, asset-backed returns while creating environments where people can live, work, and connect.</p>
          </motion.div>
        </div>
      </section>

      {/* --- 3. PROJECT FOCUS AREAS --- */}
      <section className="py-20 md:py-32 bg-[#FDFCFB] border-y border-stone-200/80">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-truffle-dark">Core Focus Areas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {projectAreas.map((area, i) => (
              <motion.div 
                key={area.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.2 } }, hidden: { opacity: 0, y: 40 } }}
                className="group bg-cream-base p-8 rounded-sm shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-stone-200"
              >
                <area.icon className="w-10 h-10 text-gold-accent mb-6" strokeWidth={1} />
                <h3 className="text-xl font-serif text-truffle-dark mb-4">{area.title}</h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. CTA --- */}
      <section className="py-32 bg-truffle-dark text-white text-center">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-6xl font-serif mb-12">Partner With Us</h2>
            <p className="text-stone-400 max-w-md mx-auto mb-12 font-light leading-relaxed">
              We are seeking partners for our next phase of real estate projects. If you have a project that aligns with our thesis, we invite you to connect.
            </p>
            <Link href="/contact" className="inline-block relative group overflow-hidden px-12 py-5 bg-gold-accent text-truffle-dark text-[11px] tracking-[0.3em] uppercase font-bold rounded-sm">
              <span className="relative z-10">Contact Our Team</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
