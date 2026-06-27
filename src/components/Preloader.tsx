"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds loader
    const interval = 20; // 20ms steps
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600); // Trigger layout reveal
          }, 400);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Generate random particles
  const particles = Array.from({ length: 15 }).map((_, idx) => ({
    id: idx,
    x: Math.random() * 100,
    y: 100,
    drift: (Math.random() - 0.5) * 40,
    duration: 1.5 + Math.random() * 2,
    delay: Math.random() * 1,
  }));

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[8000] overflow-hidden flex flex-col items-center justify-center bg-pastel-off-white"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Animated background pastel gradient blobs */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pastel-lavender/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pastel-light-blue/30 rounded-full blur-3xl" />
          </div>

          {/* Floating gold/pastel particles */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute w-1.5 h-1.5 bg-pastel-soft-pink rounded-full opacity-60"
                style={{ left: `${p.x}%`, top: `100%` }}
                animate={{
                  y: "-110vh",
                  x: `${p.drift}px`,
                  opacity: [0, 0.6, 0.3, 0],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          {/* Scanline element */}
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pastel-lavender to-transparent z-20 opacity-80"
            initial={{ top: 0 }}
            animate={{ top: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Core Content */}
          <div className="relative z-30 flex flex-col items-center max-w-lg w-full px-6">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 border-2 border-white/50 shadow-[0_0_30px_rgba(173,216,230,0.3)]"
            >
                <Image
                  src="/images/chandana-loader.jpg"
                  alt="Loading Profile"
                  fill
                  className="object-cover object-top"
                  priority
                />
            </motion.div>

            {/* Sliding Name Reveal */}
            <div className="overflow-hidden mb-2 text-center">
              <motion.h1
                className="font-serif text-5xl md:text-7xl font-light text-gray-800 tracking-tight leading-none"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                Chandana
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-8 text-center">
              <motion.h2
                className="font-serif text-5xl md:text-7xl font-light text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(152,255,152,0.6)] tracking-tight leading-none"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              >
                Pottipally
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-[0.65rem] font-sans tracking-[0.3em] text-gray-500 uppercase mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              AI-ML ENGINEER
            </motion.p>

            {/* Progress line */}
            <div className="w-48">
              <div className="h-[1px] w-full bg-gray-200 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-pastel-mint"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-[0.6rem] font-mono tracking-widest text-gray-400">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
