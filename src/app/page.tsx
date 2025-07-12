import React from 'react'

export default function Page() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-xl font-semibold text-center">Welcome to Runway ✈️</h1>
      <p className="text-gray-600 text-center">
        Discover beauty & fashion looks, see product details, and save your favorites!
      </p>

      {/* Example feed of posts */}
      <div className="grid gap-4">
        <div className="bg-pink-50 rounded-lg p-2 shadow">
          <img src="/sample-look-1.jpg" alt="Look 1" className="rounded mb-2" />
          <p className="text-sm">💄 Soft glam look • See products →</p>
        </div>
        <div className="bg-pink-50 rounded-lg p-2 shadow">
          <img src="/sample-look-2.jpg" alt="Look 2" className="rounded mb-2" />
          <p className="text-sm">👗 Cottagecore outfit • See products →</p>
        </div>
        {/* Add more cards or map over mock data */}
      </div>
    </main>
  )
}
