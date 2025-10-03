// components/BoostTrafficSection.jsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import EnhancedLoader from "@/components/LoadingSpinner.jsx";
// ✅ Lazy-load ContactForm only when needed
const ContactForm = dynamic(() => import("./ContactForm"), {
  ssr: false,
  loading: () => <EnhancedLoader />,
});

const BoostTrafficSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-8">
          <p className="text-orange-600 font-semibold">Ready to Grow</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Boosts your <span className="text-blue-600">website</span> traffic!
          </h2>

          {/* Lazy-loaded Form */}
          <ContactForm />
        </div>

        {/* Right Mobile Mockup with floating animation */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-sm rounded-3xl shadow-xl animate-float">
            <Image
              src="/images/other/seo-jaipur.png"
              alt="SEO Mobile Mockup"
              width={400}
              height={400}
              className="rounded-3xl"
              priority={false} // ✅ enables lazy loading
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoostTrafficSection;
