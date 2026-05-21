export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#fafaf0] border-t-[3px] border-[#fafaf0]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="bebas text-2xl tracking-wider">
          Felix<span className="text-[#ff6b9d]">.</span>Dev
        </span>
        <span className="text-xs text-gray-500 font-mono">
          © {new Date().getFullYear()} Felix. Built with Next.js & Tailwind CSS.
        </span>
        <a
          href="#hero"
          className="neo-btn px-4 py-2 text-xs bg-[#f5e642] text-[#0a0a0a]"
          style={{ border: "2px solid #f5e642", boxShadow: "3px 3px 0px #f5e642" }}
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
