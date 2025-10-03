"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PenTool,
  BookOpen,
  Edit,
  FileText,
  Mail,
  Globe,
  Share2,
  CheckCircle,
  Users,
  ChevronDown,
  ChevronUp,
  BarChart,
} from "lucide-react";

const ContentWritingServicesAjmer = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of content writing services do you offer in Ajmer?",
      answer:
        "At SEOcial Media Solutions, we specialize in high-quality, AI-powered content writing services in Ajmer, designed to elevate your brand’s digital presence. Our offerings include SEO-optimized blog posts, engaging website copy, persuasive sales content, social media captions, and long-form articles. Each piece is crafted by expert writers who blend creativity with data-driven strategies, ensuring your content ranks higher on search engines while resonating with your target audience.",
    },
    {
      question: "How do you integrate AI into your content writing services?",
      answer:
        "We use advanced AI tools to enhance efficiency and precision in content creation. Our process includes AI-assisted keyword research, competitor analysis, and SEO optimization to ensure your content outperforms competitors. While AI helps with structure and data insights, our human writers refine tone, creativity, and brand alignment, delivering a balance of technology and artistry.",
    },
    {
      question:
        "How do you ensure content is tailored to my audience and brand voice?",
      answer:
        "Personalization is central to our process. We start with an in-depth brand voice analysis and audience persona study to understand your ideal customers. Through collaborative onboarding, we capture your brand’s tone—whether professional, conversational, or authoritative.",
    },
    {
      question: "Can your writing help improve my website's SEO and traffic?",
      answer:
        "Yes! Our SEO-optimized content writing services are designed to boost your organic rankings and drive targeted traffic. We implement on-page SEO best practices, keyword placement, meta descriptions, header tags, and internal linking. Our content also focuses on E-A-T (Expertise, Authoritativeness, Trustworthiness).",
    },
    {
      question: "What types of content formats do you cover?",
      answer:
        "We offer diverse content formats: Blogs, Website Copy, Product Descriptions, Social Media Content, and Email Campaigns. Every format follows SEO best practices while prioritizing readability and user intent.",
    },
    {
      question: "Why choose SEOcial Media Solutions for content writing?",
      answer:
        "We merge AI-powered efficiency with human creativity. Our team includes seasoned writers, SEO specialists, and data analysts who create content that ranks, engages, and converts. Whether you’re a startup or an enterprise, our tailored solutions ensure your brand’s voice stands out in the digital landscape.",
    },
  ];

  const features = [
    {
      name: "Blog Writing",
      category: "Content Creation",
      description:
        "Expert blog posts that drive organic traffic and establish thought leadership.",
      icon: <PenTool className="w-6 h-6 text-white" />,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "Copywriting",
      category: "Marketing",
      description:
        "Persuasive copy that converts visitors into loyal customers.",
      icon: <Edit className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Technical Writing",
      category: "Documentation",
      description: "Clear documentation that simplifies complex topics.",
      icon: <FileText className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      name: "Email Writing",
      category: "Communication",
      description:
        "Engaging email campaigns that nurture leads and boost sales.",
      icon: <Mail className="w-6 h-6 text-white" />,
      gradient: "from-red-500 to-pink-500",
    },
    {
      name: "SEO Content",
      category: "Optimization",
      description:
        "Search engine optimized content that ranks and drives traffic.",
      icon: <Globe className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Content Strategy",
      category: "Planning",
      description: "Data-driven strategies aligned with business goals.",
      icon: <BookOpen className="w-6 h-6 text-white" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Brand Story",
      category: "Storytelling",
      description: "Compelling narratives that resonate with your audience.",
      icon: <Share2 className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const services = [
    {
      title: "Website Content",
      description:
        "We write clear and catchy content for your website that helps turn visitors into customers.",
      image: "/images/website-content.jpg",
      benefits: [
        "More visitors from search engines",
        "More conversions",
        "Visitors stay longer and engage more",
        "Better search rankings",
      ],
    },
    {
      title: "Blog Management",
      description:
        "We manage your blog with regular, high-quality posts that establish your authority.",
      image: "/images/blog-management.png",
      benefits: [
        "Fresh content posted regularly",
        "Keyword optimization for SEO",
        "Trusted voice in your niche",
        "Increased organic reach",
      ],
    },
    {
      title: "Technical Content",
      description:
        "We simplify complex topics into clear, easy-to-follow guides and documentation.",
      image: "/images/technical-content.jpg",
      benefits: [
        "Easier understanding of tough topics",
        "Reduced customer support queries",
        "Faster user learning",
        "Clarity for customers",
      ],
    },
    {
      title: "Marketing Copy",
      description:
        "We craft powerful ad and campaign content that captures attention and drives results.",
      image: "/images/marketing.jpg",
      benefits: [
        "Higher leads and sales",
        "Stronger brand messaging",
        "Improved campaign performance",
        "Better ROI",
      ],
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Satisfied Clients",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "10k+",
      label: "Articles Written",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Client Retention",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "250%",
      label: "Average ROI",
      icon: <BarChart className="w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="px-4 py-16 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm rounded-full font-medium">
            Top Content Writing Services in Ajmer
          </h1>
          <h2 className="mt-6 text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent md:text-6xl">
            Expert Content Writing Services That Drive Results
          </h2>
          <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Transform your digital presence with SEO-optimized, engaging content
            that connects with your audience and drives measurable business
            growth.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative p-6 group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative flex flex-col space-y-4">
                <div
                  className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-xl w-fit`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-emerald-600 font-medium">
                    {feature.category}
                  </p>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Comprehensive Writing Services
            </h2>
            <p className="text-xl text-gray-600">
              Tailored content solutions to meet your business objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    src={service.image || "/images/placeholder.jpg"}
                    alt={service.alt || service.title}
                    width={600} // A reasonable width for the service card
                    height={400} // A reasonable height for the service card
                    className="w-full h-full object-cover transform "
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="py-16 bg-white rounded-3xl shadow-lg">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our content writing
                services
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-emerald-300 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center bg-gradient-to-r from-gray-50 to-emerald-50 hover:from-emerald-50 hover:to-teal-50 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-emerald-600" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 py-5 bg-white border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="relative max-w-3xl mx-auto p-8 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-10" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                Ready to Elevate Your Content Strategy?
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Let&apos;s create content that connects, converts, and drives
                your business forward.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWritingServicesAjmer;
