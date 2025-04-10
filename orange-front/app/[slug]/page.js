"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

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
  <div className="w-full flex justify-center mt-10">
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-6 border border-orange-200 text-center">
      <img
        src="https://avatars.githubusercontent.com/u/61996430?v=4"
        alt="Mayank Raj Avatar"
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-orange-200"
      />
      <h2 className="text-2xl font-bold text-orange-600">👨‍💻 Mayank Raj</h2>
      <p className="text-orange-400 mt-3">With 4 years of experiences of hands-on experience building products for the world, Mayank has shown excellence in Software Engineering and Product Management. His most recent product was Pepper.ru an affiliate makrekting platform for Russia launched in November 2024, boasting over a million active users. Now he is into orange.</p>

      <div className="mt-4 text-left">
        <h3 className="text-lg font-semibold text-orange-500 mb-2">🧳 Companies Worked With:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>NTT Data (formerly Apisero)</li>
          <li>GeeksForGeeks</li>
          <li>ParityCube</li>
          <li>Pepper.ru</li>
        </ul>

        <h3 className="text-lg font-semibold text-orange-500 mt-4 mb-1">📧 Contact:</h3>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="text-gray-700 break-all">emailmayank@protonmail.com</p>
          <a
            href="mailto:emailmayank@protonmail.com?subject=I am interested in Orange Intelligence"
            className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md text-sm transition"
          >
            Send Email
          </a>
        </div>
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
