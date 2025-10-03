"use client";

import React, { useState } from 'react';
 
import Link from 'next/link';
import { 
  Video, 
  Edit, 
  Film, 
  Users, 
  BarChart2, 
  Lightbulb, 
  Award,
  CheckCircle,
  Clock,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const VideoEditing = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  const faqs = [
    {
      question: "What types of videos do you specialize in editing?",
      answer: "We specialize in a wide range of video types including corporate videos, promotional videos, social media content, product demos, event highlights, testimonials, and YouTube videos. Our team has the expertise to handle various projects and deliver high-quality results tailored to your specific needs."
    },
    {
      question: "Can you help with video content strategy in addition to editing?",
      answer: "Yes, our services extend beyond just editing. We offer comprehensive video marketing strategies that include concept development, scriptwriting, and distribution planning. We work with you to ensure your video content is aligned with your business goals and effectively reaches your target audience."
    },
    {
      question: "How long does the video editing process typically take?",
      answer: "The timeline for a video editing project depends on its complexity, length, and the scope of work. A simple project might take 2-3 business days, while a more complex one could take a week or more. We provide a detailed project timeline upfront and keep you updated throughout the process."
    },
    {
      question: "How do you ensure the final video aligns with my brand identity?",
      answer: "We begin each project with an in-depth consultation to understand your brand’s voice, style, and goals. We work closely with you through every stage, from initial drafts to final revisions, to ensure the final video perfectly captures your brand identity and message."
    },
    {
      question: "What is your pricing model for video editing services?",
      answer: "Our pricing is customized based on the project's requirements, such as video length, complexity of editing, and turnaround time. We offer flexible packages to suit different budgets and needs. Contact us for a free, no-obligation quote based on your specific project details."
    }
  ];

  const features = [
    { 
      name: "Corporate Videos", 
      category: "Professional",
      description: "Engaging videos that showcase your company's vision, culture, and services to a professional audience.",
      icon: <Film className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Social Media Content", 
      category: "Digital Marketing",
      description: "Short, dynamic videos optimized for platforms like Instagram, Facebook, and TikTok to boost engagement and reach.",
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      name: "Product Demos", 
      category: "Sales & Marketing",
      description: "Informative and visually appealing videos that highlight your product's features and benefits to potential customers.",
      icon: <Video className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      name: "Event Highlights", 
      category: "Promotional",
      description: "Captivating recap videos of your events, perfect for sharing on social media and attracting future attendees.",
      icon: <Award className="w-6 h-6 text-white" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    { 
      name: "Testimonial Videos", 
      category: "Trust Building",
      description: "Authentic customer testimonial videos that build trust and credibility for your brand.",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Training Videos", 
      category: "Education",
      description: "Educational videos and tutorials that simplify complex information for employees or customers.",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      gradient: "from-red-500 to-pink-500"
    },
    { 
      name: "YouTube Content", 
      category: "Content Creation",
      description: "Expert editing for long-form YouTube videos, including intros, outros, and sound design.",
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      gradient: "from-teal-500 to-green-500"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Consultation",
      description: "We discuss your vision, goals, and project requirements to create a customized plan.",
    },
    {
      number: "02",
      title: "Editing & Design",
      description: "Our skilled editors bring your footage to life, adding graphics, music, and effects.",
    },
    {
      number: "03",
      title: "Review & Refine",
      description: "We work with you through a revision process to ensure the final video meets your expectations.",
    },
    {
      number: "04",
      title: "Final Delivery",
      description: "You receive the polished, high-quality video in your desired format, ready for publishing.",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Timely Delivery",
      description: "Our efficient workflow ensures your projects are completed on schedule, every time.",
    },
    {
      icon: <Edit className="w-6 h-6 text-white" />,
      title: "Creative Expertise",
      description: "Our team of creative professionals transforms raw footage into compelling stories.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "Seamless Collaboration",
      description: "We prioritize clear communication and a smooth, collaborative editing process.",
    },
  ];

  return (
    <>
     

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="px-4 py-16 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full font-medium">
                Professional Video Editing Services
              </h1>
              <h2 className="mt-6 text-4xl pb-3 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent md:text-6xl">
                Creative Storytelling Through Video
              </h2>
              <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
                Transform your raw footage into polished, professional videos that captivate your audience and elevate your brand identity.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative flex flex-col space-y-4">
                    <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-xl w-fit`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {feature.name}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium">
                        {feature.category}
                      </p>
                      <p className="mt-2 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Our Process Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-24"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Video Editing Process
                </h2>
                <p className="text-xl text-gray-600">A smooth journey from raw footage to final masterpiece</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((step, index) => (
                  <motion.div
                    key={step.number}
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-xl shadow-lg group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Us Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pb-24"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Why Choose Us
                </h2>
                <p className="text-xl text-gray-600">Delivering professional quality with a personal touch</p>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-xl shadow-lg text-center group hover:scale-105 transition-transform duration-200"
                  >
                    <div className="mb-4 flex justify-center">
                      <div className={`p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transform group-hover:scale-110 transition-transform duration-200`}>
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FAQ Section */}
            <div className="py-16 bg-white rounded-3xl shadow-lg">
              <div className="max-w-4xl mx-auto px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                  <p className="text-xl text-gray-600">Get answers to common questions about our video editing services</p>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-5 text-left flex justify-between items-center bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0">
                          {openFAQ === index ? (
                            <ChevronUp className="w-5 h-5 text-blue-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${
                        openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
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

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-16 text-center"
            >
              <div className="relative max-w-3xl mx-auto p-8 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10" />
                <div className="relative">
                  <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                    Ready to Create Your Next Video?
                  </h2>
                  <p className="mt-4 text-gray-600 text-lg">
                    Let&apos;s discuss your project and bring your vision to life.
                  </p>
                  <div className="mt-8 space-x-4">
                    <Link
                      href="/contact"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300"
                    >
                      Get a Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoEditing;