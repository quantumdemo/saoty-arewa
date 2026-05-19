import Link from "next/link";
import { socialLinks } from "@/data/albums";
import { Instagram, Facebook, Youtube, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black/80 border-t border-gold/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-serif text-gold mb-6">Saoty Arewa</h3>
            <p className="text-foreground/60 leading-relaxed max-w-sm">
              The official platform celebrating the musical legacy and moral teachings
              of Alhaji AbdulAzeez Abdulsalam Abiodun.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif text-gold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-foreground/60 hover:text-gold transition-colors">Biography</Link></li>
              <li><Link href="#discography" className="text-foreground/60 hover:text-gold transition-colors">Discography</Link></li>
              <li><Link href="#legacy" className="text-foreground/60 hover:text-gold transition-colors">Impact</Link></li>
              <li><Link href="#gallery" className="text-foreground/60 hover:text-gold transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif text-gold mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-3 glass-card hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-3 glass-card hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="p-3 glass-card hover:text-gold transition-colors">
                <Youtube size={20} />
              </a>
              <a href={socialLinks.audiomack} target="_blank" rel="noopener noreferrer" className="p-3 glass-card hover:text-gold transition-colors">
                <Music2 size={20} />
              </a>
            </div>
            <p className="text-sm text-foreground/40">Booking: booking@saotyarewa.com</p>
          </div>
        </div>

        <div className="border-t border-gold/5 pt-8 text-center text-sm text-foreground/40">
          <p>© {new Date().getFullYear()} Alhaji Saoty Arewa. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
