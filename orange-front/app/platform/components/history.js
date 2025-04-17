"use client";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function History() {
  const [snapshots, setSnapshots] = useState([]);
  const [weeklyCounts, setWeeklyCounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/snapshots");
      const data = await res.json();
      setSnapshots(data);
      processWeeklyCounts(data);
    };

    const processWeeklyCounts = (data) => {
      const weeklyMap = {};

      data.forEach(item => {
        const date = new Date(item.captured_at);
        const weekStart = new Date(date.setDate(date.getDate() - date.getDay())); // Start of week (Sunday)
        const key = weekStart.toISOString().slice(0, 10); // YYYY-MM-DD

        weeklyMap[key] = (weeklyMap[key] || 0) + 1;
      });

      const chartData = Object.entries(weeklyMap).map(([week, count]) => ({
        week,
        count
      }));

      setWeeklyCounts(chartData);
    };

    fetchData();
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold text-orange-500 mb-4 mt-10">📈 Snapshot History</h1>

      {/* Line Chart */}
      <div className="bg-zinc-800 p-6 rounded-lg mb-10">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weeklyCounts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#f97316" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-10">
  <table className="min-w-full bg-zinc-900 text-sm rounded-lg overflow-hidden">
    <thead>
      <tr className="bg-orange-500 text-left text-white">
        <th className="px-4 py-2">ID</th>
        <th className="px-4 py-2">Price</th>
        <th className="px-4 py-2">Rating</th>
        <th className="px-4 py-2">Reviews</th>
        <th className="px-4 py-2">Delta Price</th>
        <th className="px-4 py-2">Delta Rating</th>
        <th className="px-4 py-2">Delta Reviews</th>
        <th className="px-4 py-2">Captured At</th>
        <th className="px-4 py-2">Product ID</th>
      </tr>
    </thead>
    <tbody>
      {snapshots.map((s) => (
        <tr key={s.id} className="border-b border-zinc-700 hover:bg-zinc-800 transition">
          <td className="px-4 py-2">{s.id}</td>
          <td className="px-4 py-2">{s.price}</td>
          <td className="px-4 py-2">{s.rating}</td>
          <td className="px-4 py-2">{s.reviews_count}</td>
          <td className="px-4 py-2">{s.delta_price ?? "—"}</td>
          <td className="px-4 py-2">{s.delta_rating ?? "—"}</td>
          <td className="px-4 py-2">{s.delta_review_count ?? "—"}</td>
          <td className="px-4 py-2">{new Date(s.captured_at).toLocaleString()}</td>
          <td className="px-4 py-2">{s.product}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
}
