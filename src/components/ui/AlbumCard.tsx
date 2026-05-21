"use client";

import { motion } from "framer-motion";
import { Album } from "@/data/albums";
import { Music, AlertCircle } from "lucide-react";

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  const hasIframes = album.iframes && album.iframes.length > 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card overflow-hidden group border-gold/10 hover:border-gold/30 transition-all duration-500 flex flex-col h-full"
    >
      <div className="p-6 border-b border-gold/5 bg-white/5">
        <div className="flex justify-between items-start mb-2">
          {album.year && <span className="text-gold font-mono text-xs tracking-tighter">{album.year}</span>}
          {album.isDuet && (
            <span className="px-2 py-0.5 bg-emerald-900/40 text-emerald-400 text-[10px] uppercase tracking-widest rounded-full">
              Duet
            </span>
          )}
        </div>
        <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors line-clamp-1">
          {album.title}
        </h3>
        {album.artists && (
          <p className="text-xs text-foreground/40 mt-1 italic line-clamp-1">{album.artists}</p>
        )}
      </div>

      <div className="flex-grow p-4 bg-black/20 flex flex-col gap-4">
        {album.notAvailable ? (
          <div className="flex flex-col items-center justify-center py-12 text-foreground/30 border border-dashed border-white/10 rounded-sm">
            <AlertCircle size={32} strokeWidth={1} className="mb-2" />
            <p className="text-xs uppercase tracking-widest">Archive Only</p>
          </div>
        ) : hasIframes ? (
          <div className="space-y-4">
            {album.iframes.map((iframe, idx) => (
              <div
                key={`${album.id}-${idx}`}
                className="relative w-full rounded-md overflow-hidden bg-black/40 shadow-lg"
                dangerouslySetInnerHTML={{ __html: iframe }}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-foreground/30 border border-dashed border-white/10 rounded-sm">
            <Music size={32} strokeWidth={1} className="mb-2" />
            <p className="text-xs uppercase tracking-widest">Streaming Soon</p>
          </div>
        )}
      </div>

      {/* Dynamic spacing based on number of tracks */}
      {hasIframes && album.iframes.length > 1 && (
        <div className="px-6 py-2 bg-gold/5 text-[10px] text-gold/60 uppercase tracking-widest text-center">
          Multiple Tracks Included
        </div>
      )}
    </motion.div>
  );
}
