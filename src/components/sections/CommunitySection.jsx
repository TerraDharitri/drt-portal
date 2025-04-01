
import React from "react";
import { MessageCircle, Calendar, Award, Twitter, Globe } from "lucide-react";

const SocialCard = ({ platform, username, followers, icon: Icon }) => {
  return (
    <a
      href="/dharitriChanges"
      className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
    >
      <div className="flex items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-600 text-white mr-4">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{platform}</h3>
          <p className="text-gray-500">{username}</p>
        </div>
        <div className="ml-auto">
          <span className="text-sm font-medium text-gray-900">{followers}</span>
          <span className="text-sm text-gray-500"> followers</span>
        </div>
      </div>
    </a>
  );
};

const EventCard = ({ title, date, location, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{date}</p>
          <p className="mt-1 text-sm text-teal-600">{location}</p>
        </div>
        <Calendar className="w-6 h-6 text-gray-400" />
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
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
  );
};

const CommunitySection = () => {
  const socialPlatforms = [
    {
      platform: "Twitter",
      username: "@YourChain",
      followers: "0",
      icon: Twitter,
    },
    {
      platform: "Discord",
      username: "YourChain Community",
      followers: "15",
      icon: MessageCircle,
    },
    {
      platform: "Telegram",
      username: "YourChain Official",
      followers: "0",
      icon: Globe,
    },
  ];

  const upcomingEvents = [
    {
      title: "Africa Tech Summit Nairobi 2025",
      date: "Feb 11-13, 2025",
      location: "Nairobi, Kenya",
      description:
        "Join us for two days of insights, networking, and blockchain innovation discussions.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className=" py-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 sm:text-6xl">
            Join Our Community
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Connect, Collaborate, and Grow with Our Global Community of
            Blockchain Enthusiasts
          </p>
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-12">
          {socialPlatforms.map((platform, index) => (
            <SocialCard key={index} {...platform} />
          ))}
        </div>

        {/* Blog and News */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 mb-6">
            Latest Updates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                type: "Blog",
                title: "The Future of Blockchain Technology",
                description:
                  "Explore our vision for the next generation of blockchain infrastructure and applications.",
              },
              {
                type: "News",
                title: "Major Protocol Upgrade Announcement",
                description:
                  "Learn about the upcoming protocol upgrade and its benefits for the ecosystem.",
              },
            ].map((update, index) => (
              <div key={index}>
                <span className="text-sm font-medium text-teal-600">
                  {update.type}
                </span>
                <h4 className="mt-2 text-xl font-semibold text-gray-900">
                  {update.title}
                </h4>
                <p className="mt-2 text-gray-600">{update.description}</p>
                <a
                  href="/dharitriChanges"
                  className="mt-4 inline-block text-teal-600 hover:text-emerald-500 transition-colors"
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 mb-6">
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>

        {/* Grants Program */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl shadow-xl p-8 text-white">
          <div className="flex items-start">
            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-white/20">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold">Grants Program</h3>
              <p className="mt-2 text-white/80">
                We support innovative projects building on our blockchain
                through our grants program. Apply now to receive funding and
                technical support.
              </p>
              <a
                href="/dharitriChanges"
                className="mt-6 px-8 py-3 bg-white text-teal-700 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
              >
                Apply for Grant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
