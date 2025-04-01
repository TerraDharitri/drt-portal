import React, { useState } from "react";
import { Globe, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import communityImage from './images/drt_pjt_demo.webp'; // temporary image

const AccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-700 hover:bg-gray-50"
      >
        <div className="flex items-center gap-2">
          <span>{title}</span>
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 text-gray-600">
          {details}
        </div>
      )}
    </div>
  );
};

const Community = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'Hindi' },
    { code: 'es', label: 'Spanish' },
  ];

  const handleLanguageChange = (e) => {
    setCurrentLanguage(e.target.value);
    alert(`Language changed to ${e.target.value.toUpperCase()}`);
  };

  const featuredSection = {
    title: 'Join the Farmer Community',
    description: 'Connect with fellow farmers, share experiences, and access valuable resources to enhance your farming practices.',
    buttonText: 'Join Now',
    url: '#',
    image: communityImage,
    imageAlt: 'Farmer Community',
  };

  const events = [
    {
      title: 'Workshop on Organic Farming',
      details: 'Learn about organic farming techniques and best practices from experts.',
    },
    {
      title: 'Networking Event',
      details: 'Meet and connect with other farmers in your area to share insights and experiences.',
    },
    {
      title: 'Training Session on Water Conservation',
      details: 'Discover modern water-saving techniques to optimize resource usage on your farm.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-end mb-4">
          <label className="flex items-center text-gray-600">
            <Globe className="mr-2" />
            <span className="mr-2">Language:</span>
            <select
              className="border border-gray-300 rounded p-1"
              value={currentLanguage}
              onChange={handleLanguageChange}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="text-center mb-16 relative">
          <div className="absolute w-24 h-1 bg-green-500 left-1/2 -translate-x-1/2 -bottom-4"></div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Farmer Community
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join a thriving community of farmers collaborating for sustainable agriculture.
            Share experiences, get expert advice, and access farming resources.
          </p>
        </div>

        <div className="mb-16 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:w-2/3 p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-4">{featuredSection.title}</h2>
              <p className="mb-6 text-green-50">{featuredSection.description}</p>
              <a
                href={featuredSection.url}
                className="inline-flex items-center px-5 py-3 bg-white text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors"
              >
                {featuredSection.buttonText}
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="md:w-1/3 bg-green-700 h-64 flex items-center justify-center">
              <img src={featuredSection.image} alt={featuredSection.imageAlt} className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Community Highlights</h2>
          <div className="flex gap-4 border-b border-gray-200 mb-6">
            <button
              className={`px-4 py-2 ${
                activeTab === 'events'
                  ? 'text-green-700 border-b-2 border-green-700 font-medium'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('events')}
            >
              Upcoming Events
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'resources'
                  ? 'text-green-700 border-b-2 border-green-700 font-medium'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('resources')}
            >
              Community Resources
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'forum'
                  ? 'text-green-700 border-b-2 border-green-700 font-medium'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('forum')}
            >
              Discussion Forum
            </button>
          </div>

          {activeTab === 'events' && (
            <div className="p-4 bg-white rounded shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
              <div className="space-y-2">
                {events.map((event, idx) => (
                  <AccordionItem key={idx} title={event.title} details={event.details} />
                ))}
              </div>
            </div>
          )}
          {activeTab === 'resources' && (
            <div className="p-4 bg-white rounded shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Community Resources</h3>
              <p className="text-gray-600">
                Access a variety of resources, including guides, tutorials, and expert advice to help you improve your farming practices.
              </p>
            </div>
          )}
          {activeTab === 'forum' && (
            <div className="p-4 bg-white rounded shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Discussion Forum</h3>
              <p className="text-gray-600">
                Engage in discussions with fellow farmers, ask questions, and share your knowledge and experiences.
              </p>
            </div>
          )}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for updates on community events, new resources, and farming tips.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
