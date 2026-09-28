import React from "react";

export default function ProjectCard({
  project,
  onClick,
  aspect = "aspect-[16/10]",
  showCode = true,
  showIcon = false
}) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer select-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick && onClick();
        }
      }}
      aria-label={`View architectural details for ${project.title}`}
    >
      <div className={`overflow-hidden bg-surface-container relative ${aspect}`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {project.badge && (
          <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-surface font-label-sm text-label-sm uppercase px-3 py-1">
            {project.badge}
          </div>
        )}
      </div>

      <div className="pt-4 md:pt-5 flex items-start justify-between border-t border-outline-variant/40 mt-3 md:mt-4">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="font-body-sm text-body-sm text-outline mt-0.5">
            {project.location} {project.subSpecs ? `· ${project.subSpecs}` : ""}
          </p>
        </div>

        {showCode && project.code && (
          <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold whitespace-nowrap ml-4">
            {project.code}
          </span>
        )}

        {showIcon && (
          <span className="material-symbols-outlined text-outline group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-4">
            north_east
          </span>
        )}
      </div>
    </div>
  );
}
