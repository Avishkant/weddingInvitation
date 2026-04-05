"use client";

import { useEffect } from "react";

export default function ConfettiEffect() {
  useEffect(() => {
    let confetti: (options: Record<string, unknown>) => void;

    const loadAndFire = async () => {
      try {
        const mod = await import("canvas-confetti");
        confetti = mod.default;

        // Initial burst
        setTimeout(() => {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6, x: 0.5 },
            colors: ["#D4A030", "#F1D898", "#C41E3A", "#F2B8C4", "#B8860B", "#FAF4E8"],
            shapes: ["circle", "square"],
            gravity: 0.8,
            scalar: 1.2,
          });
        }, 1000);

        // Left cannon
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.7 },
            colors: ["#D4A030", "#F1D898", "#C41E3A"],
          });
        }, 1500);

        // Right cannon
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.7 },
            colors: ["#D4A030", "#F1D898", "#C41E3A"],
          });
        }, 2000);

        // Final shower
        setTimeout(() => {
          confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.4 },
            colors: ["#D4A030", "#F1D898", "#C41E3A", "#F2B8C4"],
            startVelocity: 45,
            scalar: 1.4,
          });
        }, 2500);
      } catch (e) {
        // Silently fail
      }
    };

    loadAndFire();
  }, []);

  return null;
}
