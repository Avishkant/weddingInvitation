"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "A wedding is a celebration not just of love but of life itself.",
    author: "Ancient Vedic Wisdom",
  },
  {
    text: "Two souls, two paths, one destiny — bound by love, blessed by tradition.",
    author: "The Patidar Family",
  },
];

const blessings = [
  { icon: "🌺", text: "May your love bloom like a thousand flowers" },
  { icon: "🔥", text: "May your home be filled with warmth & light" },
  { icon: "💫", text: "May prosperity & peace surround you always" },
  { icon: "🙏", text: "May the divine bless every step of your journey" },
  { icon: "🌿", text: "May wisdom & harmony guide your union" },
  { icon: "💕", text: "May your hearts forever beat as one" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function StorySection() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #FDFAF4 0%, #FAF4E8 100%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl opacity-5"
            style={{
              left: `${15 + i * 14}%`,
              top: `${5 + (i % 2) * 70}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, -20, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            {["🌸", "🌺", "💐", "✨", "🌼", "💕"][i]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Love Story Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs tracking-[0.4em] uppercase font-body font-light text-gold-600 mb-3"
          >
            A Beautiful Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl md:text-6xl font-light text-maroon-800 mb-4"
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl text-gold-500"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            written in the stars
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-px max-w-xs mx-auto mt-6 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          />
        </motion.div>

        {/* Couple intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center"
        >
          {/* Groom card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="text-center p-8 rounded-2xl group cursor-pointer"
            style={{
              background:
                "linear-gradient(135deg, rgba(253,250,244,0.9), rgba(249,237,208,0.9))",
              border: "1px solid rgba(212,160,48,0.25)",
              boxShadow: "0 8px 32px rgba(212,160,48,0.1)",
            }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto mb-5 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #D4A030, #B8860B)",
              }}
            >
              🤵
            </motion.div>
            <h3 className="font-display text-2xl font-medium text-gold-700 mb-1">
              Avishkant
            </h3>
            <p className="font-display text-lg font-light text-maroon-600 mb-3">
              Patidar
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent mb-3 group-hover:via-gold-500 transition-all"
            />
            <p className="font-body text-xs font-light text-gray-500 tracking-wide uppercase">
              The Groom
            </p>
          </motion.div>

          {/* Center heart */}
          <div className="flex flex-col items-center justify-center py-8">
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                rotate: [0, 8, -8, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl mb-4"
            >
              💕
            </motion.div>
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-16 w-px bg-gradient-to-b from-gold-400 via-gold-300 to-transparent"
            />
          </div>

          {/* Bride card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="text-center p-8 rounded-2xl group cursor-pointer"
            style={{
              background:
                "linear-gradient(135deg, rgba(253,250,244,0.9), rgba(249,237,208,0.9))",
              border: "1px solid rgba(212,160,48,0.25)",
              boxShadow: "0 8px 32px rgba(212,160,48,0.1)",
            }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto mb-5 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #D4A030, #B8860B)",
              }}
            >
              👰
            </motion.div>
            <h3 className="font-display text-2xl font-medium text-gold-700 mb-1">
              Manisha
            </h3>
            <p className="font-display text-lg font-light text-maroon-600 mb-3">
              Patidar
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent mb-3 group-hover:via-gold-500 transition-all"
            />
            <p className="font-body text-xs font-light text-gray-500 tracking-wide uppercase">
              The Bride
            </p>
          </motion.div>
        </motion.div>

        {/* Blessings Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {blessings.map((blessing, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.08, rotate: 2 }}
              className="p-6 rounded-xl text-center backdrop-blur-sm cursor-pointer transition-all"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,160,48,0.1) 0%, rgba(212,160,48,0.05) 100%)",
                border: "1px solid rgba(212,160,48,0.2)",
              }}
            >
              <motion.span
                animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.15,
                }}
                className="text-4xl block mb-3"
              >
                {blessing.icon}
              </motion.span>
              <p className="font-body text-sm font-light text-maroon-700">
                {blessing.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quotes */}
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="mb-8 p-8 rounded-2xl text-center cursor-pointer transition-all"
            style={{
              background:
                "linear-gradient(135deg, rgba(253,250,244,0.7) 0%, rgba(245,232,208,0.5) 100%)",
              border: "1px solid rgba(212,160,48,0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <motion.p
              className="font-display text-2xl md:text-3xl font-light text-maroon-700 mb-4 leading-relaxed"
              style={{ fontStyle: "italic" }}
            >
              "{quote.text}"
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-xs tracking-[0.3em] uppercase font-body text-gold-600"
            >
              — {quote.author}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
