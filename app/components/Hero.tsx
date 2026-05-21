"use client";
import { useEffect, useRef } from "react";

const badges = ["OPEN TO WORK","JAKARTA,ID", "5+ Years EXP", "FULL-STACK", "Data Analyst"];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen pt-24 pb-16 px-6 flex flex-col justify-center relative overflow-hidden bg-[#fafaf0]"
    >
      {/* Background grid dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0a0a0a 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          opacity: 0.08,
        }}
      />

      {/* Decorative blocks */}
      <div className="absolute top-32 right-8 w-24 h-24 bg-[#f5e642] neo-box rotate-12 hidden lg:block" />
      <div className="absolute bottom-24 left-8 w-16 h-16 bg-[#ff6b9d] neo-box rotate-6 hidden lg:block" />
      <div className="absolute top-48 right-40 w-10 h-10 bg-[#4169ff] neo-box-sm hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Badges row */}
        <div className="flex flex-wrap gap-2 mb-8">
          {badges.map((b, i) => (
            <span
              key={b}
              className="neo-box-sm px-3 py-1 text-xs font-bold uppercase tracking-widest"
              style={{
                backgroundColor: ["#f5e642","#ff6b9d","#42f5a1","#4169ff","#ff6b35"][i % 5],
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {b}
            </span>
          ))}
        </div>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="bebas text-[clamp(72px,12vw,180px)] leading-none mb-6 relative"
          style={{ lineHeight: 0.9 }}
        >
          <span className="block">FULL-STACK</span>
          <span className="block relative">
            <span className="relative z-10">DEVELOPER</span>
            <span
              className="absolute left-0 bottom-0 h-[18px] w-full bg-[#f5e642] -z-10"
              style={{ transform: "skewX(-3deg)" }}
            />
          </span>
          <span className="block text-[#ff6b9d]">&amp; Data Analyst</span>
        </h1>

        {/* Tagline + CTA grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {/* Bio card */}
          <div className="lg:col-span-2 neo-box bg-[#0a0a0a] text-[#fafaf0] p-8">
            <p className="text-sm leading-relaxed mb-4 font-mono">
              Hey, I&apos;m{" "}
              <span className="text-[#f5e642] font-bold">Felix Bintang Elisha</span> I am a final year information system student with <span className="text-[#ff6b9d]">5+ years of IT experience</span> skilled in web development <span className="text-[#FFA8C3]">(Laravel, React, Python), graphic design, and project management.</span>Currently focused on <span className="text-[#ff6b9d]"> Data Science and machine learning.</span>A fast learner who enjoys building projects from concept to completion.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Currently based in Jakarta, Indonesia. Available for freelance & full-time opportunities or internship.
            </p>
            <div className="flex gap-3 mt-6 flex-wrap">
              <a href="#projects" className="neo-btn px-6 py-3 text-sm bg-[#FAC45C] text-[#0a0a0a]">
                View Work
              </a>
              <a href="#contact" className="neo-btn px-6 py-3 text-sm bg-transparent text-[#F0F0E1] border-[#F0F0E1]" style={{borderColor: '#F0F0E1', boxShadow: '5px 5px 0px #F0F0E1'}}>
                Contact Me
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="neo-box bg-[#4169ff] text-[#fafaf0] p-6 flex flex-col justify-between">
            <div className="text-xs font-bold uppercase tracking-widest mb-4 opacity-70">
              Quick Stats
            </div>
            {[
              ["5+", "Years Experience"],
              ["7", "Projects"],
              ["5", " Clients"],
            ].map(([num, label]) => (
              <div key={label} className="border-b border-blue-300 pb-3 mb-3 last:border-0 last:mb-0 last:pb-0">
                <span className="bebas text-4xl block">{num}</span>
                <span className="text-xs opacity-70 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
