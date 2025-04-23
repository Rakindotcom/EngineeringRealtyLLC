import React from 'react';

const activeListings = [
  {
    id: 1,
    address: '4336 Highland Green Drive',
    city: 'Mason, OH 45040',
    price: '$1,025,000.00',
    status: 'For Sale',
  },
];

const soldListings = [
  {
    id: 2,
    address: '4354 Highland Green Drive',
    city: 'Mason, OH 45040',
    price: '$969,000.00',
    saleSide: 'Listing Side',
    mls: 'MLS# 1899731',
    fileRef: '93400165-2025-00396-0',
  },
  {
    id: 3,
    address: '8073 Cartman Court',
    city: 'Liberty Twp, OH 45044',
    price: '$400,000.00',
    saleSide: 'Sale Side',
    mls: 'MLS# 1816405',
  },
  {
    id: 4,
    address: '8032 River Vista Court #12',
    city: 'Deerfield Twp., OH 45039',
    price: '$55,000.00',
    saleSide: 'Sale Side',
    mls: 'MLS# 1780565',
  },
  {
    id: 5,
    address: '3296 Ravine Place',
    city: 'Mason, OH 45039',
    price: '$306,000.00',
    saleSide: 'Sale Side',
    mls: 'MLS# 1798316',
  },
  {
    id: 6,
    address: '7549 Hidden Trace Dr',
    city: 'West Chester, OH 45069',
    price: '$439,000.00',
    saleSide: 'Listing Side',
    mls: 'N/A',
    fileRef: '93400165-2024-01926-0',
  },
  {
    id: 7,
    address: '5386 Ivybrook Dr',
    city: 'Cincinnati, OH 45236',
    price: '$699,000.00',
    saleSide: 'Sale Side',
    mls: 'N/A',
  },
  {
    id: 8,
    address: '10415 N Trails Edge Dr',
    city: 'Peoria, IL 61615',
    price: '$455,000.00',
    saleSide: 'Sale Side',
    mls: 'N/A',
  },
  {
    id: 9,
    address: '258 Klotter Ave',
    city: 'Cincinnati, OH 45219',
    price: '$220,000.00',
    saleSide: 'Sale Side',
    mls: 'MLS# 1783712',
  },
];

const Listing = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-teal-800 mb-4">Available Listings</h1>
        <p className="text-lg">Explore our current listings and recently sold properties.</p>
      </section>

      {/* Active Listings Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-teal-800 mb-6">Active Listings</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-950">
          {activeListings.map((property) => (
            <div key={property.id} className="border-b-2 border-gray-500 mb-6">
              <a
                href={`https://www.zillow.com/homes/${encodeURIComponent(`${property.address}, ${property.city}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-700 hover:underline"
              >
                {property.address}
              </a>
              <p className="text-gray-600">{property.city}</p>
              <p className="text-lg font-bold text-teal-800">{property.price}</p>
              <p className="text-sm text-gray-500">{property.status}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sold Listings Section */}
      <section>
        <h2 className="text-2xl font-semibold text-teal-800 mb-6">Recently Sold Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {soldListings.map((property) => (
            <div key={property.id} className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-600 mb-6">
              <a
                href={`https://www.zillow.com/homes/${encodeURIComponent(`${property.address}, ${property.city}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-700 hover:underline"
              >
                {property.address}
              </a>
              <p className="text-gray-600">{property.city}</p>
              <p className="text-lg font-bold text-teal-800">{property.price}</p>
              {property.mls && property.mls !== 'N/A' && (
                <p className="text-sm text-gray-500">MLS#: {property.mls}</p>
              )}
              {property.saleSide && <p className="text-sm text-gray-500">Sale Side: {property.saleSide}</p>}
              {property.fileRef && <p className="text-sm text-gray-500">File Reference #: {property.fileRef}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Listing;