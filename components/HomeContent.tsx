"use client";

import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function HomeContent() {
  return (
    <div className="absolute left-0 bottom-8 md:top-8 md:bottom-auto md:top-12 lg:top-16 z-10 text-left pl-4 sm:pl-6 md:pl-12 lg:pl-16 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-md sm:max-w-lg md:max-w-xl">
      {/* Blurred backdrop patch */}
      <div className="absolute inset-0 -m-4 sm:-m-6 md:-m-8 bg-black/20 backdrop-blur-md rounded-xl border border-white/10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8"
      >
        {/* Social Media Links - Moved to top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xs sm:text-sm md:text-base text-soft-white/60 mb-3 sm:mb-4 font-light">
            Connect with me
          </p>
          <div className="flex justify-start">
            <SocialLinks variant="hero" />
          </div>
        </motion.div>

        {/* Main Text - Moved below social links */}
        <div className="space-y-1 sm:space-y-2">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-soft-white font-light leading-relaxed">
            Poetry. Music. Stories.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-soft-white/80 font-light leading-relaxed">
            From the heart of
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-accent-gold font-light leading-relaxed">
            Fort Worth
          </p>
        </div>
      </motion.div>
    </div>
  );
}
