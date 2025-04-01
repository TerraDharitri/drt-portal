import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink, Check } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState('dapps');

  // Ecosystem stats
  const ecosystemStats = [
    { label: "Total Projects", value: "50+", icon: "🚀" },
    { label: "Countries", value: "12", icon: "🌎" },
    { label: "Active Users", value: "25K+", icon: "👥" },
  ];

  // Project categories
  const categories = {
    dapps: {
      title: "Decentralized Applications",
      description: "Innovative dApps leveraging Dharitri's blockchain technology",
      projects: [
        {
          name: "DeFi Hub",
          description: "Comprehensive decentralized finance platform",
          icon: "/api/placeholder/48/48",
          stats: "TVL: $15M+",
        },
        {
          name: "NFT Marketplace",
          description: "Buy, sell and trade unique digital assets",
          icon: "/api/placeholder/48/48",
          stats: "Collections: 250+",
        },
      ],
    },
    infrastructure: {
      title: "Infrastructure Projects",
      description: "Core infrastructure innovations powering the Dharitri ecosystem",
      projects: [
        {
          name: "Bridge Protocol",
          description: "Cross-chain interoperability solution",
          icon: "/api/placeholder/48/48",
          stats: "Networks: 5",
        },
        {
          name: "Data Oracle",
          description: "Decentralized data validation network",
          icon: "/api/placeholder/48/48",
          stats: "Data Points: 1M+",
        },
      ],
    },
    community: {
      title: "Community Projects",
      description: "Community-led initiatives enhancing the Dharitri ecosystem",
      projects: [
        {
          name: "Developer DAO",
          description: "Collective of developers building on Dharitri",
          icon: "/api/placeholder/48/48",
          stats: "Members: 500+",
        },
        {
          name: "Learn Blockchain",
          description: "Educational resources for blockchain development",
          icon: "/api/placeholder/48/48",
          stats: "Courses: 15",
        },
      ],
    },
  };

  // Project milestones
  const milestones = [
    {
      title: "Phase 1 Launches",
      date: "Apr 5, 2025",
      details: "First wave of incubated projects launching on the Dharitri mainnet.",
      status: "Upcoming",
    },
    {
      title: "Ecosystem Hackathon",
      date: "May 20-22, 2025",
      details: "Global hackathon to develop new innovative solutions on the Dharitri blockchain.",
      status: "Registration Open",
    },
    {
      title: "Grant Program Round 3",
      date: "Mar 25, 2025",
      details: "Applications open for the third round of ecosystem grants to fund promising projects.",
      status: "Applications Open",
    },
  ];

  // Accordion component
  const AccordionItem = ({ title, date, details, status }) => {
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
              <span>Status: {status}</span>
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
            Dharitri Ecosystem Projects
          </h1>
          <p className="text-xl text-green-50 mb-12 max-w-3xl mx-auto">
            Discover innovative projects building on the Dharitri blockchain.
            From DeFi and NFTs to infrastructure and community initiatives, explore
            the growing ecosystem.
          </p>
          
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg">
            Submit Your Project
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
              Explore Project Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the diverse range of projects being built on the Dharitri blockchain
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
                    View project <ExternalLink className="ml-1 w-4 h-4" />
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
              Project Support Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Resources available to help projects succeed in the Dharitri ecosystem
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <ArrowUpRight className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
              <p className="text-gray-600">
                Access to developer resources, documentation, and technical expertise for seamless development.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <ArrowUpRight className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Funding Opportunities
              </h3>
              <p className="text-gray-600">
                Grant programs, incubation services, and access to investors to help bring your project to life.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <ArrowUpRight className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Reach</h3>
              <p className="text-gray-600">
                Marketing support, community introductions, and visibility across the Dharitri ecosystem.
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
              Project Ecosystem
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with other projects, track milestones, and access valuable resources
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Project Milestones</h3>
              <div className="space-y-4">
                {milestones.map((milestone, idx) => (
                  <AccordionItem 
                    key={idx} 
                    title={milestone.title} 
                    date={milestone.date}
                    details={milestone.details}
                    status={milestone.status}
                  />
                ))}
              </div>
              <button className="mt-6 inline-block text-green-600 font-medium hover:text-green-700 bg-transparent border-none p-0">
                View all milestones →
              </button>
            </div>
            
            <div className="lg:col-span-2 bg-gradient-to-br from-green-600 to-green-800 text-white rounded-xl shadow-md p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Join Our Project Ecosystem</h3>
                <p className="mb-6 text-green-50">
                  Get updates on new project launches, funding opportunities, and development resources
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
                <h4 className="font-semibold mb-3">Project Benefits</h4>
                <ul className="space-y-2">
                  {["Development grants", "Technical mentorship", "Marketing support"].map((item, i) => (
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
            <span className="bg-green-100 text-green-800 font-medium py-1 px-3 rounded-full text-sm">Have an idea?</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Submit Your Project
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join the Dharitri ecosystem and bring your blockchain innovation to life.
            We provide technical support, funding opportunities, and community reach
            to help your project succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md">
              Submit Project
            </button>
            <button className="bg-white text-green-700 border border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View Developer Docs
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

export default Projects;