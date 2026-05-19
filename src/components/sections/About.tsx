"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm border border-gold/20">
              <div className="absolute inset-0 bg-emerald-900/10 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1526218626217-dc65a29bb444?q=80&w=800&auto=format&fit=crop"
                alt="Saoty Arewa"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/50" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gold uppercase tracking-widest text-sm mb-4">Biographical Archive</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              A Voice of <span className="text-gold italic">Faith & Tradition</span>
            </h2>

            <div className="space-y-6 text-foreground/70 leading-relaxed text-lg">
              <p>
                Alhaji Abdul-Salam Azeez Abiodun Ajiroba, popularly known as <span className="text-white font-semibold">Saoty Arewa</span>,
                is a distinguished Nigerian Islamic singer-songwriter and performer. Born in Epe, Lagos State,
                he has significantly influenced the Islamic music scene in Nigeria.
              </p>
              <p>
                His musical journey, which began in 1993, is defined by a unique blend of Islamic teachings and
                traditional Yoruba values. His work addresses critical themes such as moral conduct, respect for elders,
                and social issues like broken homes and parental neglect.
              </p>
              <p className="italic border-l-4 border-gold pl-6 py-2 my-8 text-foreground/90">
                "My music is not just entertainment; it is a vehicle for education, moral instruction,
                and spiritual growth."
              </p>
              <p>
                With over 30 studio albums, Saoty Arewa has earned widespread recognition, including an honorary
                doctorate from Estam University, Benin Republic, solidifying his status as a pivotal figure
                in African musical history.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gold/10 pt-10">
              <div>
                <h4 className="text-gold font-serif text-3xl mb-1">30+</h4>
                <p className="text-xs uppercase tracking-tighter text-foreground/40 font-sans">Studio Albums</p>
              </div>
              <div>
                <h4 className="text-gold font-serif text-3xl mb-1">1993</h4>
                <p className="text-xs uppercase tracking-tighter text-foreground/40 font-sans">Career Debut</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
