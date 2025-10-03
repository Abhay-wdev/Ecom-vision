'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Calendar, MapPin, Award } from 'lucide-react';
import Image from 'next/image';

export default function AppHeroSection()
{
    const slides = [
        {
            id: 1,
            image: '/images/service-management.jpg', // Replace with your hero image
            title: 'Service Management App',
            subtitle: 'Intelligent Ecosystem for Modern Service Delivery',
            description: 'Transform your service operations with AI-powered coordination, real-time collaboration, and automated workflows that elevate client experiences, empower employees, and give admins unprecedented control.',
            specialty: 'Real-Time Chat | AI Chatbot | Workflow Automation | Analytics Dashboards',
        },
        {
            id: 2,
            image: '/images/real-time-chat.jpg',
            imageMobile: '/images/real-time-chat.jpg',
            title: 'Real-Time Interaction & Communication',
            subtitle: 'Multi-Party Chat, Smart Notifications & Media Sharing',
            description: 'Seamlessly communicate with clients, employees, and admins with live chat, typing indicators, rich media sharing, intelligent routing, and AI-powered chatbot support.',
            specialty: 'WebSockets | Socket.IO | AI Chatbot | Cloud Storage Integration',
            scale: 1,
        },
        {
            id: 3,
            image: '/images/advance-tracking.jpg',
            title: 'Advanced Tracking & Analytics',
            subtitle: 'Data-Driven Insights for Service Performance',
            description: 'Monitor service progress, user behavior, employee productivity, and predictive KPIs through interactive dashboards and AI-powered analytics.',
            specialty: 'Real-Time Dashboards | Predictive Analytics | Heatmaps | KPI Tracking',
        },
        {
            id: 4,
            image: '/images/intellegent-automation.jpg',
            title: 'Intelligent Automation & Workflows',
            subtitle: 'Automate Tasks, Templates & Communication',
            description: 'Leverage AI-driven task assignment, template auto-generation, appointment scheduling, and automated feedback collection to streamline operations.',
            specialty: 'AI Workflow Engine | Automation Scripts | Email & Notification Automation',
        },
        {
            id: 5,
            image: '/images/clint-employ.jpg',
            title: 'Comprehensive Client & Employee Portals',
            subtitle: 'Empower Teams and Clients with Self-Service',
            description: 'Clients track service progress, manage subscriptions, and communicate in real-time. Employees receive AI-prioritized tasks, workflow guidance, and file management tools.',
            specialty: 'Client Portal | Employee Workspace | Task Management | File & Media Handling',
        },
        {
            id: 7,
            image: '/images/event-notifeaction.jpg',
            title: 'Event & Notification System',
            subtitle: 'Schedule, Notify, and Collaborate Effectively',
            description: 'Organize events, set reminders, attach multimedia notes, and send personalized notifications to stakeholders with real-time updates.',
            specialty: 'FullCalendar.js | Firebase Cloud Messaging | Twilio API | AI-Powered Reminders',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const slideInterval = 5000;
    const timerRef = useRef(null);

    useEffect(() =>
    {
        const updateWidth = () =>
        {
            if (containerRef.current)
            {
                setContainerWidth(containerRef.current.clientWidth);
            }
        };

        const checkScreenSize = () =>
        {
            setIsMobile(window.innerWidth < 640);
        };

        updateWidth();
        checkScreenSize();
        window.addEventListener('resize', updateWidth);
        window.addEventListener('resize', checkScreenSize);

        return () =>
        {
            window.removeEventListener('resize', updateWidth);
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    useEffect(() =>
    {
        if (containerWidth > 0 && !isHovered)
        {
            startAutoSlide();
        } else
        {
            stopAutoSlide();
        }

        return () => stopAutoSlide();
    }, [containerWidth, slides.length, isHovered]);

    const startAutoSlide = () =>
    {
        stopAutoSlide(); // Clear any existing timer
        timerRef.current = setInterval(() =>
        {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, slideInterval);
    };

    const stopAutoSlide = () =>
    {
        if (timerRef.current)
        {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    const handlePrev = () =>
    {
        stopAutoSlide();
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        if (!isHovered)
        {
            startAutoSlide();
        }
    };

    const handleNext = () =>
    {
        stopAutoSlide();
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        if (!isHovered)
        {
            startAutoSlide();
        }
    };

    const goToSlide = (index) =>
    {
        stopAutoSlide();
        setCurrentSlide(index);
        if (!isHovered)
        {
            startAutoSlide();
        }
    };

    const sliderStyle = {
        transform: `translateX(-${currentSlide * containerWidth}px)`,
        transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 0.5)',
        display: 'flex',
        width: `${slides.length * containerWidth}px`,
        height: '100%',
    };

    const slideStyle = {
        flexShrink: 0,
        width: containerWidth ? `${containerWidth}px` : '100%',
        height: '100%',
        position: 'relative',
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden"
            aria-label="Hero Section"
        >
            {containerWidth > 0 && (
                <div style={sliderStyle}>
                    {slides.map((slide) => (
                        <div key={slide.id} style={slideStyle}>
                            <div className="relative w-full h-full">
                                {/* Background Image */}
                                <div className="absolute inset-0 z-10">
                                    {isMobile && slide.imageMobile ? (
                                        <Image
                                            src={slide.imageMobile}
                                            alt={slide.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    ) : (
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent"></div>
                                </div>
                                {/* Content Overlay */}
                                <div
                                    className="absolute inset-0 z-20 flex items-center justify-start px-6 sm:px-12 lg:px-20"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    style={{ textShadow: '1px 0px 40px rgba(255, 255, 255, 0.7)' }}
                                >
                                    <div className="max-w-3xl pt-15 text-left animate-fadeIn">
                                        <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-300/30 mb-6">
                                            <Award className="w-4 h-4 text-teal-300 mr-2" />
                                            <span className="text-teal-200 text-sm font-medium">{slide.specialty}</span>
                                        </div>
                                        <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                                            <span className="block text-shadow text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200">
                                                {slide.title}
                                            </span>
                                        </h2>
                                        <h2 className="text-teal-200 text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 opacity-90">
                                            {slide.subtitle}
                                        </h2>
                                        <p className="text-white/90 text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-2xl">
                                            {slide.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {/* Navigation Buttons */}
            {/* Large screens: center vertically */}
            <button
                onClick={handlePrev}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="hidden sm:flex absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
                aria-label="Previous Slide"
            >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
            <button
                onClick={handleNext}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="hidden sm:flex absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
                aria-label="Next Slide"
            >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
            {/* Small screens: buttons at bottom */}
            <div className="flex sm:hidden absolute inset-x-0 bottom-6 justify-between px-6 z-20">
                <button
                    onClick={handlePrev}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                </button>
                <button
                    onClick={handleNext}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 group"
                    aria-label="Next Slide"
                >
                    <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                </button>
            </div>
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
                <div
                    className="h-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300"
                    style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
            </div>
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
            <h1 className="hidden">Top Client Management App | Automated Client Service Platform - SEOcial Media Solutions</h1>
        </section>
    );
}