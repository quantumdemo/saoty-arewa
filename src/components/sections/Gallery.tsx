"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Maximize2 } from "lucide-react";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1523315570223-937cc357c3e5?q=80&w=800&auto=format&fit=crop", title: "Live Performance" },
  { id: 2, src: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop", title: "Studio Session" },
  { id: 3, src: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=800&auto=format&fit=crop", title: "Cultural Event" },
  { id: 4, src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop", title: "Stage Lighting" },
  { id: 5, src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop", title: "Audience Moment" },
  { id: 6, src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop", title: "Musical Archive" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-gold uppercase tracking-[0.4em] text-xs mb-4">Visual Story</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Digital <span className="text-gold italic">Gallery</span></h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-sm border border-gold/10"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center">
                  <Maximize2 className="text-gold mx-auto mb-2" size={24} />
                  <p className="text-white font-serif tracking-widest">{img.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-gold transition-colors">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain shadow-2xl border border-gold/20"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
