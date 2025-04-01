import React, { useState } from "react";
import { Search } from "lucide-react";

const Tutorials = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Expanded tutorials with more items in each category
  const tutorials = [
    {
      category: "Getting Started",
      items: [
        {
          title: "Introduction to Dharitri Blockchain",
          description:
            "Learn the fundamentals of Dharitri blockchain and its core concepts.",
          duration: "15 min",
          difficulty: "Beginner",
        },
        {
          title: "Setting Up Your First Rewa Wallet",
          description:
            "Create and secure your Rewa wallet to start your blockchain journey.",
          duration: "10 min",
          difficulty: "Beginner",
        },
        {
          title: "Understanding the Rewa Ecosystem",
          description:
            "Explore the tokens, validators, and governance aspects of Rewa.",
          duration: "20 min",
          difficulty: "Beginner",
        },
        {
          title: "Basic Node Setup",
          description:
            "Spin up a Dharitri node and sync it with the main network.",
          duration: "25 min",
          difficulty: "Intermediate",
        },
      ],
    },
    {
      category: "Smart Contracts",
      items: [
        {
          title: "Smart Contract Development on Dharitri",
          description:
            "Build your first smart contract using Dharitri's development framework.",
          duration: "30 min",
          difficulty: "Intermediate",
        },
        {
          title: "Advanced Smart Contract Patterns",
          description:
            "Learn advanced patterns and best practices for Dharitri smart contracts.",
          duration: "45 min",
          difficulty: "Advanced",
        },
        {
          title: "Oracles & External Data",
          description:
            "Use off-chain data and oracles in your Dharitri smart contracts.",
          duration: "35 min",
          difficulty: "Advanced",
        },
        {
          title: "NFT Smart Contracts",
          description:
            "Design, mint, and manage NFTs on the Dharitri blockchain.",
          duration: "40 min",
          difficulty: "Intermediate",
        },
      ],
    },
    {
      category: "dApp Development",
      items: [
        {
          title: "Building Your First dApp",
          description:
            "Create a decentralized application on the Dharitri network.",
          duration: "60 min",
          difficulty: "Intermediate",
        },
        {
          title: "Integrating Rewa Tokens",
          description: "Learn how to integrate Rewa tokens into your dApp.",
          duration: "40 min",
          difficulty: "Intermediate",
        },
        {
          title: "Frontend Integration with Dharitri",
          description:
            "Connect your React or Vue app to the Dharitri blockchain seamlessly.",
          duration: "50 min",
          difficulty: "Intermediate",
        },
        {
          title: "Complex dApp Architecture",
          description:
            "Architect scalable dApps with multiple smart contracts and services.",
          duration: "80 min",
          difficulty: "Advanced",
        },
      ],
    },
    {
      category: "Testing & Security",
      items: [
        {
          title: "Testing Dharitri dApps",
          description:
            "Set up local environments and unit tests for your Dharitri applications.",
          duration: "25 min",
          difficulty: "Intermediate",
        },
        {
          title: "Smart Contract Security Audits",
          description:
            "Learn how to audit contracts and find common vulnerabilities.",
          duration: "45 min",
          difficulty: "Advanced",
        },
        {
          title: "Common Vulnerabilities",
          description:
            "Identify typical pitfalls in blockchain applications and how to avoid them.",
          duration: "30 min",
          difficulty: "Intermediate",
        },
        {
          title: "Using Test Networks & Tools",
          description:
            "Leverage test networks, explorers, and frameworks to ensure a secure deployment.",
          duration: "35 min",
          difficulty: "Intermediate",
        },
      ],
    },
  ];

  const filteredTutorials = tutorials
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 mt-20 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Dharitri Developer Tutorials
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Learn how to build on the Dharitri blockchain with our comprehensive tutorials
        </p>
      </div>

      {/* Search Section */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md 
                       leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Search tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredTutorials.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              {category.category}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.items.map((tutorial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md 
                             transition-shadow duration-200 p-6 border border-gray-100 
                             hover:-translate-y-0.5"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{tutorial.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {tutorial.duration}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                        tutorial.difficulty
                      )}`}
                    >
                      {tutorial.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
