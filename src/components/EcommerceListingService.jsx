"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  TrendingUp,
  Globe,
  BarChart2,
  Users,
  Star,
  CheckCircle,
  Package,
  DollarSign,
  Zap,
  Target,
  Shield,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ArrowRight,
  Trophy
} from "lucide-react";
import { motion } from "framer-motion";

const EcommerceListingService = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const platforms = [
    {
      name: "Amazon",
      color: "from-orange-400 to-orange-600",
      description: "World's largest marketplace"
    },
    {
      name: "Flipkart",
      color: "from-blue-500 to-blue-700",
      description: "India's leading e-commerce"
    },
    {
      name: "eBay",
      color: "from-yellow-400 to-red-500",
      description: "Global auction & marketplace"
    },
    {
      name: "Etsy",
      color: "from-orange-500 to-pink-500",
      description: "Handmade & vintage items"
    },
    {
      name: "Myntra",
      color: "from-purple-500 to-pink-500",
      description: "Fashion & lifestyle"
    },
    {
      name: "Shopify",
      color: "from-green-400 to-green-600",
      description: "Independent stores"
    },
    {
      name: "Meesho",
      color: "from-red-400 to-pink-500",
      description: "Social commerce platform"
    },
    {
      name: "IndiaMart",
      color: "from-blue-400 to-indigo-500",
      description: "Leading marketplace"
    }
  ];

  const services = [
    {
      icon: Package,
      title: "Product Listing & Setup",
      description: "Complete product catalog creation with optimized titles, descriptions, and categorization across multiple platforms."
    },
    {
      icon: Star,
      title: "SEO-Optimized Content",
      description: "Keyword-rich product descriptions and titles that improve visibility and ranking on marketplace search results."
    },
    {
      icon: BarChart2,
      title: "Performance Analytics",
      description: "Comprehensive tracking and reporting of product performance, sales metrics, and marketplace insights."
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Maintain brand consistency and protect against unauthorized sellers across all marketplace platforms."
    },
    {
      icon: DollarSign,
      title: "Price Optimization",
      description: "Strategic pricing analysis and optimization to maximize profits while staying competitive."
    },
    {
      icon: Target,
      title: "Advertising Management",
      description: "Sponsored product campaigns and PPC management to boost visibility and drive targeted traffic."
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Sales Volume",
      description: "Expand your reach to millions of customers across multiple platforms simultaneously.",
      stat: "300%+"
    },
    {
      icon: Globe,
      title: "Market Expansion",
      description: "Access new customer segments and geographic markets with platform-specific strategies.",
      stat: "50+"
    },
    {
      icon: Users,
      title: "Customer Base Growth",
      description: "Build a larger, more diverse customer base through multi-platform presence.",
      stat: "10x"
    },
    {
      icon: Zap,
      title: "Faster Time to Market",
      description: "Launch products quickly across all major platforms with our streamlined process.",
      stat: "72hrs"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Product Analysis",
      description: "We analyze your products, target audience, and competitive landscape to identify the best platforms and strategies."
    },
    {
      number: "02",
      title: "Platform Selection",
      description: "Strategic selection of optimal e-commerce platforms based on your product category and target market."
    },
    {
      number: "03",
      title: "Content Creation",
      description: "Professional product listings with high-quality descriptions, keywords, and platform-specific optimizations."
    },
    {
      number: "04",
      title: "Launch & Optimize",
      description: "Product launch across selected platforms with continuous monitoring and optimization for maximum performance."
    },
    {
      number: "05",
      title: "Scale & Grow",
      description: "Ongoing management, expansion to additional platforms, and scaling strategies based on performance data."
    }
  ];

  const faqs = [
    {
      question: "Which e-commerce platforms do you list products on?",
      answer: "We list products on all major platforms including Amazon, Flipkart, eBay, Etsy, Myntra, Shopify, Meesho, JioMart, and many more. We select the best platforms based on your product category and target audience."
    },
    {
      question: "How long does it take to list products on multiple platforms?",
      answer: "Typically, we can have your products listed on major platforms within 72 hours. The timeline depends on the number of products, platform approval processes, and any specific requirements for your product category."
    },
    {
      question: "Do you handle inventory management across platforms?",
      answer: "Yes, we provide inventory synchronization across all platforms to prevent overselling and ensure accurate stock levels. We also help set up automated inventory management systems."
    },
    {
      question: "What kind of performance tracking do you provide?",
      answer: "We provide comprehensive analytics including sales performance, traffic sources, conversion rates, keyword rankings, and competitor analysis. Monthly reports detail performance across all platforms with actionable insights."
    },
    {
      question: "Can you help with product photography and content creation?",
      answer: "Absolutely! We offer professional product photography, content writing, and graphic design services to ensure your listings stand out and convert better across all platforms."
    },
    {
      question: "How do you ensure my products rank higher in marketplace searches?",
      answer: "We use advanced SEO techniques including keyword research, optimized titles and descriptions, competitive analysis, and strategic use of platform-specific ranking factors to improve your product visibility."
    }
  ];

  const testimonials = [
    {
      quote: "Our sales increased by 400% within 3 months of listing on multiple platforms. The team handled everything professionally!",
      author: "Fashion Retailer",
      rating: 5
    },
    {
      quote: "From zero online presence to selling on 8 major platforms. Excellent service and continuous support throughout the journey.",
      author: "Home Decor Brand",
      rating: 5
    },
    {
      quote: "The listing optimization and advertising management helped us achieve top rankings on Amazon and Flipkart. Highly recommended!",
      author: "Electronics Store",
      rating: 5
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="px-4 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center relative mb-16">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full font-medium shadow-lg">
              <h1>Multi-Platform E-commerce Listing Service</h1>
            </span>
            <h2 className="mt-6 pb-3 text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent md:text-7xl">
              List Your Products Everywhere
            </h2>
            <p className="mt-6 text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
              Professional product listing across Amazon, Flipkart, eBay, Etsy and 50+ marketplaces
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Platforms Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              We List Your Products On
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platforms.map((platform) => (
                <div key={platform.name} className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center">
                  <div className={`bg-gradient-to-r ${platform.color} w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center`}>
                    <ShoppingCart className="text-white w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{platform.name}</h4>
                  <p className="text-gray-600 text-sm">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Maximize Your Reach Across All Major E-commerce Platforms
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  In today's competitive e-commerce landscape, limiting your products to just one platform means missing out on millions of potential customers. Our comprehensive e-commerce listing service helps you establish a strong presence across all major marketplaces, from Amazon and Flipkart to specialized platforms like Etsy and niche marketplaces.
                </p>
                <p className="mb-4">
                  We handle everything from initial product research and competitive analysis to professional listing creation, SEO optimization, and ongoing performance management. Our team understands the unique requirements, algorithms, and best practices for each platform, ensuring your products not only get listed but also rank high and convert well.
                </p>
                <p>
                  With our multi-platform approach, you can diversify your revenue streams, reduce dependency on any single marketplace, and tap into different customer segments. We make it easy for you to scale your business across the digital marketplace ecosystem while you focus on what you do best - creating great products.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Comprehensive Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl w-fit mb-4">
                    <service.icon className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="py-16">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Multi-Platform Listing?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="text-white w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="py-16">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Proven Process
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={step.number} className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div className="py-16">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Trophy className="text-white w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-800">{testimonial.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="py-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h3>
              <p className="text-xl text-gray-600">Everything you need to know about our listing services</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </h4>
                      <div className="flex-shrink-0">
                        {openFaq === index ? (
                          <ChevronUp className="w-6 h-6 text-blue-600 transform transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-blue-600 transform transition-transform duration-300" />
                        )}
                      </div>
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Dominate Every Marketplace?</h2>
              <p className="text-xl mb-8">
                Don't limit your business to just one platform. Let us help you reach millions of customers across all major e-commerce marketplaces. Start your multi-platform journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Start Listing Now</span>
                  </button>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceListingService;