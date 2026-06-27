"use client";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function ExperienceTimeline() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto relative pt-8 pb-12">
        {/* Vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-pastel-light-blue/30" />
        <ul className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.li
              key={idx}
              className="relative flex items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            >
              {/* Dot */}
              <div className="w-6 h-6 bg-pastel-mint rounded-full border-4 border-white shadow-glass" />
              <div className="ml-8 bg-white/30 backdrop-blur-xs rounded-xl shadow-glass p-4 w-full">
                <h3 className="text-xl font-semibold text-pastel-lavender">{exp.title}</h3>
                <p className="text-sm text-gray-600">{exp.company} • {exp.period}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
