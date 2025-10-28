// FAQSection.jsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

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

const FAQSection = ({ faqs, title = "Frequently Asked Questions", description = "Everything you need to know about our services" }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-xl text-gray-600">{description}</p>
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
  );
};

export default FAQSection;