import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felix - Full Stack Dev",
  description: "Portfolio of Felix Bintang, Full-Stack Developer & Data Analyst based in Jakarta.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
