"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sentimentData = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 40 },
  { month: "Mar", value: 60 },
  { month: "Apr", value: 80 },
  { month: "May", value: 120 }
];

const brandLogos = ["amazon", "flipkart", "myntra", "ajio", "nykaa", "firstcry"];

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 2 }}
        >
          <Image
            src="/OrangeLogo.png"
            alt="Competitor Intelligence"
            width={300}
            height={300}
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4">Orange Intelligence</h1>
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Predict competitor moves before they happen.</h1>
          <p className="text-gray-300 text-base sm:text-lg mb-4">
            Make strategic pricing, SEO, and review decisions with confidence. Our AI agent monitors your competitors and auto-adapts your store's game plan.
          </p>
          <a href="#form">
            <button className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition" id="register-homepage">
              Get free access
            </button>
          </a>
        </motion.div>
      </div>

      {/* Brand Carousel */}
      <h1 className="text-xl sm:text-3xl font-bold text-orange-500 mb-4 text-center p-4">
        Supported brands launching in v1
      </h1>
      <div className="px-4 md:px-[15%]">
        <Slider {...settings}>
          {brandLogos.map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center p-6">
              <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] flex items-center justify-center bg-white border-4 border-orange-500">
                <Image
                  src={`/logos/${brand}.png`}
                  alt={brand}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Unlock Revenue Section */}
      <motion.div className="px-6 md:px-10 py-10 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-orange-400 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          What competitor intelligence unlocks for you:
        </motion.h2>
        <ul className="space-y-4 text-left text-lg text-gray-300">
          <li>💰 Dynamic pricing strategy that maximizes conversions</li>
          <li>📈 SEO keyword edge before your competitors can pivot</li>
          <li>⭐ Real-time review monitoring to protect brand sentiment</li>
          <li>🧠 Customer sentiment insights that feed your GTM and ads</li>
          <li>🤖 AI Agent that automates response to pricing, keywords, and inventory triggers</li>
        </ul>

        {/* Customer Sentiment Graph */}
        <div className="h-64 mt-10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sentimentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#FB923C" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

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
    </div>
  );
}
