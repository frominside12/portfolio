const items = [
  "React", "Next.js", "TypeScript", "Node.js", "Laravel",
  "Tailwind CSS", "Python", "Graphic Design", "Machine Learning", "Figma",
  "Project management", "Digital Branding", "UI/UX Design", "CI/CD", "Open Source",
  "Adobe Photoshop / Illustrator", "Bootstrap", "Power BI", "Matplotlib",
];

export default function Marquee() {
  const repeated = [...items, ...items];
  return (
    <div className="bg-[#f5e642] border-y-[3px] border-black py-4 overflow-hidden">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-bold text-sm uppercase tracking-widest px-6 text-[#0a0a0a]">
              {item}
            </span>
            <span className="text-[#0a0a0a] text-lg font-bold">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
