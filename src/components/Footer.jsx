import React from "react";
import { Link } from "react-router-dom";
import { STUDIO_INFO } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low text-primary border-t border-outline-variant/40 w-full transition-colors duration-200 mt-auto">
      <div className="w-full px-6 md:px-margin max-w-7xl mx-auto py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-outline-variant/30">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2 group">
              <span className="w-2.5 h-2.5 bg-secondary inline-block" />
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-semibold">
                {STUDIO_INFO.shortName}
              </span>
            </Link>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Architectural Vernacular Modernism. High-integrity design-build commissions across South Tamil Nadu.
            </p>
            <div className="text-outline text-label-sm uppercase tracking-wider">
              {STUDIO_INFO.location}.
            </div>
          </div>

          {/* Studio Direct */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
              Studio Direct
            </div>
            <div className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              <p>10A, Manakaavalam Pillai Hospital Rd</p>
              <p>Palayamkottai – 627002</p>
              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="text-primary hover:text-secondary block mt-2 font-medium transition-colors"
              >
                {STUDIO_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Index & Commissions */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
              Index &amp; Commissions
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                to="/about"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors duration-200"
              >
                Philosophy
              </Link>
              <Link
                to="/about"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors duration-200"
              >
                Materiality Index
              </Link>
              <Link
                to="/projects"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors duration-200"
              >
                Studio Archive
              </Link>
              <Link
                to="/contact"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors duration-200"
              >
                Start Commission
              </Link>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center space-x-1.5 bg-surface px-3 py-1.5 text-label-sm text-label-sm border border-outline-variant/30">
                <span className="text-secondary font-bold">5.0 ★</span>
                <span className="text-outline uppercase">Google Verified Client Rating</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-body-sm text-body-sm text-on-surface-variant space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} InstaHome Design Builders. Palayamkottai, Tirunelveli, Tamil Nadu. Architectural Vernacular Modernism.
          </div>
          <div className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
            Palayamkottai · Tirunelveli · TN
          </div>
        </div>
      </div>
    </footer>
  );
}
