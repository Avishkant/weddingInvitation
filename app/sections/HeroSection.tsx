"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import coupleImage from "./5.jpg";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden top-20"
      style={{
        background:
          "linear-gradient(160deg, #FDFAF4 0%, #FAF4E8 30%, #F5E8D0 60%, #FAF4E8 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left mandala */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <MandalaDecor />
        </motion.div>

        {/* Bottom right mandala */}
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <MandalaDecor />
        </motion.div>

        {/* Floating petals - reduced from 6 to 3 */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${15 + i * 35}%`,
              top: `${20 + (i % 2) * 40}%`,
              willChange: "transform",
            }}
            animate={{
              y: [0, -25, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut",
            }}
          >
            {["🌸", "🌺", "🌼"][i]}
          </motion.div>
        ))}

        {/* Gold particle dots - reduced from 20 to 8 */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${2 + (i % 2)}px`,
              height: `${2 + (i % 2)}px`,
              background: `rgba(212, 160, 48, ${0.3 + (i % 3) * 0.15})`,
              left: `${(i * 12 + 5) % 90}%`,
              top: `${(i * 16 + 10) % 85}%`,
              willChange: "transform",
            }}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: (i * 0.4) % 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16"
      >
        {/* Left side - Names and text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Sanskrit blessing */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <p
              className="text-2xl md:text-3xl text-gold-500 mb-1"
              style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}
            >
              ॥ श्री गणेशाय नमः ॥
            </p>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-600 font-body font-light">
              With Blessings of Lord Ganesha
            </p>
          </motion.div>

          {/* Top ornament */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="w-full mb-8 flex justify-center lg:justify-start"
          >
            <svg viewBox="0 0 300 40" className="w-full max-w-xs">
              <line
                x1="0"
                y1="20"
                x2="120"
                y2="20"
                stroke="url(#goldGrad)"
                strokeWidth="0.5"
              />
              <polygon
                points="125,15 135,20 125,25"
                fill="#D4A030"
                opacity="0.8"
              />
              <polygon points="150,12 155,20 150,28 145,20" fill="#D4A030" />
              <polygon
                points="175,15 165,20 175,25"
                fill="#D4A030"
                opacity="0.8"
              />
              <line
                x1="180"
                y1="20"
                x2="300"
                y2="20"
                stroke="url(#goldGrad2)"
                strokeWidth="0.5"
              />
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4A030" stopOpacity="0" />
                  <stop offset="100%" stopColor="#D4A030" stopOpacity="1" />
                </linearGradient>
                <linearGradient
                  id="goldGrad2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#D4A030" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4A030" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Invitation text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xs md:text-sm tracking-[0.4em] uppercase font-body font-light text-maroon-600 mb-8"
          >
            Together with their families
          </motion.p>

          {/* Names with ring decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              type: "spring",
              stiffness: 80,
            }}
            className="mb-6"
          >
            <h1
              className="font-display font-light leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
            >
              <span className="gold-shimmer font-medium">Avishkant</span>
            </h1>
          </motion.div>

          {/* Ring separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 mb-6"
          >
            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-gold-400" />
            <div className="relative">
              <span
                className="text-3xl md:text-4xl"
                style={{ filter: "drop-shadow(0 0 8px rgba(212,160,48,0.5))" }}
              >
                💍
              </span>
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,160,48,0.3), transparent)",
                }}
              />
            </div>
            <div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-gold-400" />
          </motion.div>

          {/* Second name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 1.2,
              type: "spring",
              stiffness: 80,
            }}
            className="mb-10"
          >
            <h1
              className="font-display font-light leading-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
            >
              <span className="gold-shimmer font-medium">Manisha</span>
            </h1>
          </motion.div>

          {/* Date & Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="text-center lg:text-left space-y-3"
          >
            {/* <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-gold-500">✦</span>
              <p className="font-display text-lg md:text-xl font-light tracking-wider text-maroon-800">
                21st April 2026
              </p>
              <span className="text-gold-500">✦</span>
            </div>
            <p className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-gold-700 font-light">
              Village Ledgaon, Dist. Dhar, MP
            </p> */}
          </motion.div>
        </motion.div>

        {/* Right side - Couple Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
            {/* Outermost ornamental ring with diamonds */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px solid rgba(212,160,48,0.6)",
                boxShadow:
                  "0 0 60px rgba(212,160,48,0.3), inset 0 0 30px rgba(212,160,48,0.1)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {/* Ornamental diamonds around outer ring */}
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 100;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <div
                    key={`diamond-${i}`}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(calc(-50% + ${x}%), calc(-50% + ${y}%))`,
                      background: "#D4A030",
                      boxShadow: "0 0 12px rgba(212,160,48,0.8)",
                    }}
                  />
                );
              })}
            </motion.div>

            {/* Second decorative circle - petals */}
            <motion.div
              className="absolute inset-[-8px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg 45deg, rgba(212,160,48,0.15) 45deg 90deg)",
                opacity: 0.8,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            {/* Third decorative circle with dashes */}
            <motion.div
              className="absolute inset-4 rounded-full"
              style={{
                border: "2px dashed rgba(212,160,48,0.4)",
                opacity: 0.6,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner gold frame circle */}
            <motion.div
              className="absolute inset-5 rounded-full"
              style={{
                border: "3px solid #D4A030",
                boxShadow:
                  "0 0 30px rgba(212,160,48,0.4), inset 0 0 20px rgba(212,160,48,0.2)",
              }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Photo circle with enhanced styling */}
            <div
              className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-gold-100 via-cream-100 to-gold-200"
              style={{
                boxShadow:
                  "0 20px 60px rgba(212,160,48,0.6), inset 0 0 40px rgba(196,30,58,0.08), 0 0 40px rgba(212,160,48,0.3)",
              }}
            >
              <Image
                src={coupleImage}
                alt="Avishkant & Manisha"
                className="w-full h-full object-cover"
                priority
              />

              {/* Subtle overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at center, transparent 30%, rgba(212,160,48,0.1) 100%)",
                }}
              />
            </div>

            {/* Elegant cardinal point accents - geometric dots */}
            {[
              { top: "-28px", left: "50%" },
              { top: "50%", right: "-28px" },
              { bottom: "-28px", left: "50%" },
              { top: "50%", left: "-28px" },
            ].map((pos, i) => (
              <motion.div
                key={`cardinal-${i}`}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  top: pos.top,
                  bottom: pos.bottom,
                  left: pos.left,
                  right: pos.right,
                  transform: "translate(-50%, -50%)",
                  background: "#D4A030",
                  boxShadow:
                    "0 0 16px rgba(212,160,48,0.9), inset 0 0 8px rgba(255,255,255,0.4)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* Floating sparkles around photo */}
            {[...Array(6)].map((_, i) => {
              const angle = (i / 6) * Math.PI * 2;
              const radius = 95;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-gold-300"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}%), calc(-50% + ${y}%))`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-xs tracking-[0.3em] uppercase font-body text-gold-600 font-light">
          Scroll to explore
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-gold-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function MandalaDecor() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
      <circle cx="100" cy="100" r="90" stroke="#D4A030" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="70" stroke="#D4A030" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="50" stroke="#D4A030" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="30" stroke="#D4A030" strokeWidth="0.5" />
      {[...Array(8)].map((_, i) => {
        const angle = (i * 360) / 8;
        const rad = (angle * Math.PI) / 180;
        const x1 = 100 + 20 * Math.cos(rad);
        const y1 = 100 + 20 * Math.sin(rad);
        const x2 = 100 + 90 * Math.cos(rad);
        const y2 = 100 + 90 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#D4A030"
            strokeWidth="0.5"
          />
        );
      })}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const x = 100 + 60 * Math.cos(rad);
        const y = 100 + 60 * Math.sin(rad);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            stroke="#D4A030"
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
}
