import React from "react";
import PageTransition from "../components/PageTransition";
import { ServiceDetailedBlock } from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { SERVICES } from "../data/portfolioData";

export default function Services() {
  return (
    <PageTransition>
      {/* ========================================== */}
      {/* SERVICES HEADER                            */}
      {/* ========================================== */}
      <div className="bg-surface-container-low border-b border-outline-variant/30 py-16 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
            ARCHITECTURAL EXPERTISE
          </span>
          <h1 className="font-headline-lg md:font-display-hero text-headline-lg-mobile md:text-display-hero text-primary tracking-tight mt-2">
            Services
          </h1>
          <p className="font-body-lg text-body-lg text-outline max-w-2xl mt-3 font-light">
            Comprehensive design-build solutions engineered to bring spatial clarity, climatic intelligence, and fine execution under one roof.
          </p>
        </div>
      </div>

      {/* ========================================== */}
      {/* IMMERSIVE SERVICE BLOCKS (ALTERNATING)     */}
      {/* ========================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-margin py-space-2xl space-y-24 w-full">
        {SERVICES.map((service, index) => (
          <ServiceDetailedBlock
            key={service.id}
            service={service}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      {/* Shared CTA */}
      <CTASection
        title="Bring clarity to your architectural vision."
        subtitle="Schedule a consultation with our studio in Palayamkottai to review layouts, budgets, and project schedules."
      />
    </PageTransition>
  );
}
