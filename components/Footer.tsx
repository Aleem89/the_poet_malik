import Link from "next/link";
import { Heart, Mail } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-charcoal border-t border-mocha-mousse/20 mt-auto">
      <div className="container mx-auto px-6 py-3 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-3">
          {/* Brand Section */}
          <div className="flex-shrink-0">
            <h3 className="text-display text-xl font-bold text-metallic">
              The Poet Malik
            </h3>
          </div>

          {/* Quick Links - Horizontal Layout */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/bio"
              className="text-warm-white/70 hover:text-mocha-mousse transition-colors duration-300 text-sm"
            >
              Bio
            </Link>
            <Link
              href="/gallery"
              className="text-warm-white/70 hover:text-mocha-mousse transition-colors duration-300 text-sm"
            >
              Gallery
            </Link>
            <Link
              href="/music"
              className="text-warm-white/70 hover:text-mocha-mousse transition-colors duration-300 text-sm"
            >
              Music
            </Link>
            <Link
              href="/contact"
              className="text-warm-white/70 hover:text-mocha-mousse transition-colors duration-300 text-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Social Links - Compact */}
          <div className="flex items-center gap-2">
            <SocialLinks variant="footer" />
            <Link
              href="/contact"
              className="p-2 bg-medium-charcoal hover:bg-mocha-mousse/20 border border-mocha-mousse/20 hover:border-mocha-mousse/40 rounded-lg transition-all duration-300 focus-ring hover:text-mocha-mousse"
              aria-label="Contact"
            >
              <Mail size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-2 border-t border-mocha-mousse/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-body text-warm-white/60 text-sm">
              © {currentYear} The Poet Malik. All rights reserved.
            </p>

            <div className="flex items-center space-x-1 text-warm-white/60 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-mocha-mousse animate-pulse" />
              <span>in Fort Worth, TX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
