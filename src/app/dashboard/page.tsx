import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
          <Link href="/" className="text-emerald-600 hover:underline">← Back to Home</Link>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Manage your crop listings, place new bids, and check order statuses here.</p>
        </div>
      </div>
    </div>
  );
}
