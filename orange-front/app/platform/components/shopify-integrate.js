"use client";
import { useState } from "react";

export default function Shopify() {
  const [formData, setFormData] = useState({
    apiKey: "",
    apiSecret: "",
    storeDomain: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your API or handle the data
    console.log("Shopify creds:", formData);
    setSubmitted(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-orange-500 mb-6 mt-10">🔌 Integrate Shopify Store</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 border border-orange-500 p-6 rounded-lg max-w-xl space-y-4"
      >
        <div>
          <label className="block text-sm text-gray-300 mb-1">API Key</label>
          <input
            type="text"
            name="apiKey"
            value={formData.apiKey}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-800 border border-gray-600 rounded text-white focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">API Secret</label>
          <input
            type="text"
            name="apiSecret"
            value={formData.apiSecret}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-800 border border-gray-600 rounded text-white focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Store Domain</label>
          <input
            type="text"
            name="storeDomain"
            value={formData.storeDomain}
            onChange={handleChange}
            placeholder="e.g. your-store.myshopify.com"
            className="w-full px-4 py-2 bg-zinc-800 border border-gray-600 rounded text-white focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition"
        >
          Submit
        </button>

        {submitted && (
          <p className="text-green-400 mt-4">Credentials submitted! (Check console for now)</p>
        )}
      </form>
    </div>
  );
}
