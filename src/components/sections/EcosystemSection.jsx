import React, { useState } from "react";
import {
  Activity,
  Shield,
  Users,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

const EcosystemCard = ({ title, description, stats, icon: Icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-600 text-white mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {stats && (
        <div className="mt-6">
          <a
            href="/dharitriChanges"
            className="inline-flex items-center text-teal-600 hover:text-emerald-500 font-medium transition-colors duration-300"
          >
            {stats.label}: {stats.value}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ name, category, description, metrics }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-800 rounded mt-1">
            {category}
          </span>
        </div>
        <a
          href="/dharitriChanges"
          className="text-teal-500 hover:text-emerald-600 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="grid grid-cols-3 gap-4 text-center border-t pt-4">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key}>
            <span className="block text-xs text-gray-500 mb-1 uppercase">
              {key.toUpperCase()}
            </span>
            <span className="block text-sm font-semibold text-gray-900">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const EcosystemSection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const ecosystemStats = [
    {
      title: "DApps & Projects",
      description:
        "Discover and explore decentralized applications built on our blockchain.",
      icon: Activity,
      stats: { label: "Total DApps", value: "2" },
    },
    {
      title: "Staking",
      description:
        "Secure the network and earn rewards by staking your tokens.",
      icon: Shield,
      stats: { label: "Total Staked", value: "$0" },
    },
    {
      title: "Partners",
      description:
        "Strategic partnerships driving ecosystem growth and adoption.",
      icon: Users,
      stats: { label: "Active Partners", value: "200+" },
    },
    {
      title: "Growth",
      description: "Ecosystem growth metrics and development statistics.",
      icon: TrendingUp,
      stats: { label: "Monthly Growth", value: "10%" },
    },
  ];

  const featuredProjects = [
    {
      name: "DeFi Protocol",
      category: "DeFi",
      description:
        "Leading decentralized exchange with advanced trading features.",
      metrics: { tvl: "0", users: "0", volume: "$0" },
    },
    {
      name: "NFT Marketplace",
      category: "NFT",
      description: "Premium marketplace for digital collectibles and artwork.",
      metrics: { tvl: "$0", users: "0", volume: "0" },
    },
    {
      name: "GameFi Platform",
      category: "Gaming",
      description: "Play-to-earn gaming platform with multiple game titles.",
      metrics: { tvl: "$0", users: "0", volume: "0" },
    },
  ];

  return (
    <section className="flex items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="py-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 sm:text-6xl">
            Thriving Ecosystem
          </h2>
          <p className="mt-6 text-2xl text-gray-600 leading-relaxed">
            Explore the Diverse Range of Applications, Services, and
            Opportunities in Our Ecosystem
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <nav className="flex space-x-4 bg-white rounded-full shadow-md p-1">
            {["overview", "dapps", "staking", "partners"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        {activeTab === "overview" && (
          <>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {ecosystemStats.map((stat, index) => (
                <EcosystemCard key={index} {...stat} />
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 mb-6">
                Featured Projects
              </h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/dharitriChanges"
            className="px-12 py-3 rounded-xl text-base font-medium text-white
              bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600
              hover:from-blue-500 hover:via-teal-500 hover:to-emerald-500
              transition-all duration-300 ease-in-out
              transform hover:scale-105
              shadow-lg hover:shadow-xl
              hover:shadow-teal-500/25"
          >
            Join Our Ecosystem
          </a>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
