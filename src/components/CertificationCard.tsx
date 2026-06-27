// src/components/CertificationCard.tsx
"use client";
import { motion } from "framer-motion";

interface Certification {
  name: string;
  issuer: string;
  link: string;
}

export const CertificationCard = ({ cert }: { cert: Certification }) => (
  <motion.div
    className="p-4 bg-white/30 backdrop-blur-xs rounded-xl shadow-glass hover:shadow-xl transition"
    whileHover={{ y: -5 }}
  >
    <h3 className="text-lg font-semibold text-pastel-lavender">{cert.name}</h3>
    <p className="text-sm text-gray-600">{cert.issuer}</p>
    {cert.link && (
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-pastel-mint hover:underline"
      >
        Verify
      </a>
    )}
  </motion.div>
);
