import React from "react";
import { ArrowUpRight } from "lucide-react";

const Service = () => {
  const services = [
    {
      category: "Staking Providers",
      description:
        "Delegate your REWA tokens to trusted validators and earn rewards",
      items: [
        {
          name: "Dharitri Staking",
          description: "Official staking platform for Dharitri Network",
          link: "#",
        },
        {
          name: "Rewa Validators",
          description: "Professional validator services for the ecosystem",
          link: "#",
        },
      ],
    },
    {
      category: "Payment Providers",
      description: "Integration solutions for merchants and businesses",
      items: [
        {
          name: "DharitriPay",
          description: "Complete payment solution for blockchain transactions",
          link: "#",
        },
        {
          name: "Rewa Gateway",
          description: "Enterprise-grade payment processing",
          link: "#",
        },
      ],
    },
    {
      category: "Infrastructure Providers",
      description: "Essential infrastructure services for the network",
      items: [
        {
          name: "Dharitri Nodes",
          description: "Dedicated node infrastructure services",
          link: "#",
        },
        {
          name: "Rewa Cloud",
          description: "Cloud solutions for blockchain applications",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 mt-6">
            Service Providers
          </h1>
          <p className="text-xl text-green-50 mb-12 max-w-3xl mx-auto">
            Discover the ecosystem of trusted service providers that help power
            the Dharitri Network and Rewa ecosystem
          </p>
          
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg">
            Find a Provider
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <div className="text-4xl mb-2">⚙️</div>
              <div className="text-3xl font-bold">30+</div>
              <div className="text-green-50 mt-1">Verified Providers</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <div className="text-4xl mb-2">🔒</div>
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-green-50 mt-1">Service Uptime</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <div className="text-4xl mb-2">🌐</div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-green-50 mt-1">Global Regions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Service Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with trusted providers across various service categories to enhance your Dharitri experience
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-green-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h2>
                <p className="text-gray-600 mb-8">{category.description}</p>
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <a key={itemIdx} href={item.link} className="block group">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-600">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {item.description}
                          </p>
                        </div>
                        <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200">
                          <ArrowUpRight className="text-green-600" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Provider Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advantages of working with verified service providers in the Dharitri ecosystem
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <ArrowUpRight className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Security</h3>
              <p className="text-gray-600">
                All service providers undergo rigorous security audits and verification processes to ensure safety.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <ArrowUpRight className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Technical Excellence
              </h3>
              <p className="text-gray-600">
                Providers maintain high standards of technical performance, uptime, and reliability.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <ArrowUpRight className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ecosystem Integration</h3>
              <p className="text-gray-600">
                Seamless integration with other components of the Dharitri ecosystem and complementary services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="bg-green-100 text-green-800 font-medium py-1 px-3 rounded-full text-sm">Join our network</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Become a Service Provider
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join the Dharitri ecosystem and help build the future of blockchain
            technology. We're always looking for reliable and innovative service
            providers to enhance our ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md">
              Apply Now
            </button>
            <button className="bg-white text-green-700 border border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Provider Requirements
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

export default Service;