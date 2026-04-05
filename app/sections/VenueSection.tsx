"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function VenueSection() {
  const [activeVenue, setActiveVenue] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const venues = [
    {
      title: "Pre-Wedding Celebrations",
      location: "Village Ledgaon, District Dhar, MP",
      events: [
        "Mata Pujan",
        "Haldi Ceremony",
        "Mandap",
        "Pritibhoj & Gharvivah",
      ],
      date: "Before 21 April 2026",
      icon: "🎉",
      lat: 22.5977,
      lng: 75.3014,
      maps: "https://maps.google.com/?q=Ledgaon,Dhar,Madhya+Pradesh,India",
    },
    {
      title: "Wedding Day Celebration",
      location: "Village Badnara, District Ratlam, MP",
      events: ["Main Wedding Ceremony"],
      date: "21 April 2026",
      icon: "💍",
      lat: 23.2431,
      lng: 75.6056,
      maps: "https://maps.google.com/?q=Badnara,Ratlam,Madhya+Pradesh,India",
    },
  ];

  return (
    <section
      id="venue"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FAF4E8 0%, #FDFAF4 100%)",
      }}
    >
      {/* Floating background decorative elements */}
      {[...Array(6)].map((_, i) => {
        const emojis = ["🌸", "🌺", "💐", "🌼", "🌻", "🌷"];
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none text-4xl"
            style={{
              left: `${15 + i * 13}%`,
              top: `${20 + (i % 2) * 60}%`,
              opacity: 0.15,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 20, -20, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {emojis[i]}
          </motion.div>
        );
      })}

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
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

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs tracking-[0.4em] uppercase font-body font-light text-gold-600 mb-3"
          >
            Where Love Unites
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-4xl md:text-6xl font-light text-maroon-800 mb-4"
          >
            The Venues
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gold-500 mb-6"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Celebrations Across Two Locations
          </motion.p>
        </motion.div>

        {/* Venue Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {venues.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveVenue(i)}
              className="px-6 py-3 rounded-xl font-body font-medium text-sm transition-all"
              style={{
                background:
                  activeVenue === i
                    ? "linear-gradient(135deg, #D4A030, #B8860B)"
                    : "rgba(212,160,48,0.1)",
                color: activeVenue === i ? "white" : "#B8860B",
                border:
                  activeVenue === i ? "none" : "1px solid rgba(212,160,48,0.3)",
              }}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {venues[i].icon} {venues[i].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Venue details card */}
        <motion.div
          key={activeVenue}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-8 md:p-10 flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(135deg, rgba(253,250,244,0.95) 0%, rgba(245,232,208,0.9) 100%)",
              border: "1px solid rgba(212,160,48,0.2)",
              boxShadow: "0 8px 40px rgba(212,160,48,0.1)",
            }}
            whileHover={{
              boxShadow: "0 12px 50px rgba(212,160,48,0.2)",
              y: -5,
            }}
          >
            {/* Location icon & name */}
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{
                  background: "linear-gradient(135deg, #D4A030, #B8860B)",
                  boxShadow: "0 4px 16px rgba(212,160,48,0.4)",
                }}
              >
                {venues[activeVenue].icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-2xl md:text-3xl font-medium text-maroon-800 mb-2"
              >
                {venues[activeVenue].title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-base font-light text-gray-600 leading-relaxed"
              >
                {venues[activeVenue].location}
              </motion.p>
            </div>

            {/* Info rows */}
            <motion.div
              className="space-y-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <InfoRow
                  icon="📅"
                  label="Date"
                  value={venues[activeVenue].date}
                />
              </motion.div>
              {venues[activeVenue].events.map((event, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <InfoRow icon="🎭" label="Event" value={event} />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href={venues[activeVenue].maps}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-body text-sm font-medium tracking-wide text-white transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #C41E3A 0%, #9A1828 100%)",
                  boxShadow: "0 4px 16px rgba(196,30,58,0.3)",
                }}
              >
                <span>📍</span>
                Open in Google Maps
              </motion.a>

              <motion.a
                href={`https://maps.google.com/?q=${venues[activeVenue].lat},${venues[activeVenue].lng}&z=15`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-body text-sm font-medium tracking-wide transition-all"
                style={{
                  border: "1px solid rgba(212,160,48,0.4)",
                  color: "#B8860B",
                  background: "rgba(212,160,48,0.05)",
                }}
              >
                <span>🧭</span>
                Get Directions
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden min-h-[320px] relative"
            style={{
              border: "1px solid rgba(212,160,48,0.2)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-50">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center"
              >
                <div className="text-5xl mb-3">📍</div>
                <p className="font-display text-lg text-maroon-700">
                  {venues[activeVenue].title}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-base">{icon}</span>
      <div className="flex-1 flex items-center justify-between gap-3">
        <span className="font-body text-xs font-light text-gray-500 uppercase tracking-wider">
          {label}
        </span>
        <span className="font-display text-sm text-maroon-800 text-right">
          {value}
        </span>
      </div>
    </div>
  );
}
