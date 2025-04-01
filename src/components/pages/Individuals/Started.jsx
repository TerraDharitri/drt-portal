import React from "react";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

const Started = () => {
  const steps = [
    {
      title: "Create Wallet",
      description:
        "Set up your secure Dharitri wallet to start your blockchain journey",
      icon: "🔐",
    },
    {
      title: "Get REWA Tokens",
      description:
        "Acquire REWA tokens through exchanges or community programs",
      icon: "💎",
    },
    {
      title: "Explore Ecosystem",
      description:
        "Discover decentralized applications, staking, and governance opportunities",
      icon: "🌐",
    },
  ];

  const features = [
    "Ultra-Fast Blockchain Technology",
    "Low Transaction Fees",
    "Secure Decentralized Infrastructure",
    "Community-Driven Governance",
  ];

  const stakingOptions = [
    {
      title: "Validator Staking",
      reward: "Up to 15% APY",
      description: "Run a validator node and contribute to network security",
    },
    {
      title: "Delegated Staking",
      reward: "Up to 10% APY",
      description: "Stake tokens through trusted community validators",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-36 px-4 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-blue-900 mb-6 drop-shadow-lg">
            Welcome to Dharitri Network
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A high-performance blockchain ecosystem designed for scalability,
            security, and seamless user experience
          </p>
        </section>

        {/* Get Started Steps */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-center mb-8">
            Get Started in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-2">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16 bg-blue-50 py-12 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-center mb-8">
            Dharitri Network Features
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center">
                <CheckIcon className="text-green-500 mr-3 w-6 h-6" />
                <span className="text-lg font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Staking Options */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-center mb-8">
            Staking Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {stakingOptions.map((option) => (
              <div
                key={option.title}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <p className="text-green-600 font-semibold mb-2">
                  {option.reward}
                </p>
                <p className="text-gray-600">{option.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
                  Learn More <ChevronRightIcon className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* About Dharitri */}
        <section className="bg-gray-100 rounded-lg p-12 text-center shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-blue-900">
            About Dharitri Network
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Dharitri is a cutting-edge blockchain platform designed to solve
            real-world challenges through innovative technology. Built with a
            focus on high performance, security, and scalability, Dharitri aims
            to democratize access to decentralized technologies and provide a
            robust ecosystem for developers, businesses, and individual users.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Started;