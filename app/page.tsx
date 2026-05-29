"use client";
import Navbar from "./components/NavBar";
import { motion } from "framer-motion";
import { FaDiscord, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SiOpensea } from "react-icons/si";
import { useEffect, useState } from "react";
import CursorGlow from "./components/CursorGlow";

const particles = [
  { x: 120, y: 100, endY: 180 },
  { x: 300, y: 220, endY: 90 },
  { x: 480, y: 140, endY: 260 },
  { x: 650, y: 300, endY: 180 },
  { x: 820, y: 110, endY: 240 },
  { x: 1040, y: 260, endY: 150 },
  { x: 1150, y: 420, endY: 280 },
  { x: 220, y: 500, endY: 350 },
  { x: 390, y: 380, endY: 520 },
  { x: 560, y: 460, endY: 310 },
  { x: 760, y: 540, endY: 390 },
  { x: 930, y: 470, endY: 620 },
  { x: 1080, y: 580, endY: 430 },
  { x: 160, y: 640, endY: 500 },
  { x: 710, y: 680, endY: 560 },
  { x: 990, y: 720, endY: 600 },
  { x: 70, y: 300, endY: 420 },
  { x: 1250, y: 180, endY: 320 },
];
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [whitepaperOpen, setWhitepaperOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1800);
  const [selectedNFT, setSelectedNFT] = useState<any>(null);
  const nfts = [
    {
      title: "The Aristocrat",
      image: "/images/Aristocrat.jpg",
      rarity: "Legendary",
      lore: "The intelligent pollos that rules the farm .",
      traits: ["Spectacle", "Suit", "Golden beak", "Explorer"],
    },
    {
      title: "The Gentleman",
      image: "/images/gentleman.jpg",
      rarity: "Epic",
      lore: "A classy Pollos with rich taste, sharp instincts, and unmatched confidence.",
      traits: ["Glasses", "Jewelry Chain", "Hoodie", "White skin"],
    },
    {
      title: "The Convict",
      image: "/images/Convict.jpg",
      rarity: "Epic",
      lore: "A multiple times convict from the ancient roost",
      traits: ["mugshot", "Big eyes", "Brown skin", "Criminal Spirit"],
    },
  ];
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#120303] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-black tracking-[12px] text-yellow-100 md:text-9xl">
            POLLOS
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.4, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="mt-4 text-3xl italic text-yellow-500"
          >
            Hatching...
          </motion.p>
        </motion.div>
      </div>
    );
  }
  return (
    <main className="bg-[#120303] text-white">
      <Navbar />
      <CursorGlow />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#5c0909] to-[#120303] px-6">
        <div className="absolute inset-0 texture-bg opacity-20" />
          {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-yellow-300"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0.2,
          }}
          animate={{
            y: [particle.y, particle.endY, particle.y],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + index * 0.25,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}

        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center">
          <p className="mb-4 text-yellow-500 tracking-[6px] uppercase">
            NFT Collection
          </p>

          <h1 className="text-7xl font-black uppercase tracking-[10px] text-yellow-100 md:text-9xl">
            POLLOS
          </h1>

          <p className="mt-4 text-3xl italic text-yellow-400">
            Hatching 🐣
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-yellow-50/80">
            More than chickens. Personalities. A legendary NFT ecosystem of
            unique Pollos living on the blockchain.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <a
            
              target="_blank"
              className="rounded-xl bg-yellow-500 px-8 py-4 text-lg font-black text-black transition hover:scale-105"
            >
              Mint on OpenSea(TBA)
            </a>

            <button
              onClick={() => setWhitepaperOpen(true)}
              className="rounded-xl border border-yellow-600 px-8 py-4 text-lg font-black text-yellow-200 transition hover:bg-yellow-500 hover:text-black"
            >
              Whitepaper
            </button>
          </div>
        </motion.div>
      </section>

      <div className="bg-[#120303] py-6 text-center text-yellow-600">
        ★ ★ ★
      </div>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-[#f2dfc2] px-6 py-24 text-black"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[5px] text-red-700">
            About Pollos
          </p>

          <h2 className="mt-5 text-5xl font-black uppercase leading-tight md:text-7xl">
            More than chickens.
            <br />
            Personalities.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-black/80">
            Pollos is a collectible NFT ecosystem where every chicken carries
            its own identity, vibe, and story. From samurais to astronauts,
            each Pollos is crafted to stand out in the flock.
          </p>
        </div>
      </section>

      <div className="bg-[#120303] py-6 text-center text-yellow-600">
        ★ ★ ★
      </div>

      {/* LORE */}
<section className="bg-[#120303] px-6 py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
    <div>
      <p className="text-sm font-black uppercase tracking-[5px] text-yellow-500">
        The Lore
      </p>

      <h2 className="mt-5 text-5xl font-black uppercase leading-tight text-yellow-100 md:text-7xl">
        Born in the Roost.
        <br />
        Built for the Chain.
      </h2>

      <p className="mt-8 text-xl leading-10 text-yellow-50/70">
        Deep inside the Pollos universe, every chicken has a role,
        a reputation, and a story. Some are warriors. Some are explorers.
        Some are classy legends. Together, they form a community-powered
        collection built around identity, humor, and culture.
      </p>
    </div>

    <div className="rounded-3xl border border-yellow-700 bg-[#2a1212] p-8 shadow-2xl">
      <h3 className="text-4xl font-black text-yellow-100">
        Collection Vision
      </h3>

      <ul className="mt-8 space-y-5 text-lg text-yellow-50/80">
        <li>🐔 Unique Pollos personalities</li>
        <li>🔥 Community-first storytelling</li>
        <li>🎩 Collectible character universe</li>
        <li>🌍 OpenSea-powered marketplace access</li>
      </ul>
    </div>
  </div>
</section>

      {/* GALLERY */}
<section
  id="gallery"
  className="bg-[#1a0c0c] px-6 py-24"
>
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-16 text-center text-5xl font-black uppercase text-yellow-100">
      Featured Gallery
    </h2>

    <div className="grid gap-8 md:grid-cols-3">
      {nfts.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl border border-yellow-700 bg-[#2a1212] transition duration-300 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(255,196,0,0.3)]"
        >
          <div className="absolute right-4 top-4 z-20 rounded-full bg-yellow-500 px-4 py-1 text-sm font-black text-black">
            #{index + 1}
          </div>

          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="p-6">
            <h3 className="text-3xl font-black text-yellow-100">
              {item.title}
            </h3>

            <p className="mt-2 text-lg text-yellow-500">
              {item.rarity}
            </p>

            <button
              onClick={() => setSelectedNFT(item)}
              className="mt-6 w-full rounded-xl bg-yellow-500 py-3 font-black text-black transition hover:bg-yellow-400"
            >
              View NFT
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<div className="bg-[#120303] py-6 text-center text-yellow-600">
  ★ ★ ★
</div>

      {/* ROADMAP */}
      <section
        id="roadmap"
        className="bg-[#7b1113] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-5xl font-black uppercase text-yellow-100">
            The Hatch Plan
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              "Community Growth",
              "Mint Announcement",
              "Ecosystem Expansion",
              "Legacy",
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-3xl bg-[#f2dfc2] p-8 text-center text-black shadow-2xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#7b1113] text-2xl font-black text-white">
                  {index + 1}
                </div>

                <h3 className="mt-8 text-2xl font-black">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#120303] py-6 text-center text-yellow-600">
        ★ ★ ★
      </div>
      {/* FAQ */}
      <section className="bg-[#120303] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-14 text-center text-5xl font-black uppercase text-yellow-100">
            FAQ
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What is Pollos?",
                a: "Pollos is a collectible NFT ecosystem of unique chicken personalities.",
              },
              {
                q: "Where can I mint?",
                a: "Minting and trading will happen on OpenSea.",
              },
              {
                q: "How many NFTs are available?",
                a: "The total supply will be announced before launch.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-yellow-700 bg-[#1f0b0b] p-6"
              >
                <h3 className="text-2xl font-black text-yellow-100">
                  {item.q}
                </h3>

                <p className="mt-4 text-lg leading-8 text-yellow-50/70">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
<section className="bg-[#7b1113] px-6 py-24 text-center">
  <div className="mx-auto max-w-4xl">
    <h2 className="text-6xl font-black uppercase text-yellow-100">
      Join the Roost
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-yellow-50/80">
      Follow Pollos NFTs, stay close to the hatch, and be first to know
      when the collection goes live on OpenSea.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">
      <a
        href="https://x.com/pollosoneth"
        target="_blank"
        className="rounded-xl border border-yellow-500 px-8 py-4 font-black text-yellow-100 transition hover:bg-yellow-500 hover:text-black"
      >
        Follow on X
      </a>

      <a
        href="https://opensea.io"
        target="_blank"
        className="rounded-xl bg-yellow-500 px-8 py-4 font-black text-black transition hover:scale-105"
      >
        View on OpenSea
      </a>
    </div>
  </div>
</section>

<footer className="border-t border-yellow-900 bg-black px-6 py-12 text-center">
  <h2 className="text-5xl font-black tracking-widest text-yellow-100">
    POLLOS
  </h2>

  <div className="mt-6 flex justify-center gap-6 text-2xl text-yellow-100">
    <a href="https://x.com/pollosoneth" target="_blank" className="hover:text-yellow-500">
      <FaXTwitter />
    </a>

    <a href="https://opensea.io" target="_blank" className="hover:text-yellow-500">
      <SiOpensea />
    </a>

  </div>

  <p className="mt-6 text-yellow-50/60">
    © 2026 Pollos NFTs. All rights reserved.
  </p>
</footer>
  {selectedNFT && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6">
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-yellow-700 bg-[#1f0b0b] p-6 shadow-2xl"
    >
      <button
        onClick={() => setSelectedNFT(null)}
        className="absolute right-5 top-5 rounded-full bg-yellow-500 px-4 py-2 font-black text-black"
      >
        ✕
      </button>

      <div className="grid gap-8 md:grid-cols-2">
        <img
          src={selectedNFT.image}
          alt={selectedNFT.title}
          className="h-[420px] w-full rounded-2xl object-cover"
        />

        <div>
          <p className="text-yellow-500">{selectedNFT.rarity}</p>

          <h2 className="mt-2 text-5xl font-black text-yellow-100">
            {selectedNFT.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-yellow-50/75">
            {selectedNFT.lore}
          </p>

          <h3 className="mt-8 text-3xl font-black text-yellow-100">
            Traits
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {selectedNFT.traits.map((trait: string) => (
              <span
                key={trait}
                className="rounded-full border border-yellow-700 px-4 py-2 text-yellow-100"
              >
                {trait}
              </span>
            ))}
          </div>

          <a
            href="https://opensea.io"
            target="_blank"
            className="mt-8 inline-block rounded-xl bg-yellow-500 px-8 py-4 font-black text-black transition hover:scale-105"
          >
            View on OpenSea
          </a>
        </div>
      </div>
    </motion.div>
  </div>
)}

{/* WHITEPAPER MODAL */}
{whitepaperOpen && (
  <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 px-6">
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-yellow-700 bg-[#f2dfc2] p-8 text-black shadow-2xl"
    >
      <button
        onClick={() => setWhitepaperOpen(false)}
        className="absolute right-5 top-5 rounded-full bg-[#7b1113] px-4 py-2 font-black text-white"
      >
        ✕
      </button>

      <p className="text-sm font-black uppercase tracking-[5px] text-red-700">
        Official Whitepaper
      </p>

      <h2 className="mt-4 text-6xl font-black uppercase leading-tight">
        Introduction
      </h2>

      <p className="mt-8 text-xl leading-10 text-black/80">
        Pollos, is a collectible NFT ecosystem built around personality,
creativity, storytelling, and culture.
In a space crowded with repetitive projects and temporary hype, Pollos was created to stand apart.
Every character is designed with its own energy, identity, and story. Some are outlaws. Some are
explorers. Some are legends waiting to hatch.
Pollos is more than a collection. It is the beginning of a growing universe powered by art, community,
and imagination.
This is where personality becomes collectible
      </p>

      <h3 className="mt-4 text-6xl font-black uppercase leading-tight">
        The Pollos Vision
      </h3>

      <p className="mt-8 text-xl leading-10 text-black/80">
        The vision is simple.
        Create a recognizable digital brand that lives beyond a single NFT mint.
Pollos is focused on building a long term ecosystem driven by storytelling, community, creativity, and
culture. The project aims to evolve into a recognizable universe where holders become part of
something larger than ownership alone.
The goal is not simply to launch NFTs.
The goal is to build a world.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Story",
            text: "A connected universe of unique Pollos personalities.",
          },
          {
            title: "Community",
            text: "Built around culture, creativity, and community engagement.",
          },
          {
            title: "Marketplace",
            text: "Trading and collecting powered through OpenSea.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-[#7b1113] p-6 text-white"
          >
            <h3 className="text-3xl font-black text-yellow-100">
              {item.title}
            </h3>

            <p className="mt-4 leading-8 text-yellow-50/80">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h3 className="text-4xl font-black uppercase">
          Collection Details
        </h3>

        <p className="mt-6 text-lg leading-9 text-black/80">
          <b>Supply <br></br></b>
          TBA <br></br>
          <b>Mint Price</b><br></br>
          TBA<br></br>
          <b>Blockchain</b><br></br>
          Ethereum
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-4xl font-black uppercase">
          Art Direction
        </h3>

        <p className="mt-6 text-lg leading-9 text-black/80">
          Pollos combines cinematic character design, vintage western influence, modern digital culture, and
expressive personalities into one recognizable visual identity.
The collection is designed to feel timeless, memorable, and instantly recognizable
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-4xl font-black uppercase">
          Traits & Rarity
        </h3>

        <p className="mt-6 text-lg leading-9 text-black/80">
          Every Pollos contains a unique combination of traits, outfits, accessories, expressions, and
backgrounds.<br></br>
Rarity levels may include:<br></br>
Common<br></br>
Rare<br></br>
Epic<br></br>
Legendary<br></br>
Each character is designed individually to maintain personality and uniqueness across the collection.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-4xl font-black uppercase">
          Community
        </h3>

        <p className="mt-6 text-lg leading-9 text-black/80">
          The community is the foundation of Pollos.
Every holder becomes part of the flock and contributes to the future of the ecosystem. Pollos is
designed to grow alongside its community through collaboration, creativity, events, and future
experiences.
The strongest projects are not built by creators alone.
They are built by the people who believe in them early
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-4xl font-black uppercase">
          Utility
        </h3>

        <p className="mt-6 text-lg leading-9 text-black/80">
          Pollos focuses on creating value through brand building, community experiences, and ecosystem
growth.
Future possibilities for holders may include:
Exclusive community experiences,
Early access opportunities,
Special releases,
Holder focused rewards,
Collaborations,
Future ecosystem expansions.
As the universe expands, utility will evolve alongside the community.
        </p>
      </div>
    </motion.div>
  </div>
)}
    </main>
  );
}