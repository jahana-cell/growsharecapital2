'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, ShieldCheck, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

const focusAreas = [
  {
    icon: HeartPulse,
    title: "High-Acuity Medical Facilities",
    description: "We fund the development and modernization of specialized hospitals and clinics that provide critical care for complex conditions, ensuring communities have access to life-saving treatments.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1600"
  },
  {
    icon: Stethoscope,
    title: "Bridging the Rural Care Gap",
    description: "Our investments target underserved rural and suburban areas, establishing outpatient clinics and diagnostic centers to bring essential healthcare services closer to home.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600"
  },
  {
    icon: ShieldCheck,
    title: "Preventative Wellness Ecosystems",
    description: "We support innovative models of care that focus on preventative medicine, mental health, and wellness, creating a holistic and sustainable healthcare ecosystem for the long term.",
    image: "https://images.unsplash.com/photo-1551884859-94b41a99d4f1?q=80&w=1600"
  }
];

export default function HealthcarePage() {
  return (
    <div className="bg-cream-base min-h-screen text-truffle-dark selection:bg-gold-accent selection:text-white">

      {/* --- 1. HERO --- */}
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image 
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1600" 
          alt="Healthcare professional" 
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
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-6 opacity-80">Critical Healthcare</p>
          <h1 className="text-4xl md:text-7xl font-serif leading-tight mb-8">
            Investing in the Future of Wellness
          </h1>
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto opacity-90">
            We deploy capital to build and enhance the healthcare infrastructure that communities rely on, from advanced medical facilities to preventative care networks.
          </p>
        </motion.div>
      </section>

      {/* --- 2. INVESTMENT PHILOSOPHY --- */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-stone-400 font-bold mb-4">Our Mission</h2>
            <p className="text-3xl md:text-4xl font-serif text-truffle-dark leading-snug">
              To ensure <span className="italic text-stone-500">equitable access</span> to superior healthcare for all Americans.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }} className="text-stone-600 font-light space-y-6 leading-relaxed">
            <p>We believe that a healthy population is the cornerstone of a prosperous nation. Our healthcare investment strategy is focused on identifying and scaling solutions that improve patient outcomes, enhance efficiency, and expand access to care.</p>
            <p>By partnering with leading operators and innovators, we build a resilient healthcare ecosystem that delivers both strong financial returns and profound social impact.</p>
          </motion.div>
        </div>
      </section>

      {/* --- 3. FOCUS AREAS --- */}
      <section className="py-20 md:py-32 bg-[#FDFCFB] border-y border-stone-200/80">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-truffle-dark">Investment Priorities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {focusAreas.map((area, i) => (
              <motion.div 
                key={area.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.2 } }, hidden: { opacity: 0, y: 40 } }}
                className="group bg-cream-base p-8 rounded-sm shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-stone-200"
              >
                <area.icon className="w-10 h-10 text-gold-accent mb-6" strokeWidth={1.5} />
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
            <h2 className="text-5xl md:text-6xl font-serif mb-12">Innovate With Us</h2>
            <p className="text-stone-400 max-w-md mx-auto mb-12 font-light leading-relaxed">
              If you are a healthcare provider, operator, or innovator with a project that can transform care delivery, we want to hear from you.
            </p>
            <Link href="/contact" className="inline-block relative group overflow-hidden px-12 py-5 bg-gold-accent text-truffle-dark text-[11px] tracking-[0.3em] uppercase font-bold rounded-sm">
              <span className="relative z-10">Share Your Project</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
