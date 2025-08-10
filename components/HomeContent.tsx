"use client";

import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function HomeContent() {
  return (
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-4 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-soft-white">
          Words are the
          <span className="block text-accent-gold mt-2">
            bridges between souls
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-soft-white/80 font-light max-w-2xl mx-auto mb-6 md:mb-8">
          Poetry. Music. Stories. From the heart of Fort Worth.
        </p>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-8"
        >
          <p className="text-sm md:text-base text-soft-white/60 mb-4 md:mb-6 font-light">
            Connect with me
          </p>
          <SocialLinks variant="hero" />
        </motion.div>
      </motion.div>
    </div>
  );
}
