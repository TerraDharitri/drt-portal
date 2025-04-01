import React, { useState } from "react";
import {  Globe, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import trainingImage from './images/drt_pjt_demo.webp'; // temporary image

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

const Training = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
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
    title: 'Expert Training for Farmers',
    description: 'Get hands-on training from experts in organic farming, irrigation management, and smart farming tools.',
    buttonText: 'Join a Session',
    url: '#',
    image: trainingImage,
    imageAlt: 'Farmer Training',
  };

  const sessions = [
    {
      title: 'Organic Farming Workshop',
      details: 'Learn about organic farming techniques and best practices from experts.',
    },
    {
      title: 'Irrigation Management Course',
      details: 'Discover modern irrigation techniques to optimize water usage on your farm.',
    },
    {
      title: 'Smart Farming Tools Training',
      details: 'Get trained on using smart farming tools to enhance productivity and efficiency.',
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
            Farmer Training
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get hands-on training from experts in organic farming, irrigation management,
            and the use of smart farming tools.
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Training Highlights</h2>
          <div className="flex gap-4 border-b border-gray-200 mb-6">
            <button
              className={`px-4 py-2 ${
                activeTab === 'upcoming'
                  ? 'text-green-700 border-b-2 border-green-700 font-medium'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Sessions
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'resources'
                  ? 'text-green-700 border-b-2 border-green-700 font-medium'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('resources')}
            >
              Training Resources
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'certifications'
                  ? 'text-green-700 border-b-2 border-green-700 font-medium'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('certifications')}
            >
              Certifications
            </button>
          </div>

          {activeTab === 'upcoming' && (
            <div className="p-4 bg-white rounded shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Upcoming Training Sessions</h3>
              <div className="space-y-2">
                {sessions.map((session, idx) => (
                  <AccordionItem key={idx} title={session.title} details={session.details} />
                ))}
              </div>
            </div>
          )}
          {activeTab === 'resources' && (
            <div className="p-4 bg-white rounded shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Training Resources</h3>
              <p className="text-gray-600">
                Access guides, tutorials, and expert advice to enhance your farming skills.
              </p>
            </div>
          )}
          {activeTab === 'certifications' && (
            <div className="p-4 bg-white rounded shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <p className="text-gray-600">
                Earn certifications to showcase your expertise in various farming techniques and tools.
              </p>
            </div>
          )}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Informed</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for updates on training sessions, new resources, and farming tips.
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

export default Training;
