import React from "react";

const Careers = () => {
  const perks = [
    {
      title: "Flexible Work",
      description:
        "Work from anywhere with flexible hours and remote-first culture",
    },
    {
      title: "Competitive Salary",
      description:
        "Attractive compensation packages with cryptocurrency options",
    },
    {
      title: "Learning & Growth",
      description:
        "Continuous learning opportunities and professional development",
    },
    {
      title: "Health Benefits",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      title: "Team Events",
      description: "Regular team building and social events",
    },
    {
      title: "Latest Tech",
      description: "Access to cutting-edge technology and tools",
    },
  ];

  const openPositions = [
    {
      category: "Engineering",
      jobs: [
        {
          title: "Senior Blockchain Developer",
          location: "Remote",
          type: "Full-time",
        },
        {
          title: "Frontend Developer",
          location: "Remote",
          type: "Full-time",
        },
      ],
    },
    {
      category: "Product",
      jobs: [
        {
          title: "Product Manager",
          location: "Remote",
          type: "Full-time",
        },
      ],
    },
    {
      category: "Marketing",
      jobs: [
        {
          title: "Content Writer",
          location: "Remote",
          type: "Full-time",
        },
        {
          title: "Social Media Manager",
          location: "Remote",
          type: "Full-time",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-blue-50">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 mt-20">
          Join Dharitri & Rewa
        </h1>
        <p className="text-xl text-blue-700 max-w-2xl mx-auto mb-8">
          Help us build the future of sustainable blockchain technology and
          empower global agricultural transformation
        </p>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
          View Open Positions
        </button>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-blue-800">
                At Dharitri, we're building a sustainable blockchain ecosystem
                that bridges traditional agriculture with innovative technology.
                Our platform, Rewa, is revolutionizing how farmers interact with
                the digital economy.
              </p>
              <p className="text-lg text-blue-800">
                We're looking for passionate individuals who share our vision of
                creating a more sustainable and inclusive future through
                blockchain technology.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Key Metrics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-blue-500">15+</p>
                  <p className="text-blue-700">Team Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-500">2</p>
                  <p className="text-blue-700">Countries</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-500">10</p>
                  <p className="text-blue-700">Farmers Empowered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-500">24/7</p>
                  <p className="text-blue-700">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Perks & Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {perk.title}
                </h3>
                <p className="text-blue-700">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 px-4 bg-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Open Positions
          </h2>
          {openPositions.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                {category.category}
              </h3>
              <div className="grid gap-4">
                {category.jobs.map((job, jobIndex) => (
                  <div
                    key={jobIndex}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-semibold text-blue-900">
                        {job.title}
                      </h4>
                      <div className="flex gap-4">
                        <span className="text-blue-700">{job.location}</span>
                        <span className="text-blue-700">•</span>
                        <span className="text-blue-700">{job.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Sustainability First
                </h3>
                <p className="text-blue-700">
                  We prioritize environmental sustainability in everything we
                  do.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Farmer Empowerment
                </h3>
                <p className="text-blue-700">
                  We're committed to empowering farmers through technology.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Innovation
                </h3>
                <p className="text-blue-700">
                  We push boundaries and embrace new technologies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Community
                </h3>
                <p className="text-blue-700">
                  We build strong, inclusive communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-100 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Ready to Join Us?
        </h2>
        <p className="text-xl text-blue-700 max-w-2xl mx-auto mb-8">
          Be part of a team that's revolutionizing agriculture through
          blockchain technology
        </p>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default Careers;
