"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    setSpin(true);

    // Dynamically load Tally script for dynamicHeight and smooth rendering
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
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md py-4 px-8 flex justify-between items-center z-10">
        <div className="text-xl font-bold text-orange-500">Orange Intelligence</div>
        <div className="space-x-6">
          <Link href="/" className="text-orange-400 hover:text-orange-300 transition">Home</Link>
          <Link href="/pricing" className="text-orange-400 hover:text-orange-300 transition">Pricing</Link>
          <Link href="/about" className="text-orange-400 hover:text-orange-300 transition">About</Link>
          <Link href="/case-studies" className="text-orange-400 hover:text-orange-300 transition">Case Studies</Link>
        </div>
      </nav>

      {/* Hero Section - Two Column */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image 
            src="/OrangeLogo.png" 
            alt="Competitor Intelligence"
            width={300}
            height={300}
            className={`${spin ? 'animate-spin-once' : ''}`}
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-4">
            Orange Intelligence
          </h1>
          <ul>
          <li className="text-xl sm:text-2xl text-gray-300 mb-6">
          💵 Pricing strategy monitoring
          </li>
          <li className="text-xl sm:text-2xl text-gray-300 mb-6">
          🔍 SEO strategy monitoring
          </li>
          <li className="text-xl sm:text-2xl text-gray-300 mb-6">
          🧑 Customer Sentiment insights
          </li>
          <li className="text-xl sm:text-2xl text-gray-300 mb-6">
          🤖 AI Agent to help you run experiments with your store
          </li>
          <li className="text-xl sm:text-2xl text-gray-300 mb-6">
          ❤️ Open Source and Free
          </li>
          </ul>
          <a href="/case-studies">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition">
              Get free access
            </button>
          </a>
        </div>
      </div>
{/* Brand Grid Section */}
<h1 className="text-xl sm:text-3xl font-bold text-orange-500 mb-4 gap-10 p-5">
            Supported brand to be launched with v1
          </h1>
<div className="flex justify-center items-center w-full">
  {/* Brand Grid Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 px-4">
    {["amazon", "flipkart", "myntra", "ajio", "nykaa", "firstcry"].map((brand, idx) => (
      <div
        key={idx}
        className="w-[300px] h-[300px] flex items-center justify-center bg-white border-4 border-orange-500 rounded-none"
      >
        <Image
          src={`/logos/${brand}.png`}
          alt={brand}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
    ))}
  </div>
</div>


      {/* Tally Form Embed */}
      <div className="w-full flex justify-center px-4 py-10">
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

      {/* Animation Styles */}
      <style jsx>{`
        .animate-spin-once {
          animation: spinOnce 2s ease-in-out;
        }

        @keyframes spinOnce {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
