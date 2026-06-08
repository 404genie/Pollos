"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "FAQ", href: "#faq" },
  ];
const glowStyle = `
    @keyframes glow {
      from { box-shadow: 0 0 10px rgba(240,192,64,0.5), 0 0 20px rgba(240,192,64,0.2); }
      to   { box-shadow: 0 0 20px rgba(240,192,64,0.9), 0 0 40px rgba(240,192,64,0.5); }
    }
  `;
  return (
    <header className="fixed top-0 z-50 w-full border-b border-yellow-900 bg-[#2a0606]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-3xl font-black tracking-widest text-yellow-200">
          <style>{glowStyle}</style>
          POLLOS
        </a>

        <nav className="hidden gap-8 text-yellow-100 md:flex">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-yellow-400">
              {link.name}
            </a>
          ))}

          <a
            href="/apply_whitelist"
            className="hidden md:block px-5 py-2 rounded-xl font-bold text-black text-sm transition hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f0c040, #c04010)",
              boxShadow: "0 0 12px rgba(240,192,64,0.6), 0 0 24px rgba(240,192,64,0.3)",
              animation: "glow 2s ease-in-out infinite alternate",
            }}
          >
            🐓 Secure Your Whitelist
          </a>
      </nav>

        <a
        
          target="_blank"
          className="hidden rounded-xl bg-yellow-500 px-5 py-2 font-bold text-black transition hover:scale-105 md:block"
        >
          View on OpenSea(TBA)
        </a>

        <button
          onClick={() => setOpen(true)}
          className="text-yellow-100 md:hidden"
        >
          <Menu size={30} />
        </button>
      </div>

      {open && (
  <div className="fixed inset-0 z-[9999] md:hidden">
    <div
      className="absolute inset-0 bg-black/70"
      onClick={() => setOpen(false)}
    />

    <aside className="absolute right-0 top-0 h-full w-[300px] border-l border-yellow-800 bg-[#160404] shadow-2xl">
      <div className="flex items-center justify-between border-b border-yellow-800 bg-[#160404] p-5">
        <h2 className="text-2xl font-black tracking-widest text-yellow-200">
          POLLOS
        </h2>

        <button
          onClick={() => setOpen(false)}
          className="rounded-full bg-yellow-500 p-2 text-black"
        >
          <X size={22} />
        </button>
      </div>

      <nav className="flex flex-col gap-2 bg-[#160404] p-5">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-xl bg-[#2a0606] px-5 py-4 text-lg font-bold text-yellow-100"
          >
            {link.name}
          </a>
        ))}

        <a
        
          target="_blank"
          className="mt-4 rounded-xl bg-yellow-500 px-5 py-4 text-center font-black text-black"
        >
          View on OpenSea(TBA)
        </a>
      </nav>
    </aside>
  </div>
)}
    </header>
  );
}