"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-[#fafaf0] border-b-[3px] border-black" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="bebas text-3xl tracking-wider hover:text-[#f5e642] transition-colors">
          Felix<span className="text-[#ff6b9d]">.</span>Dev
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-1">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="neo-btn px-4 py-2 text-xs bg-[#fafaf0] hover:bg-[#f5e642] transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden neo-box-sm p-2 bg-[#fafaf0]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fafaf0] border-t-[3px] border-black px-6 py-4 flex flex-col gap-2">
          {[...links, "Hire Me"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "")}`}
              onClick={() => setMenuOpen(false)}
              className="neo-btn px-4 py-3 text-sm bg-[#f5e642] text-center"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
