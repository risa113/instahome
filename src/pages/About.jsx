import React from "react";
import PageTransition from "../components/PageTransition";
import CTASection from "../components/CTASection";
import {
  STUDIO_INFO,
  PILLARS,
  PROCESS_STAGES,
  MATERIALS,
  IMAGES
} from "../data/portfolioData";

export default function About() {
  return (
    <PageTransition>
      {/* ========================================== */}
      {/* ABOUT HEADER                               */}
      {/* ========================================== */}
      <div className="bg-surface-container-low border-b border-outline-variant/30 py-20 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="max-w-4xl space-y-4">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
              ABOUT INSTAHOME DESIGN BUILDERS
            </span>
            <h1 className="font-headline-lg md:font-display-hero text-headline-lg-mobile md:text-display-hero text-primary tracking-tight leading-tight">
              We believe good design changes how a{" "}
              <span className="italic font-normal">space feels.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-outline max-w-2xl pt-2 font-light">
              Based in Palayamkottai, Tirunelveli, InstaHome bridges regional South Indian climate traditions with restrained, contemporary structural minimalism.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* ABOUT EDITORIAL BODY                       */}
      {/* ========================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-margin py-space-2xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Image & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="aspect-[3/4] bg-surface-container overflow-hidden border border-outline-variant/30">
              <img
                src={IMAGES.rammedEarthPavilion}
                alt="InstaHome design builders architectural rammed earth wall detail"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 bg-surface-container border border-outline-variant/40 space-y-3">
              <div className="font-title-md text-title-md text-primary font-semibold">
                Studio Location
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {STUDIO_INFO.address}
              </p>
              <div className="pt-2 text-outline font-label-sm text-label-sm uppercase">
                Direct Line:{" "}
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="text-primary font-semibold hover:underline"
                >
                  {STUDIO_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Manifesto & 5 Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">
                OUR MANIFESTO
              </span>
              <h2 className="font-headline-md text-headline-md text-primary">
                Crafting Timeless Vernacular Legacies
              </h2>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed font-light">
              InstaHome Design Builders was founded on the conviction that building in Tamil Nadu requires deep respect for environmental context. Our works balance raw textured lime plasters, local terracotta tiles, porous stone, and seasoned teak joinery against pure, structural steel geometries.
            </p>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We guide clients past fleeting ornamental fads, helping them invest in timeless volumes that stay cool naturally, breathe freely during Tirunelveli sweltering summers, and foster profound domestic tranquility. Every project is conceived as an architectural floor plan where negative space is not emptiness, but functional luxury.
            </p>

            {/* 5 Guiding Pillars */}
            <div className="pt-8">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6">
                Our Five Guiding Pillars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PILLARS.map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`p-5 bg-surface-container-low border border-outline-variant/30 ${
                      idx === 4 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="font-title-md text-title-md text-primary mb-1">
                      {pillar.num} · {pillar.title}
                    </div>
                    <p className="font-body-sm text-body-sm text-outline">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 5-STAGE PROCESS SECTION                    */}
      {/* ========================================== */}
      <section className="bg-surface-container py-space-2xl border-t border-outline-variant/30 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="max-w-2xl mb-16">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
              THE PROTOCOL
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
              Our 5-Stage Process
            </h2>
            <p className="font-body-md text-body-md text-outline mt-2">
              From the initial site orientation to the final tactile detailing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS_STAGES.map((st, i) => (
              <div
                key={i}
                className={`bg-surface p-6 flex flex-col justify-between min-h-[220px] border-t-2 shadow-sm ${
                  st.highlight ? "border-secondary" : "border-primary"
                }`}
              >
                <div>
                  <span className="font-mono text-sm text-secondary font-bold">
                    {st.step}
                  </span>
                  <h3 className="font-title-md text-title-md text-primary mt-2">
                    {st.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-outline mt-2 leading-relaxed">
                    {st.description}
                  </p>
                </div>
                <span className="font-label-sm text-label-sm uppercase text-outline mt-4">
                  {st.stage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MATERIALITY & CRAFT                        */}
      {/* ========================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-margin py-space-2xl w-full">
        <div className="mb-12">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
            TACTILE VOCABULARY
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
            Materiality &amp; Craft
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MATERIALS.map((mat, idx) => (
            <div key={idx} className="space-y-4">
              <div className="aspect-square bg-surface-container overflow-hidden border border-outline-variant/30">
                <img
                  src={mat.image}
                  alt={mat.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-title-md text-title-md text-primary font-semibold">
                  {mat.title}
                </h3>
                <p className="font-body-sm text-body-sm text-outline mt-1 leading-relaxed">
                  {mat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shared CTA */}
      <CTASection />
    </PageTransition>
  );
}
