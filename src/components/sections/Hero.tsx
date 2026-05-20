"use client";

import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 bg-black z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
          style={{ backgroundImage: 'url("/images/hero.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-gold tracking-[0.3em] uppercase text-sm md:text-base mb-4 font-sans font-semibold">
            Islamic Legend • Nigerian Voice
          </h2>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-tight">
            Alhaji <span className="text-gold-gradient block md:inline">Saoty Arewa</span>
          </h1>
          <p className="max-w-2xl mx-auto text-foreground/80 text-lg md:text-xl leading-relaxed mb-12 font-sans italic">
            &ldquo;Combining Islamic teachings with Yoruba cultural wisdom to create timeless music for generations.&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#discography"
              className="px-8 py-4 bg-gold text-black font-bold rounded-sm flex items-center gap-2 hover:bg-white transition-colors w-full sm:w-auto justify-center"
            >
              <Play size={18} fill="currentColor" />
              LISTEN NOW
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-gold/40 text-gold font-bold rounded-sm hover:bg-gold/10 transition-colors w-full sm:w-auto justify-center"
            >
              EXPLORE BIOGRAPHY
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold opacity-50 hidden md:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
