"use client";

import { Music2, Headphones, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MusicTrack } from "@/types/contentful";

export default function MusicContent({ tracks }: { tracks: MusicTrack[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-accent-gold mb-12 text-center">
        Music
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {tracks.map((track, index) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-dark-gray rounded-lg p-6 hover:bg-medium-gray transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-soft-white mb-1">
                  {track.title}
                </h3>
                <p className="text-soft-white/60">
                  {track.albumName && `${track.albumName} • `}
                  {track.releaseYear}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                {track.spotifyUrl && (
                  <Link
                    href={track.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-soft-white/60 hover:text-accent-gold transition-colors duration-300"
                    aria-label="Listen on Spotify"
                  >
                    <Music2 size={20} />
                  </Link>
                )}
                {track.appleMusicUrl && (
                  <Link
                    href={track.appleMusicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-soft-white/60 hover:text-accent-gold transition-colors duration-300"
                    aria-label="Listen on Apple Music"
                  >
                    <Headphones size={20} />
                  </Link>
                )}
                {track.amazonMusicUrl && (
                  <Link
                    href={track.amazonMusicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-soft-white/60 hover:text-accent-gold transition-colors duration-300"
                    aria-label="Listen on Amazon Music"
                  >
                    <ShoppingBag size={20} />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
