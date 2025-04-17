"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HistoryCount() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchSnapshots = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/snapshots");
        const data = await res.json();
        setCount(data.length || 0);
      } catch (err) {
        console.error("Error fetching snapshots:", err);
      }
    };

    fetchSnapshots();
  }, []);

  return (
    <div className="bg-zinc-900 border border-orange-500 p-6 rounded-lg shadow-md space-y-2">
      <h2 className="text-lg font-bold text-orange-400">📜 Snapshot History</h2>
      <p className="text-gray-300 text-3xl font-mono">{count}</p>
      <button
        onClick={() => router.push("/platform")}
        className="mt-2 text-sm text-orange-300 hover:text-orange-200 underline"
      >
        Show All
      </button>
    </div>
  );
}
