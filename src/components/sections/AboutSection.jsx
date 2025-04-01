import React from "react";
import { Server, Zap, Lock, Users, CheckCircle } from "lucide-react";

const TechnologyCard = ({ title, description, icon: Icon }) => {
  return (
    <a
      href="/dharitriChanges"
      className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-600 text-white mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
};

// const TeamMemberCard = ({ name, role, image }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
//       <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
//         <img
//           src={image || "/api/placeholder/96/96"}
//           alt={name}
//           className="w-full h-full rounded-full object-cover"
//         />
//       </div>
//       <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
//       <p className="text-gray-600">{role}</p>
//     </div>
//   );
// };

const RoadmapItem = ({ quarter, year, title, status, description }) => {
  const isCompleted = status === "completed";
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-24 text-sm font-medium text-gray-500">
          {quarter} {year}
        </div>
        <div className="flex-grow">
          <div className="flex items-center space-x-2">
            <CheckCircle
              className={`w-5 h-5 ${
                isCompleted ? "text-green-500" : "text-gray-300"
              }`}
            />
            <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500">
              {title}
            </h4>
          </div>
          <p className="mt-1 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const technologies = [
    {
      title: "High Performance",
      description:
        "Advanced blockchain architecture delivering superior throughput and scalability.",
      icon: Zap,
    },
    {
      title: "Security",
      description:
        "Industry-leading security measures protecting network and assets.",
      icon: Lock,
    },
    {
      title: "Scalability",
      description:
        "Innovative sharding solution for unlimited horizontal scaling.",
      icon: Server,
    },
    {
      title: "Governance",
      description:
        "Decentralized governance enabling community-driven decision making.",
      icon: Users,
    },
  ];

  // const teamMembers = [
  //   {
  //     name: "Kasi Vishwanath Aurangabad",
  //     role: "Chief Executive Officer",
  //     image: null,
  //   },
  //   {
  //     name: "Teja Swaroop",
  //     role: "Lead BlockChain Developer",
  //     image: null,
  //   },
  //   {
  //     name: "Sai Sumanth",
  //     role: "Lead Blockchain Developer",
  //     image: null,
  //   },
  // ];

  const roadmapItems = [
    {
      quarter: "Q1",
      year: "2025",
      title: "DevNet Deployement",
      status: "In Progress",
      description:
        "Few Repositories to be uploaded and DevNet will be deployed",
    },
    {
      quarter: "Q2",
      year: "2025",
      title: "TestNet Deployement",
      status: "in-progress",
      description:
        "The TestNet deployment will provide a secure and controlled environment for extensive testing, ensuring stability, performance, and seamless functionality before the MainNet launch.",
    },
    {
      quarter: "Q3",
      year: "2025",
      title: "MainNet Deployement",
      status: "in-progress",
      description:
        "The launch of our blockchain marks the beginning of our journey to serve and revolutionize the crypto world",
    },
  ];

  return (
    // The line below is adjusted to vertically center the heading
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 mt-32 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className=" py-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 sm:text-5xl">
            Building the Future of Blockchain
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our mission is to create a more accessible, efficient, and
            interconnected blockchain ecosystem that empowers developers and
            users worldwide.
          </p>
        </div>

        {/* Technology Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 mb-6">
            Our Technology
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} {...tech} />
            ))}
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="mb-12">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div> */}

        {/* Roadmap Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 mb-6">
            Roadmap
          </h3>
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <RoadmapItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl shadow-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Join the Dharitri Movement</h3>
            <p className="text-white/80 mb-6">
              Be part of a sustainable ecosystem. Connect, engage, and grow with
              us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/dharitriChanges"
                className="px-8 py-3 bg-white text-teal-700 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
              >
                Contact Us
              </a>
              <a
                href="/dharitriChanges"
                className="px-8 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white/20 transition-colors inline-block"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
