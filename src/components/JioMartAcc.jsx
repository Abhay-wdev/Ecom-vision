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

const JioMartManagementSolution = () => {
  const [expandedService, setExpandedService] = useState(null);
  const detailSectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Account Setup & Verification",
      icon: RocketLaunchIcon,
      color: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
      features: [
        "Complete JioMart seller registration & KYC",
        "GST & tax compliance setup",
        "Storefront setup with branding guidelines"
      ],
      description: "Get your JioMart seller account approved quickly with our end-to-end setup and verification service. Avoid delays and listing errors with professional support.",
      benefits: [
        "Fast approval and account activation",
        "Error-free registration with compliance",
        "Professional storefront that attracts customers"
      ]
    },
    {
      id: 2,
      title: "Product Listing & Optimization",
      icon: ShoppingCartIcon,
      color: "bg-indigo-100",
      hoverColor: "hover:bg-indigo-200",
      features: [
        "SEO-friendly product titles & descriptions",
        "High-resolution image uploads & editing",
        "Category mapping & catalog structuring",
        "Bulk listing & variant management"
      ],
      description: "Optimize your product listings to rank higher on JioMart search results and increase conversions.",
      benefits: [
        "Improve product discoverability",
        "Enhance brand visibility",
        "Higher sales with well-structured listings"
      ]
    },
    {
      id: 3,
      title: "JioMart SEO & Keyword Strategy",
      icon: MagnifyingGlassIcon,
      color: "bg-purple-100",
      hoverColor: "hover:bg-purple-200",
      features: [
        "Keyword research for your product category",
        "Backend search term optimization",
        "Competitor analysis and tracking",
        "Performance monitoring & reporting"
      ],
      description: "Boost your organic traffic and get your products in front of more buyers using our tailored JioMart SEO strategies.",
      benefits: [
        "Rank higher for high-intent keywords",
        "Maximize visibility on JioMart search",
        "Stay ahead of competitors"
      ]
    },
    {
      id: 4,
      title: "Advertising & Promotions",
      icon: ChartBarIcon,
      color: "bg-pink-100",
      hoverColor: "hover:bg-pink-200",
      features: [
        "Sponsored product campaigns & banner ads",
        "Seasonal promotions & discounts",
        "Ad performance tracking and optimization"
      ],
      description: "Drive sales with targeted campaigns designed to maximize ROI on JioMart’s platform.",
      benefits: [
        "Reduce wasted ad spend",
        "Increase sales efficiently",
        "Track campaign performance in real-time"
      ]
    },
    {
      id: 5,
      title: "Brand Store & Enhanced Content",
      icon: BuildingStorefrontIcon,
      color: "bg-rose-100",
      hoverColor: "hover:bg-rose-200",
      features: [
        "Custom multi-page store design",
        "Product showcase banners and videos",
        "Mobile-optimized layouts"
      ],
      description: "Create a professional brand experience that enhances customer trust and boosts conversions.",
      benefits: [
        "Increase brand credibility",
        "Showcase your complete catalog",
        "Improve repeat purchase rates"
      ]
    },
    {
      id: 6,
      title: "Order & Inventory Management",
      icon: TruckIcon,
      color: "bg-amber-100",
      hoverColor: "hover:bg-amber-200",
      features: [
        "Real-time stock monitoring",
        "Automated order processing",
        "Return handling & replacement management"
      ],
      description: "Simplify operations and keep your stock levels optimized to meet customer demand.",
      benefits: [
        "Avoid stockouts and overstock",
        "Faster fulfillment and shipping",
        "Higher customer satisfaction"
      ]
    },
    {
      id: 7,
      title: "Ratings & Review Management",
      icon: StarIcon,
      color: "bg-emerald-100",
      hoverColor: "hover:bg-emerald-200",
      features: [
        "Monitor customer feedback & ratings",
        "Ethical response strategies to reviews",
        "Negative feedback resolution"
      ],
      description: "Protect and enhance your JioMart reputation with proactive review management.",
      benefits: [
        "Higher product ratings",
        "Increased trust & social proof",
        "Better conversion and retention"
      ]
    },
    {
      id: 8,
      title: "Analytics & Performance Reporting",
      icon: ChartPieIcon,
      color: "bg-cyan-100",
      hoverColor: "hover:bg-cyan-200",
      features: [
        "Sales & traffic reports",
        "Revenue and margin analysis",
        "Actionable growth recommendations"
      ],
      description: "Make data-driven decisions with detailed insights into your JioMart business performance.",
      benefits: [
        "Identify top-performing products",
        "Optimize pricing and promotions",
        "Plan future growth strategies"
      ]
    }
  ];

  const otherFaqs = [
    {
      question: "What is JioMart Seller Management?",
      answer: "A comprehensive service to manage your JioMart store including listings, ads, inventory, SEO, and analytics to drive sales.",
    },
    {
      question: "How do I start selling on JioMart?",
      answer: "Contact our team for an account audit. We’ll set up your store and prepare a personalized growth strategy.",
    },
    {
      question: "Do you manage product listings and SEO?",
      answer: "Yes, we create optimized listings, perform keyword research, and enhance product pages to boost visibility.",
    },
    {
      question: "Do you handle JioMart advertising campaigns?",
      answer: "Absolutely. We manage sponsored ads, promotions, and seasonal campaigns for maximum ROI.",
    },
    {
      question: "Can you help with inventory & order management?",
      answer: "Yes, we track stock, automate orders, and manage returns to ensure smooth operations.",
    },
    {
      question: "Do you provide performance reports?",
      answer: "Yes, we give detailed reports covering sales, traffic, keyword performance, and ad spend.",
    },
    {
      question: "Why choose us for JioMart?",
      answer: "Experienced team, end-to-end support, proven strategies, and transparent reporting ensure your JioMart success.",
    }
  ];

  useEffect(() => {
    if (expandedService && detailSectionRef.current) {
      setTimeout(() => {
        detailSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [expandedService]);

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
     <div className="flex items-center justify-center mb-12">
  <div className="bg-[#fff4e6] rounded-2xl p-4 shadow-md flex justify-center items-center w-[150px] h-[80px]">
    <Image
      src="/images/Ecom/jiomart.webp"
      alt="JioMart Management"
      width={120}
      height={50}
      className="object-contain"
    />
  </div>
</div>


      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
      <div className="text-center mb-16 px-4">
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
      <RocketLaunchIcon className="h-6 w-6 text-white" />
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug text-center md:text-left">
      Our Complete JioMart Management Solution
    </h2>
  </div>

  <p className="text-base sm:text-lg text-gray-700 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
    End-to-end services to optimize every aspect of your JioMart store, increase visibility, and drive sustainable growth.
  </p>
</div>


        {/* Service Cards Grid */}
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
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {service.features.slice(0, 2).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => toggleService(service.id)}
                className="text-orange-600 font-medium flex items-center hover:text-orange-800 transition-colors"
              >
                {expandedService === service.id ? "Show less" : "Learn more"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform ${expandedService === service.id ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Expanded Service Details */}
        {expandedService && (
          <div
            ref={detailSectionRef}
            className="bg-white rounded-2xl shadow-xl p-8 mb-16 transition-all duration-500"
          >
            {services
              .filter((service) => service.id === expandedService)
              .map((service) => (
                <div key={service.id} className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
                    <div className={`${service.color} rounded-2xl p-8 flex flex-col items-center justify-center h-full`}>
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
                        <service.icon className="h-12 w-12 text-gray-700" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 text-center">{service.title}</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h4>
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4">
                      <Link href="/contact">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center">
                          <RocketLaunchIcon className="h-5 w-5 mr-2" />
                          Get Started with This Service
                        </button>
                      </Link>
                      <button
                        onClick={() => setExpandedService(null)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center"
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

        {/* Service Navigation */}
        <div className="flex justify-center px-2 mb-16">
          <div className="flex flex-wrap justify-center rounded-md shadow-sm p-2 gap-2 sm:gap-3" role="group">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                className={`flex items-center justify-center px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  expandedService === service.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
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
        faqs={otherFaqs} 
        title="Common Questions" 
        description="Answers to our most frequently asked questions" 
      />
    </div>
  );
};

export default JioMartManagementSolution;
