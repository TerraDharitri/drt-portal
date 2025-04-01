import React from "react";
import CountUp from "react-countup";
import { Card, CardContent } from "../../ui/card";
import Button from "../../ui/button1";

// Sample data for sustainability impact
const data = [
  { name: "Sustainable Farming Projects", value: 50 },
  { name: "Water Saved (liters)", value: 500000000 },
  { name: "Carbon Emissions Reduced (tons)", value: 10000 },
  { name: "Trees Planted", value: 25000 },
  { name: "Communities Impacted", value: 150 },
  { name: "Funds Raised (USD)", value: 3000000 },
];

const Sustainability = () => {
  return (
    <div className="py-4 md:p-8 space-y-24 bg-gradient-to-r from-green-50 to-blue-50">
      {/* Hero Section */}
      <header className="text-center space-y-6">
        <h1 className="text-5xl mt-20 font-bold text-green-800">Sustainability at Dhairitri</h1>
        <p className="text-lg max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <strong>
            Building a greener future through sustainable farming, clean energy, and efficient resource management.
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

      {/* Sustainability Initiatives */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-800">Our Sustainability Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Regenerative Agriculture</h3>
            <p className="text-gray-700">
              We empower farmers to adopt regenerative techniques, enriching soil fertility and improving crop resilience.
            </p>
          </Card>
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Water Conservation</h3>
            <p className="text-gray-700">
              Rainwater harvesting and smart irrigation systems help in reducing water wastage and improving efficiency.
            </p>
          </Card>
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Renewable Energy</h3>
            <p className="text-gray-700">
              Implementing solar-powered irrigation and bio-energy solutions to promote sustainable energy in agriculture.
            </p>
          </Card>
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Community Engagement</h3>
            <p className="text-gray-700">
              We engage with local communities to spread awareness and encourage participation in sustainable practices.
            </p>
          </Card>
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Biodiversity Conservation</h3>
            <p className="text-gray-700">
              Protecting and restoring local ecosystems to support biodiversity and enhance natural habitats.
            </p>
          </Card>
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Education and Training</h3>
            <p className="text-gray-700">
              Providing educational resources and training programs to equip farmers with the latest sustainable techniques.
            </p>
          </Card>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-800">Our Sustainability Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Zero Waste by 2030</h3>
            <p className="text-gray-700">
              Aiming to achieve zero waste in our operations and projects by the year 2030.
            </p>
          </Card>
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Carbon Neutrality</h3>
            <p className="text-gray-700">
              Striving to become carbon neutral through efficient energy use and carbon offsetting initiatives.
            </p>
          </Card>
          <Card className="p-8 shadow-md text-center hover:shadow-lg bg-white rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Increase Biodiversity</h3>
            <p className="text-gray-700">
              Implementing strategies to increase biodiversity in agricultural landscapes.
            </p>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-green-100 p-16 rounded-lg shadow-lg space-y-10">
        <h2 className="text-4xl font-bold text-green-800">Be a Part of Change</h2>
        <p className="text-lg text-gray-700">
          Join us in our mission to make agriculture more sustainable and environmentally friendly.
        </p>
        <Button className="bg-green-600 text-white px-10 py-4 rounded-full hover:bg-green-700 transition-colors">
          Get Involved
        </Button>
      </section>
    </div>
  );
};

export default Sustainability;
