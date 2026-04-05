"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    guests: "1",
    message: "",
    attending: "yes",
  });

  const handleSubmit = () => {
    if (!form.name.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #7D1225 0%, #C41E3A 50%, #9A1828 100%)",
      }}
    >
      {/* Animated decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Concentric circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-gold-400"
            style={{
              width: `${100 + i * 60}px`,
              height: `${100 + i * 60}px`,
              left: `${50 - (100 + i * 60) / 2}%`,
              top: `${50 - (100 + i * 60) / 2}%`,
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Floating flowers */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`flower-${i}`}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${12 + i * 11}%`,
              top: `${15 + (i % 3) * 28}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, -15, 0],
              rotate: [0, 20, -20, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.35,
            }}
          >
            {["🌸", "🌺", "💐", "🌼", "✨", "💕", "🌿", "🎀"][i]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <p className="text-xs tracking-[0.4em] uppercase font-body font-light text-gold-200 mb-3">
            Your Presence
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-cream-50 mb-4">
            RSVP
          </h2>
          <p
            className="text-2xl md:text-3xl text-gold-300 mb-4"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Let us know you're coming
          </p>
          <p className="font-body text-sm font-light text-red-100 opacity-80 max-w-sm mx-auto leading-relaxed">
            Your presence will make our celebration complete. Please let us know
            if you'll be joining us.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-8 md:p-10 text-left"
              style={{
                background: "rgba(253,250,244,0.08)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(241,216,152,0.2)",
              }}
            >
              {/* Attending? */}
              <div className="mb-5">
                <label className="block text-xs tracking-[0.3em] uppercase font-body font-light text-gold-300 mb-3">
                  Will you attend?
                </label>
                <div className="flex gap-3">
                  {["yes", "no"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setForm({ ...form, attending: option })}
                      className="flex-1 py-2.5 rounded-xl font-body text-sm font-light tracking-wide transition-all duration-200"
                      style={{
                        background:
                          form.attending === option
                            ? "linear-gradient(135deg, #D4A030, #B8860B)"
                            : "rgba(255,255,255,0.07)",
                        color:
                          form.attending === option
                            ? "white"
                            : "rgba(255,255,255,0.7)",
                        border:
                          form.attending === option
                            ? "1px solid transparent"
                            : "1px solid rgba(241,216,152,0.2)",
                      }}
                    >
                      {option === "yes"
                        ? "🎉 Joyfully accept"
                        : "😢 Regretfully decline"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="mb-5">
                <label className="block text-xs tracking-[0.3em] uppercase font-body font-light text-gold-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl font-body text-sm font-light placeholder-white/30 text-white outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(241,216,152,0.2)",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(212,160,48,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(241,216,152,0.2)")
                  }
                />
              </div>

              {/* Guests */}
              <div className="mb-5">
                <label className="block text-xs tracking-[0.3em] uppercase font-body font-light text-gold-300 mb-2">
                  Number of Guests
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl font-body text-sm font-light text-white outline-none appearance-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(241,216,152,0.2)",
                  }}
                >
                  {[1, 2, 3, 4, 5, "6+"].map((n) => (
                    <option
                      key={n}
                      value={n}
                      className="bg-maroon-900 text-white"
                    >
                      {n} {Number(n) === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mb-7">
                <label className="block text-xs tracking-[0.3em] uppercase font-body font-light text-gold-300 mb-2">
                  A Message for the Couple
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Share your blessings & love..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl font-body text-sm font-light placeholder-white/30 text-white outline-none resize-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(241,216,152,0.2)",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(212,160,48,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(241,216,152,0.2)")
                  }
                />
              </div>

              {/* Submit */}
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-xl font-body text-sm font-medium tracking-[0.3em] uppercase transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #D4A030, #F1D898, #D4A030)",
                  backgroundSize: "200% auto",
                  color: "#5C3F04",
                  boxShadow: "0 4px 20px rgba(212,160,48,0.4)",
                }}
              >
                Send with Love 💕
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="rounded-2xl p-10 text-center"
              style={{
                background: "rgba(253,250,244,0.08)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(241,216,152,0.3)",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: 3 }}
                className="text-6xl mb-5 block"
              >
                🎉
              </motion.div>
              <h3 className="font-display text-3xl font-light text-cream-50 mb-3">
                Thank You, {form.name}!
              </h3>
              <p
                className="text-2xl text-gold-300 mb-4"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                {form.attending === "yes"
                  ? "We can't wait to see you!"
                  : "You'll be missed dearly"}
              </p>
              <p className="font-body text-sm font-light text-red-100 opacity-70">
                {form.attending === "yes"
                  ? "Your presence will make our day even more special. See you on 21st April 2026! 🌸"
                  : "We understand and appreciate you letting us know. We'll celebrate with you in spirit! 💕"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
