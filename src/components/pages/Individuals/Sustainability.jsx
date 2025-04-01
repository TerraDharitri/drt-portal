import React from "react";
import { ArrowRight, Globe, Leaf, Wind, Zap } from "lucide-react";

const Sustainability = () => {
  // Stats data
  const stats = [
    { label: "Carbon Footprint", value: "-99.99%" },
    { label: "Energy Efficiency", value: "100x" },
    { label: "Renewable Energy", value: "100%" },
  ];

  // Features data
  const features = [
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Eco-Friendly Blockchain",
      description:
        "Rewa's Secure Proof of Stake mechanism ensures minimal environmental impact while maintaining high security and decentralization.",
    },
    {
      icon: <Wind className="w-12 h-12 text-blue-600" />,
      title: "Sustainable Infrastructure",
      description:
        "Our network operates on 100% renewable energy sources, setting new standards for blockchain sustainability.",
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Energy Efficient",
      description:
        "Advanced optimization ensures maximum throughput with minimal energy consumption.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-36 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">
            The Most Environmentally-Friendly Blockchain
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Dharitri is committed to maintaining the lowest carbon footprint in
            the blockchain industry through its revolutionary Rewa consensus
            mechanism.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition flex items-center gap-2 mx-auto shadow-lg">
            Learn More <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gray-100 shadow-md"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Environmental Leadership Through Innovation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Revolutionizing Blockchain Sustainability
              </h2>
              <p className="text-gray-600 mb-6">
                Dharitri's Rewa consensus mechanism represents a breakthrough in
                blockchain technology, combining unprecedented energy efficiency
                with robust security and scalability. By leveraging advanced
                optimization and renewable energy sources, we're setting new
                standards for environmental responsibility in the blockchain
                space.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-2 shadow-lg">
                Explore Technology <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-center">
              <Globe className="w-64 h-64 text-green-600" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;