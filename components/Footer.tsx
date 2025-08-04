import Link from "next/link";
import { Instagram, Music, ShoppingBag } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray border-t border-medium-gray mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <Link
              href="https://instagram.com/thepoetmalik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-white/60 hover:text-accent-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-white/60 hover:text-accent-gold transition-colors duration-300"
              aria-label="Spotify"
            >
              <Music size={20} />
            </Link>
            <Link
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-white/60 hover:text-accent-gold transition-colors duration-300"
              aria-label="Amazon"
            >
              <ShoppingBag size={20} />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-soft-white/60 text-sm">
            © {currentYear} The Poet Malik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
