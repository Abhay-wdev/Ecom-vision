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
    { name: "SEOcial Media company in Ajmer", href: "/digital-markting-services-ajmer" },
    { name: "SEOcial Media company in Jaipur", href: "/digital-markting-services-jaipur" },
   

    { name: "Home", href: "/" },
    { name: "About Us", href: "/digital-marketing-company-jaipur" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/career" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy & policy", href: "/privacy-policy" },
  ];

  const services = [
    { name: "SEO Optimization", href: "/seo-company-jaipur" },
    { name: "Social Media Marketing", href: "/social-media-marketing-jaipur" },
    { name: "Google Services", href: "/lead-generation-company-jaipur" },
    { name: "Website Development", href: "/web-development-company-jaipur" },
    { name: "Content Writing", href: "/content-writing-company-jaipur" },
    { name: "Video Editing", href: "/video-editing-company-jaipur" },
    { name: "Our branding strategy", href: "/best-digital-marketing-branding-services-jaipur" },
    { name: "Mobile App Development", href: "/top-app-development-company-jaipur" },
     
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61564390163701",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/seocialmediasolutions/",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/seocial-media-solution/",
    },
  ];

  return (
    <footer className="bg-[#101340] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/images/footer-logo.jpg"
              alt="Company Logo"
              width={120}
              height={48}
              className="h-12 w-auto"
            />
            <p className="text-sm leading-relaxed">
              Empowering businesses with comprehensive digital marketing solutions that drive real growth. 
              Your trusted partner in the digital transformation journey.
            </p>
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
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-white hover:underline transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {service.name}
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
                 Sagar, 1, opp. VS Medihub, Nirman Nagar, Ranisati Nagar, Jaipur, Rajasthan 302019
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:+919461677122" className="text-sm hover:text-white transition-colors duration-300">
                  +91 9461677122
                </a>
                ,&nbsp;
                <a href="tel:+918949342270" className="text-sm hover:text-white transition-colors duration-300">
                  +91 8949342270
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:info@seocialmedia.in" className="text-sm hover:text-white transition-colors duration-300">
                  info@seocialmedia.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">© {currentYear} SEOcial Media Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
