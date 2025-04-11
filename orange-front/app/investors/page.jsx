// app/investors/page.jsx

"use client";

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';

const ecommerceGrowthData = [
  { year: '2020', value: 4200 },
  { year: '2021', value: 4900 },
  { year: '2022', value: 5600 },
  { year: '2023', value: 6300 },
  { year: '2024', value: 7000 },
  { year: '2025', value: 7400 },
];

const lossData = [
  { week: 'W1', loss: 15 },
  { week: 'W2', loss: 20 },
  { week: 'W3', loss: 23 },
  { week: 'W4', loss: 25 },
];

function Section({ title, delay, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="mb-6"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="space-y-2">{children}</div>
    </motion.div>
  );
}

export default function WhyInvest() {
  return (
    <motion.div
      className="max-w-5xl mx-auto py-16 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-bold text-orange-600 mb-6 mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Why Should VCs Invest in Orange Intelligence?
      </motion.h1>

      <motion.p className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        Orange Intelligence is building the real-time competitive intelligence engine for the future of global commerce.
        In a world where e-commerce decisions are made by the hour, we equip brands with tools to adapt instantly — from price
        shifts to SEO dominance and customer sentiment.
      </motion.p>

      <Section title="🌍 Market Opportunity" delay={0.4}>
        <ul className="list-disc ml-6">
          <li>Global e-commerce sales projected to reach <strong>$7.4 trillion</strong> by 2025 (Statista).</li>
          <li>90% of D2C brands suffer from late reaction to market changes — a $100B blindspot.</li>
          <li>Over <strong>60% of brands</strong> lose top search rankings at least once a month due to competitor shifts.</li>
        </ul>
        <div className="h-64 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ecommerceGrowthData}>
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(val) => `$${val / 1000}T`} />
              <Tooltip formatter={(val) => `$${val}B`} />
              <Bar dataKey="value" fill="#FB923C" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Section>

      <Section title="📊 Why Orange Now?" delay={0.5}>
        <ul className="list-disc ml-6">
          <li><strong>RAG + LLM powered analysis</strong>: Insight generation, not just dashboards.</li>
          <li><strong>Real-time scraping + SEO + review tracking</strong>: 50+ platforms monitored live.</li>
          <li><strong>API + Slack integrations</strong>: Fits into brand teams’ actual workflow.</li>
          <li><strong>Plug-and-play intelligence</strong> for pricing teams, growth teams, and founders.</li>
        </ul>
      </Section>

      <Section title="📉 Cost of No Intelligence" delay={0.6}>
        <ul className="list-disc ml-6">
          <li>₹9.8 Cr lost by a D2C brand in 45 days due to a competitor’s SEO blitz during a holiday sale.</li>
          <li>28% drop in reviews due to third-party sellers; unnoticed for 3 weeks = reputation hit.</li>
          <li>₹15–25L/week lost in Amazon revenue when losing top-of-page ranking (internal benchmark).</li>
        </ul>
        <div className="h-64 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lossData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis unit="L" />
              <Tooltip formatter={(val) => `₹${val}L`} />
              <Line type="monotone" dataKey="loss" stroke="#EF4444" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Section>

      <Section title="🛠️ Built by Operators" delay={0.7}>
        <p>
          We are ex-operators who felt this pain firsthand while scaling e-commerce startups. Orange was born not as a tool,
          but as an answer to a broken process. Merchants shouldn’t need 4 dashboards, 3 analysts, and daily standups to
          know what competitors are doing.
        </p>
      </Section>

      <Section title="💡 What Makes Orange a Venture-Scale Bet?" delay={0.8}>
        <ul className="list-disc ml-6">
          <li><strong>Massive market tailwinds</strong>: Every online brand now needs competitive visibility.</li>
          <li><strong>Horizontal expansion</strong>: SaaS, API, Chrome Extension, and mobile in roadmap.</li>
          <li><strong>AI-native infra</strong>: Our RAG system can be extended across verticals — from fashion to fintech.</li>
          <li><strong>Brand loyalty + switching costs</strong>: Once embedded, Orange becomes mission-critical.</li>
        </ul>
      </Section>

      <Section title="📥 White Paper" delay={0.9}>
        <p>
          Want deeper insights into the Orange strategy? Download our comprehensive white paper for a full breakdown.
        </p>
        <a
          href="/whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
        >
          Download White Paper
        </a>
      </Section>

      <motion.p
        className="mt-8 text-lg font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Orange Intelligence isn’t just solving a pain point — we’re building a moat around the fastest-growing need in e-commerce:
        real-time clarity. VCs who want exposure to the future of brand decision-making should be early.
      </motion.p>

      <div className="mt-10 flex justify-center">
        <a
          href="mailto:emailmayank@protonmail.com"
          className="px-6 py-3 bg-orange-600 text-white text-lg font-semibold rounded-full shadow hover:bg-orange-700 transition"
        >
          ⇒ Place a bet on us
        </a>
      </div>
    </motion.div>
  );
}
