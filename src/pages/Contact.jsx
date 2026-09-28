import React, { useState } from "react";
import PageTransition from "../components/PageTransition";
import { STUDIO_INFO } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Residential Villa (New Build)",
    location: "",
    timeline: "Immediate",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        projectType: "Residential Villa (New Build)",
        location: "",
        timeline: "Immediate",
        message: ""
      });
      setTimeout(() => setSubmitted(false), 8000);
    }, 600);
  };

  return (
    <PageTransition>
      {/* ========================================== */}
      {/* CONTACT HEADER                             */}
      {/* ========================================== */}
      <div className="bg-surface-container-low border-b border-outline-variant/30 py-16 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
            START A COMMISSION
          </span>
          <h1 className="font-headline-lg md:font-display-hero text-headline-lg-mobile md:text-display-hero text-primary tracking-tight mt-2">
            Let's create something that <span className="italic font-normal">feels like you.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-outline max-w-xl mt-3 font-light">
            Our studio is open in Palayamkottai, Tirunelveli. Reach out to schedule an in-person design consultation or project assessment.
          </p>
        </div>
      </div>

      {/* ========================================== */}
      {/* CONTACT COLUMNS                            */}
      {/* ========================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-margin py-space-2xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT COLUMN: STUDIO INFO & ARCHITECTURAL MAP */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container p-8 border border-outline-variant/40 space-y-6 shadow-sm">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
                  REGISTERED STUDIO ADDRESS
                </span>
                <h2 className="font-headline-sm text-headline-sm text-primary mt-1">
                  {STUDIO_INFO.name}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  10A, Manakaavalam Pillai Hospital Road,<br />
                  Palayamkottai, Tirunelveli,<br />
                  Tamil Nadu – 627002, India
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant/30 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-secondary">phone</span>
                  <div>
                    <div className="font-label-sm text-label-sm uppercase text-outline">
                      Direct Line
                    </div>
                    <a
                      href={`tel:${STUDIO_INFO.phoneRaw}`}
                      className="font-title-md text-title-md text-primary hover:text-secondary font-semibold transition-colors"
                    >
                      {STUDIO_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-secondary">star</span>
                  <div>
                    <div className="font-label-sm text-label-sm uppercase text-outline">
                      Client Rating
                    </div>
                    <div className="font-title-md text-title-md text-primary font-semibold">
                      5.0 ★ Google Verified Reviews
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="flex-1 bg-primary text-surface py-3 px-4 text-center font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-colors"
                >
                  Call Us
                </a>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20InstaHome%20Design%20Builders%2C%20I%20would%20like%20to%20discuss%20an%20architectural%20project%20in%20Tirunelveli.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-primary text-primary py-3 px-4 text-center font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-high transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Stylized Minimal Architectural Map Viewport */}
            <div className="bg-surface-container-high p-6 border border-outline-variant/40 space-y-3">
              <div className="flex items-center justify-between text-outline font-label-sm text-label-sm uppercase">
                <span>PALAYAMKOTTAI COORDINATES</span>
                <span className="font-mono">{STUDIO_INFO.coordinates.lat}, {STUDIO_INFO.coordinates.long}</span>
              </div>

              <div className="w-full h-44 bg-surface border border-outline-variant/30 relative flex items-center justify-center overflow-hidden">
                {/* Map Stylized Graphic Lines */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="w-full h-[1px] bg-outline absolute top-1/4" />
                  <div className="w-full h-[1px] bg-outline absolute top-2/4" />
                  <div className="w-full h-[1px] bg-outline absolute top-3/4" />
                  <div className="h-full w-[1px] bg-outline absolute left-1/3" />
                  <div className="h-full w-[1px] bg-outline absolute left-2/3" />
                </div>
                <div className="text-center relative z-10 p-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mx-auto animate-ping" />
                  <div className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold mt-2">
                    Palayamkottai Studio
                  </div>
                  <div className="font-body-sm text-body-sm text-outline mt-0.5">
                    Near Manakaavalam Pillai Hospital Rd
                  </div>
                </div>
              </div>

              <a
                href={STUDIO_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-secondary font-label-sm text-label-sm uppercase tracking-wider hover:underline pt-1"
              >
                <span>Open in Google Maps</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: CONSULTATION FORM */}
          <div className="lg:col-span-7 bg-surface p-8 md:p-12 border border-outline-variant/40 shadow-sm">
            <div className="mb-8">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
                PROJECT INQUIRY
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-1">
                Book an Exploratory Consultation
              </h2>
              <p className="font-body-sm text-body-sm text-outline mt-1 leading-relaxed">
                Share your architectural requirements. Our team will review the scope and reach out within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Sundaram"
                    className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-secondary focus:ring-1 focus:ring-secondary p-3.5 font-body-md text-body-md text-primary placeholder-outline-variant/70 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-secondary focus:ring-1 focus:ring-secondary p-3.5 font-body-md text-body-md text-primary placeholder-outline-variant/70 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectClassification" className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2">
                    Project Classification
                  </label>
                  <select
                    id="projectClassification"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-secondary focus:ring-1 focus:ring-secondary p-3.5 font-body-md text-body-md text-primary outline-none transition-colors cursor-pointer"
                  >
                    <option>Residential Villa (New Build)</option>
                    <option>Interior Architecture &amp; Styling</option>
                    <option>Turnkey Design &amp; Build</option>
                    <option>Commercial / Hospitality Space</option>
                    <option>Architectural 3D Visualization Only</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="projectSiteLocation" className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2">
                    Project Site Location
                  </label>
                  <input
                    id="projectSiteLocation"
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Palayamkottai, Vannarpettai, Tenkasi"
                    className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-secondary focus:ring-1 focus:ring-secondary p-3.5 font-body-md text-body-md text-primary placeholder-outline-variant/70 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <span className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2">
                  Target Timeline
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["Immediate", "1–3 Months", "Planning Only"].map((t) => (
                    <label
                      key={t}
                      className={`flex items-center space-x-2 border p-3 cursor-pointer transition-colors ${
                        formData.timeline === t
                          ? "border-secondary bg-surface-container-low"
                          : "border-outline-variant/40 hover:bg-surface-container-low"
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        checked={formData.timeline === t}
                        onChange={() => setFormData({ ...formData, timeline: t })}
                        className="text-secondary focus:ring-0 cursor-pointer"
                      />
                      <span className="font-body-sm text-body-sm text-on-surface">
                        {t}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="visionDetails" className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2">
                  Tell Us About Your Vision
                </label>
                <textarea
                  id="visionDetails"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention plot dimensions, desired architectural style, family requirements, or specific materials..."
                  className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-secondary focus:ring-1 focus:ring-secondary p-3.5 font-body-md text-body-md text-primary placeholder-outline-variant/70 outline-none transition-colors"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary hover:bg-secondary text-surface py-4 px-8 font-label-lg text-label-lg uppercase tracking-wider transition-colors duration-300 disabled:opacity-70 cursor-pointer text-center"
                >
                  {submitting ? "Sending Scope..." : "Send Enquiry"}
                </button>
              </div>

              {submitted && (
                <div
                  role="status"
                  className="p-4 bg-surface-container text-secondary text-center font-label-md text-label-md uppercase tracking-wider border border-secondary/30 animate-fade-in"
                >
                  Thank you. Your message has been received. Our team will contact you promptly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
