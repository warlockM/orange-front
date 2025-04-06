"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function FabCom() {
  const { slug } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row pt-20">
      {/* Mobile Header */}
      <div className="md:hidden px-4 py-3 bg-gray-800 border-b-2 border-orange-500 flex justify-between items-center fixed top-0 left-0 right-0 z-40">
        <h1 className="text-lg font-bold text-orange-500 truncate pr-2">Fab.com</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-orange-400 text-2xl leading-none">
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-orange-400 w-full md:w-1/4 p-4 border-r-2 border-orange-500 mt-16 md:mt-0 ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
        <h2 className="text-xl font-bold mb-4">Contents</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#intro">🧨 Intro</a></li>
          <li><a href="#rise">📈 Meteoric Rise</a></li>
          <li><a href="#pivot">🔄 Pivot Problem</a></li>
          <li><a href="#overspend">💸 Overspending</a></li>
          <li><a href="#ci">🧠 Competitor Intelligence</a></li>
          <li><a href="#collapse">🕳️ Collapse</a></li>
          <li><a href="#lesson">📚 Lesson</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-4">
        <section id="intro" className="mb-6">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">
            🧨 The Rise and Fall of Fab.com: Burning $300M in Style
          </h1>
          <p className="text-gray-300">
            At one point, Fab.com was the darling of the design e-commerce world — a startup that blended curation with cool.
            Valued at over $1 billion, it promised to bring unique, designer products to the masses. But what happens when
            rapid scale meets poor execution? A spectacular implosion.
          </p>
        </section>

        <section id="rise" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">📈 From Gay Social Network to Billion-Dollar Brand</h2>
          <p className="text-gray-300">
            Fab.com didn’t start as a marketplace — it began as a gay social network called Fabulis. The pivot to flash sales
            for design products was bold… and shockingly successful.
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>Grew to 10 million users in under 2 years</li>
            <li>$150M+ raised from top-tier VCs</li>
            <li>Peak valuation: $1B</li>
            <li>Buzz everywhere: from tech blogs to fashion mags</li>
          </ul>
        </section>

        <section id="pivot" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🔄 The Pivot Problem</h2>
          <p className="text-gray-300">
            As competition intensified, Fab pivoted — and then pivoted again. From flash sales to global logistics to its own
            private label goods… the identity crisis was real.
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>Shut down European operations suddenly</li>
            <li>Let go of hundreds of employees</li>
            <li>Product focus kept changing — customers lost trust</li>
          </ul>
        </section>

        <section id="overspend" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">💸 Burn, Baby, Burn</h2>
          <p className="text-gray-300">
            Fab burned through $300 million in funding with aggressive ad spending, warehouse expansions, and international offices
            — all before figuring out sustainable demand.
          </p>
        </section>

        <section id="ci" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🧠 What a Competitor Intelligence Platform Could Have Done</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Spotted trends in how Wayfair and Etsy were scaling more efficiently</li>
            <li>Flagged pricing mismatches on similar SKUs</li>
            <li>Surfaced product categories that performed poorly over time</li>
            <li>Helped avoid copycat strategies from better-funded competitors</li>
          </ul>
        </section>

        <section id="collapse" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🕳️ Implosion Mode: ON</h2>
          <p className="text-gray-300">
            By 2015, Fab was sold for a rumored $15M — less than 2% of its peak value. All that hype? Gone in a flash.
          </p>
        </section>

        <section id="lesson" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">📚 The Lesson for Founders</h2>
          <p className="text-gray-300">
            Being “cool” isn’t enough. Fab’s obsession with branding and design came at the expense of listening to the market.
          </p>
          <p className="text-gray-300 mt-2">
            With better signals on customer behavior, category trends, and competitor movements, Fab could’ve built a longer-lasting
            business — not just a flashy headline.
          </p>
        </section>
      </main>
    </div>
  );
}
