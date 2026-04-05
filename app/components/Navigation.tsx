"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#events", label: "Events" },
  { href: "#family", label: "Family" },
  { href: "#venue", label: "Venue" },
  // { href: "#rsvp", label: "RSVP" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setIsScrolled(v > 80));
    return unsubscribe;
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.8 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className="mx-4 mt-4 rounded-2xl transition-all duration-500"
        style={{
          background: isScrolled
            ? "rgba(253,250,244,0.92)"
            : "rgba(253,250,244,0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: isScrolled
            ? "0 4px 24px rgba(212,160,48,0.1), 0 0 0 1px rgba(212,160,48,0.15)"
            : "none",
        }}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl">💍</span>
            <div>
              <p
                className="text-base leading-none"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  color: "#C41E3A",
                  lineHeight: 1.2,
                }}
              >
                Mr & Mrs
              </p>
              <p className="text-[9px] font-body font-light tracking-[0.2em] uppercase text-gold-600">
                21 April 2026
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-xs font-light tracking-[0.25em] uppercase text-gray-700 hover:text-maroon-700 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-5 h-px block bg-maroon-700 origin-center"
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-5 h-px block bg-maroon-700"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-5 h-px block bg-maroon-700 origin-center"
              animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-1 px-5 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-xs font-light tracking-[0.25em] uppercase text-gray-700 hover:text-maroon-700 py-2 border-b border-gold-100 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
