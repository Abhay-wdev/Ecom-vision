"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaSearch, FaChartBar, FaCalendar, FaUser, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const BlogListClient = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  const blogsPerPage = 6;

  // Sync state with URL search params on first render or when they change
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/blogs.json");
        const data = await response.json();
        // Sort blogs by date (newest first)
        const sortedBlogs = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setBlogs(sortedBlogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);
  const endIndex = startIndex + blogsPerPage;

  // Pagination handlers
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of blog section
    window.scrollTo({
      top: document.querySelector(".blog-grid")?.offsetTop - 100 || 0,
      behavior: "smooth",
    });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than or equal to maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show smart pagination
      if (currentPage <= 3) {
        // Show first 5 pages
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        if (totalPages > 5) {
          pages.push("...");
          pages.push(totalPages);
        }
      } else if (currentPage >= totalPages - 2) {
        // Show last 5 pages
        pages.push(1);
        if (totalPages > 5) {
          pages.push("...");
        }
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show pages around current page
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-100">
        <div className="relative mb-6">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 border-4 border-blue-200 opacity-30"></div>
        </div>
        <div className="text-lg font-medium text-gray-700 animate-pulse">Loading amazing content...</div>
      </div>
    );
  }

  const pageNumbers = getPageNumbers();

  // Generate schema for the current page's blogs
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: currentBlogs.map((blog, index) => ({
      "@type": "ListItem",
      position: startIndex + index + 1,
      item: {
        "@type": "BlogPosting",
        headline: blog.heading,
        description: blog.excerpt,
        url: `https://ecomvision.in/blog/${blog.slug}`,
        datePublished: blog.date,
        image: `https://seocialmedia.in${blog.image}`,
        author: {
          "@type": "Person",
          name: blog.author || "VIRAL nexus",
        },
      },
    })),
  };

  const categories = [
    { icon: <FaFacebookF className="text-white text-sm" />, label: "Social Media", color: "from-blue-500 to-cyan-400" },
    { icon: <FaSearch className="text-white text-sm" />, label: "SEO", color: "from-purple-500 to-pink-400" },
    { icon: <FaChartBar className="text-white text-sm" />, label: "Analytics", color: "from-indigo-500 to-sky-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.2,
          }}
        ></div>

        <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-black">
          {/* Glow overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
          {/* Animated shapes */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

          <div className="relative container mx-auto px-6 pt-40 pb-28 text-center">
            {/* Tagline */}
            <div className="inline-flex items-center px-6 py-3 mb-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <span className="text-white text-sm font-medium tracking-wide">
                ✨ Digital Marketing Insights
              </span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full ml-2 animate-pulse"></div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
              Stay ahead of the curve with insights, strategies, and trends in digital marketing,
              SEO, and social media — brought to you by{" "}
              <span className="text-yellow-400 font-semibold">Jaipur's leading marketing experts.</span>
            </p>

            {/* Category Tags */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gradient-to-r ${item.color} shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-blue-100 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Decorative Glow */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-t from-yellow-400/10 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Blog Stats */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="mr-2">📝</span> Latest Articles
            </h2>
            <p className="text-gray-600 mt-1">
              Showing {startIndex + 1}-{Math.min(endIndex, blogs.length)} of{" "}
              {blogs.length} articles
            </p>
          </div>
          <div className="flex items-center px-4 py-2 bg-blue-50 rounded-xl">
            <span className="text-sm font-medium text-blue-700">
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="blog-grid container mx-auto px-4 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/30"
              onMouseEnter={() => setHoveredCard(blog.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link href={`/blog/${blog.slug}`} className="block relative">
                <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                  <Image
                    src={blog.image || "/images/placeholder.jpg"}
                    alt={blog.alt || blog.heading}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-4 right-4 z-20 transition-opacity duration-300 ${hoveredCard === blog.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-block px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {blog.category || 'Marketing'}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-7">
                <div className="flex items-center text-sm text-blue-600 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 shadow-md">
                    <span className="text-white text-xs font-bold"> 
                      {blog.author
                        ?.split(" ")
                        .slice(0, 2)
                        .map(word => word[0])
                        .join("")
                        .toUpperCase()} 
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{blog.author}</div>
                    <div className="flex items-center text-gray-500 text-xs mt-1">
                      <FaCalendar className="mr-1" />
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>

                <Link href={`/blog/${blog.slug}`} className="block">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300 leading-tight group-hover:text-blue-600">
                    {blog.heading}
                  </h2>
                </Link>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags &&
                    blog.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1.5 rounded-full border border-blue-200/50 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                </div>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Read Full Article
                  <FaArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
              <nav className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={goToPrevious}
                  disabled={currentPage === 1}
                  className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed bg-gray-100"
                      : "text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <FaArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-1">
                  {getPageNumbers().map((page, index) => (
                    <React.Fragment key={index}>
                      {page === "..." ? (
                        <span className="px-3 py-2 text-gray-400">...</span>
                      ) : (
                        <button
                          onClick={() => goToPage(page)}
                          className={`w-10 h-10 rounded-xl font-medium transition-all duration-300 ${
                            currentPage === page
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                        >
                          {page}
                        </button>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={goToNext}
                  disabled={currentPage === totalPages}
                  className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed bg-gray-100"
                      : "text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  Next
                  <FaArrowRight className="w-4 h-4 ml-2" />
                </button>
              </nav>
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                opacity: 0.3,
              }}
            ></div>
            
            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Boost Your Digital Presence?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Get expert digital marketing solutions tailored for your
                business. Let's grow your online presence together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ecomvision.in/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  Get Free Consultation
                  <FaArrowRight className="ml-2" />
                </a>
                <a
                  href="https://ecomvision.in/services"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListClient;