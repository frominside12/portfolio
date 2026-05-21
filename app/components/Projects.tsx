"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    num: "01",
    title: "Analytics Sentiment",
    type: "Python",
    year: "2026",
    desc: "analysis of sentiment regarding the war between Iran and Israel from Twitter (X) comments.",
    tags: ["Pandas", "Matplotlib", "Numpy", "Python"],
    color: "#4169ff",
    textColor: "#fafaf0",
    featured: true,
    link: "https://colab.research.google.com/drive/157-mteq4I3x_PkEm4zIdLWWMRTdWJ_2V?usp=drive_link",
  },
  {
    num: "02",
    title: "Website Suapin",
    type: "Website",
    year: "2022",
    desc: "Personal Project building e commerce website using multi user access control.",
    tags: ["PHP", "Bootstrap", "Java"],
    color: "#f5e642",
    textColor: "#0a0a0a",
    featured: false,
    link: "https://drive.google.com/file/d/1eLx2WPa7qKVDd4OCCuTTLeJIKbq69Ovo/view?usp=drive_link",
  },
  {
    num: "03",
    title: "Laundry Management",
    type: "Management Website",
    year: "2026",
    desc: "Developing management website using Laravel and React.",
    tags: ["Laravel", "React", "PHP"],
    color: "#ff6b9d",
    textColor: "#fafaf0",
    featured: false,
    link: "https://github.com/frominside12/laundrypro.git",
  },
  {
    num: "04",
    title: "Ralira Psychology Bureau",
    type: "Website",
    year: "2025",
    desc: "Building Website for my campus project for Rali ra as my client",
    tags: ["PHP", "Bootstrap", "MySql", "Python"],
    color: "#42f5a1",
    textColor: "#0a0a0a",
    featured: false,
    link: "https://github.com/frominside12/Ralira.git",
  },
];

export default function Projects() {
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
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a] text-[#fafaf0]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="neo-box bg-[#ff6b35] text-[#fafaf0] px-4 py-2 bebas text-2xl">PROJECTS</span>
          <div className="flex-1 h-[3px] bg-[#fafaf0] opacity-20" />
        </div>

        {/* Featured project */}
        <div className="reveal mb-4">
          <div
            className="neo-box-lg card-hover grid grid-cols-1 lg:grid-cols-2"
            style={{ backgroundColor: projects[0].color, color: projects[0].textColor }}
          >
            {/* Visual */}
            {/* Visual */}
<div className="min-h-[280px] border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black relative overflow-hidden">
  <img
    src="/pic1.png"
    alt="Analytics Sentiment Project"
    className="w-full h-full object-cover absolute inset-0"
  />
  {/* Overlay label */}
  <div className="absolute bottom-4 left-4 neo-box-sm bg-[#f5e642] text-[#0a0a0a] px-3 py-1">
    <span className="text-xs font-bold uppercase tracking-widest">Featured Project</span>
  </div>
</div>
            {/* Info */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="neo-box-sm bg-black text-[#fafaf0] px-3 py-1 text-xs font-bold uppercase">
                    {projects[0].type}
                  </span>
                  <span className="text-xs font-bold opacity-60">{projects[0].year}</span>
                </div>
                <h3 className="bebas text-4xl lg:text-5xl mb-4 leading-none">{projects[0].title}</h3>
                <p className="text-sm leading-relaxed opacity-80 mb-6">{projects[0].desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tags.map((tag) => (
                    <span key={tag} className="neo-box-sm bg-black text-[#fafaf0] px-3 py-1 text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={projects[0].link}
                className="neo-btn px-6 py-3 text-sm bg-black text-[#fafaf0] self-start hover:bg-[#fafaf0] hover:text-black transition-colors"
              >
                View Case Study →
              </a>
            </div>
          </div>
        </div>

        {/* Other projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.slice(1).map((project, i) => (
            <div
              key={project.num}
              className="reveal neo-box card-hover flex flex-col"
              style={{
                backgroundColor: project.color,
                color: project.textColor,
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="bebas text-5xl opacity-20">{project.num}</span>
                  <span className="neo-box-sm bg-black text-[#fafaf0] px-3 py-1 text-xs font-bold uppercase">
                    {project.type}
                  </span>
                </div>
                <h3 className="bebas text-2xl mb-3 leading-tight">{project.title}</h3>
                <p className="text-xs leading-relaxed opacity-70 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="neo-box-sm bg-black text-[#fafaf0] px-2 py-1 text-[10px] font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t-[3px] border-black p-4">
                <a
                  href={project.link}
                  className="neo-btn px-4 py-2 text-xs bg-black text-[#fafaf0] w-full text-center block hover:opacity-80 transition-opacity"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 text-center reveal">
          <a
            href="https://github.com/frominside12?tab=repositories"
            className="neo-btn px-8 py-4 text-sm bg-[#f5e642] text-[#0a0a0a] inline-block"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
