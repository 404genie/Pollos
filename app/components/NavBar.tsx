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

  return (
    <header className="fixed top-0 z-50 w-full border-b border-yellow-900 bg-[#2a0606]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-3xl font-black tracking-widest text-yellow-200">
          POLLOS
        </a>

        <nav className="hidden gap-8 text-yellow-100 md:flex">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-yellow-400">
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="https://opensea.io"
          target="_blank"
          className="hidden rounded-xl bg-yellow-500 px-5 py-2 font-bold text-black transition hover:scale-105 md:block"
        >
          View on OpenSea
        </a>

        <button
          onClick={() => setOpen(true)}
          className="text-yellow-100 md:hidden"
        >
          <Menu size={30} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 md:hidden">
          <div className="ml-auto h-full w-[80%] max-w-sm bg-[#210707] p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black text-yellow-200">POLLOS</h2>

              <button onClick={() => setOpen(false)} className="text-yellow-100">
                <X size={30} />
              </button>
            </div>

            <div className="mt-12 flex flex-col gap-6 text-2xl text-yellow-100">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-yellow-900 pb-4"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="https://opensea.io"
                target="_blank"
                className="mt-4 rounded-xl bg-yellow-500 px-5 py-4 text-center font-black text-black"
              >
                View on OpenSea
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}