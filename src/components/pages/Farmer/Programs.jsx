import React, { useState } from "react";
import {  ExternalLink, ChevronDown, ChevronUp, Globe } from "lucide-react";
import demoPreview from './images/drt_pjt_demo.webp'; // temporary image

const AccordionItem = ({ step, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-700 hover:bg-gray-50"
      >
        <div className="flex items-center gap-2">
          <span>{step}</span>
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

const Programs = () => {
  const [activeTab, setActiveTab] = useState('subsidized');
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

  const featuredResource = {
    title: 'Farmer Support Programs Overview',
    description: 'Discover how our programs empower farmers with financial support, training, and innovative resources.',
    buttonText: 'Watch Overview',
    url: '#',
    image: demoPreview,
    imageAlt: 'Farmer Support Programs Overview',
  };

  const onboardingSteps = [
    {
      step: '1. Subsidized Seeds & Equipment',
      details: 'Access high-quality seeds and advanced farming equipment at reduced costs to increase crop yield and efficiency.',
    },
    {
      step: '2. Organic Farming Initiatives',
      details: 'Receive training and resources for sustainable, chemical-free farming methods to promote healthier ecosystems.',
    },
    {
      step: '3. Water Conservation Programs',
      details: 'Learn modern water-saving techniques, such as drip irrigation and rainwater harvesting, to optimize resource usage.',
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
            Farmer Support Programs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover initiatives designed to empower farmers with financial support, training, and innovative resources to enhance productivity and promote sustainable farming practices.
          </p>
        </div>

        <div className="mb-16 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:w-2/3 p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-4">{featuredResource.title}</h2>
              <p className="mb-6 text-green-50">{featuredResource.description}</p>
              <a
                href={featuredResource.url}
                className="inline-flex items-center px-5 py-3 bg-white text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors"
              >
                {featuredResource.buttonText}
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="md:w-1/3 bg-green-700 h-64 flex items-center justify-center">
              <img src={featuredResource.image} alt={featuredResource.imageAlt} className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Explore Our Programs</h2>
          <div className="flex gap-4 border-b border-gray-200 mb-6">
            <button
              className={`px-4 py-2 ${
                activeTab === 'subsidized'
                  ? 'text-green-700 border-b-2 border-green-700 font-medium'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('subsidized')}
            >
              Subsidized Seeds & Equipment
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'organic'
                  ? 'text-green-700 border-b-2 border-green-700 font-medium'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('organic')}
            >
              Organic Farming Initiatives
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'water'
                  ? 'text-green-700 border-b-2 border-green-700 font-medium'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('water')}
            >
              Water Conservation Programs
            </button>
          </div>

          {activeTab === 'subsidized' && (
            <div className="p-4 bg-white rounded shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Subsidized Seeds & Equipment</h3>
              <p className="text-gray-600">
                Access high-quality seeds and advanced farming equipment at reduced costs to increase crop yield and efficiency.
              </p>
              <a href="https://example.com/apply-seeds" className="text-green-600 hover:underline flex items-center mt-2">
                Apply Now <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          )}
          {activeTab === 'organic' && (
            <div className="p-4 bg-white rounded shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Organic Farming Initiatives</h3>
              <p className="text-gray-600">
                Receive training and resources for sustainable, chemical-free farming methods to promote healthier ecosystems.
              </p>
              <a href="https://example.com/organic-farming" className="text-green-600 hover:underline flex items-center mt-2">
                Learn More <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          )}
          {activeTab === 'water' && (
            <div className="p-4 bg-white rounded shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Water Conservation Programs</h3>
              <p className="text-gray-600">
                Learn modern water-saving techniques, such as drip irrigation and rainwater harvesting, to optimize resource usage.
              </p>
              <a href="https://example.com/water-conservation" className="text-blue-600 hover:underline flex items-center mt-2">
                Get Started <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Program Onboarding</h2>
          <p className="text-gray-600 mb-6 text-center">
            New to our programs? Follow these easy steps to begin your journey toward sustainable farming.
          </p>
          <div className="space-y-2">
            {onboardingSteps.map((item, idx) => (
              <AccordionItem key={idx} {...item} />
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for timely updates on new programs, success stories, and farming tips.
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

export default Programs;
