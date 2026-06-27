"use client";
import React from "react";
import { SectionWrapper } from "./SectionWrapper";

export default function Philosophy() {
  return (
    <SectionWrapper id="philosophy">
      <div className="max-w-5xl mx-auto relative z-10 px-4 select-none">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-[1px] bg-pastel-lavender" />
          <span className="text-[0.65rem] tracking-[0.5em] text-pastel-lavender font-semibold uppercase">
            PHILOSOPHY
          </span>
        </div>

        {/* Quote Block */}
        <div className="relative mb-8">
          <span className="absolute -top-12 -left-6 font-serif text-[10rem] text-pastel-lavender/10 leading-none select-none">
            “
          </span>
          <h2 className="font-cormorant italic text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 leading-snug relative z-10">
            Intelligent systems are defined by their clarity. I believe in engineering machine learning solutions that are mathematically sound, highly transparent, and seamlessly integrated into fluid interfaces.
          </h2>
          <div className="text-[0.6rem] tracking-[0.4em] text-gray-400 font-sans uppercase mt-6 ml-1">
            — CHANDANA
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
