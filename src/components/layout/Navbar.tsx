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
          className="md:hidden text-gold p-2 flex flex-col justify-center items-center gap-1.5 w-10 h-10 z-[10000] relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-6 h-0.5 bg-gold block rounded-full"
          />
          <motion.span
            animate={{
              opacity: isOpen ? 0 : 1
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-6 h-0.5 bg-gold block rounded-full"
          />
          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-6 h-0.5 bg-gold block rounded-full"
          />
        </button>
      </div>

      {/* Mobile Nav Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] md:hidden"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-black/90 backdrop-blur-md border-l border-gold/10 z-[9999] md:hidden flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-gold/10">
                <span className="text-xl font-serif font-bold text-gold tracking-wider">
                  SAOTY AREWA
                </span>
                <div className="w-10 h-10" /> {/* Spacer to balance header */}
              </div>

              <div className="flex-grow flex flex-col items-stretch justify-center gap-2 overflow-hidden py-6 px-4">
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
                      "text-lg font-serif py-3 px-5 block transition-all rounded-sm border border-gold/5 bg-white/5 shadow-[0_4px_10px_rgba(0,0,0,0.3)]",
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
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
