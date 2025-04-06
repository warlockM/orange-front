"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function ToysRUs() {
  const { slug } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row pt-20">
      {/* Mobile Header */}
      <div className="md:hidden px-4 py-3 bg-gray-800 border-b-2 border-orange-500 flex justify-between items-center fixed top-0 left-0 right-0 z-40">
        <h1 className="text-lg font-bold text-orange-500 truncate pr-2">Toys "R" Us</h1>
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
          <li><a href="#intro">🧸 Intro</a></li>
          <li><a href="#empire">🏗️ Empire</a></li>
          <li><a href="#amazon">⚠️ Amazon Deal</a></li>
          <li><a href="#wrong">📉 What Went Wrong</a></li>
          <li><a href="#ci">🧠 Competitor Intelligence</a></li>
          <li><a href="#collapse">💣 Collapse</a></li>
          <li><a href="#lesson">🧩 Lesson</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-4">
        <section id="intro" className="mb-6">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">
            🧸 The Fall of Toys "R" Us: How Ignoring Competitor Signals Led to a Billion-Dollar Collapse
          </h1>
          <p className="text-gray-300">
            Toys "R" Us wasn’t just a toy store. It was <i>the</i> toy store. For decades, it dominated the global toy market
            with its big-box strategy, iconic branding, and unmatched selection. But despite its early retail dominance,
            Toys "R" Us became one of the most high-profile victims of the e-commerce era — and the fall didn’t happen overnight.
          </p>
        </section>

        <section id="empire" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🏗️ A Retail Empire Built on Imagination</h2>
          <p className="text-gray-300">
            Founded in 1948 by Charles Lazarus, Toys "R" Us redefined the retail experience for children and parents alike.
            Its innovative category-killer format — a massive store solely dedicated to toys — became its signature.
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>Over 1,500 stores across 35+ countries at its peak.</li>
            <li>Annual revenue of $11 billion+ in the late 1990s.</li>
            <li>Exclusive retail relationships with toy makers like Mattel and Hasbro.</li>
            <li>Brand loyalty that spanned generations.</li>
            <li>Kids didn’t just shop there — they dreamed of going there.</li>
          </ul>
        </section>

        <section id="amazon" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">⚠️ The Amazon Deal That Changed Everything</h2>
          <p className="text-gray-300">
            In 2000, Toys "R" Us struck a deal with a young Amazon.com to handle its online store. The idea? Let Amazon manage
            the tech while Toys "R" Us supplied the inventory.
          </p>
          <p className="text-gray-300 mt-2">
            It backfired. Amazon quickly began allowing other toy sellers onto the platform, directly competing with Toys "R" Us —
            a violation of the exclusivity agreement. While legal battles dragged on, Toys "R" Us was left without a competitive
            e-commerce presence during a pivotal growth phase in online retail.
          </p>
        </section>

        <section id="wrong" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">📉 What Went Wrong</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong className="text-orange-500">🔍 Lack of Competitor Monitoring:</strong> No real-time visibility into how Amazon was evolving.</li>
            <li><strong className="text-orange-500">🛍️ No E-Commerce Investment:</strong> Zero significant progress until 2006.</li>
            <li><strong className="text-orange-500">🏷️ No Dynamic Pricing:</strong> Static pricing while Amazon adjusted prices in real-time.</li>
          </ul>
        </section>

        <section id="ci" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🧠 What a Competitor Intelligence Platform Could Have Done</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Real-time pricing alerts to match Amazon's toy discounts instantly.</li>
            <li>Product overlap reports showing how Amazon copied top-selling SKUs.</li>
            <li>Traffic monitoring to detect shifts in online customer behavior.</li>
            <li>Marketplace tracking to flag rival toy vendors.</li>
          </ul>
        </section>

        <section id="collapse" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">💣 The Collapse</h2>
          <p className="text-gray-300">
            In 2017, Toys "R" Us filed for Chapter 11 bankruptcy. By 2018, it shuttered all U.S. locations.
          </p>
        </section>

        <section id="lesson" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🧩 The Lesson for Modern E-Commerce Founders</h2>
          <p className="text-gray-300">
            You don’t lose because your competitors are bigger — you lose when they know more than you.
          </p>
          <p className="text-gray-300 mt-2">
            In a market where pricing, trends, inventory, and customer behavior shift daily, real-time competitor intelligence isn’t optional — it’s a survival tool.
          </p>
        </section>
      </main>
    </div>
  );
}
