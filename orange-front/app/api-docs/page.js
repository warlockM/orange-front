"use client"
import { useState } from 'react';

const endpoints = [
  {
    category: 'Products',
    routes: [
      {
        name: 'List Products',
        method: 'GET',
        path: '/api/products',
        description: 'Retrieve a list of all products.',
        response: `{ "[
    {
        "id": 8,
        "name": "Biotique Cucumber Pore Tightening Toner| Ayurvedic and Organically Pure| Maintains Skin’s Natural pH |100% Botanical Extracts| Suitable for Normal & Oily Skin Types| 120mL (Pack of 2)",
        "price": "286.00",
        "rating": "4.1",
        "review_count": 49314,
        "url": "https://www.amazon.in/Biotique-Cucumber-Tightening-Freshener-Himalayan/dp/B078LDQKRX",
        "created_at": "2025-04-08T06:49:41.234530Z",
        "updated_at": "2025-04-08T06:59:05.874080Z"
    }
  ] }`
      },
      {
        name: 'Get Product',
        method: 'GET',
        path: '/api/products/:id',
        description: 'Retrieve details of a specific product.',
        response: `[
    {
        "id": 8,
        "name": "Biotique Cucumber Pore Tightening Toner",
        "price": "286.00",
        "rating": "4.1",
        "review_count": 49314,
        "url": "https://www.amazon.in/Biotique-Cucumber-Tightening-Freshener-Himalayan/dp/B078LDQKRX"
    }
  ]`
      },
      {
        name: 'List All Snapshots',
        method: 'GET',
        path: '/api/snapshots',
        description: 'Retrieve a list of all product snapshots.',
        response: `{ "[
    {
        "id": 31,
        "price": 286.0,
        "rating": 4.1,
        "reviews_count": 49314,
        "delta_price": 0.0,
        "delta_rating": "0.0",
        "delta_review_count": 0,
        "captured_at": "2025-04-08T06:59:05.876657Z",
        "product": 8
    }
  ] }`
      },
      {
        name: 'Get Snapshot By Product',
        method: 'GET',
        path: '/api/snapshots/:id',
        description: 'Retrieve details of a specific product snapshot.',
        response: `[{
    "id": 8,
    "price": 109.0,
    "rating": 4.2,
    "reviews_count": 1019,
    "delta_price": 0.0,
    "delta_rating": "0.0",
    "delta_review_count": 8,
    "captured_at": "2025-03-10T12:31:23.090860Z",
    "product": 5
  }]`
      }
    ]
  },
  {
    category: 'Tracking',
    routes: [
      {
        name: 'Track Price',
        method: 'POST',
        path: '/api/track',
        description: 'Track a new product for pricing.',
        response: `{ "status": "tracking_started" }`
      }
    ]
  }
];

export default function DocsPage() {
  const [selected, setSelected] = useState(endpoints[0].routes[0]);

  return (
    <div className="min-h-screen flex bg-white text-gray-800 mt-10">
      {/* Sidebar */}
      <aside className="w-64 bg-orange-50 border-r border-orange-200 p-6 space-y-6">
        <h2 className="text-2xl font-bold text-orange-600">API Docs</h2>
        {endpoints.map((section, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold text-orange-700 uppercase tracking-wide mb-2">
              {section.category}
            </h3>
            <ul className="space-y-1">
              {section.routes.map((route, j) => (
                <li key={j}>
                  <button
                    className={`block w-full text-left p-2 rounded-lg ${
                      selected.name === route.name
                        ? 'bg-orange-100 text-orange-900 font-semibold'
                        : 'hover:bg-orange-100 text-gray-700'
                    }`}
                    onClick={() => setSelected(route)}
                  >
                    {route.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="max-w-3xl space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-orange-600">{selected.name}</h1>
            <p className="mt-1 text-gray-600">{selected.description}</p>
          </div>

          <div className="space-y-4">
            {/* Endpoint section */}
            <div>
              <h2 className="text-sm font-semibold text-gray-700 uppercase">Endpoint</h2>
              <code className="block p-3 bg-gray-100 rounded text-sm font-mono">
                <span
                  className={`font-bold mr-2 ${
                    selected.method === 'GET' ? 'text-green-600' :
                    selected.method === 'POST' ? 'text-blue-600' :
                    selected.method === 'PUT' ? 'text-yellow-600' :
                    selected.method === 'PATCH' ? 'text-purple-600' :
                    selected.method === 'DELETE' ? 'text-red-600' :
                    'text-gray-700'
                  }`}
                >
                  {selected.method}
                </span>
                {selected.path}
              </code>
            </div>

            {/* Response section */}
            <div>
              <h2 className="text-sm font-semibold text-gray-700 uppercase">Example Response</h2>
              <pre className="p-4 bg-gray-100 rounded text-sm font-mono whitespace-pre-wrap">
                {selected.response}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
