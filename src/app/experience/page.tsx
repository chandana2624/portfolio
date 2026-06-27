// Experience page
import { SectionWrapper } from "@/components/SectionWrapper";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export const metadata = {
  title: "Experience | Potipally Chandana",
  description: "Professional experience, internships, and open‑source contributions.",
};

export default function ExperiencePage() {
  return (
    <SectionWrapper id="experience">
      <h1 className="text-4xl font-bold mb-8 text-pastel-lavender">Experience</h1>
      <ExperienceTimeline />
    </SectionWrapper>
  );
}
