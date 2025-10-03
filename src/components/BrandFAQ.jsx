"use client";
import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiMail } from 'react-icons/fi';

export default function  BrandFAQ({faqItems}) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  
 


  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen    py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="text-center     mb-12">
          <h2 className="text-4xl font-bold   mb-4">Your Queries, Simplified</h2>
          <p className="text-lg    mx-auto">
            Questions? Answers! Find quick answers to the most common questions about our platform
          </p>
        </div>
        
        {/* FAQ Items - Responsive Container */}
        <div className="flex justify-center">
          <div className="bg-gray-200 w-full max-w-6xl   rounded-3xl p-0 sm:p-4 md:p-8 lg:p-12">
            <div className=" rounded-xl bg-[#F9FAFB] p-3 shadow-lg overflow-hidden">
              {faqItems.map((item, index) => (
                <div key={index} className={`border-b border-gray-200 ${index === faqItems.length - 1 ? 'border-b-0' : ''}`}>
                  <button
                    className="flex justify-between items-center w-full p-2 sm:p-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg transition-all duration-700"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={expandedIndex === index}
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-900">{item.question}</span>
                    <div className="flex-shrink-0 ml-2 sm:ml-4">
                      {expandedIndex === index ? (
                        <FiChevronUp className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 transition-transform duration-300" />
                      ) : (
                        <FiChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 transition-transform duration-300" />
                      )}
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 sm:px-10 pb-4 sm:pb-6 pt-10">
                      <p className="text-gray-600 text-sm sm:text-base text-left">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}