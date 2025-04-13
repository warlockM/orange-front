"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
export default function DynamicPage() {
  const { slug } = useParams();

  const pages = {
    "case-studies": {
      title: "Case Studies",
      content: "Explore how businesses are leveraging our insights to stay ahead.",
      caseStudies: [
        { name: "Toys R Us: Billion Dollar Fall", link: "/case-studies/toysrus" },
        { name: "Fab.com: Ignoring Competition Saga", link: "/case-studies/fabcom" },
        { name: "Payless ShoeSource: Ignored D2C Trends", link: "/case-studies/payless" }
      ]
    },
    "pricing": { title: "Pricing", content: "Check our pricing plans." },
    "about": { title: "About Us", content: "Learn more about the creator(s)." }
  };

  const page = pages[slug] || { title: "Not Found", content: "Page does not exist." };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white p-6 mt-10">
      <h1 className="text-4xl font-bold text-orange-500">{page.title}</h1>
      <p className="text-lg text-gray-300 mt-4">{page.content}</p>

      {slug === "case-studies" && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {page.caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-orange-400">{study.name}</h2>
              <Link
                href={study.link}
                className="mt-4 inline-block text-orange-300 hover:text-orange-200 transition"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      )}

      {slug === "pricing" && (
        <div className="mt-6 flex justify-center w-full">
          <div className="max-w-2xl text-center">
            <h1 className="text-lg text-gray-300">
              The tool is open source and free to use. Since this is self hosted, we will be supporting our early adopters with setup.
              A hosted version will be paid with agentic AI. You can connect with us by filling out registration form on home page under the supported brands section. Cheer ya.
            </h1>
          </div>
        </div>
      )}

{slug === "about" && (
  <div className="w-full flex justify-center mt-10 px-4">
    <div className="max-w-xl w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-xl p-8 border border-orange-300 text-center transition-all duration-300 hover:shadow-orange-500/30">
      <img
        src="https://avatars.githubusercontent.com/u/61996430?v=4"
        alt="Mayank Raj Avatar"
        className="w-28 h-28 rounded-full mx-auto mb-5 border-4 border-orange-400 shadow-md"
      />
      <h2 className="text-3xl font-extrabold text-orange-500">👨‍💻 Mayank Raj</h2>
      <p className="text-gray-300 mt-4 leading-relaxed text-center">
        With over 4 years of experience building digital products, Mayank blends deep software engineering skills with sharp product instincts.
        He recently launched <strong>Pepper.ru</strong>, an affiliate platform in Russia that hit 1M+ users. Now, he’s building the future with <strong>Orange Intelligence</strong>.
      </p>

      <div className="mt-6">
  <h3 className="text-xl font-semibold text-orange-400 mb-4">🧳 Companies Worked With:</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {["NTT Data (formerly Apisero)", "GeeksForGeeks", "ParityCube", "Pepper.ru"].map((company, index) => (
      <motion.div
        key={company}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
        className="bg-gray-700 text-white px-4 py-3 rounded-md shadow-md text-center"
      >
        {company}
      </motion.div>
    ))}
  </div>
</div>

      <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-2">📧 Contact:</h3>
      <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-700 p-3 rounded-md">
        <p className="text-gray-200 break-all">emailmayank@protonmail.com</p>
        <a
          href="mailto:emailmayank@protonmail.com?subject=I am interested in Orange Intelligence"
          className="mt-2 sm:mt-0 sm:ml-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm transition"
        >
          Send Email
        </a>
      </div>
    </div>
  </div>
)}

      <Link href="/" className="mt-6 text-orange-400 hover:text-orange-300 transition">
        ← Back to Home
      </Link>
    </div>
  );
}
