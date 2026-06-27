"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/config";

export default function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      className="group bg-white/30 backdrop-blur-xs rounded-xl shadow-glass overflow-hidden hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-pastel-lavender mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-pastel-mint/30 text-pastel-mint rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-pastel-soft-pink text-white rounded hover:bg-pastel-soft-pink/80 transition"
            >
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-pastel-light-blue text-white rounded hover:bg-pastel-light-blue/80 transition"
            >
              Live Demo
            </a>
          )}
          {project.readMore && (
            <a
              href={project.readMore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-pastel-peach text-white rounded hover:bg-pastel-peach/80 transition"
            >
              Read More
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
