"use client";
import { useState } from "react";
import Home from "./components/home";
import Products from "./components/products";
import Sellers from "./components/sellers";
import Shopify from "./components/shopify-integrate";
import Settings from "./components/settings";

export default function PlatformDashboard() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-orange-500 p-6 space-y-6">
        <h2 className="text-2xl font-bold text-orange-400 mt-20">Dashboard</h2>
        <nav className="flex flex-col gap-2 mt-4">
          <SidebarLink label="🏠 Home" onClick={() => setActivePage("home")} />
          <SidebarLink label="📦 Product List" onClick={() => setActivePage("products")} />
          <SidebarLink label="🛒 Sellers" onClick={() => setActivePage("sellers")} />
          <SidebarLink label="🔌 Integrate Shopify" onClick={() => setActivePage("shopify")} />
          <SidebarLink label="⚙️ Settings" onClick={() => setActivePage("settings")} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {activePage === "home" && <Home />}
        {activePage === "products" && <Products />}
        {activePage === "sellers" && <Sellers />}
        {activePage === "shopify" && <Shopify />}
        {activePage === "settings" && <Settings />}
      </main>
    </div>
  );
}

function SidebarLink({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-left px-3 py-2 rounded-md hover:bg-orange-500/20 text-gray-300 transition w-full"
    >
      {label}
    </button>
  );
}
