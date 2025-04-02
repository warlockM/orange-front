import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md py-4 px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-orange-500">Orange Intelligence</div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="text-orange-400 hover:text-orange-300 transition">
            Home
          </Link>
          <Link href="/pricing" className="text-orange-400 hover:text-orange-300 transition">
            Pricing
          </Link>
          <Link href="/about" className="text-orange-400 hover:text-orange-300 transition">
            About
          </Link>
          <Link href="/case-studies" className="text-orange-400 hover:text-orange-300 transition">
            Case Studies
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4">Orange Intelligence</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
          Making competitor insights the lowest hanging fruit.
        </p>

        {/* Button to Case Studies */}
        <Link href="/case-studies">
          <button className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-md transition">
            View Case Studies
          </button>
        </Link>
      </div>
    </div>
  );
}
