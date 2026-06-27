"use client";
import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import { achievements } from "@/data/config";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left Column - Sticky Portrait Frame */}
        <div className="md:col-span-5 md:sticky md:top-28">
          <div className="relative w-full aspect-[4/5] max-w-[380px] mx-auto">
            {/* Offset decorative frame line */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-pastel-lavender/25 rounded-2xl pointer-events-none z-0" />

            {/* Main portrait frame */}
            <div className="relative w-full h-full bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 overflow-hidden shadow-glass z-10">
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-pastel-peach/60 rounded-tl-lg z-10" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-pastel-peach/60 rounded-br-lg z-10" />

              {/* Photo */}
              <Image
                src="/images/chandana.jpg"
                alt="Pottipally Chandana"
                fill
                className="object-cover object-center"
                priority
              />

              {/* Soft Gradient Overlay inside frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pastel-lavender/10 via-transparent to-pastel-soft-pink/10 pointer-events-none z-10" />
            </div>

            {/* Floating Location Card */}
            <div className="absolute -bottom-4 -left-6 bg-white/70 backdrop-blur-md border border-white/50 px-4 py-2.5 rounded-xl shadow-md z-20 flex items-center gap-2 select-none">
              <span className="w-2 h-2 rounded-full bg-pastel-mint shadow-[0_0_8px_rgba(152,255,152,0.8)] animate-pulse" />
              <span className="text-[0.6rem] tracking-[0.2em] font-sans text-gray-600 uppercase font-medium">
                Hyderabad, India
              </span>
            </div>

            {/* Floating Availability Card */}
            <div className="absolute top-6 -right-6 bg-white/70 backdrop-blur-md border border-white/50 px-4 py-2 rounded-xl shadow-md z-20 select-none text-center">
              <span className="block text-[0.5rem] tracking-[0.3em] font-sans text-gray-400 uppercase mb-0.5">
                STATUS
              </span>
              <span className="text-[0.65rem] tracking-wider font-sans text-pastel-peach font-bold uppercase">
                Available for Work
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Editorial Bio & Stats */}
        <div className="md:col-span-7 space-y-8">
          {/* Section Header */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-pastel-peach" />
            <span className="text-[0.65rem] tracking-[0.5em] text-pastel-peach font-semibold uppercase">
              ABOUT ME
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-gray-800 leading-tight">
            Turning raw data into{" "}
            <span className="font-cormorant italic text-pastel-lavender font-normal">
              actionable insights
            </span>{" "}
            &{" "}
            <span className="font-cormorant italic text-pastel-soft-pink font-normal">
              intelligent solutions
            </span>
            .
          </h2>

          {/* Biography Paragraphs */}
          <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-[0.95rem]">
            <p>
              I am Chandana, a CSE(AI-ML) student passionate about technology and problem-solving. My core interests span Machine Learning, Data Analytics, and Python development. I love building projects that transform complex datasets into meaningful visualizations and intelligent systems.
            </p>
            <p>
              With hands-on experience in Python, ML, SQL, and Full Stack Development, I actively contribute to open-source projects and continuously explore new technologies. From building recommendation engines to real-time code analyzers, I approach every project with curiosity and a drive for quality.
            </p>
          </div>

          {/* Core Info Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-pastel-lavender/30">
            <div className="flex flex-col">
              <span className="text-[0.55rem] tracking-widest text-gray-400 uppercase font-sans">
                Focus Areas
              </span>
              <span className="text-sm text-gray-700 font-medium font-sans">
                ML, Data Analytics & Visualization
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.55rem] tracking-widest text-gray-400 uppercase font-sans">
                Target Role
              </span>
              <span className="text-sm text-gray-700 font-medium font-sans">
                Data Analyst & ML Engineer
              </span>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-pastel-lavender/30">
            <div className="flex flex-col gap-1">
              <span className="font-serif text-4xl font-light text-pastel-lavender">
                {achievements.projectsCompleted}+
              </span>
              <span className="text-[0.58rem] tracking-widest text-gray-400 uppercase font-sans">
                Projects Completed
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-serif text-4xl font-light text-pastel-soft-pink">
                {achievements.gitHubRepos}+
              </span>
              <span className="text-[0.58rem] tracking-widest text-gray-400 uppercase font-sans">
                GitHub Repos
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-serif text-4xl font-light text-pastel-peach">
                8.0
              </span>
              <span className="text-[0.58rem] tracking-widest text-gray-400 uppercase font-sans">
                CGPA (CSE(AI-ML))
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
