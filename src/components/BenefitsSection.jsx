import Link from 'next/link';
import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      
      title: 'Lightning Fast Performance',
      description: 'Experience unparalleled speed with our optimized infrastructure',
      details: [
        'Sub-second response times for all operations',
        'Global CDN with 200+ edge locations',
        'Automated caching for frequently accessed data',
        'Optimized database queries for complex operations',
        'Asynchronous processing for heavy workloads',
        'Minimal downtime during updates and deployments'
      ]
    },
    {
      
      title: 'Enterprise-Grade Security',
      description: 'Bank-level protection for your valuable data and assets',
      details: [
        'End-to-end AES-256 encryption',
        'SOC 2 Type II compliance certified',
        'Multi-factor authentication (MFA) required',
        'Regular third-party security audits',
        'Automated threat detection and response',
        'Role-based access control for all users',
        'Real-time intrusion alerts and monitoring'
      ]
    },
    {
      
      title: 'Intelligent Automation',
      description: 'AI-powered workflows that adapt to your unique business needs',
      details: [
        'Machine learning algorithms for process optimization',
        'Customizable workflow builder with 50+ templates',
        'Predictive analytics for proactive decision making',
        'Automated reporting with actionable insights',
        'Seamless integration with 1000+ business tools',
        'AI-assisted content and task recommendations',
        'Smart error handling and fallback automation'
      ]
    },
    {
    
      title: 'Unlimited Scalability',
      description: 'Effortlessly handle growth from startup to enterprise level',
      details: [
        'Auto-scaling infrastructure that grows with you',
        'Load balancing for traffic spikes up to 10M users',
        'Microservices architecture for flexible scaling',
        'Global data centers for low-latency access worldwide',
        'Pay-as-you-grow pricing model',
        'Horizontal and vertical scaling support',
        'Cloud-native deployments for flexibility'
      ]
    },
    {
      
      title: 'Dedicated Support',
      description: 'White-glove service from our expert team around the clock',
      details: [
        '24/7/365 support via chat, email, and phone',
        'Dedicated account manager for enterprise clients',
        'Comprehensive onboarding and training programs',
        'Monthly business reviews with optimization recommendations',
        'Extensive knowledge base with video tutorials',
        'Priority ticketing and escalation process',
        'Personalized setup assistance for new clients'
      ]
    },
    {
       
      title: 'Transparent Pricing',
      description: 'Fair, predictable pricing with no hidden fees or surprises',
      details: [
        'Simple tiered pricing based on usage',
        'No long-term contracts or cancellation fees',
        'Volume discounts for growing teams',
        'Free migration assistance from competitors',
        '30-day money-back guarantee',
        'Cost forecasting and usage reporting',
        'Flexible add-on options for premium features'
      ]
    },
    {
      
      title: 'Global Accessibility',
      description: 'Reach customers anywhere in the world with robust infrastructure',
      details: [
        'Content delivery networks for low-latency access',
        'Multi-language and localization support',
        'Geo-targeted content delivery',
        'Redundant server locations for reliability',
        'Cross-region failover capabilities',
        'Support for international payment methods',
        'Optimized for mobile and desktop globally'
      ]
    },
    {
      
      title: 'Actionable Insights',
      description: 'Make data-driven decisions with powerful analytics',
      details: [
        'Customizable dashboards and reports',
        'Real-time monitoring and alerts',
        'User behavior tracking and heatmaps',
        'Funnel analysis for conversion optimization',
        'Integration with BI tools like Tableau & Power BI',
        'Predictive trend analysis',
        'KPI tracking with automated reporting'
      ]
    }
  
  ];

  return (
    <section>
      <div className="container text-[#F5F7F8]  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unmatched Benefits for Your Business
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover why thousands of companies trust our platform to power their growth and innovation
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6 md:p-8">
                {/* Icon and Header */}
                <div className="flex items-start mb-6">
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                
                {/* Detailed Points */}
                <ul className="space-y-3 mb-6">
                  {benefit.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
                
               
                 
              </div>
            </div>
          ))}
        </div>

        
      </div>
      <div className="flex justify-center mt-12">
      <Link
          href="/contact"
        className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg transition-all duration-300 group hover:scale-105 hover:shadow-2xl"
      >
        {/* Animated Borders */}
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-300 border-t-2 border-blue-400 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-300 border-b-2 border-indigo-400 group-hover:w-full ease"></span>

        {/* Background Hover Overlay */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease rounded-xl"></span>

        {/* Button Text */}
        <span className="relative z-10 text-lg font-semibold tracking-wide transition-colors duration-300 ease group-hover:text-white">
          Contact Us
        </span>
      </Link>
      
      </div>
    </section>
  );
};

export default BenefitsSection;