"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryImage } from "@/types/contentful";

export default function GalleryContent({ images }: { images: GalleryImage[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-accent-gold mb-12 text-center">
        Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
          >
            <Image
              src={image.imageUrl}
              alt={image.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-off-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-soft-white mb-2">
                  {image.title}
                </h3>
                {image.description && (
                  <p className="text-soft-white/80 text-sm">
                    {image.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
