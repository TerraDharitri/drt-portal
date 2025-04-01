import React from "react";
import { ArrowRight, Users, Shield, Coins, Check, ExternalLink } from "lucide-react";

const Validators = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 mt-6">
            Secure Dharitri Network
          </h1>
          <p className="text-xl text-green-50 mb-12 max-w-3xl mx-auto">
            Join the network of validators helping to secure and decentralize
            the Dharitri blockchain while earning rewards
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg flex items-center gap-2 mx-auto">
            Become a Validator
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <div className="text-4xl mb-2">👥</div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-green-50 mt-1">Active Validators</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <div className="text-4xl mb-2">🔒</div>
              <div className="text-3xl font-bold">$0</div>
              <div className="text-green-50 mt-1">Total Value Secured</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <div className="text-4xl mb-2">💰</div>
              <div className="text-3xl font-bold">12%</div>
              <div className="text-green-50 mt-1">Average APR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Running a Validator
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of becoming a validator on the Dharitri network
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <Coins className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Earn Rewards</h3>
              <p className="text-gray-600">
                Earn consistent rewards for helping secure and maintain the
                Dharitri network through transaction validation
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <Shield className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Support Decentralization
              </h3>
              <p className="text-gray-600">
                Play a crucial role in maintaining the network's
                decentralization and security
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <Users className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Join the Community</h3>
              <p className="text-gray-600">
                Become part of an active community of validators and contribute
                to network governance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Validator Requirements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know to set up and run a successful validator node
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hardware Requirements
              </h3>
              <ul className="space-y-3 text-gray-600">
                {["CPU: 8 cores / 16 threads", "RAM: 32GB DDR4", "Storage: 500GB SSD", "Network: 100 Mbps symmetric link"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="mr-2 w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Staking Requirements
              </h3>
              <ul className="space-y-3 text-gray-600">
                {["Minimum stake: 200 REWA", "Server uptime: 99.9%", "Technical knowledge of node operation", "Secure key management"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="mr-2 w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Validator Community
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with fellow validators, share experiences, and access valuable resources
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Validator Resources</h3>
              <div className="space-y-4">
                {[
                  { title: "Validator Setup Guide", description: "Step-by-step instructions to set up your validator node" },
                  { title: "Troubleshooting Documentation", description: "Common issues and their solutions for validators" },
                  { title: "Security Best Practices", description: "Learn how to secure your validator infrastructure" }
                ].map((resource, idx) => (
                  <div key={idx} className="border border-green-100 rounded-lg overflow-hidden mb-3">
                    <div className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-700">
                      <div>
                        <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{resource.description}</p>
                      </div>
                      <button className="text-green-600 hover:text-green-700">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 inline-block text-green-600 font-medium hover:text-green-700 bg-transparent border-none p-0">
                View all resources →
              </button>
            </div>
            
            <div className="lg:col-span-2 bg-gradient-to-br from-green-600 to-green-800 text-white rounded-xl shadow-md p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Join Our Validator Network</h3>
                <p className="mb-6 text-green-50">
                  Stay updated with the latest news, events, and developments in the Dharitri validator ecosystem
                </p>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
                  />
                  <button className="w-full bg-white text-green-700 font-medium px-4 py-3 rounded-lg hover:bg-green-50 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Validator Benefits</h4>
                <ul className="space-y-2">
                  {["12% average APR", "Network governance voting", "Early access to features"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 w-5 h-5 text-green-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="bg-green-100 text-green-800 font-medium py-1 px-3 rounded-full text-sm">Ready to join?</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Become a Validator?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join the Dharitri network and start earning rewards while supporting
            blockchain decentralization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md">
              Get Started
            </button>
            <button className="bg-white text-green-700 border border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Dharitri Ecosystem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Validators;