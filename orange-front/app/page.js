// page.js

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
const steps = [
  {
    title: "1. Add Competitor URLs",
    description: "You enter competitor product URLs from marketplaces like Amazon or Shopify.",
  },
  {
    title: "2. Daily Scanning Begins",
    description: "We scan these URLs every day for price, title, description, SEO changes, ratings, reviews & more.",
  },
  {
    title: "3. We Analyze the Delta",
    description: "We detect what changed since yesterday, including customer sentiment trends.",
  },
  {
    title: "4. Insights Are Delivered",
    description: "We show you what your competitors are up to in real-time, like a competitive radar.",
  },
  {
    title: "⚠️ Limitation",
    description: "We can't track new product launches unless you manually add them. Yet.",
  },
];

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
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
       {/* Repo Availability Bookmark */}
       <motion.div
        className="fixed top-10 right-0 bg-yellow-500 text-black p-4 rounded-l-xl shadow-lg z-50 mt-10"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <p className="font-semibold text-sm">Repo will be available by Q1-2026</p>
      </motion.div>
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
          <p className="text-gray-300 text-base sm:text-lg">
          🟠 Mitigate 15-20% revenue losses on marketplaces.
          </p>
          <p className="text-gray-300 text-base sm:text-lg">
          🟠 Make strategic pricing, SEO, and review decisions at 4X speed.
          </p>
          <p className="text-gray-300 text-base sm:text-lg">
          🟠 Let AI researcher do the competitor research's heavy lifting.
          </p>
          <p className="text-gray-300 text-bold text-base sm:text-lg mb-4">
          🟠 Show interest in being an early adopter and get a surprise when we launch.
          </p>
          <a href="#form">
            <button className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition" id="register-homepage">
              Get free access
            </button>
          </a>
        </motion.div>
      </div>

      {/* How It Works */}
      <section className="bg-white py-16 px-6 sm:px-10 flex justify-center">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shopify Side */}
          <div className="border-4 border-green-600 rounded-xl p-8 shadow-md bg-[#F6F9F6]">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
              What Shopify has to say
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              If you’re starting an eCommerce business, conducting a competitor analysis will help you:
            </p>
            <ul className="text-base sm:text-lg text-gray-700 space-y-2 list-disc list-inside">
              <li>Make informed marketing decisions</li>
              <li>Identify industry trends</li>
              <li>Benchmark against competitors</li>
              <li>Find your unique value proposition</li>
              <li>Determine pricing</li>
              <li>Unearth new ways of speaking to customers</li>
              <li>Find gaps in your marketing or product line</li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              Reference:{' '}
              <a
                href="https://www.shopify.com/in/blog/competitive-analysis"
                className="text-green-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shopify Blog
              </a>
            </p>
          </div>

          {/* Amazon Side */}
          <div className="border-4 border-yellow-600 rounded-xl p-8 shadow-md bg-[#F3F3F3]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#FF9900] mb-4">
              What Amazon believes
            </h2>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              Amazon doesn't just monitor competitors — they *obsess* over them. Here's what they prioritize:
            </p>
            <ul className="text-base sm:text-lg text-gray-800 space-y-2 list-disc list-inside">
              <li>Conducting competitor research for your Amazon business is crucial for staying competitive and improving the performance and profitability of your business.</li> 
              <li>Competitor research also helps you enhance your SEO, stay ahead of market changes to improve your market share, and make informed decisions, ultimately reducing risks and improving your performance on Amazon.</li>
              <li>By understanding competitor's pricing strategies, marketing efforts, and customer feedback, you can refine your own approach to attract customers more effectively.</li>
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              Reference: <a href="https://www.junglescout.com/resources/articles/amazon-competitor-analysis/"
                className="text-orange-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer">Jungle Scout</a>
            </p>
          </div>
        </div>
      </section>
{/* How It Works */}
<section className="bg-black text-white py-16 px-4 sm:px-10" id="how-it-works">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-10">How It Works</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-md border border-orange-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-orange-400 mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Brand Carousel + Centered Section */}
      <div className="px-4 md:px-[15%] text-center">
        <h1 className="text-xl sm:text-3xl font-bold text-orange-500 mb-4 p-4">
          Supported brands launching in v1
        </h1>
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

      <div className="linkedin-post"></div>
    </div>
  );
}
