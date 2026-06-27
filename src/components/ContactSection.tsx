"use client";
import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { ContactForm } from "./ContactForm";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socialLinks } from "@/data/config";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-[1px] bg-pastel-peach" />
          <span className="text-[0.65rem] tracking-[0.5em] text-pastel-peach font-semibold uppercase">
            CONTACT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left: Heading & Social Links */}
          <div className="md:col-span-5 md:sticky md:top-32 space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-gray-800 leading-tight">
              Let's build <br />
              <span className="font-cormorant italic text-pastel-lavender font-normal">
                something great
              </span>{" "}
              together.
            </h2>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              Feel free to reach out via the form, or connect with me directly through my professional links.
            </p>
            <div className="flex flex-wrap gap-4 text-pastel-lavender">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-white/30 backdrop-blur-xs border border-white/50 rounded-xl hover:bg-pastel-lavender/20 transition shadow-glass"
              >
                <FaGithub size={18} />
                <span className="text-[0.65rem] font-sans tracking-wider uppercase font-semibold text-gray-700">GitHub</span>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-white/30 backdrop-blur-xs border border-white/50 rounded-xl hover:bg-pastel-lavender/20 transition shadow-glass"
              >
                <FaLinkedin size={18} />
                <span className="text-[0.65rem] font-sans tracking-wider uppercase font-semibold text-gray-700">LinkedIn</span>
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/30 backdrop-blur-xs border border-white/50 rounded-xl hover:bg-pastel-lavender/20 transition shadow-glass"
              >
                <FaEnvelope size={18} />
                <span className="text-[0.65rem] font-sans tracking-wider uppercase font-semibold text-gray-700">Email</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
