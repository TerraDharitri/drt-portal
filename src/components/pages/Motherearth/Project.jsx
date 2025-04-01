import React from "react";
import CountUp from "react-countup";
import { Card, CardContent } from "../../ui/card";
import Button from "../../ui/button1";

// Sample data for project impact
const data = [
  { name: "Active Sustainability Projects", value: 20 },
  { name: "Farmers Benefited", value: 5000 },
  { name: "Land Restored (acres)", value: 1200 },
  { name: "Communities Engaged", value: 80 },
  { name: "Carbon Offset (tons)", value: 15000 },
  { name: "Funds Allocated (USD)", value: 5000000 },
];

const Project = () => {
  return (
    <div className="py-4 md:p-8 space-y-24 bg-gradient-to-r from-green-50 to-blue-50">
      {/* Hero Section */}
      <header className="text-center space-y-6">
        <h1 className="text-5xl mt-20 font-bold text-green-800">Our Projects</h1>
        <p className="text-lg max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <strong>
            Driving sustainable change through impactful projects that empower communities and restore nature.
          </strong>
        </p>
      </header>

      {/* Key Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {data.map((item, index) => (
          <Card key={index} className="shadow-lg p-8 transition-transform transform hover:scale-105 bg-white rounded-xl">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-6 text-green-700">{item.name}</h2>
              <CountUp end={item.value} duration={3} separator="," className="text-4xl font-bold text-green-600" />
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Featured Projects */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-800">Our Ongoing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Agroforestry Initiative</h3>
            <p className="text-gray-700">
              Enhancing biodiversity and soil health by integrating trees with crops and livestock.
            </p>
          </Card>
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Smart Water Management</h3>
            <p className="text-gray-700">
              Implementing rainwater harvesting and smart irrigation systems to conserve water.
            </p>
          </Card>
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Carbon Sequestration</h3>
            <p className="text-gray-700">
              Developing strategies to capture and store atmospheric carbon through sustainable farming.
            </p>
          </Card>
        </div>
      </section>

      {/* Project Goals */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-800">Our Future Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Expand Sustainable Farming</h3>
            <p className="text-gray-700">
              Increase the number of sustainable farming projects to impact more farmers.
            </p>
          </Card>
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Achieve Net-Zero Carbon</h3>
            <p className="text-gray-700">
              Implement solutions to make agricultural practices completely carbon-neutral.
            </p>
          </Card>
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Community-Led Initiatives</h3>
            <p className="text-gray-700">
              Support grassroots projects that encourage local communities to take climate action.
            </p>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-green-100 p-16 rounded-lg shadow-lg space-y-10">
        <h2 className="text-4xl font-bold text-green-800">Join Our Mission</h2>
        <p className="text-lg text-gray-700">
          Help us create a more sustainable and resilient future through impactful projects.
        </p>
        <Button className="bg-green-600 text-white px-10 py-4 rounded-full hover:bg-green-700 transition-colors">
          Get Involved
        </Button>
      </section>
    </div>
  );
};

export default Project;
