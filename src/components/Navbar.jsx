import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { STUDIO_INFO } from "../data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md shadow-sm border-b border-outline-variant/30"
          : "bg-surface/90 backdrop-blur-md"
      }`}
    >
      <div className="w-full px-6 md:px-margin max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Brand Anchor */}
        <Link
          to="/"
          className="group flex items-center space-x-3 cursor-pointer select-none"
          aria-label="InstaHome Design Builders Home"
        >
          <span className="w-2.5 h-2.5 bg-secondary rounded-none transform rotate-45 transition-transform duration-300 group-hover:rotate-90 inline-block" />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary font-semibold leading-none">
              {STUDIO_INFO.shortName}
            </span>
            <span className="font-label-sm text-label-sm tracking-widest text-outline uppercase mt-0.5">
              {STUDIO_INFO.subtitle}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-label-md text-label-md tracking-wider uppercase transition-colors duration-200 pb-1 ${
                  active
                    ? "text-primary border-b border-primary font-semibold"
                    : "text-on-surface-variant hover:text-primary border-b border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Trailing Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-outline">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider">
              Tirunelveli · TN
            </span>
          </div>
          <Link
            to="/contact"
            className="bg-primary-container text-surface hover:bg-secondary px-5 py-2.5 font-label-lg text-label-lg uppercase tracking-wider transition-colors duration-300"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 text-primary focus:outline-none focus:ring-1 focus:ring-secondary rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-surface-container border-t border-outline-variant/30 px-6 py-6"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-left font-label-md text-label-md tracking-widest uppercase py-2 border-b border-outline-variant/20 transition-colors ${
                      active ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="pt-4 flex flex-col space-y-3">
              <div className="text-outline text-label-sm uppercase flex items-center space-x-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>Palayamkottai, Tirunelveli</span>
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-primary-container text-surface py-3 font-label-lg text-label-lg uppercase tracking-wider text-center block hover:bg-secondary transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
