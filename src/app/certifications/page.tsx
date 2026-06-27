import React from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { CertificationCard } from "@/components/CertificationCard";
import { certifications } from "@/data/config";

export default function CertificationsPage() {
  return (
    <SectionWrapper id="certifications" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <CertificationCard key={cert.name} cert={cert} />
        ))}
      </div>
    </SectionWrapper>
  );
}
