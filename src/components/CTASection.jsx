import React from "react";
import { Link } from "react-router-dom";

export default function CTASection({
  overline = "LET'S START WITH YOUR IDEA",
  title = "Your space starts with a sketch.",
  subtitle = "Book an exploratory studio meeting at our Palayamkottai office or schedule an on-site evaluation for your upcoming build.",
  buttonText = "Schedule Consultation",
  buttonLink = "/contact"
}) {
  return (
    <section className="bg-primary text-surface py-20 px-6 md:px-margin text-center relative overflow-hidden">
      {/* Subtle Architectural Grid Lines background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#8c4e30_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed block">
          {overline}
        </span>
        <h2 className="font-display-hero-mobile md:font-headline-lg text-headline-lg text-surface tracking-tight">
          {title}
        </h2>
        <p className="font-body-lg text-body-lg text-outline-variant max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="pt-4 flex justify-center">
          <Link
            to={buttonLink}
            className="bg-secondary text-surface hover:bg-secondary-container hover:text-on-secondary-container px-8 py-4 font-label-lg text-label-lg uppercase tracking-wider transition-colors duration-300 inline-block"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
