"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function Payless() {
  const { slug } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row pt-20">
      {/* Mobile Header */}
      <div className="md:hidden px-4 py-3 bg-gray-800 border-b-2 border-orange-500 flex justify-between items-center fixed top-0 left-0 right-0 z-40">
        <h1 className="text-lg font-bold text-orange-500 truncate pr-2">Payless ShoeSource</h1>
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
          <li><a href="#intro">👞 Intro</a></li>
          <li><a href="#growth">📈 Growth Story</a></li>
          <li><a href="#missteps">🚫 Strategic Missteps</a></li>
          <li><a href="#competition">🛒 Competitor Pressure</a></li>
          <li><a href="#ci">🧠 Competitor Intelligence</a></li>
          <li><a href="#collapse">💥 Collapse</a></li>
          <li><a href="#lesson">🎓 Lesson</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-4">
        <section id="intro" className="mb-6">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">
            👞 The Fall of Payless: Discount Shoes, Discount Strategy
          </h1>
          <p className="text-gray-300">
            Payless was a household name for affordable footwear. For decades, it thrived by offering budget shoes for everyday people.
            But the rise of online shopping, changing customer expectations, and its own strategic stumbles turned this retail giant into a cautionary tale.
          </p>
        </section>

        <section id="growth" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">📈 A Humble Beginning to National Dominance</h2>
          <p className="text-gray-300">
            Founded in 1956, Payless grew rapidly by offering self-serve, low-cost shoes at scale.
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>4,000+ stores worldwide at its peak</li>
            <li>Massive appeal to middle-class America</li>
            <li>Fast expansion into Latin America and the Caribbean</li>
          </ul>
        </section>

        <section id="missteps" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🚫 Strategic Missteps</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Over-expansion with outdated store layouts</li>
            <li>Ignored rise of DTC brands and digital-first competitors</li>
            <li>Late to e-commerce — clunky user experience</li>
            <li>Tried to be fashionable without the data to back it up</li>
          </ul>
        </section>

        <section id="competition" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🛒 Competitive Pressure from All Sides</h2>
          <p className="text-gray-300">
            While Payless stuck to its old model, giants like Amazon, Zappos, and even Walmart upped their game — both in logistics and
            in curating footwear options Payless never predicted.
          </p>
        </section>

        <section id="ci" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🧠 What a Competitor Intelligence Platform Could Have Done</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Spotted trending shoe categories rising on Amazon and Zappos</li>
            <li>Analyzed price movement from big-box competitors</li>
            <li>Monitored customer sentiment and delivery speed comparisons</li>
            <li>Helped detect early signs of brand erosion</li>
          </ul>
        </section>

        <section id="collapse" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">💥 The Collapse</h2>
          <p className="text-gray-300">
            In 2017, Payless filed for bankruptcy. After a brief relaunch, it filed again in 2019. Thousands of stores were closed,
            and its digital presence had lost nearly all traction.
          </p>
        </section>

        <section id="lesson" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🎓 What Founders Can Learn</h2>
          <p className="text-gray-300">
            Price isn’t the only driver anymore — convenience, brand trust, and digital savvy matter. Payless failed to adapt to the
            changing rules of commerce and underestimated how fast competitors were moving.
          </p>
          <p className="text-gray-300 mt-2">
            A smart competitor intelligence system could’ve helped them shift from reactive to proactive. And maybe — just maybe —
            they’d still be around selling those $20 kicks today.
          </p>
        </section>
      </main>
    </div>
  );
}
