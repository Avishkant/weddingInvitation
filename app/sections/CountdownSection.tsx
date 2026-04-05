"use client";

import { useEffect, useState, memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const weddingDate = new Date("2026-04-21T12:35:00");
  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

const CountdownUnit = memo(function CountdownUnit({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const formatted = String(value).padStart(2, "0");

  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(253,250,244,0.9) 0%, rgba(245,232,208,0.9) 100%)",
          boxShadow:
            "0 8px 32px rgba(212,160,48,0.15), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 0 1px rgba(212,160,48,0.2)",
        }}
        whileHover={{
          boxShadow:
            "0 12px 40px rgba(212,160,48,0.25), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 0 1px rgba(212,160,48,0.3)",
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -30, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-display text-3xl md:text-5xl font-light text-maroon-800 countdown-digit relative z-10"
          >
            {formatted}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <motion.p
        className="mt-3 text-xs md:text-sm tracking-[0.3em] uppercase font-body font-light text-gold-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
});

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #7D1225 0%, #C41E3A 40%, #9A1828 70%, #7D1225 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-8 left-8 w-64 h-64 rounded-full border border-gold-400" />
          <div className="absolute top-12 left-12 w-48 h-48 rounded-full border border-gold-400" />
          <div className="absolute bottom-8 right-8 w-64 h-64 rounded-full border border-gold-400" />
          <div className="absolute bottom-12 right-12 w-48 h-48 rounded-full border border-gold-400" />
        </div>

        {/* Floating decorative flowers - reduced from 6 to 3 */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`flower-${i}`}
            className="absolute text-4xl pointer-events-none"
            style={{
              left: `${15 + i * 35}%`,
              top: `${15 + (i % 2) * 60}%`,
              opacity: 0.2,
              willChange: "transform",
            }}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          >
            🌸
          </motion.div>
        ))}

        {/* Gold particles - reduced from 15 to 6 */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${2 + (i % 2)}px`,
              height: `${2 + (i % 2)}px`,
              background: `rgba(241, 216, 152, ${0.4 + (i % 2) * 0.2})`,
              left: `${(i * 15 + 5) % 95}%`,
              top: `${(i * 20 + 10) % 80}%`,
              willChange: "transform",
            }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3 + (i % 2),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs tracking-[0.4em] uppercase font-body font-light text-gold-200 mb-4"
          >
            The Big Day Is Coming
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-4xl md:text-6xl font-light text-cream-50 mb-2"
          >
            Counting Down
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl text-gold-300 mb-12"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            to forever
          </motion.p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 mb-12 flex-wrap"
        >
          {mounted ? (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <CountdownUnit value={timeLeft.days} label="Days" />
              </motion.div>
              <motion.span
                animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gold-400 text-2xl md:text-4xl font-display mb-6 md:mb-8"
              >
                :
              </motion.span>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CountdownUnit value={timeLeft.hours} label="Hours" />
              </motion.div>
              <motion.span
                animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                className="text-gold-400 text-2xl md:text-4xl font-display mb-6 md:mb-8"
              >
                :
              </motion.span>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <CountdownUnit value={timeLeft.minutes} label="Minutes" />
              </motion.div>
              <motion.span
                animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                className="text-gold-400 text-2xl md:text-4xl font-display mb-6 md:mb-8"
              >
                :
              </motion.span>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <CountdownUnit value={timeLeft.seconds} label="Seconds" />
              </motion.div>
            </>
          ) : (
            <div className="h-28 flex items-center">
              <p className="text-gold-300 font-display text-2xl">Loading...</p>
            </div>
          )}
        </motion.div>

        {/* Target date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold-400/30 bg-white/5"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(212,160,48,0.3)",
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gold-400"
            >
              📅
            </motion.span>
            <p className="text-sm font-body font-light tracking-widest text-gold-200 uppercase">
              21 April 2026 · 12:35 PM
            </p>
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              className="text-gold-400"
            >
              📍
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
