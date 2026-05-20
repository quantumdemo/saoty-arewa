"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";

const images = [
  { id: 1, src: "/images/artist-1.jpg", title: "Portrait Session" },
  { id: 2, src: "/images/artist-2.jpg", title: "Studio Session" },
  { id: 3, src: "/images/artist-3.jpg", title: "Live Performance" },
  { id: 4, src: "/images/artist-4.jpg", title: "Cultural Event" },
  { id: 5, src: "/images/artist-5.jpg", title: "Spiritual Gathering" },
  { id: 6, src: "/images/artist-6.jpg", title: "Legacy Archive" },
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
              <div className="relative aspect-[3/4]">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
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
            <button className="absolute top-8 right-8 text-white/50 hover:text-gold transition-colors z-10">
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative w-full h-full max-w-5xl max-h-[80vh]"
            >
              <Image
                src={selectedImage}
                alt="Selected portrait"
                fill
                className="object-contain shadow-2xl border border-gold/20"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
