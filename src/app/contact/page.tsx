import { SectionWrapper } from "@/components/SectionWrapper";
import { ContactForm } from "@/components/ContactForm";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const metadata = {
  title: "Contact – Potipally Chandana",
  description: "Get in touch with Potipally Chandana via the contact form.",
};

export default function ContactPage() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-pastel-lavender font-serif">
          Get in Touch
        </h2>
        <p className="text-sm text-gray-500 font-sans tracking-wide mb-6">
          Feel free to reach out via the contact form below or connect with me on professional networks.
        </p>
        <div className="flex justify-center gap-6 text-pastel-lavender mb-8">
          <a
            href="https://github.com/chandana2624"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-xs border border-white/50 rounded-xl hover:bg-pastel-lavender/20 transition shadow-glass"
          >
            <FaGithub size={18} />
            <span className="text-xs font-sans tracking-wider uppercase font-semibold">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/potipally-chandana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-xs border border-white/50 rounded-xl hover:bg-pastel-lavender/20 transition shadow-glass"
          >
            <FaLinkedin size={18} />
            <span className="text-xs font-sans tracking-wider uppercase font-semibold">LinkedIn</span>
          </a>
        </div>
      </div>
      <ContactForm />
    </SectionWrapper>
  );
}
