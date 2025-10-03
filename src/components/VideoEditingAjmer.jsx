// pages/video-editing-ajmer.js
"use client";
import React, { useState } from "react";
import {
  Video,
  CheckCircle,
  Users,
  BarChart,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroSectionVideo from "@/components/HeroSectionVideo"; // adjust path if needed

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function VideoEditingAjmer() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of video editing services do you offer in Ajmer?",
      answer:
        "At SEOcial Media Solutions, we provide comprehensive video editing services including corporate videos, promotional videos, social media clips, event coverage, animation, and motion graphics.",
    },
    {
      question: "How long does the video editing process typically take?",
      answer:
        "Simple edits can be completed within 24–48 hours, while complex projects may take 3–7 days. Rush requests are available.",
    },
    {
      question: "What file formats do you work with for video editing?",
      answer:
        "We work with MP4, MOV, AVI, WMV, ProRes, RAW and more. Final deliverables are optimized for web, social media, or broadcast.",
    },
    {
      question:
        "Do you provide raw footage shooting services along with editing?",
      answer:
        "Yes, we offer full production including professional shooting, lighting setups, and post-production.",
    },
    {
      question:
        "Can you incorporate our brand colors and logos into the videos?",
      answer:
        "Absolutely! We ensure brand consistency and can build motion graphics templates with your branding.",
    },
    {
      question:
        "What makes your video editing services different from others in Ajmer?",
      answer:
        "Our mix of technical expertise, creative storytelling, and marketing focus sets us apart.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Submit Your Footage",
      description:
        "Upload your raw footage, along with your instructions, or schedule a call to discuss your vision.",
      image: "/images/process/submit.jpg",
    },
    {
      number: "02",
      title: "Editing",
      description:
        "Our expert editors apply the edits, effects, and enhancements you’ve requested.",
      image: "/images/process/editing.jpg",
    },
    {
      number: "03",
      title: "Review & Feedback",
      description:
        "You’ll receive a draft to review. We revise until you’re happy.",
      image: "/images/process/review.webp",
    },
    {
      number: "04",
      title: "Final Delivery",
      description:
        "Your video is delivered in your chosen format and resolution, ready to share.",
      image: "/images/process/delivery.jpg",
    },
  ];

  const stats = [
    {
      number: "1000+",
      label: "Videos Edited",
      icon: <Video className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "200+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "24-48h",
      label: "Standard Turnaround",
      icon: <BarChart className="w-6 h-6" />,
    },
  ];

  const services = [
    {
      name: "High-Quality Videos",
      description:
        "We deliver polished, visually stunning videos that captivate your audience.",
      image: "/images/services/high-quality.webp",
    },
    {
      name: "Corporate Videos",
      description:
        "Create professional corporate videos that effectively communicate your brand.",
      image: "/images/services/corporate.webp",
    },
    {
      name: "Social Media Clips",
      description:
        "Eye-catching social media clips tailored for Instagram, Facebook, and YouTube.",
      image: "/images/services/social.webp",
    },
    {
      name: "Promotional Videos",
      description:
        "Boost campaigns with high-impact promotional videos that drive conversions.",
      image: "/images/services/promotional.jpeg",
    },
    {
      name: "Event Coverage",
      description:
        "Relive your special moments with beautifully edited event coverage.",
      image: "/images/services/event.jpg",
    },
    {
      name: "Animation & Motion Graphics",
      description:
        "Custom animations and motion graphics that tell your story creatively.",
      image: "/images/services/animation.webp",
    },
  ];

  return (
    <>
      <center>
        <HeroSectionVideo />
      </center>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative px-4 py-10 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium mb-4">
              Best Video Editing Company in Ajmer
            </h1>
            <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl leading-tight">
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                Vision Into Reality
              </span>{" "}
              with Ajmer&apos;s Top Video Editing Services
            </h2>
            <p className="mt-6 text-gray-200 text-lg md:text-xl max-w-3xl mx-auto">
              At SEOcial Media Solutions, we specialize in high-quality,
              engaging videos. Corporate videos, reels, or promos — we’ve got
              you covered.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact">
                <span className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg w-full sm:w-auto">
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="px-4 py-16 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-white via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our video editing services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-indigo-300 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-gradient-to-r from-gray-50 to-indigo-50 hover:from-indigo-50 hover:to-purple-50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-indigo-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-indigo-600" />
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
      </section>

      {/* CTA Section */}
      <center>
        <section className="mb-10 max-w-5xl rounded-lg py-10 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="px-4 text-white text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Videos?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s work together to create stunning videos that
                captivate your audience and elevate your brand.
              </p>
              <Link href="/contact">
                <span className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-100 transition duration-300 shadow-md">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </Link>
            </motion.div>
          </div>
        </section>
      </center>
    </>
  );
}
