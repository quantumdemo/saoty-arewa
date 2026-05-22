"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Album } from "@/data/albums";
import { Music, AlertCircle, PlayCircle } from "lucide-react";

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
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

      <div className="flex-grow p-4 bg-black/20 flex flex-col gap-4 min-h-[160px]">
        {album.notAvailable ? (
          <div className="flex flex-col items-center justify-center h-full min-h-[160px] text-foreground/30 border border-dashed border-white/10 rounded-sm">
            <AlertCircle size={32} strokeWidth={1} className="mb-2" />
            <p className="text-xs uppercase tracking-widest">Archive Only</p>
          </div>
        ) : hasIframes ? (
          <div className="h-full">
            {!isLoaded ? (
              <button
                onClick={() => setIsLoaded(true)}
                className="group/btn relative w-full h-full min-h-[160px] rounded-sm border border-gold/10 bg-gradient-to-br from-white/5 to-transparent flex flex-col items-center justify-center gap-3 transition-all hover:border-gold/30 hover:bg-gold/5 overflow-hidden"
              >
                {/* Decorative Pattern background */}
                <div className="absolute inset-0 opacity-[0.03] group-hover/btn:opacity-[0.05] transition-opacity"
                     style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l5.878 18.09h19.022l-15.389 11.18 5.878 18.09-15.389-11.18-15.389 11.18 5.878-18.09-15.389-11.18h19.022z\' fill=\'%23d4af37\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}
                />

                <div className="relative p-4 rounded-full bg-gold/10 text-gold group-hover/btn:scale-110 group-hover/btn:bg-gold/20 transition-all duration-500 shadow-lg shadow-black/40">
                  <PlayCircle size={40} strokeWidth={1.5} />
                </div>

                <div className="relative text-center">
                  <p className="text-gold font-bold uppercase tracking-[0.2em] text-[10px]">Initialize Player</p>
                  <div className="flex items-center justify-center gap-1.5 mt-2">
                    <span className="w-4 h-[1px] bg-gold/20" />
                    <p className="text-[9px] text-white/40 uppercase tracking-widest">Data Saver Active</p>
                    <span className="w-4 h-[1px] bg-gold/20" />
                  </div>
                </div>

                {/* Subtle Glow */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover/btn:bg-gold/10 transition-colors" />
              </button>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-700">
                {album.iframes.map((iframe, idx) => (
                  <div
                    key={`${album.id}-${idx}`}
                    className="relative w-full rounded-md overflow-hidden bg-black/40 shadow-lg"
                    dangerouslySetInnerHTML={{ __html: iframe }}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full min-h-[160px] text-foreground/30 border border-dashed border-white/10 rounded-sm">
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
