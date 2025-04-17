"use client";
import { useEffect, useState } from "react";

export default function AirtableSubmissionStats() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCount = async () => {
      try {
        const res = await fetch('/api/airtable-submissions');

        // Check if response is OK and not empty
        if (!res.ok) throw new Error('Network response was not ok');

        const text = await res.text();

        if (!text) throw new Error('Empty response from server');

        const data = JSON.parse(text);

        setCount(data.count || 0);
      } catch (err) {
        console.error("Error fetching Airtable submission count:", err);
        setError(true);
      }
    };

    getCount();
  }, []);

  if (error) {
    return <p className="text-red-500">Failed to load submissions count.</p>;
  }

  if (count === null) {
    return <p className="text-orange-400">Loading submissions...</p>;
  }

  return <p className="text-orange-200 text-xl">Total Submissions: {count}</p>;
}
