"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Aspiring Data Analyst",
  "Machine Learning Enthusiast",
  "Python Developer",
  "Open Source Contributor",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const slideUp: Variants = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.6 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col justify-end px-4 md:px-12 pb-12 overflow-hidden"
    >
      {/* Background Soft Pastel Halo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-radial from-pastel-lavender/30 to-transparent blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-radial from-pastel-light-blue/20 to-transparent blur-2xl" />
      </div>

      {/* Year & Branch Rotated Label (Right Side) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden md:block select-none">
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: 90 }}
          animate={{ opacity: 0.5, y: 0, rotate: 90 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[0.65rem] tracking-[0.4em] text-gray-500 font-sans uppercase origin-center"
        >
          2023 - 2027 / CSE(AI-ML)
        </motion.div>
      </div>

      {/* Scroll Down Line Indicator */}
      <div className="absolute right-8 bottom-8 z-10 hidden md:flex flex-col items-center gap-4 select-none">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-[0.55rem] tracking-[0.35em] text-gray-500 uppercase [writing-mode:vertical-rl]"
        >
          Scroll to explore
        </motion.span>
        <motion.div
          className="w-[1px] h-20 bg-linear-to-b from-pastel-lavender to-transparent"
          animate={{ scaleY: [1, 1.25, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl w-full">
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[0.7rem] font-sans tracking-[0.5em] text-pastel-peach font-semibold uppercase mb-4"
        >
          POTTIPALLY CHANDANA • PORTFOLIO
        </motion.div>

        {/* Giant name layout (Playfair Display) */}
        <div className="font-serif select-none tracking-tight">
          <div className="overflow-hidden leading-[0.88] mb-2">
            <motion.h1
              variants={slideUp}
              initial="initial"
              animate="animate"
              className="text-6xl sm:text-8xl md:text-9xl font-light text-gray-800"
            >
              POTTIPALLY
            </motion.h1>
          </div>

          <div className="overflow-hidden leading-[0.88] mb-8">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="text-6xl sm:text-8xl md:text-9xl font-light text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(173,216,230,0.8)]"
            >
              CHANDANA
            </motion.h1>
          </div>
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
          className="w-full h-[1px] bg-pastel-lavender/30 origin-left mb-6"
        />

        {/* Meta row: Roles & CTA buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          {/* Roles list */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-1.5 font-sans"
          >
            {roles.map((role, idx) => (
              <div key={role} className="flex items-center gap-3">
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    currentRole === idx
                      ? "bg-pastel-mint shadow-[0_0_8px_rgba(152,255,152,0.8)]"
                      : "bg-gray-300 opacity-40"
                  }`}
                />
                <span
                  className={`text-[0.85rem] tracking-wider uppercase transition-colors duration-500 ${
                    currentRole === idx ? "text-gray-800 font-medium" : "text-gray-400"
                  }`}
                >
                  {role}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="flex flex-wrap gap-4 mt-2"
          >
            <a
              href="#projects"
              className="px-6 py-2.5 bg-pastel-lavender/30 backdrop-blur-xs text-gray-800 text-xs tracking-widest font-sans uppercase rounded-xl border border-pastel-lavender/50 hover:bg-pastel-lavender/50 transition-creative shadow-glass"
            >
              Explore Projects
            </a>
            <a
              href="/#contact"
              className="px-6 py-2.5 bg-pastel-mint/20 backdrop-blur-xs text-gray-800 text-xs tracking-widest font-sans uppercase rounded-xl border border-pastel-mint/40 hover:bg-pastel-mint/30 transition-creative shadow-glass"
            >
              Get in Touch
            </a>
            <a
              href="/resume"
              className="px-6 py-2.5 bg-pastel-peach/20 backdrop-blur-xs text-gray-800 text-xs tracking-widest font-sans uppercase rounded-xl border border-pastel-peach/40 hover:bg-pastel-peach/30 transition-creative shadow-glass"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
