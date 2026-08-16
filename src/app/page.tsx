import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Hero / System Status Header */}
        <header className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h1 className="text-3xl font-bold text-emerald-800">AgriDirect Marketplace</h1>
          <p className="text-gray-600 font-medium">
            Decentralized Produce Logistics & Fair-Price Bidding Platform
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            System Status: Operational (v1.0.0-MVP) | Database: Connected
          </div>
        </header>

        {/* Action Buttons */}
        <section className="flex flex-wrap gap-4">
          <Link 
            href="/listings" 
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow transition"
          >
            🌾 Browse Marketplace Listings
          </Link>
          <Link 
            href="/login" 
            className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-sm transition"
          >
            🔑 Log In / Register
          </Link>
        </section>

      </div>
    </main>
  );
}
