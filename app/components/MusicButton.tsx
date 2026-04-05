"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    // Using a freely available gentle instrumental loop
    // In production, replace with actual music URL
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Attempt to play — may fail silently due to browser policy
      audioRef.current.play().catch(() => {
        // Silent fail — browser autoplay policy
      });
      setIsPlaying(true);
    }
  };

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
        style={{
          background: "linear-gradient(135deg, #C41E3A, #9A1828)",
          boxShadow: "0 4px 20px rgba(196,30,58,0.4)",
        }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {/* Pulse ring when playing */}
        {isPlaying && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ border: "2px solid rgba(196,30,58,0.5)" }}
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ border: "2px solid rgba(212,160,48,0.4)" }}
              animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </>
        )}

        {/* Icon */}
        <AnimatePresence mode="wait">
          <motion.span
            key={isPlaying ? "pause" : "play"}
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="text-lg"
          >
            {isPlaying ? "🔊" : "🎵"}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
      >
        <span
          className="text-xs font-body font-light px-3 py-1.5 rounded-full shadow-md"
          style={{
            background: "rgba(253,250,244,0.95)",
            border: "1px solid rgba(212,160,48,0.25)",
            color: "#7D1225",
          }}
        >
          {isPlaying ? "Pause music" : "Play wedding music"}
        </span>
      </motion.div>
    </motion.div>
  );
}
