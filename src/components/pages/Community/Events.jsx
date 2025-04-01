import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Dharitri Developer Conference",
      date: "March 15, 2025",
      location: "India",
      type: "Conference",
      time: "9:00 AM - 6:00 PM",
      description:
        "Join us for the largest Dharitri ecosystem event of the year. Connect with developers, learn about the latest updates, and explore new opportunities.",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Rewa Blockchain Summit",
      date: "April 5, 2025",
      location: "India",
      type: "Summit",
      time: "10:00 AM - 5:00 PM",
      description:
        "An exclusive summit focusing on the future of Rewa blockchain technology and its applications across industries.",
      image: "/api/placeholder/600/400",
    },
  ];

  const pastEvents = [
    {
      title: "Dharitri Developers Meetup",
      date: "January 20, 2025",
      location: "India",
      type: "Meetup",
      time: "2:00 PM - 5:00 PM",
      description:
        "A community meetup for Dharitri developers to share knowledge and experiences.",
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 mt-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Dharitri Events
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join us at our upcoming events and become part of the growing
              Dharitri ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-600 mt-4">{event.description}</p>
                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-600 mt-4">{event.description}</p>
                    <button className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
