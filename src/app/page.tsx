export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 flex flex-col items-center justify-center">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-800">AgriDirect Marketplace</h1>
        <p className="text-slate-600">
          Decentralized Produce Logistics & Fair-Price Bidding Platform
        </p>
        <div className="p-4 bg-white rounded-lg shadow-md border text-left text-sm text-slate-700">
          <p><strong>System Status:</strong> Operational (v1.0.0-MVP)</p>
          <p><strong>Database:</strong> PostgreSQL / Supabase</p>
          <p><strong>Edge Gateway:</strong> Active</p>
        </div>
      </div>
    </main>
  );
}
