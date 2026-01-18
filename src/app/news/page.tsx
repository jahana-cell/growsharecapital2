'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { storiesData, Story } from './stories-data';

export default function NewsPage() {
  const [stories, setStories] = useState<Story[]>(storiesData);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(storiesData.map(s => s.category)))];

  const filteredStories = stories.filter(story => 
    filter === 'All' || story.category === filter
  );

  return (
    <div className="bg-cream-base min-h-screen text-truffle-dark selection:bg-gold-accent selection:text-white">
      {/* --- 1. HERO --- */}
      <section className="relative w-full pt-48 pb-32 px-6 md:px-12 border-b border-stone-200/60">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-[11px] tracking-[0.4em] uppercase font-bold mb-6 text-stone-400">The Journal</p>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-truffle-dark">
              Insights & Reports
            </h1>
            <p className="text-lg font-light text-stone-500 leading-relaxed max-w-2xl mx-auto">
              Our analysis of market trends, investment strategies, and the key sectors driving the American economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. FILTERS & STORY GRID --- */}
      <main className="container mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-colors whitespace-nowrap ${filter === category ? 'bg-truffle-dark text-white' : 'bg-cream-dark text-stone-500 hover:bg-stone-200'}`}>
                {category}
              </button>
            ))}
          </div>
          <div className="relative mt-6 md:mt-0 w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input type="text" placeholder="Search reports..." className="bg-cream-dark border border-stone-200 rounded-full pl-10 pr-4 py-2 w-full text-sm focus:ring-1 focus:ring-gold-accent focus:outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredStories.map(story => (
            <Link key={story.id} href={`/news/${story.slug}`} className="group block">
              <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <div className="relative aspect-[16/10] overflow-hidden bg-cream-dark mb-6 shadow-md shadow-stone-200/50 rounded-sm group-hover:shadow-lg group-hover:shadow-stone-300/50 transition-shadow duration-500">
                    <Image src={story.image} alt={story.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" />
                </div>
                <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-stone-400 mb-3">{story.category}</p>
                <h3 className="text-xl md:text-2xl font-serif leading-tight text-truffle-dark group-hover:text-gold-accent transition-colors duration-500 mb-4">
                  {story.title}
                </h3>
                <p className="text-sm font-light text-stone-500 leading-relaxed border-l-2 border-stone-200 pl-4 group-hover:border-gold-accent transition-colors duration-500">
                    {story.date}
                </p>
              </motion.article>
            </Link>
          ))}
        </div>
      </main>

      {/* --- 3. CTA --- */}
      <section className="py-32 bg-truffle-dark text-white text-center">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-7xl font-serif mb-12">Join the Conversation</h2>
            <p className="text-stone-400 max-w-md mx-auto mb-12 font-light leading-relaxed">
              Engage with our team to explore investment opportunities and discuss our market perspective.
            </p>
            <Link href="/contact" className="inline-block relative group overflow-hidden px-12 py-5 bg-gold-accent text-truffle-dark text-[11px] tracking-[0.3em] uppercase font-bold rounded-sm">
              <span className="relative z-10">Inquire Now</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
