'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { storiesData, Story } from '../stories-data';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function StoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const story = storiesData.find(s => s.slug === slug);

  if (!story) {
    notFound();
  }

  const currentIndex = storiesData.findIndex(s => s.slug === slug);
  const previousStory = currentIndex > 0 ? storiesData[currentIndex - 1] : null;
  const nextStory = currentIndex < storiesData.length - 1 ? storiesData[currentIndex + 1] : null;

  return (
    <div className="bg-cream-base min-h-screen text-truffle-dark selection:bg-gold-accent selection:text-white">

      {/* --- 1. HERO --- */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image src={story.image} alt={story.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"/>
        <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="text-xs tracking-[0.3em] uppercase font-bold mb-4 opacity-80">{story.category}</p>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight text-white">
              {story.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- 2. ARTICLE CONTENT --- */}
      <article className="w-full max-w-3xl mx-auto py-20 md:py-24 px-6 font-serif">
        <div className="flex justify-between items-center mb-12 pb-8 border-b border-stone-200">
          <div className="text-sm text-stone-500">
            Published on <span className="text-truffle-dark font-medium">{story.date}</span>
          </div>
        </div>
        
        <div className="prose prose-lg lg:prose-xl max-w-none prose-stone prose-headings:font-serif prose-headings:text-truffle-dark prose-a:text-gold-accent hover:prose-a:text-truffle-dark">
          <p className="lead text-2xl text-truffle-dark leading-relaxed font-light">
            This is a placeholder for the full story content. The actual content would be fetched from a CMS or a more detailed data source.
          </p>
          <p>{story.content}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <blockquote className="border-l-4 border-gold-accent text-xl italic text-stone-600 pl-6 py-2 my-10">
            "This is an illustrative blockquote to add visual variety and emphasize a key point from the article."
          </blockquote>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>
      </article>
      
      {/* --- 3. NAVIGATION --- */}
      <nav className="w-full border-t border-stone-200">
        <div className="container mx-auto grid grid-cols-2">
          {previousStory ? (
            <Link href={`/news/${previousStory.slug}`} className="group p-8 border-r border-stone-200 text-right hover:bg-cream-dark transition-colors">
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Previous</p>
              <h4 className="font-serif text-lg md:text-xl text-truffle-dark group-hover:text-gold-accent transition-colors flex items-center justify-end gap-3">
                {previousStory.title}
                <ArrowLeft className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
              </h4>
            </Link>
          ) : <div className="border-r border-stone-200"></div>}

          {nextStory ? (
            <Link href={`/news/${nextStory.slug}`} className="group p-8 text-left hover:bg-cream-dark transition-colors">
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Next</p>
              <h4 className="font-serif text-lg md:text-xl text-truffle-dark group-hover:text-gold-accent transition-colors flex items-center gap-3">
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0" />
                {nextStory.title}
              </h4>
            </Link>
          ) : <div></div>}
        </div>
      </nav>
    </div>
  );
}
