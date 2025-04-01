import React from "react";

const Tools = () => {
  const tools = [
    {
      category: "Developer Tools",
      items: [
        {
          title: "Dharitri IDE",
          description:
            "Write, test, debug and deploy smart contracts easily with our web-based IDE",
          link: "#",
        },
        {
          title: "Dharitri SDK",
          description:
            "Build applications with our comprehensive software development kit",
          link: "#",
        },
        {
          title: "Smart Contract Tools",
          description:
            "Tools and libraries for smart contract development on Dharitri",
          link: "#",
        },
        {
          title: "CLI Tools",
          description:
            "Command-line utilities for quick interactions with Dharitri nodes",
          link: "#",
        },
      ],
    },
    {
      category: "Development Resources",
      items: [
        {
          title: "Developer Documentation",
          description:
            "Comprehensive guides and documentation for building on Dharitri",
          link: "#",
        },
        {
          title: "API Reference",
          description:
            "Detailed API documentation for Dharitri network integration",
          link: "#",
        },
        {
          title: "Code Examples",
          description: "Sample code and templates to jumpstart your development",
          link: "#",
        },
        {
          title: "Sample Projects",
          description: "Explore reference implementations built on Dharitri",
          link: "#",
        },
      ],
    },
    {
      category: "Infrastructure & Deployment",
      items: [
        {
          title: "Validator Setup",
          description:
            "Spin up a validator node and participate in network consensus",
          link: "#",
        },
        {
          title: "Node Management",
          description:
            "Tools for monitoring and maintaining Dharitri nodes at scale",
          link: "#",
        },
        {
          title: "Network Explorer",
          description:
            "Discover blocks, transactions, and network data via explorer tools",
          link: "#",
        },
        {
          title: "Deployment Scripts",
          description:
            "Automate and streamline deployment processes for your dApps",
          link: "#",
        },
      ],
    },
    {
      category: "Analytics & Monitoring",
      items: [
        {
          title: "Dharitri Analytics Dashboard",
          description:
            "Visualize on-chain metrics and stats in real-time dashboards",
          link: "#",
        },
        {
          title: "Real-Time Transaction Monitoring",
          description:
            "Keep track of inbound/outbound transactions with live data streams",
          link: "#",
        },
        {
          title: "Block Explorer Tools",
          description:
            "Search blocks, addresses, and transactions with advanced explorer features",
          link: "#",
        },
        {
          title: "Node Performance Metrics",
          description:
            "Gather and chart node health data for optimal infrastructure planning",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white shadow-md rounded-b-3xl">
        <div className="max-w-6xl mx-auto text-center mt-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Builder Tools & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to build powerful applications on the Dharitri
            blockchain
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20 pt-10">
        {tools.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 border-b border-gray-200 pb-2">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm 
                             hover:shadow-md transition-shadow duration-200 
                             hover:-translate-y-0.5"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Community Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 border-b border-gray-200 pb-2">
            Join Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-transform">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Developer Discord
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Connect with other developers and get support from our team
              </p>
              <a
                href="https://discord.com"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Join Discord →
              </a>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-transform">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Developer Forum
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Discuss technical topics and share your knowledge
              </p>
              <a
                href="https://forums.google.com"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Visit Forum →
              </a>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-transform">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                GitHub
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Explore our open-source repositories and contribute
              </p>
              <a
                href="https://github.com"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                View GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
