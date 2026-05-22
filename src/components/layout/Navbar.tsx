"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
}

export default function Navbar({ isOpen, setIsOpen, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    </nav>
  );
}
