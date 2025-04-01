import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { Card, CardContent } from "../../ui/card";
import Button  from "../../ui/button1";
import { 
  ArrowRight, 
  X, 
  Users, 
  Droplets, 
  Leaf,
  ChevronDown,
  ArrowUpRight 
} from "lucide-react";

// Sample data for initiatives
const impactData = [
  { 
    name: "Agroforestry Projects", 
    value: 25, 
    unit: "projects", 
    icon: <Leaf className="w-12 h-12 text-green-500" />,
    change: "+15% from last year"
  },
  { 
    name: "Water Conservation Programs", 
    value: 18, 
    unit: "programs", 
    icon: <Droplets className="w-12 h-12 text-blue-500" />,
    change: "+22% from last year"
  },
  { 
    name: "Organic Farming Workshops", 
    value: 32, 
    unit: "workshops", 
    icon: <Users className="w-12 h-12 text-amber-500" />,
    change: "+28% from last year"
  },
];

const initiatives = [
  {
    id: 1,
    title: "Agroforestry Development",
    description: "Promoting tree-based farming for enhanced biodiversity and income diversification.",
    image: "/api/placeholder/800/500",
    details: "Agroforestry integrates trees with crops and livestock, creating a sustainable and resilient farming system. Our projects have helped over 500 farmers implement these techniques across 12 different communities.",
    stats: [
      { label: "Trees Planted", value: "15,000+" },
      { label: "Farmer Income Increase", value: "32%" },
      { label: "Land Restored", value: "500 acres" }
    ],
    testimonial: {
      quote: "The agroforestry techniques transformed my farm. I now grow more crops while supporting local wildlife.",
      author: "Maria Gonzalez",
      role: "Smallholder Farmer",
      location: "Chiapas Region"
    }
  },
  {
    id: 2,
    title: "Water Conservation Programs",
    description: "Implementing rainwater harvesting and efficient irrigation systems to save water.",
    image: "/api/placeholder/800/500",
    details: "Our water conservation programs focus on reducing water waste and promoting efficient use through innovative collection and distribution systems. We've reduced water consumption by 35% in participating communities.",
    stats: [
      { label: "Water Saved", value: "180M gallons" },
      { label: "Harvest Systems", value: "230+" },
      { label: "Community Wells", value: "45" }
    ],
    testimonial: {
      quote: "The rainwater harvesting system provides clean water even during the dry season, changing our lives completely.",
      author: "Samuel Okafor",
      role: "Community Leader",
      location: "Eastern Province"
    }
  },
  {
    id: 3,
    title: "Organic Farming Workshops",
    description: "Educating farmers on pesticide-free and sustainable farming methods.",
    image: "/api/placeholder/800/500",
    details: "Workshops cover topics such as composting, natural pest control, crop rotation, and organic certification. Our programs have helped farmers reduce chemical inputs by 75% while increasing yields.",
    stats: [
      { label: "Farmers Trained", value: "2,400+" },
      { label: "Chemical Reduction", value: "75%" },
      { label: "Yield Increase", value: "28%" }
    ],
    testimonial: {
      quote: "I've eliminated pesticides completely and my crops are healthier than ever. The workshops changed everything I knew about farming.",
      author: "Priya Sharma",
      role: "Organic Farmer",
      location: "Karnataka Region"
    }
  },
];

const testimonials = [
  {
    quote: "This initiative has transformed our community and brought us closer to nature. We're seeing wildlife return to areas that were barren just three years ago.",
    author: "Elena Martinez",
    role: "Community Organizer",
    image: "/api/placeholder/100/100"
  },
  {
    quote: "The training we received helped us increase our crop yield while using less water. Our families are healthier and our income has doubled.",
    author: "Daniel Kimani",
    role: "Small-scale Farmer",
    image: "/api/placeholder/100/100"
  },
  {
    quote: "Working with this organization has been life-changing. The sustainable techniques we learned have spread throughout our entire village.",
    author: "Leila Nguyen",
    role: "Cooperative Leader",
    image: "/api/placeholder/100/100"
  },
];

const Initiatives = () => {
  const [selectedInitiative, setSelectedInitiative] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    // Auto-rotate testimonials every 6 seconds
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const openModal = (initiative) => {
    setSelectedInitiative(initiative);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="py-8 md:py-16 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <h1 className="mt-20 text-5xl md:text-6xl font-bold tracking-tight text-gray-800">
          Our <span className="text-green-600">Initiatives</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Empowering communities with sustainable projects to restore the environment and improve livelihoods.
        </p>
        <div className="flex justify-center gap-4 pt-6">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-lg font-semibold flex items-center gap-2">
            Get Involved <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="border-2 border-gray-300 hover:border-gray-400 px-8 py-6 rounded-full text-lg font-semibold">
            Learn More
          </Button>
        </div>
      </motion.header>

      {/* Impact Statistics */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Global Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactData.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 rounded-full bg-gray-50">{item.icon}</div>
                <span className="text-sm font-medium text-green-600 flex items-center">
                  {item.change} <ArrowUpRight className="w-4 h-4 ml-1" />
                </span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <div className="flex items-baseline">
                  <CountUp 
                    end={item.value} 
                    duration={2.5} 
                    separator="," 
                    className="text-4xl font-bold text-gray-900" 
                  />
                  <span className="ml-2 text-lg text-gray-500">{item.unit}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Initiatives Gallery */}
      <section className="space-y-12">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Current Initiatives</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our ongoing projects focused on sustainable development and environmental restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {initiatives.map((initiative, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={initiative.id}
              className="group"
            >
              <Card className="overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">{initiative.title}</h3>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6">{initiative.description}</p>
                  <Button 
                    onClick={() => openModal(initiative)}
                    className="w-full  text-green-600 border border-green-200 hover:bg-green-50 font-medium flex items-center justify-between"
                  >
                    <span>Learn more</span>
                    <ChevronDown className="w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section with carousel */}
      <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-green-600 text-white p-8 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Testimonials</h2>
        
        <div className="relative overflow-hidden h-80">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              index === activeTestimonial && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="flex flex-col items-center text-center max-w-3xl mx-auto h-full justify-center">
                    <div className="mb-6 w-20 h-20 rounded-full overflow-hidden border-4 border-white/30">
                      <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xl md:text-2xl italic mb-6">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold text-xl">{testimonial.author}</p>
                      <p className="text-white/80">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial ? 'bg-white w-10' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-blue-900/90 z-10" />
        
        <img 
          src="/api/placeholder/1200/600" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 p-10 md:p-16 text-white text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Join Our Movement Today</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Together we can create lasting change for communities and ecosystems around the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button className=" text-green-800 hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-semibold">
              Donate Now
            </Button>
            <Button className="  text-white px-8 py-6 rounded-full text-lg font-semibold">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Initiative Detail Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full z-10 hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="h-72 sm:h-96 relative">
                <img
                  src={selectedInitiative?.image}
                  alt={selectedInitiative?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedInitiative?.title}</h2>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-lg text-gray-700 mb-8">{selectedInitiative?.details}</p>
                
                <h3 className="text-xl font-semibold mb-4">Impact Statistics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {selectedInitiative?.stats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-green-600">{stat.value}</p>
                      <p className="text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <p className="text-lg italic mb-4">"{selectedInitiative?.testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{selectedInitiative?.testimonial.author}</p>
                    <p className="text-sm text-gray-600">{selectedInitiative?.testimonial.role}, {selectedInitiative?.testimonial.location}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
                    Support This Initiative
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Initiatives;