"use client";

import { motion } from "framer-motion";
import { BookOpen, Heart, Users, GraduationCap } from "lucide-react";

const impactAreas = [
  {
    title: "Islamic Music",
    description: "Redefining the genre with lyrical depth and contemporary relevance while maintaining spiritual purity.",
    icon: <BookOpen className="text-gold" size={32} />,
  },
  {
    title: "Yoruba Culture",
    description: "Preserving the linguistic beauty and philosophical wisdom of the Yoruba people through 'Asa ati Imọlẹ'.",
    icon: <Heart className="text-gold" size={32} />,
  },
  {
    title: "Moral Education",
    description: "Using music as a tool for social change, addressing family values and community development.",
    icon: <Users className="text-gold" size={32} />,
  },
  {
    title: "Academic Recognition",
    description: "Awarded an honorary doctorate for his contributions to the cultural and educational landscape of West Africa.",
    icon: <GraduationCap className="text-gold" size={32} />,
  },
];

export default function Legacy() {
  return (
    <section id="legacy" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none islamic-pattern" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.4em] text-xs mb-4"
          >
            The Impact
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Musical <span className="text-gold italic">Legacy</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {area.icon}
              </div>
              <h4 className="text-xl font-serif text-white mb-4">{area.title}</h4>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-12 glass-card border-gold/20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-6 italic">
            &ldquo;A pivotal figure in Nigerian Islamic music, bridging the gap between faith and contemporary expression.&rdquo;
          </h3>
          <p className="text-gold uppercase tracking-widest text-sm">— Cultural Archive Review</p>
        </motion.div>
      </div>
    </section>
  );
}
