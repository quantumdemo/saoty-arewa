"use client";

import { motion } from "framer-motion";
import { collaborators } from "@/data/albums";

export default function Collaborations() {
  return (
    <section id="collaborations" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-gold uppercase tracking-[0.4em] text-xs mb-4">Brotherhood & Art</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Elite <span className="text-gold italic">Collaborations</span></h2>
          <p className="max-w-2xl mx-auto text-foreground/50 mt-6 font-sans">
            Saoty Arewa has worked with the most respected names in the Nigerian music industry,
            bridging Fuji and Islamic genres.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {collaborators.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative text-center"
            >
              <div className="aspect-square relative overflow-hidden rounded-full border-2 border-gold/10 group-hover:border-gold/50 transition-all duration-500 mb-4 mx-auto max-w-[160px]">
                <div className="absolute inset-0 bg-emerald-900/20 z-10 group-hover:opacity-0 transition-opacity" />
                <img
                  src={`https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop`}
                  alt={artist.name}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <h4 className="text-white font-serif text-lg group-hover:text-gold transition-colors">{artist.name}</h4>
              <p className="text-[10px] uppercase tracking-widest text-foreground/40 mt-1">Featured Artist</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
