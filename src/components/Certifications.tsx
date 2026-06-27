"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { certifications } from "@/data/config";
import { FiExternalLink, FiAward, FiX } from "react-icons/fi";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const kpiCard: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto px-4 select-none pt-24"
        id="certifications"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[0.55rem] tracking-[0.5em] text-gray-400 font-sans uppercase">
              LEARNING & GROWTH
            </span>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-gray-800 mt-2">
              Certifications
            </h2>
          </div>
          <div className="font-cormorant italic text-6xl font-light text-pastel-lavender/30 leading-none">
            0{certifications.length} //
          </div>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              onClick={() => {
                if (cert.link && cert.link !== "#") {
                  setSelectedCert(cert.link);
                }
              }}
              variants={kpiCard}
              className={`group relative flex flex-col justify-between p-6 h-48 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm hover:shadow-glass hover:-translate-y-1 transition-all duration-300 overflow-hidden ${cert.link !== "#" ? "cursor-pointer" : ""}`}
            >
              {/* Background Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pastel-lavender/20 to-pastel-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top Row: Icon & Issuer */}
              <div className="flex justify-between items-start relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center border border-white shadow-sm text-pastel-lavender group-hover:text-pastel-mint transition-colors">
                  <FiAward size={18} />
                </div>
                <span className="px-3 py-1 bg-white/50 border border-white/60 text-[0.6rem] tracking-widest text-gray-500 rounded-full font-sans uppercase group-hover:border-pastel-lavender/50 transition-colors">
                  {cert.issuer}
                </span>
              </div>

              {/* Bottom Row: Title & Link Icon */}
              <div className="relative z-10 flex items-end justify-between gap-4 mt-auto">
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-gray-800 leading-tight group-hover:text-pastel-lavender transition-colors">
                  {cert.name}
                </h3>
                {cert.link !== "#" && (
                  <div className="text-gray-400 group-hover:text-pastel-peach transition-transform duration-300 group-hover:scale-110 flex-shrink-0 mb-1">
                    <FiExternalLink size={18} />
                  </div>
                )}
              </div>

              {/* Decorative bottom progress line */}
              <div className="absolute bottom-0 left-0 h-1 bg-pastel-lavender/50 w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 sm:-right-12 text-white/70 hover:text-white transition-colors bg-black/40 hover:bg-black/60 p-2 rounded-full"
              >
                <FiX size={24} />
              </button>
              <img
                src={selectedCert}
                alt="Certificate"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/20"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
