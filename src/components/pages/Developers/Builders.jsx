import React from "react";
import {
  ArrowRight,
  Code,
  Gift,
  Globe,
  Rocket,
  Shield,
  Zap,
} from "lucide-react";

const BuildersHub = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mt-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-tight">
            Build the Future on Dharitri
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dharitri provides builders with powerful tools and resources to
            create innovative blockchain solutions. Join our ecosystem and
            transform your ideas into reality with Rewa.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto transition-colors duration-300 hover:bg-blue-700 shadow-lg">
            Start Building <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="text-blue-600" size={32} />}
            title="High Performance"
            description="Experience blazing-fast transaction speeds and low latency with our optimized blockchain infrastructure."
          />
          <FeatureCard
            icon={<Shield className="text-blue-600" size={32} />}
            title="Enhanced Security"
            description="Built with robust security measures to protect your applications and users' assets."
          />
          <FeatureCard
            icon={<Code className="text-blue-600" size={32} />}
            title="Developer-Friendly"
            description="Comprehensive SDK and development tools to streamline your building process."
          />
          <FeatureCard
            icon={<Rocket className="text-blue-600" size={32} />}
            title="Scalable Solutions"
            description="Build applications that can grow with your user base without compromising performance."
          />
          <FeatureCard
            icon={<Gift className="text-blue-600" size={32} />}
            title="Rewards Program"
            description="Earn rewards for contributing to the Dharitri ecosystem and building innovative solutions."
          />
          <FeatureCard
            icon={<Globe className="text-blue-600" size={32} />}
            title="Global Community"
            description="Join a thriving community of developers and innovators building the future of blockchain."
          />
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Resources for Builders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ResourceCard
              title="Documentation"
              description="Comprehensive guides and API references to help you build on Dharitri."
              link="#"
            />
            <ResourceCard
              title="Developer Portal"
              description="Access tools, SDKs, and resources to accelerate your development."
              link="#"
            />
            <ResourceCard
              title="Rewa Framework"
              description="Build smart contracts efficiently with our powerful Rewa framework."
              link="#"
            />
            <ResourceCard
              title="Community Hub"
              description="Connect with other builders and get support from our community."
              link="#"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 transform duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ResourceCard = ({ title, description, link }) => (
  <a
    href={link}
    className="block p-6 bg-gray-50 rounded-xl shadow hover:bg-gray-100 transition duration-300 hover:shadow-md"
  >
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
    <div className="flex items-center text-blue-600 font-medium">
      Learn More <ArrowRight size={16} className="ml-2" />
    </div>
  </a>
);

export default BuildersHub;
