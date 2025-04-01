import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink, Check } from "lucide-react";

const Partners = () => {
  const [activeTab, setActiveTab] = useState('technology');

  // Ecosystem stats
  const ecosystemStats = [
    { label: "Global Partners", value: "200+", icon: "🌐" },
    { label: "Countries", value: "4", icon: "🏢" },
    { label: "Users Reached", value: "0", icon: "👥" },
  ];

  // Partner categories
  const categories = {
    technology: {
      title: "Technology Partners",
      description: "Innovative technology companies helping to build the future of blockchain",
      partners: [
        {
          name: "Partner 1",
          description: "Building innovative blockchain solutions",
          icon: "/api/placeholder/48/48",
          stats: "Projects: 15+",
        },
        {
          name: "Partner 2",
          description: "Leading blockchain infrastructure provider",
          icon: "/api/placeholder/48/48",
          stats: "Networks: 3",
        },
      ],
    },
    financial: {
      title: "Financial Partners",
      description: "Financial institutions and service providers supporting the Dharitri ecosystem",
      partners: [
        {
          name: "Partner 3",
          description: "Global financial services provider",
          icon: "/api/placeholder/48/48",
          stats: "Transactions: 1M+",
        },
        {
          name: "Partner 4",
          description: "Digital asset management platform",
          icon: "/api/placeholder/48/48",
          stats: "Assets: $500M",
        },
      ],
    },
    strategic: {
      title: "Strategic Partners",
      description: "Key alliances that drive growth and innovation within the ecosystem",
      partners: [
        {
          name: "Partner 5",
          description: "Enterprise blockchain integration specialist",
          icon: "/api/placeholder/48/48",
          stats: "Clients: 25+",
        },
        {
          name: "Partner 6",
          description: "Cross-chain interoperability solution",
          icon: "/api/placeholder/48/48",
          stats: "Bridges: 8",
        },
      ],
    },
  };

  // Collaboration events
  const events = [
    {
      title: "Dharitri Partner Summit",
      date: "Apr 15-16, 2025",
      details: "Annual gathering of Dharitri ecosystem partners to share insights and explore collaboration opportunities.",
      location: "Singapore + Virtual",
    },
    {
      title: "Integration Workshop",
      date: "May 10, 2025",
      details: "Technical workshop for partners to learn about the latest Dharitri platform features and integration methods.",
      location: "Virtual",
    },
    {
      title: "Partner Showcase",
      date: "Mar 28, 2025",
      details: "Showcase event for partners to demonstrate their solutions built on the Dharitri blockchain.",
      location: "Dubai + Virtual",
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
            Dharitri Ecosystem Partners
          </h1>
          <p className="text-xl text-green-50 mb-12 max-w-3xl mx-auto">
            Join forces with industry leaders to build the future of blockchain
            technology. Discover how Dharitri and Rewa are transforming the
            digital landscape through strategic partnerships.
          </p>
          
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg">
            Partner With Us
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
              Explore Partner Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the diverse range of partners collaborating within the Dharitri ecosystem
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
              {categories[activeTab].partners.map((partner, pIndex) => (
                <div
                  key={pIndex}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                      <img
                        src={partner.icon}
                        alt={partner.name}
                        className="w-12 h-12 rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {partner.name}
                      </h3>
                      <div className="text-sm text-green-600 font-medium">{partner.stats}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
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
              Partnership Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the advantages of joining the Dharitri partner ecosystem
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <ArrowUpRight className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Integration</h3>
              <p className="text-gray-600">
                Access to developer resources, technical support, and early API access for seamless integration.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <ArrowUpRight className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Marketing Exposure
              </h3>
              <p className="text-gray-600">
                Co-marketing opportunities, feature highlights, and exposure to the broader Dharitri community.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <ArrowUpRight className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Network Growth</h3>
              <p className="text-gray-600">
                Connect with other ecosystem partners and expand your business through collaborative opportunities.
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
              Partner Community
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with fellow partners, share experiences, and access valuable resources
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Partner Events</h3>
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
                <h3 className="text-2xl font-bold mb-4">Join Our Partner Network</h3>
                <p className="mb-6 text-green-50">
                  Stay updated with the latest news, events, and developments in the Dharitri partner ecosystem
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
                <h4 className="font-semibold mb-3">Partner Benefits</h4>
                <ul className="space-y-2">
                  {["Early feature access", "Partner-only events", "Co-marketing opportunities"].map((item, i) => (
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
            Become a Dharitri Partner
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join the Dharitri ecosystem and help shape the future of blockchain
            technology. We're always looking for innovative partners to
            collaborate with.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md">
              Partner With Us
            </button>
            <button className="bg-white text-green-700 border border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View Partnership Guide
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

export default Partners;