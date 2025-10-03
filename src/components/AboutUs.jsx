"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Code,
  Search,
  Share2,
  Store,
  PenTool,
  Brain,
  Rocket,
  Target,
  TrendingUp,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";

// ✅ Lazy load PromoVideoShowcase
const PromoVideoShowcase = dynamic(() => import("@/components/PromoVideoShowcase"), {
  ssr: false,
  loading: () => <p className="text-center">Loading video...</p>,
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Creating stunning, responsive websites that drive conversions",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Boosting your visibility in search engine rankings",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Building your brand presence across social platforms",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Store,
    title: "Google Services",
    description: "Driving targeted traffic through strategic campaigns",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description: "Crafting engaging content that tells your story",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const faqs = [
  {
    question:
      "Why is SEOcial Media Solutions considered the best digital marketing agency in Jaipur?",
    answer:
      "SEOcial Media Solutions stands out due to our AI-powered strategies, client-centric approach, and proven track record in SEO, content, and web development.",
  },
  {
    question: "How does your digital marketing strategy help in lead generation?",
    answer:
      "We use SEO, targeted ads, retargeting, landing page optimization, and analytics to attract qualified leads that convert into loyal customers.",
  },
  {
    question: "Do you offer customized marketing packages for startups?",
    answer:
      "Yes! We provide startup-friendly packages that scale with your business growth, including SEO, social media, and content creation.",
  },
  {
    question: "Do you provide performance reports and analytics?",
    answer:
      "Yes, we share detailed monthly reports with traffic, rankings, leads, and ROI, plus access to a live dashboard.",
  },
  {
    question: "What industries have you worked with?",
    answer:
      "Healthcare, real estate, education, tourism, e-commerce, IT, lifestyle, food, and more.",
  },
  {
    question: "Can you fully manage my social media?",
    answer:
      "Yes, we handle everything: content, posting, ads, influencer collabs, and engagement across all major platforms.",
  },
];

const AboutUs = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="px-4 py-16 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium">
            Top Digital Marketing Agency in Jaipur
          </h1>
          <h2 className="mt-6 pb-4 text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent md:text-6xl">
            Transforming Digital Presence
          </h2>
          <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Your complete digital partner for website development, SEO, social media, and strategic online marketing solutions.
          </p>
        </motion.div>

        {/* Mission */}
        <div id="mission" className="mt-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We empower businesses with digital solutions that drive growth. Through web development, SEO, social media, Google presence, and content, we help clients thrive.
              </p>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center gap-3 text-white">
                  <Brain className="w-6 h-6" />
                  <span className="font-medium">AI-Powered</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center gap-3 text-white">
                  <Rocket className="w-6 h-6" />
                  <span className="font-medium">Results-Driven</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/ourmission.png"
                  alt="Mission visualization"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority={false} // ✅ lazy load
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Strategic Excellence */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl overflow-hidden"
        >
          <div className="p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Driving Digital Success Through Strategic Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine innovative strategies with analytics for SEO, content, and social media to help businesses grow.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-800">Targeted Strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                  </div>
                  <span className="font-medium text-gray-800">Measurable Growth</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-800">Client-Centric Focus</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/technology.jpg"
                  alt="Digital strategy"
                  width={800}
                  height={450}
                  className="object-cover"
                  priority={false}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive digital solutions tailored to your success</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -5 }} className="relative p-6 group">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10 rounded-2xl`} />
                <div className="relative flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${service.gradient} p-3 rounded-xl`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                    <p className="mt-2 text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Promo Video */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-24">
          <PromoVideoShowcase />
        </motion.div>

        {/* FAQ */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our services</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <div>{openFaq === i ? <ChevronUp className="w-5 h-5 text-purple-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}</div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <div className="h-px bg-gradient-to-r from-purple-200 to-indigo-200 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
