import React, { useState } from "react";
import Button from "../../ui/button2";

/**
 * MVP EXPLORER PAGE
 * - Search by block / transaction / address
 * - Possibly show minimal real-time stats
 * - Basic 'What is a block?' explanation
 * - Encourage mobile-friendly approach
 */

const Explorer = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  // Placeholder search logic (MVP); typically you'd call an API
  const handleSearch = () => {
    // For now, just store the typed value as a mock "result"
    setSearchResult(`Searched for: ${searchValue}`);
  };

  return (
    <div className="py-8 md:p-12 space-y-16 bg-gradient-to-r from-blue-50 to-white">
      {/* Hero / Intro */}
      <header className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl mt-20 font-bold text-blue-800">
          Dharitri Explorer
        </h1>
        <p className="text-lg bg-white p-6 rounded-lg shadow-md mx-4 md:mx-auto">
          <strong>
            Dive into Dharitri’s blocks, transactions, and addresses.
          </strong>{" "}
          Gain transparency with real-time data and track on-chain activity.
        </p>
      </header>

      {/* Search & Explanation Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="bg-white rounded-xl shadow-md p-6 text-gray-700 space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Quick Block/Tx Lookup
          </h2>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-2/3"
              placeholder="Enter block number, transaction hash, or address..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
          {/* Mock result display */}
          {searchResult && (
            <div className="mt-4 text-blue-600 font-medium">{searchResult}</div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-gray-700">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">What is a Block?</h2>
          <p className="leading-relaxed">
            A block is like a “batch” of verified transactions on the Dharitri 
            network. Once a block is validated, it’s permanently added to the 
            chain, ensuring transparency and immutability. Use this explorer to 
            view each block’s hash, transaction count, and timestamp.
          </p>
        </div>
      </section>

      {/* Real-Time Stats / CTA */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="bg-white rounded-xl shadow-md p-6 text-gray-700">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Live Network Stats 
          </h2>
          <p className="leading-relaxed">
            Future enhancements: track TPS, daily volume, or REWA burn metrics 
            in real time. For now, enjoy a minimal block/transaction search 
            and stay tuned for advanced analytics.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-100 p-16 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-blue-800">
          Explore Dharitri
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Verify transactions, track addresses, and witness each block secured 
          by Dharitri’s Proof-of-Stake consensus. Transparency at your fingertips.
        </p>
        <Button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700">
          Go to Latest Blocks
        </Button>
      </section>
    </div>
  );
};

export default Explorer;