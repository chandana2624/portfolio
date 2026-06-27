import React from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata = {
  title: "Projects – Potipally Chandana",
  description: "Showcase of AI, ML, full‑stack and analytics projects.",
};

export default function ProjectsPage() {
  return (
    <SectionWrapper id="projects">
      <ProjectsClient />
    </SectionWrapper>
  );
}
