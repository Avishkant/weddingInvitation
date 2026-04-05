"use client";

import { motion } from "framer-motion";

export default function FamilySection() {
  return (
    <section
      id="family"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FAF4E8 0%, #F5E8D0 50%, #FAF4E8 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 text-6xl opacity-10"
          style={{ willChange: "transform" }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          🌺
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-6xl opacity-10"
          style={{ willChange: "transform" }}
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 14, repeat: Infinity, delay: 1 }}
        >
          🌸
        </motion.div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #D4A030 0%, transparent 50%), 
                             radial-gradient(circle at 80% 50%, #C41E3A 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase font-body font-light text-gold-600 mb-3">
            Our Beloved
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-maroon-800 mb-4">
            The Families
          </h2>
          <p
            className="text-2xl md:text-3xl text-gold-500"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Two families becoming one
          </p>
        </motion.div>

        {/* Families */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Groom's family */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <FamilyCard
              side="Groom's Family"
              sideHindi="वरपक्ष"
              person={{ name: "Avishkant Patidar", role: "Groom", emoji: "🤵" }}
              parents={[
                { name: "Shri Manohar Patidar", role: "Father" },
                { name: "Smt. Sangita Patidar", role: "Mother" },
              ]}
              accentColor="#D4A030"
              bgColor="from-amber-50/80 to-yellow-50/60"
            />
          </motion.div>

          {/* Bride's family */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <FamilyCard
              side="Bride's Family"
              sideHindi="कन्यापक्ष"
              person={{ name: "Manisha Patidar", role: "Bride", emoji: "👰" }}
              parents={[
                { name: "Shri Manoj Kumar Patidar", role: "Father" },
                { name: "Smt. Shivkanya Patidar", role: "Mother" },
              ]}
              accentColor="#C41E3A"
              bgColor="from-rose-50/80 to-pink-50/60"
            />
          </motion.div>
        </div>

        {/* Union message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-block">
            <div
              className="px-8 md:px-12 py-6 md:py-8 rounded-2xl border"
              style={{
                background:
                  "linear-gradient(135deg, rgba(253,250,244,0.9) 0%, rgba(245,232,208,0.9) 100%)",
                borderColor: "rgba(212,160,48,0.25)",
                boxShadow: "0 8px 32px rgba(212,160,48,0.12)",
              }}
            >
              <p
                className="text-3xl md:text-4xl text-maroon-700 mb-3"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Avishkant & Manisha
              </p>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400" />
                <span className="text-gold-500 text-xl">💕</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400" />
              </div>
              <p className="font-body text-sm font-light text-gray-600 tracking-wide">
                "Two souls, one heart — beginning an eternal journey together"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FamilyCard({
  side,
  sideHindi,
  person,
  parents,
  accentColor,
  bgColor,
}: {
  side: string;
  sideHindi: string;
  person: { name: string; role: string; emoji: string };
  parents: { name: string; role: string }[];
  accentColor: string;
  bgColor: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${bgColor} p-8`}
      style={{
        border: `1px solid ${accentColor}25`,
        boxShadow: `0 8px 32px ${accentColor}15`,
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
        }}
      />

      {/* Side label */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p
            className="text-xs tracking-[0.3em] uppercase font-body font-light mb-1"
            style={{ color: accentColor }}
          >
            {side}
          </p>
          <p
            className="text-sm opacity-60"
            style={{
              fontFamily: "'Tiro Devanagari Hindi', serif",
              color: accentColor,
            }}
          >
            {sideHindi}
          </p>
        </div>
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
          style={{
            background: `${accentColor}15`,
            border: `1px solid ${accentColor}30`,
          }}
        >
          {person.emoji}
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px mb-6"
        style={{
          background: `linear-gradient(90deg, ${accentColor}50, transparent)`,
        }}
      />

      {/* Main person */}
      <div className="mb-6">
        <p className="text-xs tracking-[0.2em] uppercase font-body font-light text-gray-500 mb-1">
          {person.role}
        </p>
        <p
          className="font-display text-2xl md:text-3xl font-medium"
          style={{ color: accentColor }}
        >
          {person.name}
        </p>
      </div>

      {/* Parents */}
      <div>
        <p className="text-xs tracking-[0.2em] uppercase font-body font-light text-gray-500 mb-3">
          {person.role === "Groom" ? "Son of" : "Daughter of"}
        </p>
        <div className="space-y-3">
          {parents.map((parent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 8, scale: 1.02 }}
              className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
              style={{ background: `${accentColor}08` }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: accentColor }}
              />
              <div>
                <p className="font-display text-lg font-light text-gray-800">
                  {parent.name}
                </p>
                <p className="text-xs font-body font-light text-gray-500">
                  {parent.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Corner decoration */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 right-4 text-4xl opacity-10"
        style={{ filter: `drop-shadow(0 0 4px ${accentColor})` }}
      >
        🌺
      </motion.div>
    </motion.div>
  );
}
