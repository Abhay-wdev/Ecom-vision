"use client";
import { FaCalendar, FaArrowRight } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";
 import SplitText from "../components/SplitText";
import Link from "next/link";
 
export default function HeroSection() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  return (
    <div className="  relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0   z-0"></div>
      
      {/* Floating animated clouds - hidden on small screens */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="none sm:block absolute top-10 sm:top-20 left-0 sm:left-10 z-0 opacity-70 pointer-events-none"
      >
        <Image
          src="/cloud.png"
          alt="Floating cloud"
          width={300}
          height={300}
          className="drop-shadow-lg"
        />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="hidden sm:block absolute top-20 sm:top-40 right-0 sm:right-10 z-0 opacity-60 pointer-events-none"
      >
        <Image
          src="/cloud.png"
          alt="Floating cloud"
          width={200}
          height={200}
          className="drop-shadow-lg"
        />
      </motion.div>
      
      <div className="relative z-10">
        <section className="relative  flex justify-center w-full min-h-[1150px]   sm:min-h-[1000px] md:min-h-[820px] max-w-7xl mx-auto px-4  mt-[-190px]  top-[-100]  sm:top-0   lg:mt-[-50px] md:py-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-full max-w-4xl"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Tagline - responsive text size */}
              <motion.div variants={fadeInUp} className="flex justify-center mb-4 sm:mb-6">
                <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-md">
                  <span className="text-[#6D48DE] text-lg sm:text-xl">[&nbsp;</span>
                  <span className="text-sm sm:text-lg md:text-xl font-medium">The Future of Intelligence</span>
                  <span className="text-[#6D48DE] text-lg sm:text-xl">&nbsp;]</span>
                </div>
              </motion.div>
              
              {/* Main title - responsive container */}
              <motion.div variants={fadeInUp} className="flex justify-center mb-6 sm:mb-8">
                <div className="w-full   max-w-md sm:max-w-lg   md:max-w-4xl">
                   <SplitText/>
                </div>
              </motion.div>
              
              {/* Info section - responsive layout */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-center items-center mb-8 sm:mb-10">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm w-full sm:w-auto max-w-xs">
                  <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
                    <FaCalendar className="text-blue-600 text-lg sm:text-xl" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base">Since 2020, 6 years</span>
                </div>
                
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm w-full sm:w-auto max-w-xs">
                  <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
                    <IoLocation className="text-blue-600 text-lg sm:text-xl" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base">Nirman Nagar, Jaipur</span>
                </div>
              </motion.div>
              
              {/* CTA buttons - responsive layout */}

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
                <Link href="/contact" passHref>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 rounded-lg px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto text-center text-white font-medium shadow-lg  transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Get Service
                  <FaArrowRight className="text-xs sm:text-sm" />
                </motion.button>
                </Link>
                
              </motion.div>
            </motion.div>
            
            {/* Bottom banner - fully responsive */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } }}
              className="absolute bottom-4 sm:bottom-6 left-0 right-0 mx-4 sm:mx-6 md:mx-auto w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] max-w-6xl   bg-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
                {/* Text - responsive sizing */}
                <div className="w-full lg:w-[277px] text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                    Elevate Your Brand Today!
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-white/90 font-normal">
                    Book Your Service Now
                  </p>
                </div>
                
                {/* Countdown - responsive container */}
                <div className="w-full lg:w-auto flex justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 w-full max-w-xs">
                    <h2 className="text-center font-bold text-white text-sm sm:text-base mb-2">
                      ✨Social media management, ads, content, and branding solutions..✨
                    </h2>
                  
                  </div>
                </div>
                
                {/* Location - responsive layout */}
                <div className="w-full lg:w-[300px] flex items-center justify-center lg:justify-start gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <IoLocation className="text-white text-2xl sm:text-3xl" />
                  </div>
                  <span className="text-white text-xs sm:text-sm">
                    1, Sagar, Shiv Shakti Nagar, <br /> Nirman Nagar, Jaipur, Rajasthan, 302019
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}