import React from "react";
import { Card, CardContent } from "../../ui/card";
import Button from "../../ui/button2";

/**
 * MVP BRIDGE PAGE
 * - Basic bridging to Ethereum or BSC
 * - Mention trustless approach or multi-sig
 * - Summarize flow
 * - Approx bridging times
 * - Support contact
 */

const Bridge = () => {
  return (
    <div className="py-8 md:p-12 space-y-16 bg-gradient-to-r from-blue-50 to-white">
      {/* Hero / Intro */}
      <header className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl mt-20 font-bold text-blue-800">Dharitri Bridge</h1>
        <p className="text-lg bg-white p-6 rounded-lg shadow-md mx-4 md:mx-auto">
          <strong>
            Transfer assets between Dharitri and external chains (Ethereum, BSC).
          </strong>{" "}
          Leverage a trust-minimized bridging architecture to expand your reach.
        </p>
      </header>

      {/* Bridge Overview */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold text-blue-800 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: Connect Wallet */}
          <Card className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg">
            <CardContent className="space-y-4 text-center">
              <h3 className="text-xl font-semibold text-blue-700">
                1. Connect Wallet
              </h3>
              <p className="text-gray-700">
                Authorize your Dharitri Wallet (or compatible wallet)
                to initiate a cross-chain transfer. Make sure you have
                enough gas on both sides.
              </p>
            </CardContent>
          </Card>

          {/* Step 2: Select Chains */}
          <Card className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg">
            <CardContent className="space-y-4 text-center">
              <h3 className="text-xl font-semibold text-blue-700">
                2. Choose Source & Destination
              </h3>
              <p className="text-gray-700">
                Pick the chain to send from (Dharitri, Ethereum, BSC) and
                your target chain. Enter the amount and destination address.
              </p>
            </CardContent>
          </Card>

          {/* Step 3: Estimated Time */}
          <Card className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg">
            <CardContent className="space-y-4 text-center">
              <h3 className="text-xl font-semibold text-blue-700">
                3. Confirm Transfer
              </h3>
              <p className="text-gray-700">
                Finalize the bridging step. Transfers typically take
                <strong> ~5 minutes</strong> depending on network activity.
                Track the progress in your Bridge Dashboard.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security & Fees Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="bg-white rounded-xl shadow-md p-6 text-gray-700">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Trustless Approach & Fees</h2>
          <p className="leading-relaxed">
            Our MVP uses a multi-sig bridging solution, transitioning to a
            fully trustless model soon. A small bridging fee (in REWA)
            covers cross-chain validators and any L1 gas costs. Some of these
            fees may be burned, supporting deflationary tokenomics (see
            <em> White Paper Section 3.4</em>).
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-gray-700">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Need Help?</h2>
          <p className="leading-relaxed">
            If a transfer gets stuck or you have questions, check our
            <strong> Bridge FAQ</strong> or contact
            <a href="mailto:support@dharitri.org" className="underline ml-1">
              support@dharitri.org
            </a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-100 p-16 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-blue-800">
          Start Bridging Your Assets
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Access new markets and liquidity with seamless cross-chain transfers.
          Expand your Rewa or Dharitri assets beyond our home chain.
        </p>
        <Button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700">
          Launch Bridge
        </Button>
      </section>
    </div>
  );
};

export default Bridge;
