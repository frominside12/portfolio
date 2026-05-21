"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    title: "Frontend",
    color: "#f5e642",
    skills: ["React", "Bootstrap", "Tailwind CSS", "Html/CSS", "Figma", "Adobe XD / Wireframing"],
  },
  {
    title: "Backend",
    color: "#ff6b9d",
    skills: ["Node.js / Express", "Python / Laravel", "PostgreSQL", "Mysql","REST APIs","Golang"],
  },
  {
    title: "Mobile",
    color: "#4169ff",
    skills: ["React Native", "Expo", "iOS / Android", "Push Notifications", "App Store Deploy"],
  },
  {
    title: "DevOps",
    color: "#42f5a1",
    skills: ["AWS (EC2, S3, RDS)", "Docker / K8s", "CI/CD Pipelines", "Vercel / Netlify", "Linux / Bash"],
  },
  {
    title: "AI & Data",
    color: "#ff6b35",
    skills: ["OpenAI / LLM APIs", "LangChain", "Python ML", "Data Visualization", "n8n Automation"],
  },
  {
    title: "Soft Skills",
    color: "#c084fc",
    skills: ["Team Leadership", "Project Manager", "Code Review", "Technical Writing"],
  },
];

export default function Skills() {
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
    <section id="skills" className="py-24 px-6 bg-[#0a0a0a] text-[#fafaf0]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="neo-box bg-[#f5e642] text-[#0a0a0a] px-4 py-2 bebas text-2xl">SKILLS</span>
          <div className="flex-1 h-[3px] bg-[#fafaf0] opacity-20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="reveal card-hover neo-box p-6"
              style={{
                backgroundColor: group.color,
                color: "#0a0a0a",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="bebas text-3xl">{group.title}</span>
                <span className="text-2xl">{group.icon}</span>
              </div>
              <ul className="flex flex-col gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm font-mono font-bold">
                    <span className="w-2 h-2 bg-black rounded-full shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 neo-box bg-[#f5e642] text-[#0a0a0a] p-6 reveal flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="bebas text-2xl">ALWAYS LEARNING. ALWAYS BUILDING.</p>
          <a href="#contact" className="neo-btn px-6 py-3 text-sm bg-[#0a0a0a] text-[#fafaf0]">
            Let&apos;s Build Something →
          </a>
        </div>
      </div>
    </section>
  );
}
