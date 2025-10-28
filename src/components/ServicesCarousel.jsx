'use client';
import React, { useState, useEffect } from 'react';
import { Globe, Users, Code, ShoppingCart, Search, Facebook, Box, Package, Store, Truck } from 'lucide-react';
import Image from 'next/image';

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: Globe,
      title: 'Digital Marketing Services',
      description: 'Comprehensive digital strategies to grow your business online.',
      image: '/images/Ecom/digital-markiting.webp',
      actionLink: '/digital-marketing-company-jaipur',
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand awareness on social platforms.',
      image: '/images/Ecom/socialmedia-markiting.webp',
      actionLink: '/social-media-marketing-jaipur',
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Responsive and modern websites that convert visitors into customers.',
      image: '/images/Ecom/website-dev.webp',
      actionLink: '/web-development-company-jaipur',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Listing',
      description: 'Optimize your product listings for marketplaces to boost sales.',
      image: '/images/Ecom/product-listing.webp',
      actionLink: '/ecommerce-listing-service-jaipur',
    },
    {
      icon: Search,
      title: 'Google Ads',
      description: 'Targeted PPC campaigns to maximize ROI and traffic.',
      image: '/images/Ecom/google-ads.webp',
      actionLink: '/lead-generation-company-jaipur',
    },
    {
      icon: Facebook,
      title: 'Meta Ads',
      description: 'Reach the right audience on Facebook & Instagram effectively.',
      image: '/images/Ecom/meta-ads.webp',
      actionLink: '/meta-ads-services',
    },
    {
      icon: Box,
      title: 'Amazon Account Management',
      description: 'End-to-end services for managing and growing your Amazon store.',
      image: '/images/Ecom/amazon1.webp',
      actionLink: '/amazon-account-management-services',
    },
    {
      icon: Package,
      title: 'Flipkart Account Management',
      description: 'Optimize your Flipkart store for better visibility and sales.',
      image: '/images/Ecom/flipkart1.webp',
      actionLink: '/flipkart-account-management-services',
    },
    {
      icon: Store,
      title: 'Meesho Account Management',
      description: 'Professional management of your Meesho store to increase revenue.',
      image: '/images/Ecom/meesho1.webp',
      actionLink: '/meesho-account-management-services',
    },
    {
      icon: Truck,
      title: 'JioMart Account Management',
      description: 'Manage your JioMart account efficiently with optimized listings.',
      image: '/images/Ecom/jiomart1.webp',
      actionLink: '/jiomart-account-management-services',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section className="py-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-3 py-1 bg-yellow-400/10 rounded-full mb-2 backdrop-blur-sm border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors">
            <span className="text-yellow-400 text-sm font-semibold">Services</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-white to-yellow-400">
            Our Solutions
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="min-w-full">
                  <div className="grid md:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative h-48 md:h-[350px] overflow-hidden group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={350}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-transparent transition-opacity duration-700 group-hover:opacity-75" />
                      <div className="relative h-full p-4 md:p-6 flex flex-col justify-between z-10">
                        <div className="space-y-2 transform transition-all duration-500 group-hover:translate-y-1">
                          <div className="flex items-center space-x-2">
                            <div className="p-2 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
                              <service.icon className="w-5 h-5 text-yellow-400 transform transition-transform duration-500 group-hover:rotate-12" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="p-4 md:p-6 bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <a
                        href={service.actionLink}
                        className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-colors"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-4 space-x-1">
            {services.map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-500 rounded-full cursor-pointer hover:scale-110 ${
                  currentSlide === index 
                    ? 'w-6 h-1.5 bg-yellow-400' 
                    : 'w-1.5 h-1.5 bg-yellow-400/30 hover:bg-yellow-400/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
