"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/config";

const categories = Object.entries(skills) as [string, string[]][];

// Mapping categories to nice indices and subtle pastel gradients
const categoryStyles = [
  { border: "border-pastel-lavender/30", glow: "hover:bg-pastel-lavender/5" },
  { border: "border-pastel-light-blue/30", glow: "hover:bg-pastel-light-blue/5" },
  { border: "border-pastel-soft-pink/30", glow: "hover:bg-pastel-soft-pink/5" },
  { border: "border-pastel-peach/30", glow: "hover:bg-pastel-peach/5" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-transparent select-none">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[0.55rem] tracking-[0.5em] text-gray-400 font-sans uppercase">
            EXPERTISE
          </span>
          <h2 className="font-cormorant italic text-5xl md:text-7xl font-light text-gray-800 mt-2">
            Technical Arsenal
          </h2>
        </div>

        {/* Grid of skill categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(([category, items], idx) => {
            const style = categoryStyles[idx % categoryStyles.length];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-6 bg-white/20 backdrop-blur-md rounded-2xl border ${style.border} ${style.glow} transition-creative shadow-sm flex flex-col justify-between`}
              >
                <div>
                  {/* Category index number */}
                  <span className="text-[0.6rem] font-mono tracking-widest text-pastel-peach font-bold block mb-4">
                    0{idx + 1} //
                  </span>

                  {/* Category title */}
                  <h3 className="font-serif text-lg text-gray-800 font-light border-b border-gray-100 pb-3 mb-4 capitalize">
                    {category.replace(/([A-Z])/g, " $1")}
                  </h3>

                  {/* List of skills */}
                  <ul className="flex flex-col gap-3">
                    {items.map((skill) => (
                      <li
                        key={skill}
                        className="group flex items-center justify-between text-[0.85rem] text-gray-500 hover:text-gray-900 transition-colors duration-300 font-sans"
                      >
                        <span>{skill}</span>
                        {/* Custom dot indicator */}
                        <span className="w-1.5 h-1.5 rounded-full bg-pastel-lavender/30 group-hover:bg-pastel-mint group-hover:shadow-[0_0_8px_rgba(152,255,152,0.8)] transition-all duration-300" />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
