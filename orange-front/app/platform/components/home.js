"use client";
import { useState } from "react";
import Link from "next/link";

/* ───────── Platform Home ───────── */
export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);       // holds success OR error object

  const handleAdd = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const apiUrl = `http://127.0.0.1:8000/scrape?url=${encodeURIComponent(url.trim())}`;
      const res = await fetch(apiUrl);
      const data = await res.json();

      if (!res.ok || data.error) {
        setResult({ error: data.error || "Unknown API error" });
      } else {
        setResult({ product: data });
      }
    } catch (err) {
      setResult({ error: "Unable to reach scraping service" });
    } finally {
      setLoading(false);
      setUrl("");
    }
  };

  return (
    <div className="min-h-screen flex bg-black text-white">

      {/* ───────── Main content ───────── */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-orange-500 mb-8 mt-10">
          Add a new competitor product
        </h1>

        {/* Input + Add button */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste competitor product URL…"
            className="flex-1 px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-orange-500 text-sm"
          />
          <button
            onClick={handleAdd}
            disabled={loading}
            className="bg-orange-600 hover:bg-orange-700 disabled:bg-zinc-700 transition px-6 py-3 rounded-md font-semibold text-sm"
          >
            {loading ? "Adding…" : "Add"}
          </button>
        </div>

        {/* Result / Error display */}
        <div className="mt-10">
          {result?.product && <ProductCard data={result.product} />}
          {result?.error && (
            <p className="text-red-400 bg-red-900/40 p-4 rounded-md max-w-lg">
              {result.error}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

/* ───────── Helper: sidebar link ───────── */
function SidebarLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md hover:bg-orange-500/20 text-gray-300"
    >
      {children}
    </Link>
  );
}

/* ───────── Helper: product card ───────── */
function ProductCard({ data }) {
  return (
    <div className="bg-zinc-900 border border-orange-500 rounded-lg p-6 max-w-xl">
      <h2 className="text-xl font-bold text-orange-400 mb-2">{data.name}</h2>
      <p className="text-gray-400 text-sm mb-4 break-all">{data.url}</p>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <Stat label="Price" value={`₹${data.price}`} />
        <Stat label="Rating" value={data.rating} />
        <Stat label="Reviews" value={data.reviews_count} />
        <Stat label="Seller" value={data.seller_name} />
      </div>

      <a
        href={data.seller_page}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-orange-300 hover:text-orange-200 underline text-sm"
      >
        View Seller Page →
      </a>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="text-orange-200 font-medium">{value}</p>
    </div>
  );
}
