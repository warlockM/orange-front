"use client";  // ✅ This makes it a Client Component

import { useParams } from "next/navigation";
import Link from "next/link";

export default function DynamicPage() {
  const { slug } = useParams(); // Get dynamic page name

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
    "about": { title: "About Us", content: "Learn more about us." }
  };

  const page = pages[slug] || { title: "Not Found", content: "Page does not exist." };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white p-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <h1>about</h1>
        </div>
      )}

      <Link href="/" className="mt-6 text-orange-400 hover:text-orange-300 transition">
        ← Back to Home
      </Link>
    </div>
  );
}
