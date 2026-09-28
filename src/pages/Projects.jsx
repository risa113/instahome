import React, { useState } from "react";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import CTASection from "../components/CTASection";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: "all", label: "All" },
    { id: "residential", label: "Residential" },
    { id: "interiors", label: "Interiors" },
    { id: "commercial", label: "Commercial" }
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "commercial") {
      return proj.category.includes("commercial") || proj.id.includes("monolith");
    }
    return proj.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <PageTransition>
      {/* ========================================== */}
      {/* PROJECTS HERO                              */}
      {/* ========================================== */}
      <div className="bg-surface-container-low border-b border-outline-variant/30 py-16 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
            ARCHIVES &amp; COMMISSIONS
          </span>
          <h1 className="font-headline-lg md:font-display-hero text-headline-lg-mobile md:text-display-hero text-primary tracking-tight mt-2">
            Projects
          </h1>
          <p className="font-body-lg text-body-lg text-outline max-w-xl mt-3 font-light">
            Architecture and interiors shaped around people, purpose, and the unique microclimate of South India.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 pt-8" role="tablist" aria-label="Project Categories">
            {filterTabs.map((tab) => {
              const active = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-5 py-2 font-label-md text-label-md uppercase tracking-wider transition-all cursor-pointer ${
                    active
                      ? "bg-primary text-surface font-semibold shadow-sm"
                      : "bg-surface border border-outline-variant/60 text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* GALLERY GRID                               */}
      {/* ========================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-margin py-space-2xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              aspect="aspect-[16/10]"
              showCode={false}
              showIcon={true}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-outline">
            No projects found matching the selected category.
          </div>
        )}
      </div>

      {/* Shared CTA */}
      <CTASection
        title="Ready to envision your next space?"
        subtitle="Discuss your plot dimensions, bioclimatic orientation, or renovation vision with our lead architectural team in Palayamkottai."
      />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </PageTransition>
  );
}
