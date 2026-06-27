"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { projects } from "@/data/config";
import { FiArrowUpRight } from "react-icons/fi";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function ProjectsClient() {
  return (
    <motion.div
      id="projects"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="max-w-6xl mx-auto px-4 select-none"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-[0.55rem] tracking-[0.5em] text-gray-400 font-sans uppercase">
            SELECTED WORKS
          </span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-gray-800 mt-2">
            Projects
          </h2>
        </div>
        <div className="font-cormorant italic text-6xl font-light text-pastel-lavender/30 leading-none">
          0{projects.length} //
        </div>
      </div>

      {/* Row List */}
      <div className="flex flex-col border-t border-pastel-lavender/20">
        {projects.map((proj, idx) => (
          <motion.a
            key={proj.title}
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            className="group relative grid grid-cols-1 md:grid-cols-12 items-center gap-6 py-8 px-4 border-b border-pastel-lavender/25 hover:pl-8 hover:bg-white/30 backdrop-blur-xs transition-all duration-500 overflow-hidden cursor-none"
          >
            {/* Background Hover Glow */}
            <div className="absolute inset-0 bg-linear-to-r from-pastel-lavender/10 via-pastel-light-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Project Index */}
            <div className="md:col-span-1 text-[0.65rem] font-mono tracking-widest text-pastel-peach font-bold">
              0{idx + 1}
            </div>

            {/* Project Title */}
            <div className="md:col-span-5">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-gray-800 group-hover:text-pastel-lavender transition-colors duration-300">
                {proj.title}
              </h3>
              <p className="text-xs text-gray-500 font-sans mt-1 group-hover:text-gray-700 transition-colors duration-300">
                {proj.description}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="md:col-span-5 flex flex-wrap gap-2">
              {proj.tech.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-white/40 border border-white/50 text-[0.6rem] tracking-wider text-gray-500 rounded-full font-sans group-hover:border-pastel-mint group-hover:text-gray-800 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Diagonal Arrow */}
            <div className="md:col-span-1 flex justify-end md:justify-end text-xl text-gray-400 group-hover:text-pastel-lavender transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              <FiArrowUpRight />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
