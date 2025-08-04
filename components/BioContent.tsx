"use client";

import { motion } from "framer-motion";
import type { Bio } from "@/types/contentful";

export default function BioContent({ bio }: { bio: Bio }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-accent-gold">
        {bio.title}
      </h1>
      <div className="space-y-4 text-soft-white/80 leading-relaxed">
        {bio.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
