'use client';
import React, { useState, useRef, useEffect } from 'react';
import {
  RocketLaunchIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  BuildingStorefrontIcon,
  TruckIcon,
  StarIcon,
  ChartPieIcon,
  CheckCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';
import Image from 'next/image';

const FlipkartManagementSolution = () => {
  const [expandedService, setExpandedService] = useState(null);
  const detailSectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Seller Account Setup & Optimization",
      icon: RocketLaunchIcon,
      color: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      features: [
        "Seller account registration & verification",
        "Business/tax setup & KYC completion",
        "Professional storefront design",
        "Listing approval & compliance check"
      ],
      description:
        "Launch your Flipkart seller account with ease. We handle setup, documentation, and configuration to get you selling quickly.",
      benefits: [
        "Faster account approval",
        "Optimized business profile from day one",
        "Avoid listing rejections or policy issues",
        "Seamless onboarding support"
      ]
    },
    {
      id: 2,
      title: "Product Listing & Optimization",
      icon: ShoppingCartIcon,
      color: "bg-indigo-50",
      hoverColor: "hover:bg-indigo-100",
      features: [
        "SEO-optimized titles & descriptions",
        "High-quality image optimization",
        "Category & attribute mapping",
        "A+ content & Flipkart guidelines compliance"
      ],
      description:
        "Make your products stand out with optimized listings that rank higher and convert better.",
      benefits: [
        "Boost visibility in Flipkart search results",
        "Enhance brand image with clear product pages",
        "Improve conversion rate",
        "Reduce listing errors"
      ]
    },
    {
      id: 3,
      title: "Flipkart SEO & Keyword Boost",
      icon: MagnifyingGlassIcon,
      color: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      features: [
        "Product keyword analysis",
        "Category-based SEO strategy",
        "Performance tracking",
        "Competitor listing analysis"
      ],
      description:
        "Stay ahead of competitors with Flipkart-specific keyword strategies to maximize your product reach.",
      benefits: [
        "Better organic visibility",
        "Steady growth in impressions",
        "High-ranking listings",
        "Sustained traffic with less ad spend"
      ]
    },
    {
      id: 4,
      title: "Flipkart Ads (PPC) Management",
      icon: ChartBarIcon,
      color: "bg-pink-50",
      hoverColor: "hover:bg-pink-100",
      features: [
        "Sponsored product campaign setup",
        "Bid & keyword optimization",
        "Ad performance tracking",
        "Budget optimization"
      ],
      description:
        "Drive sales through efficient PPC campaigns tailored for Flipkart’s ad platform.",
      benefits: [
        "Maximize ROI through smart targeting",
        "Eliminate wasted ad spend",
        "Increase sales at lower cost",
        "Gain real-time performance insights"
      ]
    },
    {
      id: 5,
      title: "Brand Store & Visual Design",
      icon: BuildingStorefrontIcon,
      color: "bg-rose-50",
      hoverColor: "hover:bg-rose-100",
      features: [
        "Custom Flipkart brand store setup",
        "Mobile-first layout design",
        "Banner & video content integration",
        "Brand consistency optimization"
      ],
      description:
        "Create a visually engaging Flipkart store that builds brand trust and converts visitors into loyal customers.",
      benefits: [
        "Enhance your brand’s digital identity",
        "Drive higher engagement",
        "Boost repeat purchases",
        "Improve buyer trust and retention"
      ]
    },
    {
      id: 6,
      title: "Order & Inventory Management",
      icon: TruckIcon,
      color: "bg-amber-50",
      hoverColor: "hover:bg-amber-100",
      features: [
        "Automated order tracking",
        "Stock level monitoring",
        "Dispatch & delivery management",
        "Return handling & resolution"
      ],
      description:
        "Streamline logistics, manage orders, and ensure seamless fulfillment for a smooth customer experience.",
      benefits: [
        "Prevent stockouts",
        "Improve on-time delivery rates",
        "Reduce operational workload",
        "Increase positive customer reviews"
      ]
    },
    {
      id: 7,
      title: "Ratings & Review Management",
      icon: StarIcon,
      color: "bg-emerald-50",
      hoverColor: "hover:bg-emerald-100",
      features: [
        "Automated review monitoring",
        "Customer feedback response system",
        "Negative rating management",
        "Reputation improvement plan"
      ],
      description:
        "Build and maintain a positive seller reputation with effective review management and ethical engagement.",
      benefits: [
        "Higher product ratings",
        "Increased customer trust",
        "Faster dispute resolution",
        "Improved brand image"
      ]
    },
    {
      id: 8,
      title: "Analytics & Performance Insights",
      icon: ChartPieIcon,
      color: "bg-cyan-50",
      hoverColor: "hover:bg-cyan-100",
      features: [
        "Sales & conversion reports",
        "Revenue tracking dashboard",
        "Pricing & margin analysis",
        "Data-driven recommendations"
      ],
      description:
        "Turn analytics into action with detailed Flipkart insights for better decisions and sustained growth.",
      benefits: [
        "Identify best-selling products",
        "Optimize pricing strategies",
        "Spot growth opportunities early",
        "Enhance long-term profitability"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is Flipkart Account Management?",
      answer:
        "Flipkart Account Management helps sellers optimize their Flipkart store performance, including account setup, product listings, SEO, ads, and analytics to boost sales and visibility."
    },
    {
      question: "Do you provide PPC ad management for Flipkart?",
      answer:
        "Yes! We handle complete Flipkart Ads setup, targeting, and optimization to improve sales while maintaining a healthy ROI."
    },
    {
      question: "Can you design a Flipkart brand store?",
      answer:
        "Absolutely. We create custom brand stores that reflect your identity, highlight your catalog, and enhance buyer experience."
    },
    {
      question: "How do I start with your Flipkart management services?",
      answer:
        "Simply reach out via our contact page. We’ll audit your Flipkart account and create a tailored strategy to grow your sales."
    }
  ];

  // Scroll to details on expansion
  useEffect(() => {
    if (expandedService && detailSectionRef.current) {
      setTimeout(() => {
        detailSectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [expandedService]);

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      {/* Flipkart Logo Centered */}
      <div className="flex justify-center mb-10">
       <div className="bg-[#e5e6ed] rounded-2xl p-4 flex justify-center items-center w-[150px] h-[80px]">
  <Image
    src="/images/Ecom/flipkart.webp"
    alt="Flipkart Management"
    width={150}
    height={80}
    className="object-contain"
  />
</div>

      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
       <div className="text-center mb-16 px-4">
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
      <RocketLaunchIcon className="h-6 w-6 text-white" />
    </div>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug text-center md:text-left">
      Flipkart Seller Account Management Solution
    </h1>
  </div>

  <p className="text-base sm:text-lg text-gray-700 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
    End-to-end Flipkart management services to grow your business with better visibility, sales, and operational control.
  </p>
</div>


        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.color} ${service.hoverColor} rounded-2xl p-6 shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                  <service.icon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-2 mb-4">
                {service.features.slice(0, 2).map((f, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => toggleService(service.id)}
                className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
              >
                {expandedService === service.id ? "Show less" : "Learn more"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform ${
                    expandedService === service.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Expanded Details */}
        {expandedService && (
          <div
            ref={detailSectionRef}
            className="bg-white rounded-2xl shadow-xl p-8 mb-16 transition-all duration-500"
          >
            {services
              .filter((s) => s.id === expandedService)
              .map((service) => (
                <div key={service.id} className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
                    <div
                      className={`${service.color} rounded-2xl p-8 flex flex-col items-center justify-center h-full`}
                    >
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
                        <service.icon className="h-12 w-12 text-gray-700" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 text-center">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6 text-lg">
                      {service.description}
                    </p>

                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-3 mt-0.5" />
                          <span className="text-gray-700">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Benefits
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                          <span className="text-gray-700">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                      <Link href="/contact">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center transition-colors duration-300">
                          <RocketLaunchIcon className="h-5 w-5 mr-2" />
                          Get Started with This Service
                        </button>
                      </Link>
                      <button
                        onClick={() => setExpandedService(null)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg flex items-center transition-colors duration-300"
                      >
                        <XMarkIcon className="h-5 w-5 mr-2" />
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Navigation Icons */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center p-2 gap-2 sm:gap-3 rounded-md shadow-sm bg-white">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                className={`flex items-center justify-center px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  expandedService === service.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => toggleService(service.id)}
              >
                <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title="Flipkart Seller FAQs"
        description="Find answers to the most common Flipkart management questions."
      />
    </div>
  );
};

export default FlipkartManagementSolution;
