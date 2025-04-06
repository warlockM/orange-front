"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function FabCom() {
  const { slug } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">
      {/* Mobile Hamburger */}
      <div className="md:hidden p-4 bg-gray-800 border-b-2 border-orange-500 flex justify-between items-center">
        <h1 className="text-lg font-bold text-orange-500">Fab.com</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-orange-400">
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-orange-400 w-full md:w-1/4 p-4 border-r-2 border-orange-500 ${menuOpen ? "block" : "hidden"} md:block`}
      >
        <h2 className="text-xl font-bold mb-4">Contents</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#intro">💥 Intro</a></li>
          <li><a href="#rise">✨ Rise</a></li>
          <li><a href="#wrong">📉 What Went Wrong</a></li>
          <li><a href="#ci">🧠 Competitor Intelligence</a></li>
          <li><a href="#collapse">😬 Collapse</a></li>
          <li><a href="#takeaway">⚠️ Takeaway</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <section id="intro" className="mb-6">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">
            💥 Fab.com: How a $1 Billion Design Startup Ignored Its Rivals and Imploded
          </h1>
          <p className="text-gray-300">
            At one point, Fab.com was the darling of the startup world — the design-obsessed flash-sale site that VCs couldn’t stop throwing money at.
            But in just a few short years, Fab became one of the fastest, loudest implosions in e-commerce history.
          </p>
        </section>

        <section id="rise" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">✨ The Meteoric Rise of Fab</h2>
          <p className="text-gray-300">
            Fab launched in June 2011 as a flash sales platform for high-design home goods, furniture, and lifestyle products. Within weeks, it went viral.
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>Grew to 10 million users in under two years.</li>
            <li>Reached a $1 billion valuation by 2012.</li>
            <li>Raised over $330 million in venture capital.</li>
            <li>Hired 700+ employees and expanded globally at breakneck speed.</li>
          </ul>
        </section>

        <section id="wrong" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">📉 What Went Wrong</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong className="text-orange-500">🚩 Overexpansion Without Local Intel:</strong> Entered 20+ countries without validating demand.</li>
            <li><strong className="text-orange-500">💸 Unsustainable Burn Rate:</strong> Spent $40M+ per year without tracking CAC/CLV.</li>
            <li><strong className="text-orange-500">🧾 Pricing Mismatch:</strong> Sold premium goods easily found cheaper elsewhere.</li>
          </ul>
        </section>

        <section id="ci" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🧠 What Competitor Intelligence Could Have Prevented</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Track competitor prices across Amazon, Wayfair, and niche design stores.</li>
            <li>Run pre-expansion market scans to measure demand and local competition.</li>
            <li>Detect product overlap and saturation in key categories.</li>
            <li>Benchmark CAC/CLV against public e-commerce metrics to avoid unprofitable growth.</li>
          </ul>
        </section>

        <section id="collapse" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">😬 The Collapse</h2>
          <p className="text-gray-300">
            By 2014, Fab’s valuation had dropped by 94%. The core e-commerce business was sold for just $15 million — a tiny fraction of its peak.
          </p>
        </section>

        <section id="takeaway" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">⚠️ The Takeaway: Hype Doesn’t Trump Strategy</h2>
          <p className="text-gray-300">
            Fab's brand was cool. Its designs were slick. But its lack of competitive awareness turned it from unicorn to has-been in record time.
          </p>
          <p className="text-gray-300 mt-2">
            In the e-commerce jungle, you need more than buzz — you need intel: Who else is selling what you sell? At what price? With what value props?
          </p>
        </section>
      </main>
    </div>
  );
}
