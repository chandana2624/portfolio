"use client";
import { motion } from "framer-motion";

export const SectionWrapper = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`py-20 ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  </section>
);
