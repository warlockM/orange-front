"use client";

import Link from "next/link";

export default function NeuronProgramPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-10">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-orange-500 mb-4 mt-10">🧠 The Neuron Program</h1>

        <p className="text-gray-300 text-lg mt-4">
          <span className="text-orange-400 font-semibold">Orange Intelligence</span> is more than just a platform — it’s a movement.
          And like every powerful brain, it needs its neurons.
        </p>

        <p className="text-gray-400 mt-4">
          We’re building an open-source ecosystem of innovators, builders, researchers, and eCom rebels who believe that <span className="text-orange-400 font-semibold">real-time competitive insights</span> should be accessible to all.
        </p>

        <p className="text-gray-400 mt-4">
          Everyone who contributes to the open-source project will be called a <span className="text-orange-400 font-semibold">Neuron</span>.
          Neurons will get early access to internal tools, API credits, private forums, and voting power on what we build next.
        </p>

        <div className="my-10 border-l-4 border-orange-400 pl-4 text-left">
          <h2 className="text-xl text-orange-300 font-semibold">👨‍🔬 Roles You Can Play:</h2>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
            <li>📦 Build plugins & data extractors</li>
            <li>📊 Create public dashboards</li>
            <li>📖 Write case studies & documentation</li>
            <li>🔍 Research pricing & category signals</li>
            <li>⚙️ Help improve our AI agents</li>
          </ul>
        </div>

        <div className="mt-10">
          <span className="text-sm text-orange-400 uppercase tracking-widest">Coming Soon</span>
          <h2 className="text-2xl font-bold text-white mt-2">Neuron Program launching Q1 2026</h2>
          <p className="text-gray-400 mt-2">Sign-ups will go live alongside the public GitHub repo.</p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-block text-orange-300 hover:text-orange-200 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
