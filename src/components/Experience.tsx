"use client";
import React, { useState } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/config";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <>
      <SectionWrapper id="experience">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-[1px] bg-pastel-mint" />
            <span className="text-[0.65rem] tracking-[0.5em] text-pastel-mint font-semibold uppercase">
              EXPERIENCE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            {/* Left: Sticky Title */}
            <div className="md:col-span-4 md:sticky md:top-32">
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-gray-800 leading-tight">
                My Professional <br />
                <span className="font-cormorant italic text-pastel-lavender font-normal">
                  Journey
                </span>
                .
              </h2>
            </div>

            {/* Right: Experience Timeline */}
            <div className="md:col-span-8 relative">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-gradient-to-b from-pastel-lavender/40 via-pastel-mint/30 to-transparent" />

              <div className="space-y-16">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-pastel-mint shadow-[0_0_10px_rgba(152,255,152,0.6)] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-pastel-mint rounded-full animate-pulse" />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 shadow-glass p-6 md:p-8 relative overflow-hidden"
                    >
                      {/* Background Soft Blob */}
                      <div className="absolute -top-12 -right-12 w-40 h-40 bg-pastel-lavender/20 rounded-full blur-3xl pointer-events-none" />
                      
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 relative z-10">
                        <div>
                          <h3 className="text-xl md:text-2xl font-serif text-gray-800 mb-1">{exp.role}</h3>
                          <p className="text-sm font-sans font-medium text-gray-600 uppercase tracking-widest">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <span className="inline-block px-3 py-1 bg-pastel-mint/20 border border-pastel-mint/40 text-[0.65rem] tracking-[0.2em] font-sans text-gray-700 uppercase rounded-full whitespace-nowrap">
                            {exp.duration}
                          </span>
                          <span className="text-[0.65rem] tracking-widest text-gray-400 uppercase font-sans mt-1">
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3 relative z-10 mb-6">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-sans leading-relaxed">
                            <span className="text-pastel-lavender mt-1 opacity-80">▹</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.certificate && (
                        <div className="relative z-10 pt-4 border-t border-pastel-lavender/20">
                          <button
                            onClick={() => setSelectedCert(exp.certificate!)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-pastel-lavender/20 hover:bg-pastel-lavender/40 border border-pastel-lavender/30 text-gray-700 text-[0.65rem] tracking-widest font-sans uppercase rounded-xl transition-all duration-300"
                          >
                            View Certificate
                            <FaExternalLinkAlt className="text-[0.6rem]" />
                          </button>
                        </div>
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

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
              {selectedCert.toLowerCase().endsWith(".pdf") ? (
                <iframe
                  src={selectedCert}
                  title="Experience Certificate"
                  className="w-[90vw] sm:w-[80vw] max-w-4xl h-[85vh] bg-white rounded-lg shadow-2xl border border-white/20"
                />
              ) : (
                <img
                  src={selectedCert}
                  alt="Experience Certificate"
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/20"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
