import React from "react";
import { Link } from "react-router-dom";

export default function SectionHeading({
  overline,
  title,
  subtitle,
  actionText,
  actionLink,
  onActionClick,
  rightNote,
  className = ""
}) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-outline-variant/30 ${className}`}
    >
      <div>
        {overline && (
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
            {overline}
          </span>
        )}
        <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body-sm text-body-sm text-outline mt-1 max-w-xl">
            {subtitle}
          </p>
        )}
      </div>

      {(actionText && actionLink) && (
        <Link
          to={actionLink}
          className="mt-4 md:mt-0 font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary inline-flex items-center space-x-2 transition-colors duration-200 group"
        >
          <span>{actionText}</span>
          <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      )}

      {(actionText && onActionClick) && (
        <button
          type="button"
          onClick={onActionClick}
          className="mt-4 md:mt-0 font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary inline-flex items-center space-x-2 transition-colors duration-200 group"
        >
          <span>{actionText}</span>
          <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      )}

      {rightNote && (
        <span className="hidden md:block font-label-sm text-label-sm uppercase text-outline">
          {rightNote}
        </span>
      )}
    </div>
  );
}
