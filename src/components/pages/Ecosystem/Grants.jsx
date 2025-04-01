import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink, Check } from "lucide-react";

const Grants = () => {
  const [activeTab, setActiveTab] = useState('casual');

  // Ecosystem stats
  const ecosystemStats = [
    { label: "Total Value Locked", value: "$5.2M", icon: "🎮" },
    { label: "Active Players", value: "45.8K", icon: "👾" },
    { label: "Games Launched", value: "14", icon: "🏆" },
  ];

  // Game categories
  const categories = {
    casual: {
      title: "Casual Games",
      description: "Fun and accessible blockchain games for everyone on Dharitri",
      projects: [
        {
          name: "Crypto Crush",
          description: "Match-3 puzzle game with token rewards and NFT collectibles",
          icon: "/api/placeholder/48/48",
          stats: "Daily Players: 8.5K",
        },
        {
          name: "RewaRacer",
          description: "High-octane racing game with upgradable NFT vehicles and tournaments",
          icon: "/api/placeholder/48/48",
          stats: "Tournaments: 25/week",
        },
        {
          name: "Block Battles",
          description: "Strategic card game with tradable hero cards and competitive leagues",
          icon: "/api/placeholder/48/48",
          stats: "Cards Minted: 35K",
        },
      ],
    },
    strategy: {
      title: "Strategy & RPG",
      description: "Complex gaming experiences with deep gameplay and economic systems",
      projects: [
        {
          name: "Rewa Realms",
          description: "Fantasy MMORPG with player-owned land and governance",
          icon: "/api/placeholder/48/48",
          stats: "Land Parcels: 12K",
        },
        {
          name: "Crypto Commanders",
          description: "Turn-based strategy game with NFT units and territory control",
          icon: "/api/placeholder/48/48",
          stats: "Battles: 2.5K/day",
        },
      ],
    },
    metaverse: {
      title: "Metaverse",
      description: "Immersive virtual worlds and social experiences built on Dharitri",
      projects: [
        {
          name: "RewaVerse",
          description: "Social metaverse with customizable avatars and virtual events",
          icon: "/api/placeholder/48/48",
          stats: "Daily Visitors: 5.2K",
        },
        {
          name: "CryptoCity",
          description: "Virtual city with player-owned businesses and properties",
          icon: "/api/placeholder/48/48",
          stats: "Properties: 8.7K",
        },
      ],
    },
  };

  // Community events
  const events = [
    {
      title: "Dharitri Game Jam",
      date: "Apr 22-24, 2025",
      details: "72-hour game development competition with $50K in prizes for the most innovative blockchain games.",
      location: "Virtual",
    },
    {
      title: "Play-to-Earn Summit",
      date: "May 15, 2025",
      details: "Conference exploring the future of play-to-earn gaming and tokenomics.",
      location: "Seoul + Virtual",
    },
    {
      title: "Game Developer Workshop",
      date: "Mar 31, 2025",
      details: "Learn how to integrate Dharitri blockchain features into your games.",
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
            Growth Games on Dharitri
          </h1>
          <p className="text-xl text-green-50 mb-12 max-w-3xl mx-auto">
            Discover a new era of gaming where play meets opportunity. Join the
            Rewa ecosystem and experience gaming innovation at its finest.
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
              Explore Game Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the diverse range of blockchain games being built on the Dharitri ecosystem
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

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Platform Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Build innovative gaming experiences with our comprehensive toolkit
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <ArrowUpRight className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Development</h3>
              <p className="text-gray-600">
                Build and deploy games quickly with our comprehensive toolset and
                developer-friendly environment.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <ArrowUpRight className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Scalable Infrastructure
              </h3>
              <p className="text-gray-600">
                Leverage Dharitri's high-performance blockchain for seamless
                gaming experiences.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <ArrowUpRight className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reward Systems</h3>
              <p className="text-gray-600">
                Implement engaging reward mechanisms using Rewa tokens and NFTs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Gaming Community
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with fellow game developers, share experiences, and access valuable resources
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
                  Stay updated with the latest news, events, and developments in the Dharitri gaming ecosystem
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
                  {["Early game testing access", "Exclusive gaming events", "Developer grant opportunities"].map((item, i) => (
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
            Build the Next Gaming Revolution
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join the growing ecosystem of game developers building the
            future of blockchain gaming on Dharitri
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
          <p>© 2025 Dharitri Gaming Ecosystem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Grants;