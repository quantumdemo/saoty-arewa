"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Discography", href: "#discography" },
  { name: "Legacy", href: "#legacy" },
  { name: "Collaborations", href: "#collaborations" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-300 px-6 py-4",
        isScrolled || isOpen
          ? "bg-black/90 backdrop-blur-md border-b border-gold/10 py-3 z-[500]"
          : "bg-transparent z-50"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-gold tracking-wider">
            SAOTY AREWA
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-widest transition-all relative py-2",
                  isActive ? "text-gold" : "text-foreground/80 hover:text-gold"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gold p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[9999] md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-gold/10">
              <span className="text-2xl font-serif font-bold text-gold tracking-wider">
                SAOTY AREWA
              </span>
              <button
                className="text-gold p-2 hover:bg-gold/10 rounded-full transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex-grow flex flex-col items-center justify-start gap-4 overflow-y-auto pt-10 pb-10 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-xl font-serif py-4 px-6 block transition-all rounded-sm border border-gold/5 bg-white/5 shadow-[0_4px_10px_rgba(0,0,0,0.3)]",
                      activeSection === link.href.substring(1) ? "text-gold border-gold/30 bg-gold/5" : "text-white/80 hover:text-gold hover:bg-white/10"
                    )}
                  >
                    <div className="flex items-center justify-between">
                        <span>{link.name}</span>
                        <div className={cn("w-1.5 h-1.5 rounded-full", activeSection === link.href.substring(1) ? "bg-gold shadow-[0_0_8px_#d4af37]" : "bg-white/10")} />
                    </div>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                 <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="bg-gold text-black px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  >
                    Get in Touch
                 </Link>
              </motion.div>
            </div>

            <div className="p-8 text-center text-white/20 text-xs tracking-[0.2em] uppercase">
              © {new Date().getFullYear()} Saoty Arewa
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
