"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { singleAlbums, duetAlbums } from "@/data/albums";
import AlbumCard from "@/components/ui/AlbumCard";
import { Search, Filter } from "lucide-react";

export default function Discography() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"solo" | "duet">("solo");

  const allAlbums = useMemo(() => {
    return activeTab === "solo" ? singleAlbums : duetAlbums;
  }, [activeTab]);

  const years = useMemo(() => {
    const y = Array.from(new Set(allAlbums.map(a => a.year.toString()))).sort((a, b) => b.localeCompare(a));
    return ["All", ...y];
  }, [allAlbums]);

  const filteredAlbums = useMemo(() => {
    return allAlbums.filter(album => {
      const matchesSearch = album.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesYear = selectedYear === "All" || album.year.toString() === selectedYear;
      return matchesSearch && matchesYear;
    }).sort((a, b) => b.year - a.year);
  }, [allAlbums, searchTerm, selectedYear]);

  return (
    <section id="discography" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h3 className="text-gold uppercase tracking-widest text-sm mb-4">Complete Archive</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Discography</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setActiveTab("solo")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "solo" ? "bg-gold text-black" : "bg-white/5 text-foreground/60 hover:bg-white/10"}`}
            >
              Solo Works
            </button>
            <button
              onClick={() => setActiveTab("duet")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "duet" ? "bg-gold text-black" : "bg-white/5 text-foreground/60 hover:bg-white/10"}`}
            >
              Duets & Collabs
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
            <input
              type="text"
              placeholder="Search albums..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-gold/10 rounded-sm py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full bg-white/5 border border-gold/10 rounded-sm py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold/50 appearance-none transition-colors"
            >
              {years.map(year => (
                <option key={year} value={year} className="bg-background text-white">{year}</option>
              ))}
            </select>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAlbums.length === 0 && (
          <div className="text-center py-20 text-foreground/40 italic">
            No albums found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
}
