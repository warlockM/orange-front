"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function Payless() {
  const { slug } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">
      {/* Mobile Hamburger */}
      <div className="md:hidden p-4 bg-gray-800 border-b-2 border-orange-500 flex justify-between items-center">
        <h1 className="text-lg font-bold text-orange-500">Payless ShoeSource</h1>
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
          <li><a href="#intro">👟 Intro</a></li>
          <li><a href="#rise">🏪 Rise</a></li>
          <li><a href="#wrong">📉 What Went Wrong</a></li>
          <li><a href="#ci">🧠 Competitor Intelligence</a></li>
          <li><a href="#collapse">🔚 Collapse</a></li>
          <li><a href="#lesson">💡 Lesson</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <section id="intro" className="mb-6">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">
            👟 Payless ShoeSource: How a Discount Giant Got Schooled by E-Commerce and DTC Disruptors
          </h1>
          <p className="text-gray-300">
            Payless ShoeSource was once the go-to destination for affordable, everyday footwear. It had brand recognition,
            scale, and pricing power — especially among cost-conscious families. For decades, it dominated strip malls
            and shopping centers across the U.S.
          </p>
          <p className="text-gray-300 mt-2">
            But while Payless stayed glued to its brick-and-mortar playbook, the ground underneath it shifted.
            As e-commerce boomed and DTC brands rose, Payless failed to adapt, ignored its competitors’ moves,
            and eventually paid the price — twice.
          </p>
        </section>

        <section id="rise" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🏪 The Rise of a Discount King</h2>
          <p className="text-gray-300">
            Founded in 1956 in Topeka, Kansas, Payless pioneered the self-service shoe store model, helping customers
            buy stylish shoes at bargain-bin prices.
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>Operated 4,400+ stores in over 30 countries.</li>
            <li>Carried a wide array of private-label brands and exclusive lines.</li>
            <li>Sold to cost-conscious customers looking for style without splurging.</li>
            <li>Generated billions in annual revenue and led the market for budget footwear.</li>
          </ul>
        </section>

        <section id="wrong" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">📉 What Went Wrong</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong className="text-orange-500">🚩 Ignored the E-Commerce Boom:</strong> Relied on in-store traffic and outdated interfaces while competitors modernized.</li>
            <li><strong className="text-orange-500">👟 Dismissed the DTC Threat:</strong> Ignored rising brands like Allbirds and Rothy’s that sold direct with slick storytelling.</li>
            <li><strong className="text-orange-500">🏷️ Static Pricing:</strong> No dynamic pricing strategy to match fast-moving competitors like Amazon and Zappos.</li>
          </ul>
        </section>

        <section id="ci" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🧠 How Competitor Intelligence Could Have Helped</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Tracked DTC brand strategies — pricing, storytelling, loyalty — in real time.</li>
            <li>Benchmarked Payless’ site UX and funnel against e-com leaders.</li>
            <li>Monitored Amazon/Zappos pricing trends to stay competitive daily.</li>
            <li>Spotted consumer shifts toward minimalist, sustainable shoes via reviews and search volume.</li>
          </ul>
        </section>

        <section id="collapse" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">🔚 The Final Chapter(s)</h2>
          <p className="text-gray-300">
            In 2017, Payless filed for bankruptcy — the first time. Then it happened again in 2019.
            Over 2,500 stores were closed, thousands of employees laid off, and any chance of a digital pivot was gone.
          </p>
        </section>

        <section id="lesson" className="mb-6">
          <h2 className="text-xl font-bold text-orange-500 mb-2">💡 Final Lesson: Affordability Doesn’t Equal Irrelevance</h2>
          <p className="text-gray-300">
            Payless didn’t fail because people stopped wanting cheap shoes. It failed because it stopped watching the market
            and lost its competitive edge.
          </p>
          <p className="text-gray-300 mt-2">
            Whether you're a legacy brand or a hyped startup — you need intel:
            Who’s gaining traction? What’s their pricing? Are they resonating with your audience?
          </p>
          <p className="text-gray-300 mt-2">
            Competitor intelligence = survival. Ignorance = repeat bankruptcies.
          </p>
        </section>
      </main>
    </div>
  );
}
