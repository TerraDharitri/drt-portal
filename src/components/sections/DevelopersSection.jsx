import React from "react";
import { Code2, BookOpen, Wrench, FileText } from "lucide-react";

const FeatureCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-600 text-white mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-6">
        <a
          href="/dharitriChanges"
          className="inline-flex items-center text-teal-600 hover:text-emerald-500 font-medium transition-colors duration-300"
        >
          Learn more
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
    </div>
  );
};

const DevelopersSection = () => {
  const features = [
    {
      title: "Build",
      description:
        "Access powerful SDKs, APIs, and smart contract templates to build your blockchain applications.",
      icon: Code2,
    },
    {
      title: "Learn",
      description:
        "Comprehensive tutorials, documentation, and resources to help you get started.",
      icon: BookOpen,
    },
    {
      title: "Tools",
      description:
        "Development tools including IDE plugins, testing frameworks, and debugging utilities.",
      icon: Wrench,
    },
    {
      title: "Documentation",
      description:
        "Detailed technical documentation covering all aspects of the platform.",
      icon: FileText,
    },
  ];

  return (
    <section className="flex items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className=" py-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 sm:text-6xl">
            Developer Resources
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Everything You Need to Build the Next Generation of Blockchain
            Applications
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-12 text-center">
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
            Start Building
          </a>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/* Existing content with subtle styling updates */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 mb-4">
              Latest Updates
            </h3>
            <ul className="space-y-4">
              {[
                "New SDK version released",
                "Tokenomics and Whitepaper release",
                "Devnet deployment is expected soon.",
              ].map((update, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block h-2 w-2 rounded-full bg-teal-500 mt-2 mr-3"></span>
                  <p className="text-gray-600">{update}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 mb-4">
              Developer Community
            </h3>
            <p className="text-gray-600 mb-4">
              Join our active developer community to get help, share knowledge,
              and collaborate on projects.
            </p>
            <div className="space-y-3">
              {[
                "Discord Community",
                "Developer Forum",
                "GitHub Repository",
              ].map((community, index) => (
                <a
                  key={index}
                  href="/dharitriChanges"
                  className="block text-teal-600 hover:text-emerald-500 transition-colors duration-300"
                >
                  {community} →
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 mb-4">
              Getting Started
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Setup Environment",
                  desc: "Configure your development environment",
                },
                {
                  title: "Create Project",
                  desc: "Initialize your first project",
                },
                {
                  title: "Build & Deploy",
                  desc: "Deploy your first smart contract",
                },
              ].map(({ title, desc }, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900">{`${
                    index + 1
                  }. ${title}`}</h4>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;
