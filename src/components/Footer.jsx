"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const quickLinks = [
    
  

    { name: "Home", href: "/" },
    { name: "About Us", href: "/digital-marketing-company-jaipur" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/career" },
    { name: "Contact Us", href: "/contact" },
    
  ];
  const accountman = [
    
  { title: "Amazon Account Management", href: "/amazon-account-management-services" },
      { title: "Flipkart Account Management", href: "/flipkart-account-management-services" },
      { title: "Meesho Account Management", href: "/meesho-account-management-services" },
      { title: "JioMart Account Management", href: "/jiomart-account-management-services" }

   
    
  ];
//{ name: "Privacy & policy", href: "/privacy-policy" }
  const services = [
    { title: "Digital Marketing Services", href: "/digital-marketing-company-jaipur" },
      { title: "Social Media Marketing", href: "/social-media-marketing-jaipur" },
      { title: "Website Development", href: "/web-development-company-jaipur" },
     
      { title: "E-commerce Listing", href: "/ecommerce-listing-service-jaipur" },
       { title: "Google Ads", href: "/lead-generation-company-jaipur" },
      { title: "Meta Ads", href: "/meta-ads-services" },
     
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
    },
  ];

  return (
    <footer className="bg-[#101340] text-gray-300">
      <div className="max-w-8xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="space-y-6 ">
            <Image
              src="/images/company-logo.webp"
              alt="Company Logo"
              width={120}
              height={48}
              className="h-15 p-2 bg-amber-50 rounded-xl w-auto"
            />
            <p className="text-sm leading-relaxed">
              Empowering businesses with comprehensive digital marketing solutions that drive real growth. 
              Your trusted partner in the digital transformation journey.
            </p>
            {/* Social Media Icons 
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:underline transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6"> Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-white hover:underline transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<div>
            <h3 className="text-lg font-semibold text-white mb-6">E-Commerce Services</h3>
            <ul className="space-y-4">
              {accountman.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:underline transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  
                 C-109, Nemi Nagar, Vaishali Nagar, Jaipur, Rajasthan 302021
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:+916378362945" className="text-sm hover:text-white transition-colors duration-300">
                  +91 6378362945
                </a>
              
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:admin@ecomvision" className="text-sm hover:text-white transition-colors duration-300">
                  admin@ecomvision.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">© {currentYear} VIRAL nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
