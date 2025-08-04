"use client";

import { motion } from "framer-motion";

export default function HomeContent() {
  return (
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-soft-white">
          Words are the
          <span className="block text-accent-gold mt-2">
            bridges between souls
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-soft-white/80 font-light max-w-2xl mx-auto">
          Poetry. Music. Stories. From the heart of Fort Worth.
        </p>
      </motion.div>
    </div>
  );
}
