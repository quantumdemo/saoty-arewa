"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import MobileDrawer from "@/components/layout/MobileDrawer";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Discography from "@/components/sections/Discography";
import Legacy from "@/components/sections/Legacy";
import Collaborations from "@/components/sections/Collaborations";
import Gallery from "@/components/sections/Gallery";
import FeaturedCarousel from "@/components/sections/FeaturedCarousel";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Progress Bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) progressBar.style.width = scrolled + "%";

      // Active Section
      const sections = ["home", "about", "discography", "legacy", "collaborations", "gallery", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        activeSection={activeSection}
      />

      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
      />

      <motion.div
        animate={{
          scale: isMenuOpen ? 0.98 : 1,
          filter: isMenuOpen ? "blur(4px)" : "blur(0px)",
          borderRadius: isMenuOpen ? "2rem" : "0rem",
          x: isMenuOpen ? "-2%" : "0%"
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 origin-right bg-background min-h-screen"
      >
        <Hero />
        <About />
        <FeaturedCarousel />
        <Discography />
        <Legacy />
        <Collaborations />
        <Gallery />
        <Footer />
      </motion.div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60]">
        <div className="h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)] w-0 transition-all duration-100 ease-out" id="scroll-progress" />
      </div>
    </div>
  );
}
