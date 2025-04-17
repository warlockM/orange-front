"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Home from "./home";
import Products from "./products";
import Sellers from "./sellers";
import Shopify from "./shopify-integrate";
import Settings from "./settings";
import History from "./history";

export default function DashboardLayout() {
  const [activePage, setActivePage] = useState("home");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const path = pathname.split("/")[2] || "home";
    setActivePage(path);
  }, [pathname]);

  const handleNav = (page) => {
    setActivePage(page);
    router.push(`/platform/${page === "home" ? "" : page}`);
  };

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-orange-500 p-6 space-y-6">
        <h2 className="text-2xl font-bold text-orange-400 mt-20">Dashboard</h2>
        <nav className="flex flex-col gap-2 mt-4">
          <SidebarLink label="🏠 Home" page="home" current={activePage} onClick={handleNav} />
          <SidebarLink label="📦 Product List" page="products" current={activePage} onClick={handleNav} />
          <SidebarLink label="🛒 Sellers" page="sellers" current={activePage} onClick={handleNav} />
          <SidebarLink label="🔌 Integrate Shopify" page="shopify" current={activePage} onClick={handleNav} />
          <SidebarLink label="⚙️ Settings" page="settings" current={activePage} onClick={handleNav} />
          <SidebarLink label="📈 History" page="history" current={activePage} onClick={handleNav} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {activePage === "home" && <Home />}
        {activePage === "products" && <Products />}
        {activePage === "sellers" && <Sellers />}
        {activePage === "shopify" && <Shopify />}
        {activePage === "settings" && <Settings />}
        {activePage === "history" && <History />}
      </main>
    </div>
  );
}

function SidebarLink({ label, page, current, onClick }) {
  return (
    <button
      onClick={() => onClick(page)}
      className={`text-left px-3 py-2 rounded-md transition w-full ${
        current === page
          ? "bg-orange-500 text-white"
          : "hover:bg-orange-500/20 text-gray-300"
      }`}
    >
      {label}
    </button>
  );
}
