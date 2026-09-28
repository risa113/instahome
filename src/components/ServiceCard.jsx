import React from "react";
import { Link } from "react-router-dom";

export function ServiceListRow({ service, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-surface-container-low transition-colors duration-300 px-4 cursor-pointer select-none border-b border-outline-variant/30 first:border-t"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick && onClick();
        }
      }}
      aria-label={`View scope details for ${service.title}`}
    >
      <div className="flex items-baseline space-x-6">
        <span className="font-label-sm text-label-sm text-outline group-hover:text-secondary font-mono">
          {service.num}
        </span>
        <div>
          <h3 className="font-headline-md text-headline-md text-primary group-hover:translate-x-2 transition-transform duration-300">
            {service.shortTitle || service.title}
          </h3>
          <p className="font-body-sm text-body-sm text-outline mt-1 max-w-md">
            {service.summary}
          </p>
        </div>
      </div>
      <div className="mt-4 md:mt-0 flex items-center space-x-4">
        <span className="font-label-md text-label-md uppercase tracking-wider text-outline group-hover:text-primary transition-colors">
          Explore Scope
        </span>
        <span className="material-symbols-outlined text-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
          arrow_outward
        </span>
      </div>
    </div>
  );
}

export function ServiceDetailedBlock({ service, reverse = false }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div
        className={`lg:col-span-6 space-y-6 ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <span className="font-mono text-sm text-secondary font-bold">
          {service.num} / {service.tagline}
        </span>
        <h2 className="font-headline-md text-headline-md text-primary">
          {service.title}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {service.description}
        </p>
        <ul className="space-y-2 font-body-sm text-body-sm text-outline border-l border-outline-variant/40 pl-4">
          {service.deliverables?.map((item, idx) => (
            <li key={idx}>· {item}</li>
          ))}
        </ul>
        <div>
          <Link
            to="/contact"
            className="inline-block bg-primary text-surface px-6 py-3 font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-colors"
          >
            Inquire for {service.shortTitle}
          </Link>
        </div>
      </div>

      <div
        className={`lg:col-span-6 aspect-[16/11] bg-surface-container overflow-hidden border border-outline-variant/30 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  );
}
