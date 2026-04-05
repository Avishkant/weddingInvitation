"use client";

import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    name: "Mata Pujan",
    nameHindi: "माता पूजन",
    date: "18 April 2026",
    day: "Saturday",
    time: "8:00 AM",
    description:
      "We begin our auspicious journey with the blessings of the divine mother. A sacred ritual invoking the Goddess for her blessings.",
    icon: "🪔",
    color: {
      bg: "from-amber-50 to-orange-50",
      border: "border-amber-200",
      accent: "#D97706",
    },
    pattern: "🌺",
  },
  {
    id: 2,
    name: "Haldi Ceremony",
    nameHindi: "हल्दी समारोह",
    date: "18 April 2026",
    day: "Saturday",
    time: "Evening",
    description:
      "The joyful turmeric ceremony where loved ones anoint the couple with haldi, blessing them with radiance and prosperity.",
    icon: "💛",
    color: {
      bg: "from-yellow-50 to-amber-50",
      border: "border-yellow-200",
      accent: "#CA8A04",
    },
    pattern: "✨",
  },
  {
    id: 3,
    name: "Mandap Ceremony",
    nameHindi: "मंडप समारोह",
    date: "19 April 2026",
    day: "Sunday",
    time: "6:00 PM",
    description:
      "The sacred mandap is prepared under the stars. A ceremonial gathering filled with Vedic hymns and divine blessings.",
    icon: "🎆",
    color: {
      bg: "from-rose-50 to-pink-50",
      border: "border-rose-200",
      accent: "#BE185D",
    },
    pattern: "🌸",
  },
  {
    id: 4,
    name: "Ghar Vivah & Pritibhoj",
    nameHindi: "घर विवाह & प्रीतिभोज",
    date: "20 April 2026",
    day: "Monday",
    time: "From 10:00 AM",
    description:
      "Home ceremonies with family rituals followed by a grand feast celebrating the union of two families with love and joy.",
    icon: "🏡",
    color: {
      bg: "from-emerald-50 to-teal-50",
      border: "border-emerald-200",
      accent: "#047857",
    },
    pattern: "🌿",
  },
  {
    id: 5,
    name: "Shubh Lagan",
    nameHindi: "शुभ लगन",
    date: "21 April 2026",
    day: "Tuesday",
    time: "12:35 PM",
    description:
      "The most auspicious moment — the sacred wedding ceremony where Avishkant and Manisha take their vows under the sacred fire.",
    icon: "💍",
    color: {
      bg: "from-purple-50 to-maroon-50",
      border: "border-maroon-200",
      accent: "#C41E3A",
    },
    pattern: "🔥",
    isMain: true,
  },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FDFAF4 0%, #FAF4E8 100%)",
      }}
    >
      {/* Background ornament */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A030' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating elements background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-8"
            style={{
              left: `${12 + i * 11}%`,
              top: `${10 + (i % 3) * 35}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, -15, 0],
              rotate: [0, 20, -20, 0],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {["🌺", "🌸", "💐", "✨", "🌼", "🔥", "🌿", "💕"][i]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
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
            The Celebrations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl md:text-6xl font-light text-maroon-800 mb-4"
          >
            Wedding Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl text-gold-500 mb-6"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Four days of love & celebrations
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-3 max-w-xs mx-auto"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-400" />
            <span className="text-xl text-gold-500">✦</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-400" />
          </motion.div>
        </motion.div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({
  event,
  index,
}: {
  event: (typeof events)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative rounded-2xl border overflow-hidden cursor-default event-card-glow transition-all duration-300 ${
        event.isMain ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        borderColor: event.isMain
          ? "rgba(212,160,48,0.5)"
          : "rgba(212,160,48,0.15)",
      }}
    >
      {/* Card background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${event.color.bg}`}
        style={{ opacity: 0.8 }}
      />

      {/* Main event special glow */}
      {event.isMain && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,160,48,0.08) 0%, rgba(196,30,58,0.05) 100%)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8">
        {/* Day badge */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className="text-xs font-body font-light tracking-[0.2em] uppercase px-3 py-1 rounded-full"
              style={{
                background: `${event.color.accent}15`,
                color: event.color.accent,
                border: `1px solid ${event.color.accent}30`,
              }}
            >
              {event.day}
            </span>
          </div>
          <span className="text-3xl">{event.icon}</span>
        </div>

        {/* Event name */}
        <div className="mb-3">
          <h3
            className="font-display text-2xl md:text-3xl font-medium mb-1"
            style={{ color: event.color.accent }}
          >
            {event.name}
          </h3>
          <p
            className="text-base opacity-70"
            style={{
              fontFamily: "'Tiro Devanagari Hindi', serif",
              color: event.color.accent,
            }}
          >
            {event.nameHindi}
          </p>
        </div>

        {/* Divider */}
        <div
          className="h-px w-12 mb-4"
          style={{
            background: `linear-gradient(90deg, ${event.color.accent}, transparent)`,
          }}
        />

        {/* Date & Time */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm" style={{ color: event.color.accent }}>
              📅
            </span>
            <p className="font-display text-sm font-light text-gray-700">
              {event.date}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm" style={{ color: event.color.accent }}>
              🕐
            </span>
            <p className="font-display text-sm font-light text-gray-700">
              {event.time}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-sm font-light text-gray-600 leading-relaxed">
          {event.description}
        </p>

        {/* Main event badge */}
        {event.isMain && (
          <motion.div
            className="mt-4 flex items-center gap-2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 rounded-full bg-maroon-500" />
            <span className="text-xs font-body font-light tracking-widest uppercase text-maroon-600">
              Main Wedding Ceremony
            </span>
          </motion.div>
        )}
      </div>

      {/* Corner decoration */}
      <div
        className="absolute top-0 right-0 w-16 h-16 opacity-20"
        style={{
          background: `radial-gradient(circle at top right, ${event.color.accent}60, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-12 h-12 opacity-10"
        style={{
          background: `radial-gradient(circle at bottom left, ${event.color.accent}60, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}
