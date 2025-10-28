'use client';
import React, { useState, useRef, useEffect } from 'react';
import { 
  RocketLaunchIcon, 
  ChartBarIcon, 
  MagnifyingGlassIcon, 
  BuildingStorefrontIcon, 
  CheckCircleIcon,
  XMarkIcon,
  UserGroupIcon,
  LightBulbIcon,
  CogIcon,
  ChartPieIcon,
  StarIcon,
  ArrowPathIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import FAQSection from '@/components/FAQSection';
import Image from 'next/image';
import Link from 'next/link';

const MetaAdsManagement = () => {
  const [expandedService, setExpandedService] = useState(null);
  const detailRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Campaign Planning & Strategy",
      icon: RocketLaunchIcon,
      color: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
      features: [
        "Identify target audience & market segments",
        "Competitor analysis for opportunities",
        "Plan campaign objectives: leads, traffic, awareness",
        "Custom budget allocation strategy"
      ],
      description: "We create a custom ad strategy tailored to your business goals to ensure maximum reach and ROI.",
      benefits: [
        "Reach the right audience at the right time",
        "Minimize wasted ad spend",
        "Boost campaign effectiveness from day one",
        "Strategic advantage over competitors"
      ]
    },
    {
      id: 2,
      title: "Ad Design & Creative",
      icon: MagnifyingGlassIcon,
      color: "bg-purple-100",
      hoverColor: "hover:bg-purple-200",
      features: [
        "Eye-catching images, videos & carousels",
        "Captivating ad copy",
        "Optimized formats for feed, stories, reels, Messenger",
        "A/B testing for creative optimization"
      ],
      description: "We design ads that attract attention and convert clicks into customers across Facebook and Instagram.",
      benefits: [
        "Increase engagement & clicks",
        "Boost brand visibility",
        "Drive more conversions with optimized creatives",
        "Consistent brand messaging across platforms"
      ]
    },
    {
      id: 3,
      title: "Audience Targeting & Optimization",
      icon: ChartBarIcon,
      color: "bg-pink-100",
      hoverColor: "hover:bg-pink-200",
      features: [
        "Retarget website visitors",
        "Create Lookalike audiences",
        "Target by demographics, interests & behavior",
        "Advanced audience segmentation"
      ],
      description: "Reach the right people who are most likely to take action, ensuring efficient ad spend and better results.",
      benefits: [
        "Higher ROI on campaigns",
        "Precision targeting for better conversions",
        "Maximize ad efficiency and performance",
        "Reduced cost per acquisition"
      ]
    },
    {
      id: 4,
      title: "Campaign Monitoring & Reporting",
      icon: BuildingStorefrontIcon,
      color: "bg-rose-100",
      hoverColor: "hover:bg-rose-200",
      features: [
        "A/B testing for ad creatives",
        "Monitor KPIs like CTR, conversions, ROAS",
        "Provide actionable insights & recommendations",
        "Custom dashboard for real-time tracking"
      ],
      description: "We continuously optimize campaigns and provide clear reports to ensure your Meta Ads deliver results.",
      benefits: [
        "See real-time performance",
        "Make data-driven decisions",
        "Scale campaigns efficiently",
        "Transparent reporting on all metrics"
      ]
    },
  ];

  const processSteps = [
    {
      title: "Discovery & Strategy",
      description: "We analyze your business, audience, and competitors to develop a tailored Meta Ads strategy.",
      icon: LightBulbIcon
    },
    {
      title: "Creative Development",
      description: "Our team creates compelling ad creatives that resonate with your target audience.",
      icon: CogIcon
    },
    {
      title: "Campaign Launch",
      description: "We launch your campaigns with precise targeting and optimized budget allocation.",
      icon: RocketLaunchIcon
    },
    {
      title: "Optimization & Scaling",
      description: "Continuous monitoring and optimization to improve performance and scale successful campaigns.",
      icon: ChartPieIcon
    }
  ];

  const results = [
    { metric: "5.2x", description: "Average ROAS" },
    { metric: "45%", description: "Conversion Rate Increase" },
    { metric: "62%", description: "Lower Cost Per Acquisition" },
    { metric: "3.8x", description: "Return On Ad Spend" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Director",
      company: "FashionForward",
      content: "The Meta Ads management team transformed our online presence. Our sales increased by 120% in just three months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "TechSolutions Inc.",
      content: "Precise targeting and compelling creatives helped us reach our ideal customers. Our lead quality improved significantly.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Founder",
      company: "Bloom Beauty",
      content: "The team's expertise in Meta Ads helped us scale our startup efficiently. We saw a 300% ROI in our first quarter.",
      rating: 4
    }
  ];

  const faqs = [
    {
      question: "Is Meta Ads suitable for small businesses?",
      answer: "Yes! Meta Ads work for businesses of all sizes, even with small budgets. We can create campaigns that deliver results regardless of your spend level."
    },
    {
      question: "How much should I spend on Meta Ads?",
      answer: "Budgets can start small. Success comes from targeted campaigns, not just high spend. We'll help you determine the optimal budget based on your goals."
    },
    {
      question: "Can Meta Ads increase sales fast?",
      answer: "Yes! With the right audience and ad creative, Meta Ads can drive leads, website visits, and direct sales quickly. Many clients see results within the first week."
    },
    {
      question: "Do you create ads for me?",
      answer: "Yes, we design compelling visuals, videos, and text to attract, engage, and convert customers. Our creative team specializes in high-performing Meta ad formats."
    },
    {
      question: "How long before I see results?",
      answer: "Typically, engagement and clicks appear within a few days, with conversions improving as campaigns are optimized. Most clients see significant results within 2-4 weeks."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We track comprehensive metrics including ROAS, conversion rates, cost per acquisition, and customer lifetime value. Our custom dashboards provide real-time insights."
    }
  ];

  // Smooth scroll to expanded service
  useEffect(() => {
    if (expandedService && detailRef.current) {
      setTimeout(() => {
        detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [expandedService]);

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center mb-16">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Meta Ads Management
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl text-center mb-8">
          Reach the right audience on Facebook, Instagram & Messenger with our end-to-end Meta Ads services designed to drive leads, sales, and brand growth.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center">
              <RocketLaunchIcon className="h-5 w-5 mr-2" />
              Get Started
            </button>
          </Link>
         
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Proven Results with Meta Ads</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">Our Meta Ads strategies deliver measurable outcomes for businesses across industries.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <div key={index} className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{result.metric}</div>
              <div className="text-gray-700">{result.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Cards */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Meta Ads Services</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">Comprehensive solutions to maximize your advertising potential on Meta platforms.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
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
      </div>

      {/* Process Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Meta Ads Management Process</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">We follow a systematic approach to ensure your campaigns succeed.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-blue-600 mb-2">STEP {index + 1}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Service Details */}
      {expandedService && (
        <div ref={detailRef} className="bg-white rounded-2xl shadow-xl p-8 mb-16 transition-all duration-500">
          {services.filter(s => s.id === expandedService).map(service => (
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
                      Get Started
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

      {/* Testimonials Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">Hear from businesses that have grown with our Meta Ads management.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <UserGroupIcon className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs}
        title="Common Questions About Meta Ads"
        description="Answers to the most frequently asked questions"
      />

      
    </div>
  );
};

export default MetaAdsManagement;