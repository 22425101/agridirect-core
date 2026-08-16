import Link from 'next/link';

export default function ListingsPage() {
  const sampleListings = [
    { id: '1', cropType: 'Yellow Maize', quantityKg: 500, minPrice: 2.50, location: 'Kumasi' },
    { id: '2', cropType: 'White Rice', quantityKg: 1200, minPrice: 4.10, location: 'Tamale' },
    { id: '3', cropType: 'Cassava', quantityKg: 800, minPrice: 1.80, location: 'Sunyani' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Available Produce Listings</h1>
          <Link href="/" className="text-emerald-600 hover:underline">← Back to Home</Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {sampleListings.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">{item.cropType}</h3>
              <p className="text-sm text-gray-600">Quantity: {item.quantityKg} kg</p>
              <p className="text-sm text-gray-600">Location: {item.location}</p>
              <p className="text-emerald-700 font-semibold mt-2">Min Bid: ${item.minPrice.toFixed(2)} / kg</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
