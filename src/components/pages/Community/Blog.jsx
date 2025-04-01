import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogPost = ({ post }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Calendar className="w-4 h-4 mr-2" />
        {post.date}
        <Clock className="w-4 h-4 ml-4 mr-2" />
        {post.readTime}
      </div>
      <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-3">
        {post.category}
      </span>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.summary}</p>
      <button className="flex items-center text-blue-600 hover:text-blue-700">
        Read More <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  </div>
);

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Latest Technology Updates",
      date: "January 25, 2025",
      readTime: "5 min read",
      category: "Technology",
      summary:
        "Exploring the latest advancements in blockchain technology and their impact on the ecosystem.",
      image: "/api/placeholder/800/400",
    },
    {
      title: "Community Highlights",
      date: "January 23, 2025",
      readTime: "4 min read",
      category: "Community",
      summary:
        "Celebrating the achievements and contributions of our growing community.",
      image: "/api/placeholder/800/400",
    },
    {
      title: "Development Updates",
      date: "January 20, 2025",
      readTime: "6 min read",
      category: "Development",
      summary:
        "Recent improvements and upcoming features in the Dharitri ecosystem.",
      image: "/api/placeholder/800/400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mt-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Dharitri Blog
          </h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest news and developments from the Dharitri
            ecosystem
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPost key={index} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Technology", "Development", "Community", "Research"].map(
              (category, index) => (
                <button
                  key={index}
                  className="p-4 text-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
