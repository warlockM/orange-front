"use client";
import { useEffect, useState } from "react";

export default function Sellers() {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/sellers/")
      .then((res) => res.json())
      .then((data) => {
        setSellers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-orange-500 mb-6 mt-10">🛒 Seller List</h1>
      {loading ? (
        <p className="text-gray-400">Loading sellers...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-zinc-900 text-sm border border-orange-500 rounded-lg">
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Link</th>
                <th className="px-4 py-2">Created At</th>
                <th className="px-4 py-2">Updated At</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller) => (
                <tr key={seller.id} className="border-t border-zinc-700 hover:bg-zinc-800">
                  <td className="px-4 py-2">{seller.id}</td>
                  <td className="px-4 py-2">{seller.name}</td>
                  <td className="px-4 py-2">
                    <a
                      href={seller.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 underline"
                    >
                      View Store
                    </a>
                  </td>
                  <td className="px-4 py-2 text-gray-400">
                    {new Date(seller.created_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 text-gray-400">
                    {new Date(seller.updated_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
