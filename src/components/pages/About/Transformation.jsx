import React from "react";
import { ArrowRight, CheckCircle, Globe, Shield, Zap } from "lucide-react";

const Transformation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mt-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            The Evolution of Dharitri
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transforming the future of blockchain technology with enhanced
            scalability, security, and sustainable innovation.
          </p>
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg 
            flex items-center gap-2 mx-auto hover:bg-blue-700 transition"
          >
            Explore Our Journey <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Transformation Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                title: "Enhanced Performance",
                description:
                  "Improved transaction processing with advanced sharding technology",
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: "Advanced Security",
                description:
                  "State-of-the-art security protocols and enhanced network protection",
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: "Global Scalability",
                description:
                  "Built for worldwide adoption with robust infrastructure",
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Transformation Journey
          </h2>
          <div className="space-y-8">
            {[
              {
                date: "Phase 1",
                title: "Foundation Enhancement",
                description:
                  "Strengthening core infrastructure and improving base protocols",
              },
              {
                date: "Phase 2",
                title: "Technical Evolution",
                description:
                  "Implementing advanced features and expanding capabilities",
              },
              {
                date: "Phase 3",
                title: "Global Integration",
                description:
                  "Expanding ecosystem and fostering worldwide adoption",
              },
            ].map((phase, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="text-blue-600">
                  <CheckCircle size={24} />
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {phase.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Transformation Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "100x", label: "Performance Increase" },
              { value: "0", label: "Transactions per Second" },
              { value: "90%", label: "Energy Efficiency" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transformation;
