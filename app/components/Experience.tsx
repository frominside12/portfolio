"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    period: "2022 — Present",
    company: "Gunadarma University",
    role: "Information System Student",
    desc: "final-year student who doesn't just make a system work, but also crafts its aesthetics (design), maps its structure (diagrams), and deciphers its brains (data analytics).",
    tags: ["Python", "PHP", "Design Systems", "UML"],
    color: "#f5e642",
  },
  {
    period: "2021 — 2021",
    company: "LCC",
    role: "IT Support",
    desc: "Building and maintaining responsive web applications while troubleshooting database and environment configurations.",
    tags: ["PHP", "HTML", "CSS", "Adobe Family"],
    color: "#ff6b9d",
  },
  {
    period: "2025 — 2025",
    company: "Buatin Kamu.ID",
    role: "Graphic Designer",
    desc: "Translating abstract ideas into striking visual concepts that capture brand identity and engage target audiences across digital and print media.",
    tags: ["Adobe Illustrator", "Figma"],
    color: "#42f5a1",
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-6 bg-[#fafaf0]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="neo-box bg-[#42f5a1] text-[#0a0a0a] px-4 py-2 bebas text-2xl">EXPERIENCE</span>
          <div className="flex-1 h-[3px] bg-black" />
        </div>

        <div className="flex flex-col gap-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="reveal border-[3px] border-black -mt-[3px] first:mt-0 p-8 card-hover"
              style={{ backgroundColor: i % 2 === 0 ? "#fafaf0" : "#0a0a0a", color: i % 2 === 0 ? "#0a0a0a" : "#fafaf0" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left meta */}
                <div className="lg:col-span-1">
                  <span
                    className="neo-box-sm px-3 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-3"
                    style={{ backgroundColor: exp.color, color: "#0a0a0a" }}
                  >
                    {exp.period}
                  </span>
                  <p className="font-bold text-sm uppercase tracking-wider opacity-60">{exp.company}</p>
                </div>

                {/* Right content */}
                <div className="lg:col-span-3">
                  <h3 className="bebas text-3xl lg:text-4xl mb-3">{exp.role}</h3>
                  <p className="text-sm leading-relaxed opacity-70 mb-5">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="neo-box-sm px-3 py-1 text-xs font-bold uppercase"
                        style={{ backgroundColor: exp.color, color: "#0a0a0a" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
