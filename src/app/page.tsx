"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Discography from "@/components/sections/Discography";
import Legacy from "@/components/sections/Legacy";
import Collaborations from "@/components/sections/Collaborations";
import Gallery from "@/components/sections/Gallery";
import FeaturedCarousel from "@/components/sections/FeaturedCarousel";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) progressBar.style.width = scrolled + "%";
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedCarousel />
      <Discography />
      <Legacy />
      <Collaborations />
      <Gallery />
      <Footer />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60]">
        <div className="h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)] w-0 transition-all duration-100 ease-out" id="scroll-progress" />
      </div>
    </div>
  );
}
