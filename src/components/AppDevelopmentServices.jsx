"use client";
import React, { useState } from 'react';


import AppHero from '@/components/AppHero';
import BrandFAQ from '@/components/BrandFAQ';
import AppDevelopmentProcess from '@/components/AppDevlopmentProcess';
import Link from 'next/link';





const AppDevelopmentServices = () =>
{
    const [activeCategory, setActiveCategory] = useState('ecommerce');
    const [showDetails, setShowDetails] = useState(false);

    const categories = [
        {
            id: 'ecommerce',
            name: 'E-Commerce & Shopping Apps',
            icon: '🛒',
            description: 'Build powerful online stores with seamless shopping experiences, secure payment gateways, and inventory management.',
            fullTitle: "E-Commerce & Shopping Apps – Take Your Business Online with Ease",
            fullDescription: "In today's fast-paced digital world, having an online store is no longer optional—it's essential for businesses that want to thrive and reach a global audience. Consumers prefer the convenience of shopping from their smartphones, and businesses need powerful, secure, and engaging platforms to meet this demand. Our E-Commerce & Shopping App Development Services are designed to help businesses of all sizes build feature-rich, user-friendly, and scalable mobile applications that deliver a seamless shopping experience from browsing to checkout. Whether you're a small retailer, a growing brand, or an enterprise looking to dominate the online marketplace, we create apps that make your business stand out.",
            features: [
                "Stunning & User-Friendly Interface: First impressions matter! We craft visually appealing, easy-to-navigate designs that make shopping a delight. With responsive layouts, clean design elements, and smooth navigation, your customers will love exploring your app on any device.",
                "Secure & Multiple Payment Options: Security and flexibility are at the heart of online transactions. Our apps come with Multiple Payment Gateways: Credit/Debit Cards, UPI, Net Banking, Wallets, PayPal, Stripe, etc., End-to-End Encryption: Ensuring safe and secure transactions for every customer, and Fraud Detection & Protection: Advanced systems to keep your business and customers secure.",
                "Smart Product Management System: Managing your inventory has never been easier! Our powerful admin dashboard allows you to Add, edit, or remove products instantly, Organize products into categories and subcategories, Monitor inventory levels and manage stock in real-time, and Update pricing, discounts, and offers effortlessly.",
                "Smooth Shopping Cart & Checkout Process: A complicated checkout process can kill sales. That's why we ensure Quick Add-to-Cart functionality, One-Click Checkout for faster purchases, Guest Checkout for hassle-free transactions, and Discount Coupons & Promo Code Integration to boost conversions.",
                "Push Notifications & Real-Time Offers: Stay connected with your customers by sending Exclusive Deals & Discounts, Flash Sale Alerts, and Order Updates & Delivery Notifications. Push notifications are a proven way to increase customer engagement and repeat sales.",
                "Wishlist & Favorites: Allow your customers to save their favorite items for later. This feature increases user engagement, reduces cart abandonment, and improves overall sales.",
                "Order Tracking & History: Give your customers full control over their purchases with Real-Time Order Tracking – See exactly where their order is, Order History – Access previous purchases anytime, and Easy Reorder Option – Repeat previous orders with a single click.",
                "Multi-Vendor & Marketplace Support (Optional): Want to build an Amazon or Flipkart-style marketplace? We provide multi-vendor functionality, enabling multiple sellers to showcase their products on your platform. Features include Vendor Registration & Management, Commission Settings & Earnings Reports, and Separate Vendor Dashboards for easy product uploads and order handling."
            ]
        },
        {
            id: 'healthcare',
            name: 'Healthcare & Telemedicine Apps',
            icon: '🏥',
            description: 'Revolutionary healthcare solutions connecting patients and providers through secure digital platforms.',
            fullTitle: "Healthcare & Telemedicine Apps – Transform the Future of Healthcare",
            fullDescription: "In today's fast-paced world, patients demand convenience, quick access to doctors, and personalized healthcare solutions. Traditional healthcare services often face challenges like long waiting times, physical visits, and limited accessibility. This is where Healthcare & Telemedicine Apps come into play, providing virtual healthcare solutions that bridge the gap between patients and medical professionals. Our Healthcare & Telemedicine App Development Services empower clinics, hospitals, and healthcare startups to offer secure, user-friendly, and feature-rich applications that ensure quality care, anytime and anywhere. Whether you want a simple appointment booking app or a complete telehealth platform with video consultations, we build solutions that put healthcare in the palm of your hand.",
            features: [
                "Intuitive & Easy-to-Use Interface: Healthcare should be stress-free. We design apps with clean, simple, and accessible layouts for patients of all age groups, ensuring Easy navigation for booking appointments, accessing reports, and consulting doctors, and Accessible design for visually impaired and senior patients.",
                "Secure Video & Audio Consultations: Deliver real-time telemedicine services with HD video consultations, audio calls, and instant chat features for virtual doctor-patient interactions. We ensure zero lag, secure communication, and user-friendly experience.",
                "Appointment Scheduling & Calendar Integration: Simplify appointment booking with Real-time doctor availability, One-click booking for patients, Automated reminders & notifications to reduce no-shows, and Integration with Google/Apple Calendar for easy scheduling.",
                "Digital Prescription & Medical Records Management: Say goodbye to paperwork! Our apps enable Digital prescriptions shared instantly with patients, Electronic Health Records (EHR) for storing patient history securely, and Cloud-based storage for easy access to lab reports and medical documents.",
                "Online Payments & Insurance Integration: Allow patients to pay securely via credit/debit cards, UPI, wallets, or integrated health insurance coverage options. All transactions are encrypted for maximum security.",
                "Push Notifications & Health Reminders: Engage patients with Appointment reminders, Medication alerts, and Health tips & wellness updates.",
                "Pharmacy & Lab Integration (Optional): Provide end-to-end healthcare services by integrating Online medicine ordering, Diagnostic lab test bookings, and Home sample collection scheduling.",
                "AI-Powered Features & Advanced Tools (Optional): Take your healthcare app to the next level with AI-based symptom checker & chatbot for instant support, Voice recognition & speech-to-text prescriptions, Remote patient monitoring for chronic care management, and Wearable device integration for tracking health vitals."
            ]
        },
        {
            id: 'food',
            name: 'Food Delivery & Restaurant Apps',
            icon: '🍔',
            description: 'Complete food delivery solutions with real-time tracking and seamless ordering experiences.',
            fullTitle: "Food Delivery & Restaurant Apps – Delivering Taste at Your Customers' Doorstep",
            fullDescription: "The food industry is evolving rapidly, and customers today demand convenience, speed, and quality service when it comes to ordering food. Whether you own a single restaurant, a chain, or want to launch an UberEats or Zomato-style platform, having a feature-rich Food Delivery & Restaurant App is the key to success in this competitive market. Our Food Delivery & Restaurant App Development Services help businesses streamline operations, increase sales, and deliver exceptional customer experiences through powerful, user-friendly, and scalable mobile apps. From ordering to real-time delivery tracking, we make the entire process seamless for your customers.",
            features: [
                "Attractive & User-Friendly Interface: Your customers deserve a delicious experience from the first tap! We design apps that are Clean and visually appealing with high-quality food images, and Easy to navigate for browsing menus, customizing orders, and making payments.",
                "Smart Menu & Customization Options: Give your customers full control of their order with Interactive menus with detailed descriptions and images, Dish customization (add/remove ingredients, spice levels, etc.), and Special instructions option for personalized dining experiences.",
                "Quick & Secure Ordering System: A fast and frictionless ordering process to increase conversions with One-click reordering of favorite meals, Cart management for multiple items, and Scheduled orders for later delivery.",
                "Multiple & Secure Payment Options: Offer flexibility and trust with Credit/Debit Cards, UPI, Wallets, Net Banking, Cash on Delivery (COD) option, and Encrypted transactions for complete security.",
                "Real-Time Order Tracking & Live Updates: Keep your customers informed with Order status updates from preparation to delivery, Live GPS tracking of delivery partners, and Estimated delivery time notifications.",
                "Push Notifications & Promotions: Boost customer engagement and sales with Personalized offers & discounts, Festival or weekend deals, and Order status alerts for timely updates.",
                "Loyalty Programs & Rewards (Optional): Build customer loyalty through Reward points on every order and Discount coupons & referral bonuses.",
                "Advanced Admin & Restaurant Dashboard: Manage your business effortlessly with Restaurant management (menu, prices, inventory), Order tracking and analytics, and Delivery partner management.",
                "Multi-Restaurant & Marketplace Support (Optional): Planning to launch a Swiggy, Zomato, or UberEats-style platform? We offer Multi-restaurant listings with individual menus, Separate dashboards for restaurants and delivery partners, and Commission management for each restaurant.",
                "Advanced Features (Optional): AI-powered recommendations for personalized food suggestions and Voice ordering & chatbots for quick ordering."
            ]
        },
        {
            id: 'taxi',
            name: 'Taxi & Ride-Hailing Apps',
            icon: '🚕',
            description: 'Advanced ride-hailing platforms with real-time tracking and secure payment systems.',
            fullTitle: "Taxi & Ride-Hailing Apps – Drive Your Business to Success",
            fullDescription: "In today's fast-moving world, people want quick, reliable, and affordable transportation solutions at their fingertips. Taxi & Ride-Hailing apps have revolutionized the way people travel by providing on-demand, cashless, and real-time ride booking services. If you want to launch a taxi app like Uber, Lyft, or Ola, or build a custom ride-hailing platform for your fleet business, we've got you covered. Our Taxi & Ride-Hailing App Development Services are designed to deliver powerful, user-friendly, and scalable apps for passengers, drivers, and admins. From real-time ride booking to secure payments, our apps ensure seamless experiences for all stakeholders.",
            features: [
                "Attractive & Easy-to-Use Interface: The first impression matters! Our apps come with Clean and intuitive design for effortless booking, Simple navigation for both drivers and passengers, and Responsive layout for iOS and Android devices.",
                "Quick Ride Booking & Scheduling: Offer your users instant and scheduled booking options with One-tap booking for immediate rides, Schedule rides in advance for planned trips, and Ride estimates for time and fare before booking.",
                "Real-Time GPS Tracking & Navigation: Ensure transparency and convenience with Live driver tracking for passengers, Optimized routes & navigation for drivers, and Estimated Time of Arrival (ETA) updates.",
                "Multiple Payment Options: Provide secure and flexible payment methods with Credit/Debit Cards, UPI, Wallets, and Net Banking, Cash on Delivery (COD) option, and Digital receipts for every ride.",
                "Driver & Passenger Profiles: Build trust and safety with Verified profiles with ID checks, Ratings & Reviews system for both drivers and riders, and Ride history and past trips for easy access.",
                "Fare Calculation & In-App Wallet: Offer accurate and transparent pricing with Automated fare calculation based on distance and time, Dynamic pricing (surge rates) during peak hours, and In-app wallet for easy payments and refunds.",
                "Push Notifications & Ride Alerts: Keep users updated with Booking confirmations and ride status, Driver arrival alerts, and Promotional offers and discounts.",
                "SOS & Safety Features: Safety is our top priority! We include Emergency SOS button for instant help, Ride-sharing option to share live location with family/friends, and In-app chat and call support for immediate assistance.",
                "Advanced Admin Dashboard: Manage your ride-hailing business effortlessly with Driver management (onboarding, verification, performance tracking), Passenger management and trip details, Commission and earning reports, and Real-time analytics & insights.",
                "Multi-Vehicle & Service Options (Optional): Expand your business with multiple categories: Standard cars, luxury cars, bikes, auto-rickshaws, Outstation rides, rentals, and ride-pooling options."
            ]
        },
        {
            id: 'education',
            name: 'Education & eLearning Apps',
            icon: '🎓',
            description: 'Interactive learning platforms with virtual classrooms and personalized educational experiences.',
            fullTitle: "Education & eLearning Apps – Transform the Way You Learn",
            fullDescription: "Education is no longer confined to classrooms. With the rise of digital learning platforms, students and professionals are now embracing online education, interactive courses, and virtual classrooms. If you want to launch an eLearning app like Byju's, Coursera, or Udemy, or build a custom solution for schools, colleges, or training institutes, we've got the perfect solution for you. Our Education & eLearning App Development Services help businesses, educators, and institutions deliver engaging, accessible, and personalized learning experiences to learners anytime, anywhere. From live classes to AI-powered assessments, our apps make education simpler, smarter, and more effective.",
            features: [
                "Modern & Intuitive User Interface: First impressions matter in learning apps. We design Clean and easy-to-navigate layouts for all age groups, and Attractive design with engaging visuals to boost focus and retention.",
                "Live Classes & Video Conferencing: Enable real-time teaching and interaction with HD video streaming for live sessions, Virtual classrooms with screen sharing and whiteboards, and Teacher-student chat and Q&A features.",
                "Course Management System: Make it easy for educators to create, manage, and deliver content with Upload video lessons, PDFs, quizzes, and assignments, Organize content into modules and chapters, and Drip content feature for scheduled learning.",
                "Personalized Learning Experience: Keep learners engaged with AI-powered recommendations based on learning patterns, Progress tracking and performance analytics, and Adaptive tests for customized difficulty levels.",
                "Gamification & Interactive Learning: Make learning fun and engaging with Badges, leaderboards, and rewards for achievements, Interactive quizzes and flashcards, and Virtual simulations for practical learning.",
                "Secure Online Payments & Subscriptions: Monetize your app easily with One-time course purchases, Subscription plans (monthly/annual), and Encrypted transactions for maximum security.",
                "Offline Learning Mode: Allow users to download lessons and access them offline, so they can learn anytime without internet connectivity.",
                "Push Notifications & Reminders: Send timely updates for Upcoming classes, Assignment deadlines, and New course launches and offers.",
                "Advanced Features (Optional): AI Tutors & Chatbots for instant support, Voice-enabled learning for visually impaired students, and Augmented Reality (AR) & Virtual Reality (VR) for immersive learning experiences."
            ]
        },
        {
            id: 'fitness',
            name: 'Fitness & Lifestyle Apps',
            icon: '💪',
            description: 'Comprehensive health and wellness solutions with activity tracking and personalized coaching.',
            fullTitle: "Fitness & Lifestyle Apps Development",
            fullDescription: "In today's fast-paced world, fitness and wellness are no longer just trends—they have become a necessity. People are actively seeking digital solutions to maintain a healthy lifestyle, track their fitness goals, and improve their overall well-being. This is where Fitness & Lifestyle Apps come into play. These apps combine technology with health, offering personalized experiences that empower users to live better, healthier lives. At [Your Company Name], we specialize in creating feature-rich, intuitive, and engaging Fitness & Lifestyle Apps that cater to diverse user needs. Whether you want to build a simple workout tracker or a comprehensive health and lifestyle platform, our development team ensures your app is scalable, secure, and user-friendly.",
            features: [
                "User Profiles & Personalization: Customized diet and workout plans based on user preferences, age, and fitness goals.",
                "Workout Plans & Video Tutorials: Guided exercises, video demonstrations, and real-time form correction.",
                "Diet & Nutrition Tracking: Calorie counters, meal planners, and healthy recipe suggestions.",
                "Activity Tracking: Steps, distance, calories burned, and active minutes tracking.",
                "Integration with Wearable Devices: Sync with Apple Watch, Fitbit, Google Fit, and other fitness trackers.",
                "Real-Time Coaching & Live Classes: One-on-one personal trainer sessions or group workout classes.",
                "Community & Social Sharing: In-app forums, challenges, and leaderboards to keep users motivated.",
                "Push Notifications & Reminders: Timely alerts for workouts, hydration, and meal times.",
                "Progress Reports & Analytics: Detailed health and fitness reports with graphs and charts.",
                "Gamification: Reward points, badges, and achievements for consistent performance.",
                "Advanced Features: AI-Powered Personalization, AR/VR Workouts, Mental Wellness Modules, E-Commerce Integration, Subscription & Monetization Options"
            ],
            whyInDemand: [
                "Growing Health Awareness: People are now more conscious of their health, fitness, and mental well-being than ever before.",
                "Remote Fitness Solutions: Post-pandemic, users prefer working out from home with professional guidance.",
                "Personalization: Modern users expect personalized diet plans, workout routines, and lifestyle tips.",
                "Integration with Wearables: Devices like smartwatches and fitness bands have boosted demand for apps that sync seamlessly."
            ],
            benefits: [
                "Revenue Generation: Subscription plans, ads, and in-app purchases.",
                "Brand Loyalty: Engage customers through personalized content.",
                "Scalability: Easily add new features like diet plans, yoga sessions, or mental health tools.",
                "Data Insights: Get valuable user data for business growth."
            ],
            industries: [
                "Gyms & Fitness Centers",
                "Personal Trainers",
                "Yoga & Meditation Studios",
                "Health Coaches & Nutritionists",
                "Lifestyle Brands & Influencers"
            ]
        }
    ];

    const faqItems = [
        {
            question: "What makes SEOcial Media Solutions the best app development company in Jaipur?",
            answer: "We provide end-to-end custom mobile app development services tailored to your business goals. Our expert developers build secure, scalable, and user-friendly apps for iOS, Android, and cross-platform solutions using cutting-edge technologies."
        },
        {
            question: "How long does it take to develop a mobile app?",
            answer: "The development timeline depends on the app's complexity and features. A basic app typically takes 4–8 weeks, while advanced apps like e-commerce, food delivery, or healthcare solutions may take 10–16 weeks."
        },
        {
            question: "What types of apps do you develop?",
            answer: "We develop a wide range of apps including E-Commerce & Shopping Apps, Healthcare & Telemedicine Apps, Food Delivery Apps, Taxi & Ride-Hailing Apps, Education & eLearning Apps, and Fitness & Lifestyle Apps."
        },
        {
            question: "How much does it cost to develop a mobile app in Jaipur?",
            answer: "App development cost varies based on features, design, and platform (iOS, Android, or both). We offer affordable and flexible pricing plans for startups, SMEs, and enterprises."
        },
        {
            question: "Will my app be secure and user-friendly?",
            answer: "Yes! We follow strict security measures including data encryption, secure payment gateways, and user authentication. Our apps are designed with a clean, intuitive interface for the best user experience."
        },
        {
            question: "Do you provide app maintenance and support?",
            answer: "Absolutely. We offer ongoing support, bug fixing, regular updates, and feature enhancements to keep your app performing at its best."
        },
        {
            question: "Can you integrate advanced features like AI, payment gateways, and real-time tracking?",
            answer: "Yes. We integrate advanced features such as AI-based recommendations, multiple payment gateways, GPS tracking, push notifications, chat support, and more to give your app a competitive edge."
        },
        {
            question: "Do you develop cross-platform apps?",
            answer: "Yes! We build apps for Android, iOS, and cross-platform using technologies like React Native and Flutter for maximum reach and performance."
        }
    ];

    const getCategoryContent = (categoryId) =>
    {
        const category = categories.find(cat => cat.id === categoryId);
        if (!category) return null;
        return {
            title: category.fullTitle,
            description: category.fullDescription,
            features: category.features,
            whyInDemand: category.whyInDemand,
            benefits: category.benefits,
            industries: category.industries
        };
    };

    const activeContent = getCategoryContent(activeCategory);

    const handleLearnMore = (categoryId) =>
    {
        setActiveCategory(categoryId);
        setShowDetails(true);
        // Scroll to details section
        setTimeout(() =>
        {
            document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleBackToGrid = () =>
    {
        setShowDetails(false);
        // Scroll to top of grid
        setTimeout(() =>
        {
            document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <>
            <AppHero />

            <div className="min-h-screen py-6 sm:py-8 px-3 sm:px-4 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Services Grid Section */}
                    {!showDetails && (
                        <section id="services-grid" className="mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-2">Our App Development Services</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {categories.map((category) => (
                                    <div
                                        key={category.id}
                                        className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col"
                                    >
                                        <div className="p-5 sm:p-6 flex-grow flex flex-col">
                                            <div className="flex justify-center mb-3 sm:mb-4">
                                                <div className="text-4xl sm:text-5xl">{category.icon}</div>
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-center text-gray-900 mb-2 sm:mb-3">{category.name}</h3>
                                            <p className="text-gray-600 text-center mb-4 sm:mb-6 flex-grow">{category.description}</p>
                                            <div className="text-center mt-auto">
                                                <button
                                                    onClick={() => handleLearnMore(category.id)}
                                                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition duration-300 text-sm sm:text-base w-full sm:w-auto"
                                                >
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Detailed View Section */}
                    {showDetails && activeContent && (
                        <section id="details-section" className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 sm:mb-16">
                            <div className="p-4 sm:p-6 md:p-8">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">{activeContent.title}</h2>

                                    <button
                                        onClick={handleBackToGrid}
                                        className="flex items-center justify-center bg-blue-200 py-2 px-4 font-bold rounded text-indigo-600 hover:text-indigo-800 transition-colors w-full sm:w-auto"
                                    >
                                        <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        Close
                                    </button>

                                </div>
                                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">{activeContent.description}</p>

                                <div className="mb-8 sm:mb-10">
                                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Key Features</h3>
                                    <div className="space-y-3 sm:space-y-4">
                                        {activeContent.features.map((feature, index) => (
                                            <div key={index} className="flex items-start">
                                                <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 sm:mt-1">
                                                    <svg className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {activeContent.whyInDemand && (
                                    <div className="mb-8 sm:mb-10">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Why These Apps Are In Demand</h3>
                                        <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                                            {activeContent.whyInDemand.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeContent.benefits && (
                                    <div className="mb-8 sm:mb-10">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Business Benefits</h3>
                                        <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                                            {activeContent.benefits.map((benefit, index) => (
                                                <li key={index}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeContent.industries && (
                                    <div className="mb-8 sm:mb-10">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Industries We Serve</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                                            {activeContent.industries.map((industry, index) => (
                                                <div key={index} className="bg-gray-50 rounded-lg p-3 text-gray-700 text-sm sm:text-base">
                                                    {industry}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="bg-indigo-50 rounded-xl p-4 sm:p-6 border border-indigo-100">
                                    <h3 className="text-base sm:text-lg font-semibold text-indigo-800 mb-2">Ready to get started?</h3>
                                    <p className="text-indigo-700 mb-3 sm:mb-4 text-sm sm:text-base">Contact us today to discuss your project requirements.</p>
                                    <Link href={"/contact"}  >
                                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition duration-300 w-full sm:w-auto text-sm sm:text-base">
                                            Request a Quote
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </div>

            <AppDevelopmentProcess />
            <BrandFAQ faqItems={faqItems} />
        </>
    );
};

export default AppDevelopmentServices;