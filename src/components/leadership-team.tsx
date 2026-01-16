'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { leadershipTeam } from '@/lib/constants';

const LeadershipTeam = () => {
  return (
    <section id="leadership" className="w-full py-24 md:py-32 bg-[#FDFCFB]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-[12px] tracking-[0.4em] uppercase text-stone-400 mb-4">Our Leaders</h2>
          <p className="text-3xl md:text-4xl font-serif text-truffle-dark">Meet the Team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leadershipTeam.map((member, index) => (
            <motion.div 
              key={index}
              className="text-center space-y-4 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-cream-dark group-hover:border-gold-accent transition-colors duration-300 shadow-lg">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  sizes="256px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
              </div>
              <div>
                  <h3 className="text-xl font-bold tracking-tight text-truffle-dark mt-6">{member.name}</h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">{member.title}</p>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed pt-4 font-light max-w-xs mx-auto">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
