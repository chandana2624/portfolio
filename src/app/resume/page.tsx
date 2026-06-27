"use client";
import React from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { motion } from "framer-motion";

export default function ResumePage() {
  const resumeUrl = "/resume.pdf"; // place this file in the public folder

  const handlePrint = () => {
    const iframe = document.getElementById("resumeIframe") as HTMLIFrameElement;
    if (iframe?.contentWindow) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } else {
      window.open(resumeUrl, "_blank");
    }
  };

  return (
    <SectionWrapper>
      <motion.div
        className="flex flex-col items-center gap-6 p-6 bg-white/30 backdrop-blur-xs rounded-xl shadow-glass"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-pastel-lavender">My Resume</h2>
        <div className="flex gap-4">
          <a
            href={resumeUrl}
            download="Potipally_Chandana_Resume.pdf"
            className="px-4 py-2 bg-pastel-mint/30 backdrop-blur-sm rounded-xl shadow-glass hover:shadow-xl transition"
          >
            Download PDF
          </a>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-pastel-peach/30 backdrop-blur-sm rounded-xl shadow-glass hover:shadow-xl transition"
          >
            Print
          </button>
        </div>
        <iframe
          id="resumeIframe"
          src={resumeUrl}
          className="w-full h-[800px] border rounded-xl shadow-glass"
          title="Resume Preview"
        />
      </motion.div>
    </SectionWrapper>
  );
}
