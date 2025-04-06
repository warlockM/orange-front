"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [spin, setSpin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setSpin(true);

    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = () => {
      console.log("Tally script loaded");
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md border-b-4 border-orange-500 py-4 px-6 flex justify-between items-center z-50">
        <div className="text-xl font-bold text-orange-500">Orange Intelligence</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-orange-400 hover:text-orange-300 transition">Home</Link>
          <Link href="/pricing" className="text-orange-400 hover:text-orange-300 transition">Pricing</Link>
          <Link href="/about" className="text-orange-400 hover:text-orange-300 transition">About</Link>
          <Link href="/case-studies" className="text-orange-400 hover:text-orange-300 transition">Case Studies</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-orange-400 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 px-6 pt-8 pb-6 space-y-4">
          <Link href="/" className="block text-orange-400">Home</Link>
          <Link href="/pricing" className="block text-orange-400">Pricing</Link>
          <Link href="/about" className="block text-orange-400">About</Link>
          <Link href="/case-studies" className="block text-orange-400">Case Studies</Link>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/OrangeLogo.png"
            alt="Competitor Intelligence"
            width={300}
            height={300}
            className={`${spin ? "animate-spin-once" : ""}`}
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4">Orange Intelligence</h1>
          <ul className="space-y-3 mt-4">
  {[
    "💵 Pricing strategy monitoring",
    "🔍 SEO strategy monitoring",
    "🧑 Customer Sentiment insights",
    "🤖 AI Agent to help you run experiments with your store",
    "❤️ Open Source and Free"
  ].map((text, index) => (
    <li
      key={index}
      className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
    >
      {text}
    </li>
  ))}
</ul>
          <a href="#form">
            <button className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition">
              Get free access
            </button>
          </a>
        </div>
      </div>

      {/* Brand Grid */}
      <h1 className="text-xl sm:text-3xl font-bold text-orange-500 mb-4 text-center p-4">
        Supported brands launching in v1
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6 px-4">
          {["amazon", "flipkart", "myntra", "ajio", "nykaa", "firstcry"].map((brand, idx) => (
            <div
              key={idx}
              className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] flex items-center justify-center bg-white border-4 border-orange-500"
            >
              <Image
                src={`/logos/${brand}.png`}
                alt={brand}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tally Form */}
      <div id="form" className="w-full flex justify-center px-4 py-10">
        <iframe
          data-tally-src="https://tally.so/embed/3lz9QX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&source=website_embeded_form"
          loading="lazy"
          width="100%"
          height="500"
          className="w-full max-w-2xl"
          style={{ background: "transparent", border: "none" }}
          allowFullScreen
        ></iframe>
      </div>

      {/* Image Animation */}
      <style jsx>{`
        .animate-spin-once {
          animation: spinOnce 2s ease-in-out;
        }
        @keyframes spinOnce {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
