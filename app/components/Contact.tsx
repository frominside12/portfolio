"use client";
import { useEffect, useRef, useState } from "react";

const socials = [
  { label: "GitHub", handle: "@frominside12", color: "#f5e642", link: "https://github.com/frominside12" },
  { label: "LinkedIn", handle: "Felix Bintang Elisha", color: "#4169ff", link: "https://www.linkedin.com/in/felix-bintang-elisha" },
  { label: "Email", handle: "felixbintangelisha@gmail.com", color: "#ff6b9d", link: "mailto:felixbintangelisha@gmail.com" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("felixbintangelisha@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#fafaf0]" ref={ref}>
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-16 reveal">
          <span className="neo-box bg-[#4169ff] text-[#fafaf0] px-4 py-2 bebas text-2xl">CONTACT</span>
          <div className="flex-1 h-[3px] bg-black" />
        </div>

        <div className="reveal mb-16">
          <h2 className="bebas text-[clamp(56px,10vw,140px)] leading-none">
            {"LET'S BUILD"}
            <br />
            <span className="text-[#ff6b9d]">SOMETHING</span>
            <br />
            <span className="relative inline-block">
              GREAT
              <span className="absolute left-0 bottom-2 w-full h-4 bg-[#f5e642] -z-10" />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="reveal flex flex-col gap-6">
            <div className="neo-box-lg bg-[#0a0a0a] text-[#fafaf0] p-8">
              <p className="text-xs uppercase tracking-widest mb-2 opacity-50">Email me at</p>
              <p className="bebas text-2xl lg:text-3xl mb-6 text-[#f5e642] break-all">
                felixbintangelisha@gmail.com
              </p>
              <button
                onClick={handleCopy}
                className="neo-btn px-6 py-3 text-sm w-full text-center transition-colors"
                style={{ backgroundColor: copied ? "#42f5a1" : "#f5e642", color: "#0a0a0a" }}
              >
                {copied ? "Copied!" : "Copy Email Address"}
              </button>
            </div>

            <div className="neo-box bg-[#fafaf0] p-6 flex flex-col gap-4">
              <h3 className="bebas text-2xl">OR SEND A MESSAGE</h3>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest block mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-[3px] border-black px-4 py-3 text-sm font-mono bg-[#fafaf0] focus:outline-none focus:bg-[#f5e642] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-[3px] border-black px-4 py-3 text-sm font-mono bg-[#fafaf0] focus:outline-none focus:bg-[#f5e642] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest block mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border-[3px] border-black px-4 py-3 text-sm font-mono bg-[#fafaf0] focus:outline-none focus:bg-[#f5e642] transition-colors resize-none"
                />
              </div>

              {status === "success" && (
                <div className="neo-box-sm bg-[#42f5a1] px-4 py-3 text-sm font-bold">
                  Pesan berhasil terkirim ke Felix!
                </div>
              )}
              {status === "error" && (
                <div className="neo-box-sm bg-[#ff6b9d] px-4 py-3 text-sm font-bold text-white">
                  Gagal kirim. Coba lagi.
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="neo-btn px-6 py-3 text-sm w-full text-center transition-colors disabled:opacity-50"
                style={{ backgroundColor: status === "loading" ? "#ccc" : "#0a0a0a", color: "#fafaf0" }}
              >
                {status === "loading" ? "Mengirim..." : "Send Message"}
              </button>
            </div>
          </div>

          <div className="reveal flex flex-col gap-4">
            <div className="neo-box bg-[#42f5a1] p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 bg-green-700 rounded-full animate-pulse" />
                <span className="font-bold text-sm uppercase tracking-widest">Available for Work</span>
              </div>
              <p className="text-xs leading-relaxed opacity-70">
                Final-year Information Systems student. Open to internships, freelance, and full-time opportunities. Response time: within 24 hours.
              </p>
            </div>

            <div className="flex flex-col">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6 py-5 border-[3px] border-black -mt-[3px] first:mt-0 transition-colors bg-[#fafaf0] hover:opacity-90"
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = s.color; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fafaf0"; }}
                >
                  <div>
                    <span className="font-bold text-sm uppercase tracking-widest block">{s.label}</span>
                    <span className="text-xs opacity-60">{s.handle}</span>
                  </div>
                  <span className="bebas text-2xl">{">"}</span>
                </a>
              ))}
            </div>

            <div className="neo-box bg-[#ff6b9d] p-6 text-[#fafaf0]">
              <p className="bebas text-xl mb-2">RESPONSE TIME</p>
              <p className="bebas text-6xl">24H</p>
              <p className="text-xs opacity-70 mt-2 uppercase tracking-wider">Usually much faster</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
