"use client";
import { useEffect, useRef } from "react";

const facts = [
  { label: "Name", value: "Felix Bintang Elisha" },
  { label: "Role", value: "Full-Stack Developer | Data Analyst | Graphic Design" },
  { label: "Location", value: "Jakarta, Indonesia" },
  { label: "Email", value: "felixbintangelisha@gmail.com" },
  { label: "Phone", value: "+62 813-1131-0686" },
  { label: "Major", value: "Information System" },
  { label: "Education", value: "Gunadarma University" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6 bg-[#fafaf0]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="neo-box bg-[#ff6b9d] px-4 py-2 bebas text-2xl">ABOUT</span>
          <div className="flex-1 h-[3px] bg-black" />
        </div>
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="reveal">
            <div className="neo-box-lg bg-[#4169ff] aspect-[4/3] flex items-center justify-center mb-6 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)",
                  backgroundSize: "24px 24px",
                }}
              />
              <img
  src="/foto.jpeg"
  alt="Foto Saya"
  className="w-full h-full object-cover absolute inset-0"
/>
              <div className="absolute top-4 right-4 neo-box-sm bg-[#f5e642] px-3 py-1 text-xs font-bold uppercase rotate-3">
                Jakarta, ID
              </div>
            </div>

            <div className="neo-box bg-[#fafaf0]">
              {facts.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`flex items-center gap-4 px-5 py-3 text-sm ${
                    i < facts.length - 1 ? "border-b-[2px] border-black" : ""
                  }`}
                >
                  <span className="font-bold uppercase tracking-wider text-xs text-gray-500 w-24 shrink-0">
                    {label}
                  </span>
                  <span className="font-mono">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div className="reveal flex flex-col gap-6">
            <h2 className="bebas text-6xl lg:text-7xl leading-none">
              CRAFTING<br />
              <span className="text-[#ff6b9d]">DIGITAL</span><br />
              EXPERIENCES
            </h2>

            <p className="text-sm leading-relaxed text-gray-700">
              I&apos;m a final-year information system student with 5+ years of experience <span className="font-bold text-black">building applications and creative digital products</span>. I
              that people actually enjoy using.
              I care equally about clean code and thoughtful design.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              My stack spans frontend and backend — from designing interfaces in Figma to building web apps with Laravel, React, and Python. I&apos;ve with creative agencies and educational institutions, delivering real solutions for real clients.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
             Beyond development, Data Science is where i sharpen my edge — building machine learning models and extracting insights that turn good products into great ones.
            </p>

            {/* CTA */}
            <div className="flex gap-4 flex-wrap mt-4">
              <a
                href="/Felix Bintang Elisha-resume.pdf.pdf"
                download="Felix Bintang Elisha-resume.pdf"
                className="neo-btn px-6 py-3 text-sm bg-[#0a0a0a] text-[#fafaf0] hover:bg-[#f5e642] hover:text-[#0a0a0a] transition-colors"
              >
                Download CV ↓
              </a>
              <a
                href="#projects"
                className="neo-btn px-6 py-3 text-sm bg-[#42f5a1] text-[#0a0a0a]"
              >
                See My Work →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { num: "5+", label: "Years of experience", color: "#f5e642" },
                { num: "40+", label: "Projects completed", color: "#ff6b9d" },
              ].map(({ num, label, color }) => (
                <div key={label} className="neo-box p-5" style={{ backgroundColor: color }}>
                  <span className="bebas text-5xl block">{num}</span>
                  <span className="text-xs uppercase tracking-widest font-bold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
