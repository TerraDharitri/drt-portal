import React from "react";
import { Card, CardContent } from "../../ui/card";
import Button from "../../ui/button2";

/**
 * MVP DECENTRALIZED EXCHANGE PAGE
 * - Focus on Rewa/USDT initial pair
 * - Simple mention of AMM + Order Book
 * - Liquidity incentives & short risk disclosure
 * - Minimal "Connect → Trade" flow
 */

const DExchange = () => {
  return (
    <div className="py-8 md:p-12 space-y-16 bg-gradient-to-r from-blue-50 to-white">
      {/* Hero / Intro */}
      <header className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl mt-20 font-bold text-blue-800">Dharitri DExchange</h1>
        <p className="text-lg bg-white p-6 rounded-lg shadow-md mx-4 md:mx-auto">
          <strong>
            Seamlessly trade Rewa and other tokens in a decentralized environment.
          </strong>{" "}
          Start with our Rewa/USDT pair using an AMM or a simple order book.
        </p>
      </header>

      {/* Key Trading Features */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold text-blue-800 text-center">
          Trading Essentials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature: AMM & Order Book */}
          <Card className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg">
            <CardContent className="space-y-4 text-center">
              <h3 className="text-xl font-semibold text-blue-700">
                AMM + Order Book
              </h3>
              <p className="text-gray-700">
                Enjoy the convenience of quick AMM swaps or place limit orders
                through a more traditional order book. Flexible and user-friendly
                for all trading styles.
              </p>
            </CardContent>
          </Card>

          {/* Feature: Rewa/USDT Pair */}
          <Card className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg">
            <CardContent className="space-y-4 text-center">
              <h3 className="text-xl font-semibold text-blue-700">
                Rewa/USDT
              </h3>
              <p className="text-gray-700">
                We’re launching with a primary Rewa/USDT pair for stability and
                global reach. More pairs (e.g., Rewa/ETH) are planned soon.
              </p>
            </CardContent>
          </Card>

          {/* Feature: Liquidity Incentives */}
          <Card className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg">
            <CardContent className="space-y-4 text-center">
              <h3 className="text-xl font-semibold text-blue-700">
                Liquidity Rewards
              </h3>
              <p className="text-gray-700">
                Provide liquidity, earn a share of trading fees, and potentially
                qualify for yield farming rewards in Rewa. Help keep our DEX
                liquid and vibrant.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Minimal Risk Disclosure / Flow */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="bg-white rounded-xl shadow-md p-6 text-gray-700">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Trading Flow</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Connect Wallet:</strong> Use Dharitri Wallet (or any compatible wallet)
              to access your funds.
            </li>
            <li>
              <strong>Select Tokens:</strong> Choose Rewa/USDT or other available pairs.
            </li>
            <li>
              <strong>Confirm Trade:</strong> Review slippage, fees, and final amounts,
              then confirm. Trades settle on-chain for transparency.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-gray-700">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Risk Disclosure</h2>
          <p>
            Trading crypto assets involves volatility. Prices and liquidity can
            fluctuate rapidly. Always do your own research. By using the DExchange,
            you acknowledge these risks.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-100 p-16 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-blue-800">
          Start Trading on Dharitri
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Dive into decentralized trading and experience real-time swaps with
          minimal fees. Secure your trades with on-chain transaction verification.
        </p>
        <Button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700">
          Launch DExchange
        </Button>
      </section>
    </div>
  );
};

export default DExchange;