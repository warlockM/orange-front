"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 text-left">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-500 mb-6 mt-10">Privacy Policy</h1>

        <p className="text-gray-300 mb-4">
          At <strong>Orange Intelligence</strong>, we value your privacy and are committed to protecting any personal data you provide while using our platform. This Privacy Policy outlines what information we collect, how we use it, and the steps we take to ensure it's safe.
        </p>

        <h2 className="text-2xl text-orange-400 font-semibold mt-6 mb-2">1. Data We Collect</h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Email address for authentication and contact purposes</li>
          <li>Optional user profile information (e.g. display name)</li>
          <li>Clickstream data (only for analytics and improvement)</li>
          <li>Product and pricing information pulled from your integrated accounts (like Shopify)</li>
        </ul>

        <h2 className="text-2xl text-orange-400 font-semibold mt-6 mb-2">2. How We Use Your Data</h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>To personalize your experience on our platform</li>
          <li>To notify you of updates or new features (if opted in)</li>
          <li>To monitor performance and improve the platform</li>
          <li>To deliver automated insights or pricing suggestions if enabled</li>
        </ul>

        <h2 className="text-2xl text-orange-400 font-semibold mt-6 mb-2">3. Data Security</h2>
        <p className="text-gray-300 mb-4">
          We use industry-standard encryption protocols and secure storage to protect your data. All third-party integrations (e.g. Shopify) use OAuth-based authorization, and we never store your credentials.
        </p>

        <h2 className="text-2xl text-orange-400 font-semibold mt-6 mb-2">4. Data Sharing</h2>
        <p className="text-gray-300 mb-4">
          We do <strong>not</strong> share, sell, or trade your data with third-party advertisers. Data is only shared with services essential to the platform's core functionality (e.g. analytics or authentication) — and only with your consent.
        </p>

        <h2 className="text-2xl text-orange-400 font-semibold mt-6 mb-2">5. Your Rights</h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>You can request access to or deletion of your data at any time</li>
          <li>You can opt out of non-essential communications</li>
          <li>You can revoke app permissions (e.g. Shopify) from within their respective dashboards</li>
        </ul>

        <h2 className="text-2xl text-orange-400 font-semibold mt-6 mb-2">6. Contact Us</h2>
        <p className="text-gray-300 mb-6">
          For any questions or concerns related to your privacy, feel free to email us at{" "}
          <a href="mailto:emailmayank@protonmail.com" className="text-orange-400 underline">
            emailmayank@protonmail.com
          </a>
          .
        </p>

        <Link href="/" className="text-orange-300 hover:text-orange-200 transition">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
