import React, { useState } from "react";
import {ChevronDown, ChevronUp, ExternalLink, Check } from "lucide-react";

const Discover = () => {
  const [activeTab, setActiveTab] = useState('defi');

  // Improved ecosystem data with better stats
  const ecosystemStats = [
    { label: "Total Value Locked", value: "$34.8M", icon: "💰" },
    { label: "Daily Active Addresses", value: "12.5K", icon: "👥" },
    { label: "Projects Built", value: "28", icon: "🏗️" },
  ];

  // Project categories with more details
  const categories = {
    defi: {
      title: "DeFi",
      description: "Decentralized finance applications building the financial future on Dharitri",
      projects: [
        {
          name: "RewaSwap",
          description: "Decentralized exchange with automated market making for Dharitri tokens",
          icon: "/api/placeholder/48/48",
          stats: "24h Volume: $1.2M",
        },
        {
          name: "RewaPad",
          description: "Launchpad for new Dharitri projects with fair token distribution mechanisms",
          icon: "/api/placeholder/48/48",
          stats: "Projects Launched: 14",
        },
        {
          name: "DhariBorrow",
          description: "Lending and borrowing protocol with competitive interest rates",
          icon: "/api/placeholder/48/48",
          stats: "TVL: $8.5M",
        },
      ],
    },
    nft: {
      title: "NFTs & Gaming",
      description: "Digital collectibles and blockchain gaming experiences on Dharitri",
      projects: [
        {
          name: "Rewa Realms",
          description: "Immersive NFT marketplace and gaming platform with play-to-earn mechanics",
          icon: "/api/placeholder/48/48",
          stats: "Users: 8.2K",
        },
        {
          name: "ArtBlocks",
          description: "Generative art platform for creators to mint algorithmic NFTs",
          icon: "/api/placeholder/48/48",
          stats: "Collections: 45",
        },
      ],
    },
    dao: {
      title: "DAOs & Governance",
      description: "Decentralized organizations and governance systems built on Dharitri",
      projects: [
        {
          name: "GovernX",
          description: "Comprehensive governance toolkit for creating and managing DAOs",
          icon: "/api/placeholder/48/48",
          stats: "Active DAOs: 12",
        },
        {
          name: "VoteDhari",
          description: "On-chain voting platform with gasless voting and delegation",
          icon: "/api/placeholder/48/48",
          stats: "Proposals: 123",
        },
      ],
    },
  };

  // Community events
  const events = [
    {
      title: "Dharitri Dev Conference",
      date: "Apr 15-17, 2025",
      details: "Annual developer conference showcasing the latest innovations and updates to the Dharitri ecosystem.",
      location: "Virtual",
    },
    {
      title: "DeFi Builders Hackathon",
      date: "May 5-12, 2025",
      details: "Build the next generation of DeFi applications with $100K in prizes.",
      location: "Singapore + Virtual",
    },
    {
      title: "Beginner's Workshop: Building on Dharitri",
      date: "Mar 28, 2025",
      details: "Learn the fundamentals of developing on the Dharitri blockchain.",
      location: "Virtual",
    },
  ];

  // Accordion component
  const AccordionItem = ({ title, date, details, location }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border border-green-100 rounded-lg overflow-hidden mb-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-700 hover:bg-green-50"
        >
          <div className="flex items-center gap-2">
            <span className="text-green-600">{date}</span>
            <span className="mx-2">•</span>
            <span>{title}</span>
          </div>
          {isOpen ? <ChevronUp className="text-green-600" /> : <ChevronDown className="text-green-600" />}
        </button>
        {isOpen && (
          <div className="p-4 bg-green-50 text-gray-700">
            <p className="mb-2">{details}</p>
            <div className="flex items-center text-green-700 font-medium">
              <span>Location: {location}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 mt-6">
            Discover the Dharitri Ecosystem
          </h1>
          <p className="text-xl text-green-50 mb-12 max-w-3xl mx-auto">
            Explore the innovative projects and applications building the future
            of decentralized technology on Dharitri
          </p>
          
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg">
            Start Building Today
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {ecosystemStats.map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-green-50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the diverse range of projects building on Dharitri across various categories
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="flex gap-4 border-b border-gray-200 mb-12 justify-center">
            {Object.keys(categories).map((key) => (
              <button
                key={key}
                className={`px-6 py-3 ${
                  activeTab === key
                    ? 'text-green-700 border-b-2 border-green-700 font-medium'
                    : 'text-gray-600 hover:text-green-600'
                }`}
                onClick={() => setActiveTab(key)}
              >
                {categories[key].title}
              </button>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {categories[activeTab].title}
            </h2>
            <p className="text-gray-600 mb-10">{categories[activeTab].description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories[activeTab].projects.map((project, pIndex) => (
                <div
                  key={pIndex}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                      <img
                        src={project.icon}
                        alt={project.name}
                        className="w-12 h-12 rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.name}
                      </h3>
                      <div className="text-sm text-green-600 font-medium">{project.stats}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="text-green-600 font-medium flex items-center hover:text-green-700 bg-transparent border-none p-0">
                    Learn more <ExternalLink className="ml-1 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with fellow developers, share experiences, and access valuable resources
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event, idx) => (
                  <AccordionItem 
                    key={idx} 
                    title={event.title} 
                    date={event.date}
                    details={event.details}
                    location={event.location}
                  />
                ))}
              </div>
              <button className="mt-6 inline-block text-green-600 font-medium hover:text-green-700 bg-transparent border-none p-0">
                View all events →
              </button>
            </div>
            
            <div className="lg:col-span-2 bg-gradient-to-br from-green-600 to-green-800 text-white rounded-xl shadow-md p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
                <p className="mb-6 text-green-50">
                  Stay updated with the latest news, events, and developments in the Dharitri ecosystem
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
                <h4 className="font-semibold mb-3">Why Subscribe?</h4>
                <ul className="space-y-2">
                  {["Early access to new features", "Exclusive developer events", "Grant opportunities"].map((item, i) => (
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
            <span className="bg-green-100 text-green-800 font-medium py-1 px-3 rounded-full text-sm">Ready to start?</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Build the Future on Dharitri
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join the growing ecosystem of developers and innovators building the
            future of blockchain technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md">
              Start Building
            </button>
            <button className="bg-white text-green-700 border border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Read Documentation
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

export default Discover;