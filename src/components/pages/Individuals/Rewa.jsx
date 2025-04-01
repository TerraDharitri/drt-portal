import React from "react";
import {
  CircleDollarSign,
  Rocket,
  Shield,
  Globe,
  BarChart,
} from "lucide-react";

const Rewa = () => {
  const tokenStats = [
    { label: "Market Cap", value: "$0" },
    { label: "Circulating Supply", value: "0 REWA" },
    { label: "Total Supply", value: "0 REWA" },
  ];

  const features = [
    {
      icon: <CircleDollarSign size={48} />, 
      title: "Low Transaction Costs",
      description:
        "Enjoy fast and affordable transactions across the Dharitri network.",
    },
    {
      icon: <Rocket size={48} />, 
      title: "High Performance",
      description:
        "Scalable blockchain infrastructure with thousands of transactions per second.",
    },
    {
      icon: <Shield size={48} />, 
      title: "Secure Network",
      description:
        "Robust security protocols ensuring network integrity and user safety.",
    },
  ];

  const useCases = [
    {
      icon: <Globe size={48} />, 
      title: "Global Accessibility",
      description:
        "Seamless cross-border transactions and financial interactions.",
    },
    {
      icon: <BarChart size={48} />, 
      title: "DeFi Ecosystem",
      description:
        "Advanced decentralized finance applications and smart contract capabilities.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-black">
      {/* Hero Section */}
      <section className="py-44 px-4 text-center">
        <h1 className="text-6xl font-extrabold text-blue-900 mb-6 drop-shadow-lg">
          Dharitri (REWA)
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          A high-performance blockchain platform designed for global
          scalability, security, and innovation.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg">
            Buy REWA
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition duration-300 shadow-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* Token Statistics */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto flex justify-between">
          {tokenStats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Dharitri Network Features</h2>
          <p className="text-xl text-gray-600 mt-4">
            Powering the Next Generation of Blockchain Technology
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 border rounded-lg hover:shadow-xl transition duration-300 bg-white"
            >
              <div className="flex justify-center mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Ecosystem Use Cases</h2>
          <p className="text-xl text-gray-600 mt-4">
            Transforming Industries with Blockchain Technology
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4 text-blue-600">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 text-center">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Blockchain Technology */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6">Advanced Blockchain Technology</h2>
        <p className="text-xl text-gray-600 mb-12">
          Built on a sharded architecture with adaptive state sharding for maximum scalability and performance.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Scalability</h3>
            <p>Horizontally scalable blockchain infrastructure</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Security</h3>
            <p>Robust consensus mechanism and smart contract safety</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Efficiency</h3>
            <p>Low latency and minimal transaction costs</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rewa;
