"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md border-b-4 border-orange-500 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <Link href="/"><div className="text-xl font-bold text-orange-500">Orange Intelligence</div></Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-orange-400 hover:text-orange-300 transition">Home</Link>
          <Link href="/pricing" className="text-orange-400 hover:text-orange-300 transition">Pricing</Link>
          <Link href="/about" className="text-orange-400 hover:text-orange-300 transition">About</Link>
          <Link href="/case-studies" className="text-orange-400 hover:text-orange-300 transition">Case Studies</Link>
          <Link href="/api-docs" className="text-orange-400 hover:text-orange-300">API Docs</Link>
          <Link href="/platform" className="text-orange-400 hover:text-orange-300">Platform</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-orange-400 focus:outline-none text-2xl"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-orange-500 px-4 pb-4">
          <Link href="/" className="block py-2 text-orange-400 hover:text-orange-300">Home</Link>
          <Link href="/pricing" className="block py-2 text-orange-400 hover:text-orange-300">Pricing</Link>
          <Link href="/about" className="block py-2 text-orange-400 hover:text-orange-300">About</Link>
          <Link href="/case-studies" className="block py-2 text-orange-400 hover:text-orange-300">Case Studies</Link>
          <Link href="/api-docs" className="block py-2 text-orange-400 hover:text-orange-300">API Docs</Link>
        </div>
      )}
    </nav>
  );
}
