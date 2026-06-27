import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import ProjectsClient from "@/components/ProjectsClient";
import Philosophy from "@/components/Philosophy";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectsClient />
      <Certifications />
      <Philosophy />
      <ContactSection />
    </div>
  );
}
