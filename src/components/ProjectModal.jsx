import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProjectModal({ project, isOpen, onClose }) {
  const navigate = useNavigate();

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="bg-surface max-w-2xl w-full p-6 md:p-8 relative border border-outline-variant/40 shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-6 right-6 text-primary hover:text-secondary p-1 transition-colors"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {/* Category */}
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
            {project.categoryLabel || project.category}
          </span>

          {/* Title */}
          <h3 id="modal-title" className="font-headline-md text-headline-md text-primary mt-1 pr-8">
            {project.title}
          </h3>

          {/* Image */}
          {project.image && (
            <div className="mt-4 overflow-hidden bg-surface-container aspect-[16/10] relative border border-outline-variant/30">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {project.badge && (
                <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-surface font-label-sm text-label-sm uppercase px-3 py-1">
                  {project.badge}
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div className="mt-6 pt-4 border-t border-outline-variant/30">
            <h4 className="font-label-md text-label-md uppercase tracking-wider text-outline mb-2">
              Architectural Intent &amp; Specs
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-4 border-t border-outline-variant/30 bg-surface-container p-4">
            <div>
              <span className="font-label-sm text-label-sm uppercase text-outline block">Location</span>
              <span className="font-body-sm text-body-sm font-semibold text-primary">
                {project.architecturalSpecs?.location || project.location}
              </span>
            </div>
            <div>
              <span className="font-label-sm text-label-sm uppercase text-outline block">Execution</span>
              <span className="font-body-sm text-body-sm font-semibold text-primary">
                {project.architecturalSpecs?.execution || "InstaHome Design-Build"}
              </span>
            </div>
            {project.architecturalSpecs?.area && (
              <div>
                <span className="font-label-sm text-label-sm uppercase text-outline block">Scale</span>
                <span className="font-body-sm text-body-sm font-semibold text-primary">
                  {project.architecturalSpecs.area}
                </span>
              </div>
            )}
            {project.architecturalSpecs?.materials && (
              <div>
                <span className="font-label-sm text-label-sm uppercase text-outline block">Materials</span>
                <span className="font-body-sm text-body-sm font-semibold text-primary">
                  {project.architecturalSpecs.materials}
                </span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              className="px-5 py-2.5 font-label-md text-label-md uppercase text-outline hover:text-primary transition-colors text-center"
              onClick={onClose}
            >
              Dismiss
            </button>
            <button
              type="button"
              className="bg-primary text-surface px-6 py-2.5 font-label-md text-label-md uppercase hover:bg-secondary transition-colors text-center"
              onClick={() => {
                onClose();
                navigate("/contact");
              }}
            >
              Inquire About Similar Build
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
