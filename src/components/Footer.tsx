// src/components/Footer.tsx
"use client";
import React from "react";
import { socialLinks } from "@/data/config";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-black/5 dark:border-white/5 py-10 bg-[#0d0d0d] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Name */}
        <div className="font-serif text-lg tracking-widest text-[#dfdbd3] dark:text-[#dfdbd3] font-light">
          Chandana Pottipally
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-8 text-[0.65rem] tracking-[0.2em] font-sans font-semibold uppercase">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#dfdbd3] transition-colors"
          >
            Github
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#dfdbd3] transition-colors"
          >
            Linkedin
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="hover:text-[#dfdbd3] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
