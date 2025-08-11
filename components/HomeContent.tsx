"use client";

import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function HomeContent() {
  return (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-y-[-5vh] z-10 text-left pl-4 sm:pl-6 md:pl-12 lg:pl-16 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-md sm:max-w-lg md:max-w-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-1 sm:space-y-2"
      >
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-soft-white font-light leading-relaxed">
          Poetry. Music. Stories.
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-soft-white/80 font-light leading-relaxed">
          From the heart of
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-accent-gold font-light leading-relaxed">
          Fort Worth
        </p>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4 sm:pt-6 md:pt-8"
        >
          <p className="text-xs sm:text-sm md:text-base text-soft-white/60 mb-3 sm:mb-4 font-light">
            Connect with me
          </p>
          <div className="flex justify-start">
            <SocialLinks variant="hero" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
