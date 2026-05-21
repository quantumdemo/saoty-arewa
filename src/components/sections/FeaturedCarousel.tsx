"use client";

import { motion } from "framer-motion";
import { singleAlbums } from "@/data/albums";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function FeaturedCarousel() {
  const featured = singleAlbums.filter(a => !a.notAvailable && a.year && a.year >= 2023).slice(0, 5);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % featured.length);
  const prev = () => setIndex((prev) => (prev - 1 + featured.length) % featured.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featured.length]);

  return (
    <section className="py-24 bg-emerald-900/10 border-y border-gold/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h3 className="text-gold uppercase tracking-widest text-xs mb-2">Editor&apos;s Choice</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-white">Featured <span className="text-gold italic">Releases</span></h2>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className="p-3 border border-gold/20 text-gold hover:bg-gold/10 transition-colors" aria-label="Previous album">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="p-3 border border-gold/20 text-gold hover:bg-gold/10 transition-colors" aria-label="Next album">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative h-[450px] md:h-[500px]">
          {featured.map((album, i) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: i === index ? 1 : 0,
                x: i === index ? 0 : (i < index ? -100 : 100),
                zIndex: i === index ? 10 : 0
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="glass-card p-8 h-full flex flex-col justify-center border-gold/20 shadow-2xl">
                <span className="text-gold font-mono mb-4 text-lg">{album.year}</span>
                <h3 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">{album.title}</h3>
                <p className="text-foreground/60 text-lg mb-8 italic">
                  One of the most impactful contemporary releases from the Saoty Arewa archive.
                </p>
                <a href="#discography" className="text-gold font-bold tracking-widest hover:translate-x-2 transition-transform flex items-center gap-2">
                  VIEW IN ARCHIVE <ChevronRight size={16} />
                </a>
              </div>

              <div className="hidden lg:block h-full relative overflow-hidden rounded-sm group">
                 <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
                 <div
                    className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-1000"
                    style={{ backgroundImage: `url('/images/artist-2.jpg')` }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                 <div className="absolute bottom-8 left-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold">
                            <span className="text-xs font-bold">{i + 1}</span>
                        </div>
                        <span className="text-white/40 uppercase tracking-tighter text-sm font-sans">Latest Masterpiece</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {featured.map((album, i) => (
            <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to ${album.title}`}
                className={`h-1 transition-all duration-500 ${i === index ? "w-12 bg-gold" : "w-4 bg-gold/20 hover:bg-gold/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
