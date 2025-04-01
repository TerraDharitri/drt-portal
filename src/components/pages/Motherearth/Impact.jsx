import React from "react";
import CountUp from "react-countup";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card, CardContent } from "../../ui/card";
import Button from "../../ui/button1";

// Sample data
const data = [
  { name: "Farmers Helped", value: 1200 },
  { name: "Land Restored (acres)", value: 850 },
  { name: "CO₂ Emissions Reduced (tons)", value: 4300 },
];

const testimonials = [
  {
    name: "Ramesh Kumar",
    story:
      "With Dhairitri's help, I was able to switch to sustainable farming, increasing my crop yield by 30%.",
    image: "ramesh.jpg",
  },
  {
    name: "Asha Devi",
    story:
      "Thanks to Dhairitri's AI recommendations, I learned water-saving techniques that helped my village during drought.",
    image: "asha.jpg",
  },
  {
    name: "Mohammed Irfan",
    story:
      "The platform helped me sell my organic produce directly to consumers, increasing my income.",
    image: "mohammed.jpg",
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Impact = () => {
  return (
    <div className="py-4 md:p-8 space-y-24">
      {/* Hero Section */}
      <header className="text-center space-y-6">
        <h1 className="text-5xl mt-20 font-bold">Our Impact</h1>
        <p className="text-lg max-w-3xl mx-auto bg-yellow-100 p-6 rounded-lg">
          <strong>Empowering farmers, restoring lands, and reducing carbon emissions—together we are shaping a sustainable future.</strong>
        </p>
      </header>

      {/* Metrics Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {data.map((item, index) => (
          <Card key={index} className="shadow-lg p-8 transition-transform transform hover:scale-105">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-6">{item.name}</h2>
              <CountUp
                end={item.value}
                duration={3}
                separator="," 
                className="text-4xl font-bold text-green-600"
              />
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Success Stories Section */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold text-center mb-8">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 shadow-md flex flex-col items-center space-y-6 transition-transform transform hover:scale-105">
              <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-24 h-24 object-cover" />
              <CardContent className="text-center">
                <p className="italic text-lg">"{testimonial.story}"</p>
                <h3 className="font-semibold mt-4">- {testimonial.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact Distribution Section */}
      <section className="text-center space-y-10">
  <h2 className="text-4xl font-bold mb-8">Impact Distribution</h2>
  <div className="flex justify-center">
    <PieChart width={390} height={420}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
</section>


      {/* Call to Action Section */}
      <section className="text-center bg-green-100 p-16 rounded-lg shadow-lg space-y-10">
        <h2 className="text-4xl font-bold">Join the Movement</h2>
        <p className="text-lg">
          Be a part of the sustainable revolution. Help us drive positive change for farmers and the environment.
        </p>
        <Button className="bg-green-600 text-white px-10 py-4 rounded-full transition-colors hover:bg-green-700">
          Get Involved
        </Button>
      </section>

      {/* Additional Content Section */}
      <section className="text-center space-y-8">
        <h2 className="text-4xl font-bold">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto">
          At Dhairitri, our mission is to create a sustainable future by empowering farmers with the tools and knowledge they need to adopt eco-friendly practices. We believe that by working together, we can restore our lands, reduce carbon emissions, and build a healthier planet for future generations.
        </p>
      </section>

      {/* Social Sharing Section */}
      <section className="text-center space-y-8">
        <h2 className="text-4xl font-bold">Share Our Impact</h2>
        <div className="flex justify-center space-x-8">
          {/* Add social sharing buttons here */}
          <Button aria-label="Share on Facebook">Facebook</Button>
          <Button aria-label="Share on Twitter">Twitter</Button>
          <Button aria-label="Share on LinkedIn">LinkedIn</Button>
        </div>
      </section>
    </div>
  );
};

export default Impact;