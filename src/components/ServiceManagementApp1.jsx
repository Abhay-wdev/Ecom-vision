'use client';
import { useState } from 'react';

const ServiceManagementApp1 = () =>
{
    const [activeFeature, setActiveFeature] = useState(0);
    const [activePillar, setActivePillar] = useState(0);

    const features = [
        {
            title: "Real-Time Interaction Ecosystem",
            description: "Advanced communication system with AI-powered chat routing and rich media support.",
            tech: "WebSocket, Socket.IO, AI chatbot, Cloud Storage integration",
            workflow: [
                "Chat Routing: Messages analyzed by NLP → assigned to appropriate employee based on expertise & availability",
                "AI Chatbot: Understands intent and sentiment using NLP models, provides pre-filled responses",
                "Rich Media Support: Files uploaded → stored securely → virus/malware scanned",
                "Notifications: Priority-based push, email, or in-app notifications"
            ]
        },
        {
            title: "Advanced Tracking & Analytics",
            description: "Real-time monitoring and predictive analytics for data-driven decision making.",
            tech: "MongoDB/PostgreSQL, D3.js/Chart.js, Python AI scripts",
            workflow: [
                "Real-time logs capture all interactions and activities",
                "AI algorithms predict task completion time, delays, and resource bottlenecks",
                "Dashboards display service progress, client engagement metrics, employee productivity KPIs",
                "Alerts triggered when thresholds exceeded → notifications sent automatically"
            ]
        },
        {
            title: "Intelligent Automation",
            description: "Smart workflow automation powered by AI to streamline processes.",
            tech: "Node.js Cron jobs, Camunda workflow engine, AI ML models",
            workflow: [
                "Automated task assignments using AI → considers workload, skills, and deadlines",
                "Template generation based on historical data → stored in template library",
                "Automated email sequences, reminders, status updates, and survey triggers"
            ]
        },
        {
            title: "File & Media Management",
            description: "Secure cloud storage with AI-powered organization and search capabilities.",
            tech: "Cloud storage integration (AWS S3 / Google Drive), AI tagging (TensorFlow/OpenCV), ElasticSearch",
            workflow: [
                "Employees upload files → AI scans content → auto-tagged → duplicates removed",
                "Media organized into smart folders → searchable via natural language queries",
                "Version control ensures rollback capabilities for revisions"
            ]
        },
        {
            title: "Subscription & Payment Ecosystem",
            description: "Seamless billing and subscription management with automated invoicing.",
            tech: "Stripe/PayPal/Razorpay, Node.js/Express, Webhooks",
            workflow: [
                "Subscription plan selected → payment processed → webhook confirms → subscription activated",
                "Recurring billing, trial management, and usage-based billing automated",
                "Invoices generated automatically → delivered via email → stored for audit"
            ]
        },
        {
            title: "Admin Oversight Suite",
            description: "Comprehensive control panel for administrators with real-time monitoring.",
            tech: "React Dashboard + Material UI, Node.js backend, WebSocket",
            workflow: [
                "Admin manages users with role-based access → batch updates via API",
                "Tasks assigned → SLA compliance monitored → alerts sent for delays",
                "Dynamic category management → templates and pricing controlled centrally"
            ]
        },
        {
            title: "Client Experience Design",
            description: "Intuitive interface with AI-guided service selection and transparent tracking.",
            tech: "React/Next.js, AI Recommender, WebSocket notifications",
            workflow: [
                "Guided wizard for service selection → AI suggests best options",
                "Real-time progress updates → predictive delivery estimates",
                "Feedback & support managed via chatbot or live agent"
            ]
        },
        {
            title: "Employee Productivity Platform",
            description: "Optimized workspace with AI-powered task prioritization and performance tracking.",
            tech: "React + Tailwind CSS, Node.js + Socket.IO, Redis for session tracking",
            workflow: [
                "Task queue prioritized using AI → employee executes task → uploads validated automatically",
                "Performance metrics captured → dashboards updated in real-time",
                "Training, mentorship, and wellness features integrated for team development"
            ]
        },
        {
            title: "Event & Notification System",
            description: "Comprehensive scheduling and alert system with multi-channel delivery.",
            tech: "FullCalendar.js, Firebase Cloud Messaging, Twilio API",
            workflow: [
                "Event creation → resources assigned → conflict resolution handled automatically",
                "Notifications scheduled → personalized by urgency → real-time updates sent",
                "Event notes include text, images, videos, and collaborative editing"
            ]
        },
        {
            title: "Security & Compliance",
            description: "Enterprise-grade security with end-to-end encryption and regulatory compliance.",
            tech: "AES-256 encryption, JWT/MFA, GDPR/CCPA compliance tools",
            workflow: [
                "End-to-end encryption for all communication and storage",
                "Role-based access ensures only authorized actions",
                "Backup, audit trails, threat detection, and intrusion monitoring implemented"
            ]
        },
        {
            title: "Scalability & Customization",
            description: "Cloud-native architecture designed for growth and flexibility.",
            tech: "Cloud (AWS/Azure/GCP), Microservices (Docker/Kubernetes), CDN (Cloudflare)",
            workflow: [
                "Auto-scaling ensures high availability under heavy load",
                "Custom workflows created visually → API integration enables enterprise connectivity",
                "Global CDN ensures content delivery performance worldwide"
            ]
        },
        {
            title: "Implementation & Support",
            description: "Comprehensive onboarding and continuous support for long-term success.",
            tech: "Zendesk/Freshdesk for support, CI/CD for deployment, training portal",
            workflow: [
                "Dedicated success manager → guided onboarding",
                "Data migration → custom training → go-live support",
                "Continuous monitoring, updates, feedback integration, and user forums ensure platform evolution"
            ]
        }
    ];

    const pillars = [
        {
            title: "Admin Command Center",
            description: "Centralized control for administrators to manage services, users, templates, subscriptions, and analytics.",
            tech: "React Admin Dashboard with Chart.js/D3.js, Node.js/Express backend, MongoDB/PostgreSQL, WebSocket/Socket.IO",
            workflow: [
                "Admin logs in → SSO/MFA authentication verifies identity",
                "Dashboard loads widgets → live updates streamed via WebSockets",
                "Admin assigns tasks → triggers API → employee workspace updates immediately",
                "Reports generated → backend aggregates real-time logs → charts update dynamically"
            ]
        },
        {
            title: "Employee Workspace",
            description: "Efficient task execution, real-time collaboration, and content submission.",
            tech: "React + Redux + Tailwind CSS, Node.js/Express, Socket.IO, AWS S3 / Cloudinary, TensorFlow/PyTorch",
            workflow: [
                "Employee views assigned tasks → AI-prioritized based on deadlines, skills, and workload",
                "Selects task → workspace opens → chat with client/admin enabled via WebSocket",
                "Uploads files → files scanned for security → stored in cloud → auto-tagged by AI",
                "Task completed → validation engine checks for quality → client/admin notified in real-time"
            ]
        },
        {
            title: "Client Portal",
            description: "Self-service, transparency, and real-time updates on services.",
            tech: "React + Next.js (SSR), Node.js/Express + WebSocket + AI, MongoDB/PostgreSQL, AI/ML Recommender",
            workflow: [
                "Client selects service → wizard guides step-by-step → AI recommends templates & subscription tiers",
                "Service request submitted → backend triggers workflow → employee assigned automatically",
                "Real-time dashboard shows progress → WebSocket updates every milestone",
                "Feedback & queries handled by AI chatbot → escalates to live agent if needed"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
          
            

            {/* Key Features */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Key Features</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                        <p className="text-lg max-w-3xl mx-auto text-gray-600">
                            Our comprehensive platform offers everything you need to transform your service delivery.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Real-time chat & chatbot interaction</h3>
                            <p className="text-gray-600">Instant communication with AI-powered assistance for quick resolution.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Dynamic dashboards with predictive analytics</h3>
                            <p className="text-gray-600">Visualize data and gain insights with intelligent forecasting.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Automated template & workflow management</h3>
                            <p className="text-gray-600">Streamline processes with customizable templates and automated workflows.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Multi-format file handling</h3>
                            <p className="text-gray-600">Seamlessly manage documents, images, videos, and other media.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Secure subscription & billing ecosystem</h3>
                            <p className="text-gray-600">Automated billing and subscription management with enterprise-grade security.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Comprehensive role-based access and compliance tools</h3>
                            <p className="text-gray-600">Ensure data security and regulatory compliance with granular access controls.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology & Workflow */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Technology & Workflow</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                        <p className="text-lg max-w-3xl mx-auto text-gray-600">
                            Built with cutting-edge technologies to deliver a powerful, scalable, and secure platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-indigo-700">Frontend</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-indigo-100 text-indigo-700 rounded-full p-2 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">React/Next.js</h4>
                                        <p className="text-gray-600">Dynamic UI and server-side rendering (SSR) for fast loading</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-indigo-100 text-indigo-700 rounded-full p-2 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Redux</h4>
                                        <p className="text-gray-600">State management for consistent application behavior</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-indigo-100 text-indigo-700 rounded-full p-2 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Tailwind CSS</h4>
                                        <p className="text-gray-600">UI consistency and responsive design</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-indigo-700">Backend</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-indigo-100 text-indigo-700 rounded-full p-2 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Node.js/Express</h4>
                                        <p className="text-gray-600">REST APIs and server-side logic</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-indigo-100 text-indigo-700 rounded-full p-2 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">MongoDB/PostgreSQL</h4>
                                        <p className="text-gray-600">Data storage and management</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-indigo-100 text-indigo-700 rounded-full p-2 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Socket.IO</h4>
                                        <p className="text-gray-600">Real-time interactions and live updates</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                  
                </div>
            </section>

            {/* Platform Architecture: Three-Pillar System */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Platform Architecture</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                        <p className="text-lg max-w-3xl mx-auto text-gray-600">
                            Our three-pillar system ensures seamless integration between all stakeholders.
                        </p>
                    </div>

                    <div className="flex justify-center mb-8">
                        <div className="inline-flex bg-white rounded-lg shadow p-1">
                            {pillars.map((pillar, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activePillar === index ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                                    onClick={() => setActivePillar(index)}
                                >
                                    {pillar.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4 text-indigo-700">{pillars[activePillar].title}</h3>
                            <p className="text-gray-600 mb-6">{pillars[activePillar].description}</p>

                            <div className="mb-6">
                                <h4 className="font-semibold text-lg mb-3 text-gray-800">Technology Stack</h4>
                                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{pillars[activePillar].tech}</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-3 text-gray-800">Workflow</h4>
                                <ul className="space-y-3">
                                    {pillars[activePillar].workflow.map((step, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-700">{step}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Deep Dive */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Feature Deep Dive</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                        <p className="text-lg max-w-3xl mx-auto text-gray-600">
                            Explore the powerful features that make our platform a comprehensive solution for modern service delivery.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {features.map((feature, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFeature === index ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                onClick={() => setActiveFeature(index)}
                            >
                                {feature.title}
                            </button>
                        ))}
                    </div>

                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold mb-3 text-indigo-800">{features[activeFeature].title}</h3>
                        <p className="text-gray-700 mb-6">{features[activeFeature].description}</p>

                        <div className="mb-6">
                            <h4 className="font-semibold text-lg mb-3 text-indigo-700">Technology Stack</h4>
                            <p className="text-gray-700 bg-white p-4 rounded-lg shadow-sm">{features[activeFeature].tech}</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-3 text-indigo-700">Workflow & Working Details</h4>
                            <ul className="space-y-3">
                                {features[activeFeature].workflow.map((step, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">{step}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

           

             
        </div>
    );
};

export default ServiceManagementApp1;