"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="relative py-20 px-6 text-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #2C1810 0%, #1a0f0a 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #D4A030,
              #D4A030 1px,
              transparent 1px,
              transparent 40px
            )`,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Star icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <span className="text-5xl text-gold-400">✦</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Main message */}
          <p
            className="text-4xl md:text-5xl text-gold-100 mb-8 leading-relaxed"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontStyle: "italic",
            }}
          >
            We look forward to
            <br />
            celebrating with you!
          </p>

          {/* Divider */}
          <div
            className="h-px mb-8 mx-auto w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4A030, transparent)",
            }}
          />

          {/* Venue and date */}
          {/* <p className="text-sm tracking-[0.3em] uppercase font-body font-light text-gold-300 mb-12">
            Village Ledgaon · April 2026
          </p> */}

          {/* Bottom text */}
          <p className="font-body text-xs font-light text-gold-600 tracking-wider">
            Made with 💖 for Avishkant & Manisha
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
