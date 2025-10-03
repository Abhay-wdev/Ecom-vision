export default function AppDevelopmentProcess()
{

    const process = [
        { step: 1, title: "Planning", description: "We analyze your app idea, business goals, and target audience to create a clear roadmap." },
        { step: 2, title: "Design", description: "Our team crafts an intuitive UI/UX design that ensures a seamless user experience." },
        { step: 3, title: "Development", description: "We build your app using the latest technologies for iOS, Android, and cross-platform." },
        { step: 4, title: "Testing", description: "We conduct rigorous testing to ensure your app is bug-free, secure, and high-performing." },
        { step: 5, title: "Launch & Support", description: "We deploy your app to the stores and provide ongoing maintenance and updates." }
    ];

    return (
        <div>
            <div className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our App Development Process</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            At SEOcial Media Solutions, we follow a proven process to deliver world-class mobile apps
                            that are innovative, secure, and scalable.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Horizontal line for desktop */}
                        <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-blue-200 z-0"></div>
                        {/* Vertical line for mobile */}
                        <div className="block md:hidden absolute left-2 top-0 bottom-0 w-1 bg-blue-200 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                            {process.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex md:flex-col items-start md:items-center gap-4 relative"
                                >
                                    {/* Step Circle */}
                                    <div className="bg-blue-600 border-2 text-white rounded-full w-10 h-10 md:w-20 md:h-20 flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg z-10">
                                        {step.step}
                                    </div>

                                    {/* Step Title & Description */}
                                    <div className="text-left md:text-center">
                                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">{step.title}</h3>
                                        <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
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
