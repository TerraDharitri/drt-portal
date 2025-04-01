import React from "react";
import { Card, CardContent } from "../../ui/card";
import Button from "../../ui/button2";

/**
 * MVP WALLET PAGE
 * - Highlights optional biometric authentication
 * - Mentions on-chain 2FA
 * - Introduces seed phrase backup, testnet usage
 * - References ongoing security audits
 * 
 * Usage:
 *  1. Replace NotFound or placeholder with this content in `Wallet.jsx`.
 *  2. Adjust style, images, or data as needed to match your brand/design.
 */

const Wallet = () => {
  return (
    <div className="py-8 md:p-12 space-y-16 bg-gradient-to-r from-blue-50 to-white">
      {/* Hero / Introduction */}
      <header className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl mt-20 font-bold text-blue-800">
          Your Dharitri Wallet
        </h1>
        <p className="text-lg bg-white p-6 rounded-lg shadow-md mx-4 md:mx-auto">
          <strong>
            Securely store Rewa and many more tokens
          </strong>{" "}
          Enjoy optional biometric authentication, on-chain 2FA, and an easy
          setup for newcomers. Your keys, your control.
        </p>
      </header>

      {/* Key Features Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold text-blue-800 text-center">
          Wallet Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature: Multi-Asset Support */}
          <Card className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg">
            <CardContent className="space-y-4 text-center">
              <h3 className="text-xl font-semibold text-blue-700">Multi-Asset</h3>
              <p className="text-gray-700">
                Easily manage Rewa and many more tokens in a
                single, beginner-friendly interface.
              </p>
            </CardContent>
          </Card>

          {/* Feature: On-Chain 2FA */}
          <Card className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg">
            <CardContent className="space-y-4 text-center">
              <h3 className="text-xl font-semibold text-blue-700">
                On-Chain 2FA
              </h3>
              <p className="text-gray-700">
                Gain peace of mind with on-chain two-factor authentication. 
                Validate critical actions with a secondary wallet or 
                time-based passcode to block unauthorized transactions.
              </p>
            </CardContent>
          </Card>

          {/* Feature: Biometric Authentication */}
          <Card className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg">
            <CardContent className="space-y-4 text-center">
              <h3 className="text-xl font-semibold text-blue-700">
                Biometric Login
              </h3>
              <p className="text-gray-700">
                (Optional) Enable fingerprint or Face ID on your mobile device
                for frictionless yet secure wallet access.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seed Phrase & Testnet Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-bold text-blue-800">Seed Phrase Backup</h2>
          <p className="text-gray-700 leading-relaxed">
            When you create your wallet, you'll receive a secret seed phrase. 
            <strong> Always store this offline</strong> and never share it 
            with anyone. We provide a mandatory mini-walkthrough to ensure you 
            write it down correctly. In case your device is lost or damaged, 
            your seed phrase is your only way to recover funds.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For best practice, write it on paper or store it in a hardware 
            backup. Avoid saving it digitally where it could be exposed to hacks.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-bold text-blue-800">Explore Safely on Testnet</h2>
          <p className="text-gray-700 leading-relaxed">
            Unsure about live transactions? Switch to our <strong>testnet</strong> mode
             for risk-free exploration. You can claim test tokens from 
            our faucet and practice sending transactions or enabling on-chain 
            2FA without spending real REWA.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Use testnet for demos, tutorials, or just to get familiar with 
            wallet features. Once you’re comfortable, switch back to mainnet 
            and manage real assets.
          </p>
        </div>
      </section>

      {/* Security and Audits Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold text-blue-800 text-center">
          Security & Audits
        </h2>
        <p className="bg-white rounded-xl p-6 shadow-md text-gray-700 leading-relaxed">
          The Dharitri Wallet is subject to{" "}
          <strong>quarterly security audits</strong> (see 
          <em> White Paper Appendix H</em>) to ensure your funds are protected. 
          Our code undergoes regular review by reputable firms specializing in 
          blockchain security. Additionally, a bug bounty program rewards 
          community members who help identify vulnerabilities.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-100 p-16 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-blue-800">
          Ready to Get Started?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Secure your digital assets with a beginner-friendly wallet that 
          puts you in full control. Activate optional biometrics and 
          on-chain 2FA for extra peace of mind.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700">
            Create a New Wallet
          </Button>
          <Button variant="outline" className="border-2 border-blue-600 px-8 py-4 rounded-full text-blue-700 hover:bg-blue-200">
            Import Existing Wallet
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Wallet;