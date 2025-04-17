"use client";
import { useEffect, useState } from "react";

export default function YourProducts() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sapi/shopify/products/")
      .then((res) => res.json())
      .then((data) => setCount(data.length))
      .catch(() => setCount(0));
  }, []);

  return (
    <div className="bg-zinc-900 border border-orange-500 rounded-lg p-6">
      <h2 className="text-xl font-bold text-orange-400 mb-2">🧡 Your Shopify Products</h2>
      <p className="text-3xl text-white font-semibold">{count}</p>
    </div>
  );
}
