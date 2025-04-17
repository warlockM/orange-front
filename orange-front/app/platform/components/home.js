"use client";

import { useState } from "react";
import TotalProducts from "./home/TotalProducts";
import ActiveCompetitors from "./home/ActiveCompetitors";
import HistoryCount from "./home/HistoryCount";
import StoreIntegrations from "./home/StoreIntegrations";
import YourProducts from "./home/YourProducts";

export default function Home() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleScrape = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/scrape?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      if (res.ok) {
        setResult(data);
        setError(null);
      } else {
        setResult(null);
        setError(data.error);
      }
    } catch (err) {
      setResult(null);
      setError("Something went wrong.");
    }
  };

  return (
    <div className="p-10 space-y-10">
      {/* Scrape Section */}
      <h1 className="text-3xl font-bold text-orange-500 mb-6">
        Add a new competitor product
      </h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter product URL..."
          className="flex-1 px-4 py-2 bg-zinc-800 text-white border border-gray-600 rounded"
        />
        <button
          onClick={handleScrape}
          className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded transition"
        >
          Add
        </button>
      </div>

      {result && (
        <div className="bg-zinc-900 border border-orange-500 rounded-lg p-6 mt-6 space-y-2">
          <h2 className="text-xl font-bold text-orange-400">Scraped Product Info</h2>
          <p><strong>Name:</strong> {result.name}</p>
          <p><strong>Price:</strong> ₹{result.price}</p>
          <p><strong>Rating:</strong> {result.rating}</p>
          <p><strong>Reviews:</strong> {result.reviews_count}</p>
          <p><strong>Seller:</strong> {result.seller_name}</p>
          <a
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-300 underline"
          >
            Open Product
          </a>
        </div>
      )}

      {error && (
        <div className="bg-red-900 text-red-100 border border-red-500 p-4 rounded mt-6">
          <p>⚠️ {error}</p>
        </div>
      )}

      {/* Divider */}
      <hr className="border-orange-800 my-10" />

      {/* Dashboard Stat Sections - 2 Column Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <TotalProducts />
        <ActiveCompetitors />
        <HistoryCount />
        <StoreIntegrations />
        <YourProducts />
      </section>
    </div>
  );
}
