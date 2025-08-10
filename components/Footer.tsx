import Link from "next/link";
import { Heart, Mail } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-charcoal border-t border-mocha-mousse/20 mt-auto">
      <div className="container mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-display text-2xl font-bold text-gradient">
              The Poet Malik
            </h3>
            <p className="text-body text-warm-white/70 max-w-sm">
              Connecting souls through the power of words, music, and authentic
              storytelling from Fort Worth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-body font-semibold text-warm-white">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/bio"
                className="text-warm-white/70 hover:text-mocha-mousse transition-colors duration-300 text-sm"
              >
                About Malik
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
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-body font-semibold text-warm-white">Connect</h4>
            <div className="flex flex-wrap gap-3">
              <SocialLinks variant="footer" />
              <Link
                href="/contact"
                className="p-3 bg-medium-charcoal hover:bg-mocha-mousse/20 border border-mocha-mousse/20 hover:border-mocha-mousse/40 rounded-lg transition-all duration-300 hover-lift focus-ring hover:text-mocha-mousse"
                aria-label="Contact"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 md:pt-8 border-t border-mocha-mousse/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
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
