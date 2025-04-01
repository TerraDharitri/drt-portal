import React from "react";
import { Card } from "../../ui/card";

const Roadmap = () => {
  const roadmapSections = [
    {
      year: "2024",
      quarters: [
        {
          title: "Q1 2024",
          items: [
            "Dharitri Virtual Machine Upgrades",
            "REWA Token Economics 2.0",
            "Advanced Staking Mechanisms",
            "Enhanced Developer Tools",
          ],
        },
        {
          title: "Q2 2024",
          items: [
            "Cross-Chain Bridge Implementation",
            "Smart Contract Optimization",
            "Governance Framework Enhancement",
            "Community Development Programs",
          ],
        },
      ],
    },
    {
      year: "2023",
      quarters: [
        {
          title: "Q3-Q4 2023",
          items: [
            "Layer 2 Scaling Solutions",
            "DeFi Protocol Integration",
            "Network Security Hardening",
            "Ecosystem Growth Initiatives",
          ],
        },
      ],
    },
  ];

  const visionPillars = [
    {
      title: "Scalability",
      description: "Advanced infrastructure supporting millions of users",
    },
    {
      title: "Security",
      description: "Enterprise-grade security for all network participants",
    },
    {
      title: "Accessibility",
      description: "User-friendly platform for developers and users alike",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mt-10 mb-10">
          <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 inline-block text-transparent bg-clip-text">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Building the Future of Blockchain
            </h1>
          </div>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mt-6">
            Dharitri's roadmap outlines our journey towards creating a more
            accessible, efficient, and innovative blockchain ecosystem powered
            by REWA.
          </p>
        </div>
        {/* Decorative SVG background (optional) */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 opacity-20"
            width="400"
            height="400"
            fill="none"
          >
            <circle
              cx="200"
              cy="200"
              r="200"
              fill="url(#gradient1)"
              className="text-blue-500"
            />
            <defs>
              <radialGradient
                id="gradient1"
                cx="0%"
                cy="0%"
                r="100%"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" offset="0%" />
                <stop stopColor="transparent" offset="100%" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        {roadmapSections.map((section) => (
          <div key={section.year} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-2">
              {section.year}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {section.quarters.map((quarter) => (
                <Card
                  key={quarter.title}
                  className="p-6 bg-white rounded-lg border border-gray-100
                             shadow-sm hover:shadow-md transition-transform duration-200
                             hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">
                    {quarter.title}
                  </h3>
                  <ul className="space-y-4">
                    {quarter.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-3" />
                        <span className="text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Vision Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
          Our Vision
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
          Dharitri aims to revolutionize blockchain technology by creating a
          more sustainable, scalable, and user-friendly ecosystem. With REWA at
          its core, we're building the foundation for the next generation of
          decentralized applications.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {visionPillars.map((pillar, index) => (
            <Card
              key={index}
              className="p-6 bg-white rounded-lg border border-gray-100
                         shadow-sm hover:shadow-md transition-transform
                         duration-200 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
