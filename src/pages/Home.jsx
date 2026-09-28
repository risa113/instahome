import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { ServiceListRow } from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { STUDIO_INFO, PROJECTS, SERVICES, TESTIMONIALS, IMAGES } from "../data/portfolioData";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  return (
    <PageTransition>
      {/* ========================================== */}
      {/* HERO SECTION                               */}
      {/* ========================================== */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-primary-container overflow-hidden">
        {/* Background Imagery with architectural overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroPoolVilla}
            alt="InstaHome Design Builders luxury contemporary courtyard villa with illuminated pool and warm ambient architecture"
            className="w-full h-full object-cover opacity-60 transform scale-105 duration-1000 transition-all ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-margin w-full py-20">
          <div className="max-w-3xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center space-x-3 bg-surface/10 backdrop-blur-sm border border-surface/20 px-3 py-1.5 text-surface"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest">
                TIRUNELVELI · TAMIL NADU
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display-hero text-display-hero-mobile sm:text-4xl md:text-display-hero text-surface leading-[1.05] tracking-tight"
            >
              SPACES WITH <br />
              <span className="italic font-normal text-secondary-fixed">CHARACTER.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body-lg text-body-lg text-surface-variant/90 max-w-xl font-light"
            >
              {STUDIO_INFO.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/projects"
                className="bg-surface text-primary px-8 py-4 font-label-lg text-label-lg uppercase tracking-wider hover:bg-secondary hover:text-surface transition-all duration-300 shadow-sm inline-block"
              >
                Explore Projects
              </Link>
              <Link
                to="/contact"
                className="border border-surface/40 text-surface hover:bg-surface/10 px-8 py-4 font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 inline-block"
              >
                Start a Conversation
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Architectural Bottom Spec Pill */}
        <div className="absolute bottom-6 right-6 hidden md:flex items-center space-x-6 text-surface/70 font-label-sm text-label-sm border-l border-surface/20 pl-4">
          <div>{STUDIO_INFO.coordinates.lat}</div>
          <div>{STUDIO_INFO.coordinates.long}</div>
          <div className="text-secondary-fixed">VERNACULAR MODERNISM</div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SELECTED SPACES (BENTO ASYMMETRIC GRID)    */}
      {/* ========================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-margin py-space-2xl w-full">
        <SectionHeading
          overline="CURATED PORTFOLIO"
          title="Selected Spaces"
          actionText="View All Archives"
          actionLink="/projects"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Bento Tile 1 (Large left 7-col) */}
          <div className="md:col-span-7">
            <ProjectCard
              project={PROJECTS[0]}
              onClick={() => setSelectedProject(PROJECTS[0])}
              aspect="aspect-[16/11]"
              showCode={true}
            />
          </div>

          {/* Bento Tiles 2 & 3 (Stacked right 5-col) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            <ProjectCard
              project={PROJECTS[1]}
              onClick={() => setSelectedProject(PROJECTS[1])}
              aspect="aspect-[16/10]"
              showCode={true}
            />
            <ProjectCard
              project={PROJECTS[2]}
              onClick={() => setSelectedProject(PROJECTS[2])}
              aspect="aspect-[16/10]"
              showCode={true}
            />
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* DESIGN PHILOSOPHY SECTION (SPLIT SCREEN)   */}
      {/* ========================================== */}
      <section className="bg-surface-container-low border-y border-outline-variant/30 py-space-2xl w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image with Glassmorphic Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden aspect-[4/5] bg-surface-container shadow-md">
                <img
                  src={IMAGES.courtyardDiningPavilion}
                  alt="InstaHome dining pavilion opening onto verdant courtyard garden with terracotta pendant lamps"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface/90 backdrop-blur-md border border-outline-variant/30">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">
                    MATERIAL PURITY
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface mt-1">
                    Terracotta, porous stone, and seasoned teak. We celebrate finishes that age with dignity.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Editorial Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3 text-secondary">
                <span className="font-label-sm text-label-sm uppercase tracking-widest">
                  PHILOSOPHY
                </span>
                <span className="w-8 h-[1px] bg-secondary" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
                  01 / 03
                </span>
              </div>

              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
                We design for the way <span className="italic font-normal">life unfolds.</span>
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
                Architecture in South India is inseparable from climate, ventilation, and family hierarchy. We reject hollow superficial luxury in favor of spatial integrity—curating air drafts, daylight trajectories, and genuine tactile surfaces that connect the interior seamlessly with inner courtyards.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-outline-variant/30">
                <div>
                  <div className="font-headline-md text-headline-md text-primary font-serif">
                    {STUDIO_INFO.stats.rating}
                  </div>
                  <div className="font-label-sm text-label-sm uppercase text-outline mt-1 tracking-wider">
                    {STUDIO_INFO.stats.ratingText}
                  </div>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md text-primary font-serif">
                    {STUDIO_INFO.stats.turnkey}
                  </div>
                  <div className="font-label-sm text-label-sm uppercase text-outline mt-1 tracking-wider">
                    {STUDIO_INFO.stats.turnkeyText}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-3 font-label-md text-label-md uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors duration-200 group"
                >
                  <span>Read Our Full Story</span>
                  <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SERVICES PREVIEW (INTERACTIVE LIST)        */}
      {/* ========================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-margin py-space-2xl w-full">
        <SectionHeading
          overline="DISCIPLINES"
          title="Services & Scopes"
          rightNote="PALAYAMKOTTAI STUDIO"
        />

        <div className="w-full">
          {SERVICES.map((service) => (
            <ServiceListRow
              key={service.id}
              service={service}
              onClick={() => navigate("/services")}
            />
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* VERIFIED CLIENT REFLECTIONS                */}
      {/* ========================================== */}
      <section className="bg-surface-container py-space-2xl border-t border-outline-variant/30 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <div className="flex items-center space-x-2 text-secondary mb-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined filled text-lg text-secondary"
                  >
                    star
                  </span>
                ))}
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary ml-2 font-semibold">
                  5.0 / 5.0 GOOGLE VERIFIED
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Client Reflections
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-outline max-w-xs mt-2 md:mt-0">
              Unfiltered feedback from patrons across Palayamkottai and the Tirunelveli district.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-surface p-8 border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:border-secondary/40 transition-colors"
              >
                <div>
                  <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">
                    format_quote
                  </span>
                  <p className="font-body-md text-body-md text-on-surface italic font-serif leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                  <div>
                    <div className="font-title-md text-title-md text-primary">
                      {t.author}
                    </div>
                    <div className="font-label-sm text-label-sm uppercase text-outline">
                      {t.subtext}
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm bg-surface-container px-2 py-1 text-secondary uppercase font-mono">
                    {t.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* FINAL CTA                                  */}
      {/* ========================================== */}
      <CTASection />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </PageTransition>
  );
}
