import Image from "next/image";

export default function StoreIntegrations() {
  return (
    <div className="bg-zinc-900 border border-orange-500 rounded-lg p-6 flex items-center gap-4">
      <h2 className="text-xl font-bold text-orange-400">🛍️ Store Integrations</h2>
      <Image src="/logos/shopify.png" alt="Shopify" width={40} height={40} />
    </div>
  );
}
