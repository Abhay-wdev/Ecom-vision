'use client';
import React, { useState, useRef, useEffect } from 'react';
import { 
  RocketLaunchIcon, 
  ShoppingCartIcon, 
  MagnifyingGlassIcon, 
  ChartBarIcon, 
  BuildingStorefrontIcon, // Changed from StorefrontIcon
  TruckIcon, 
  StarIcon, 
  ChartPieIcon,
  CheckCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';
import Image from 'next/image';
 

const AmazonManagementSolution = () => {
  const [expandedService, setExpandedService] = useState(null);
  const detailSectionRef = useRef(null);
  
  const services = [
    {
      id: 1,
      title: "Account Setup & Optimization",
      icon: RocketLaunchIcon,
      color: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
      features: [
        "Full Seller/Vendor account creation & verification",
        "Business/tax/payment configuration",
        "Professional branding & storefront setup",
        "Policy compliance guarantee"
      ],
      description: "Get your Amazon business started right with our comprehensive account setup service. We handle all the technical details so you can focus on your products.",
      benefits: [
        "Fast-track your account approval process",
        "Avoid common setup mistakes that can lead to suspensions",
        "Establish professional branding from day one",
        "Ensure compliance with Amazon's complex policies"
      ]
    },
    {
      id: 2,
      title: "Product Listing & Catalog",
      icon: ShoppingCartIcon,
      color: "bg-indigo-100",
      hoverColor: "hover:bg-indigo-200",
      features: [
        "SEO-optimized titles, bullets & descriptions",
        "Amazon-compliant image optimization",
        "Variation family management",
        "A+ Content & Enhanced Brand Content"
      ],
      description: "Transform your product listings into conversion powerhouses with our expert catalog management services.",
      benefits: [
        "Increase visibility with Amazon's A9 algorithm",
        "Improve conversion rates with persuasive copy",
        "Showcase products with professional imagery",
        "Build brand trust with Enhanced Brand Content"
      ]
    },
    {
      id: 3,
      title: "Amazon SEO Mastery",
      icon: MagnifyingGlassIcon,
      color: "bg-purple-100",
      hoverColor: "hover:bg-purple-200",
      features: [
        "Category-specific keyword research",
        "Backend search term optimization",
        "Ranking performance tracking",
        "Competitor keyword analysis"
      ],
      description: "Dominate search results with our advanced Amazon SEO strategies tailored to your product category.",
      benefits: [
        "Rank higher for high-intent keywords",
        "Increase organic traffic without additional ad spend",
        "Stay ahead of competitors with continuous optimization",
        "Maximize visibility during peak shopping seasons"
      ]
    },
    {
      id: 4,
      title: "Amazon Advertising (PPC)",
      icon: ChartBarIcon,
      color: "bg-pink-100",
      hoverColor: "hover:bg-pink-200",
      features: [
        "Sponsored Products/Brands/Displays campaigns",
        "AI-powered bid management",
        "A/B testing for ad creatives",
        "ROAS-focused budget allocation"
      ],
      description: "Maximize your advertising ROI with our data-driven PPC management and optimization strategies.",
      benefits: [
        "Reduce wasted ad spend with intelligent targeting",
        "Increase sales with optimized campaign structures",
        "Scale your advertising budget profitably",
        "Gain competitive advantage with advanced strategies"
      ]
    },
    {
      id: 5,
      title: "Brand Store & A+ Content",
      icon: BuildingStorefrontIcon, // Changed from StorefrontIcon
      color: "bg-rose-100",
      hoverColor: "hover:bg-rose-200",
      features: [
        "Custom multi-page brand stores",
        "Conversion-focused A+ modules",
        "Mobile-optimized layouts",
        "Video & interactive content"
      ],
      description: "Create a premium brand experience on Amazon with custom stores and enhanced content that converts.",
      benefits: [
        "Increase brand credibility and trust",
        "Showcase your complete product lineup",
        "Improve conversion rates with rich media",
        "Create a consistent brand experience across Amazon"
      ]
    },
    {
      id: 6,
      title: "Order & Inventory Control",
      icon: TruckIcon,
      color: "bg-amber-100",
      hoverColor: "hover:bg-amber-200",
      features: [
        "24/7 order processing monitoring",
        "Stock level forecasting",
        "FBA shipment automation",
        "Returns processing management"
      ],
      description: "Streamline your operations with our comprehensive inventory and order management solutions.",
      benefits: [
        "Prevent costly stockouts and overstock situations",
        "Automate time-consuming fulfillment processes",
        "Improve customer satisfaction with faster shipping",
        "Reduce operational costs with efficient workflows"
      ]
    },
    {
      id: 7,
      title: "Review & Reputation",
      icon: StarIcon,
      color: "bg-emerald-100",
      hoverColor: "hover:bg-emerald-200",
      features: [
        "Review monitoring & alerts",
        "Ethical rating improvement strategies",
        "Customer query response system",
        "Negative feedback mitigation"
      ],
      description: "Protect and enhance your brand reputation with our comprehensive review management services.",
      benefits: [
        "Increase product ratings with ethical strategies",
        "Respond quickly to customer concerns",
        "Minimize impact of negative reviews",
        "Build social proof to drive more sales"
      ]
    },
    {
      id: 8,
      title: "Performance Intelligence",
      icon: ChartPieIcon,
      color: "bg-cyan-100",
      hoverColor: "hover:bg-cyan-200",
      features: [
        "Custom sales & traffic reports",
        "Profit margin analysis",
        "Market trend identification",
        "Actionable growth recommendations"
      ],
      description: "Make data-driven decisions with our advanced analytics and performance reporting services.",
      benefits: [
        "Identify hidden opportunities for growth",
        "Optimize pricing strategies for maximum profit",
        "Track performance against key competitors",
        "Receive actionable insights for continuous improvement"
      ]
    }
  ];
 const otherFaqs = [
  {
    question: "What is Amazon Account Management?",
    answer:
      "Amazon Account Management is a complete service that helps sellers manage and grow their Amazon store. It includes product listing, SEO optimization, advertising, inventory control, and performance reporting to boost sales and visibility.",
  },
  {
    question: "How do I get started with your Amazon Account Management services?",
    answer:
      "Getting started is easy! Simply contact us through our website or call our team. We’ll understand your business goals, review your current Amazon setup, and create a personalized management strategy to improve your store performance.",
  },
  {
    question: "Do you create and optimize product listings?",
    answer:
      "Yes, we create SEO-optimized product listings with high-quality images, attractive titles, and keyword-rich descriptions. Our goal is to improve product ranking and attract more buyers organically.",
  },
  {
    question: "Do you manage Amazon PPC advertising campaigns?",
    answer:
      "Absolutely! We handle complete Amazon PPC management — including Sponsored Product, Brand, and Display Ads. Our experts optimize bids, keywords, and targeting to maximize ROI and lower your ad spend waste.",
  },
  {
    question: "Can you help with FBA (Fulfillment by Amazon) setup and management?",
    answer:
      "Yes, we assist in FBA setup and management including inventory tracking, shipment planning, and label generation. Our goal is to ensure smooth operations and avoid stockouts or delays.",
  },
  {
    question: "Do you provide regular performance reports?",
    answer:
      "Yes, we provide detailed reports covering sales, traffic, ad spend, and keyword performance. These insights help track progress and continuously improve your store’s growth strategy.",
  },
  {
    question: "Why should I choose SEOcial Media Solutions for Amazon Management?",
    answer:
      "We offer end-to-end Amazon Account Management with an experienced team, proven strategies, and transparent reporting. From account setup to advertising — we handle everything to ensure your success on Amazon.",
  },
  {
    question: "Can you help manage other marketplaces like Flipkart or Meesho?",
    answer:
      "Yes, besides Amazon, we also manage accounts on Flipkart, Meesho, and JioMart with similar optimization and growth strategies tailored for each platform.",
  },
];


  // Handle smooth scrolling when expanded service changes
  useEffect(() => {
    if (expandedService && detailSectionRef.current) {
      // Add a small delay to ensure the element is rendered
      setTimeout(() => {
        detailSectionRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [expandedService]);

  const toggleService = (id) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
       <div className="flex items-center justify-center ">
    <div className="bg-[#e5e6ed] rounded-2xl p-4 flex justify-center items-center w-[150px] h-[80px]">
  <Image
    src="/images/Ecom/amazon.webp"
    alt="Centered"
    width={150}
    height={40}
    className="object-contain"
  />
</div>
    </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
  <div className="flex mt-7 flex-col md:flex-row items-center justify-center mb-6 gap-4">
    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
      <RocketLaunchIcon className="h-6 w-6 text-white" />
    </div>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug text-center md:text-left">
      VIRAL nexus Complete Amazon Management Solution
    </h1>
  </div>

  <p className="text-base sm:text-lg text-gray-700 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2">
    End-to-end services designed to optimize every aspect of your Amazon presence and drive sustainable growth.
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
                className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
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
              .filter(service => service.id === expandedService)
              .map(service => (
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
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center">
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
              ))
            }
          </div>
        )}

        {/* Service Navigation */}
        <div className="flex justify-center px-2">
  <div
    className="flex flex-wrap justify-center   rounded-md shadow-sm p-2 gap-2 sm:gap-3"
    role="group"
  >
    {services.map((service) => (
      <button
        key={service.id}
        type="button"
        className={`flex items-center justify-center px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
          expandedService === service.id
            ? 'bg-blue-600 text-white'
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
     <FAQSection 
        faqs={otherFaqs} 
        title="Common Questions" 
        description="Answers to our most frequently asked questions" 
      />
    </div>
  );
};

export default AmazonManagementSolution;