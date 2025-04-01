import React from "react";
import { CheckCircle2, Lock, ShieldCheck, Zap } from "lucide-react";

const Chain = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 text-gray-900 py-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-6xl font-extrabold text-blue-900 mb-6 drop-shadow-lg">
          On-Chain Two-Factor Authentication
        </h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
          Secure your digital assets with Dharitri's cutting-edge 2FA solution, 
          providing an unparalleled layer of protection for your blockchain transactions.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Enhanced Security</h2>
          <p className="text-lg mb-6 text-gray-700">
            Dharitri's on-chain 2FA creates an additional cryptographic barrier, 
            ensuring that only authorized users can execute critical transactions.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-lg">
              <Lock className="mr-3 text-blue-600 w-6 h-6" />
              <span>Cryptographically Secure Authorization</span>
            </li>
            <li className="flex items-center text-lg">
              <ShieldCheck className="mr-3 text-green-600 w-6 h-6" />
              <span>Immutable Transaction Verification</span>
            </li>
            <li className="flex items-center text-lg">
              <Zap className="mr-3 text-yellow-600 w-6 h-6" />
              <span>Instant Security Confirmation</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-3xl font-bold mb-4 text-blue-800">How It Works</h3>
          <ol className="space-y-4 list-decimal pl-5 text-gray-700">
            <li>User initiates a transaction</li>
            <li>System triggers 2FA verification</li>
            <li>Secondary authentication required</li>
            <li>Transaction confirmed on-chain</li>
          </ol>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="container mx-auto px-6 py-16 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
          Technical Architecture
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Rewa Protocol",
              desc: "A custom blockchain protocol that enables seamless, secure multi-factor authentication directly on-chain."
            },
            {
              title: "Cryptographic Layers",
              desc: "Multiple cryptographic signatures and verifications ensure transaction integrity and user identity."
            },
            {
              title: "Smart Contract Integration",
              desc: "Seamlessly integrated with smart contracts to provide automatic, tamper-proof authentication mechanisms."
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
          Benefits of Dharitri's 2FA
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <CheckCircle2 className="text-green-600 w-10 h-10" />, 
              title: "Fraud Prevention",
              desc: "Significantly reduces unauthorized access risks"
            },
            {
              icon: <Lock className="text-blue-600 w-10 h-10" />, 
              title: "Regulatory Compliance",
              desc: "Meets stringent security standards"
            },
            {
              icon: <ShieldCheck className="text-purple-600 w-10 h-10" />, 
              title: "User Trust",
              desc: "Builds confidence in blockchain transactions"
            },
            {
              icon: <Zap className="text-yellow-600 w-10 h-10" />, 
              title: "Performance",
              desc: "Minimal latency in authentication process"
            },
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="flex items-center justify-center mx-auto w-16 h-16 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 text-center bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">Ready to Secure Your Transactions?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Experience a new era of security with Dharitri's on-chain 2FA solution.
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-md">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Chain;
