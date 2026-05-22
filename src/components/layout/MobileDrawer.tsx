"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Home,
  User,
  Music,
  Award,
  Users,
  Image as ImageIcon,
  Mail,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Discography", href: "#discography", icon: Music },
  { name: "Legacy", href: "#legacy", icon: Award },
  { name: "Collaborations", href: "#collaborations", icon: Users },
  { name: "Gallery", href: "#gallery", icon: ImageIcon },
  { name: "Contact", href: "#contact", icon: Mail },
];

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export default function MobileDrawer({ isOpen, onClose, activeSection }: MobileDrawerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const drawerContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] md:hidden"
          />

          {/* Sidebar Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-[320px] bg-black/95 backdrop-blur-xl border-l border-gold/10 z-[9999] md:hidden flex flex-col shadow-2xl rounded-l-[2rem]"
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-gold/10">
              <span className="text-xl font-serif font-bold text-gold tracking-wider">
                SAOTY AREWA
              </span>
              <button
                onClick={onClose}
                className="p-2 text-gold/60 hover:text-gold transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-grow flex flex-col items-stretch justify-start gap-1.5 overflow-y-auto py-8 px-4">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                const Icon = link.icon;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 py-3.5 px-4 rounded-xl transition-all duration-200 group",
                        isActive
                          ? "bg-white/10 text-gold"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <div className={cn(
                        "flex items-center justify-center transition-colors",
                        isActive ? "text-gold" : "text-white/40 group-hover:text-white"
                      )}>
                        <Icon size={18} />
                      </div>

                      <span className={cn(
                        "text-[16px] font-medium tracking-tight flex-grow",
                        isActive ? "text-gold font-semibold" : ""
                      )}>
                        {link.name}
                      </span>

                      {isActive ? (
                        <motion.div
                          layoutId="activeIndicator"
                          className="w-1 h-5 rounded-full bg-gold"
                        />
                      ) : (
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="mt-auto pt-8">
                <Link
                  href="#contact"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full bg-gold text-black py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all active:scale-[0.98] shadow-lg shadow-gold/20"
                >
                  <Mail size={16} />
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>

            {/* Footer Text */}
            <div className="p-8 text-center text-white/20 text-[10px] tracking-[0.2em] uppercase border-t border-gold/5">
              © {new Date().getFullYear()} Saoty Arewa
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(drawerContent, document.body);
}
