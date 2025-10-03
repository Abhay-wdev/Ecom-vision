import App from "next/app";
import React from "react";

const  AppHero = () =>
{
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: `url("/images/apphero-back.png")`,
            }}
        >
            {/* Overlay for readability */}
            <div className="w-full bg-white/85 px-6 py-12 md:px-16 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Content */}
                    <div className="flex-1 max-w-xl text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                           Top App Development Company in Jaipur
                        </h1>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            SEOcial Media Solutions delivers premium mobile app development services in Jaipur.
                            From iOS and Android apps to cross-platform solutions, we create secure, scalable,
                            and user-friendly applications that help your business grow and engage customers effectively.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                                Full Code Ownership
                            </span>
                            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                                Custom Solutions
                            </span>
                            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                                Secure & Reliable
                            </span>
                            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                                Expert Support
                            </span>
                        </div>
                    </div>


                    {/* Image */}
                    <div className="flex-1 flex justify-center md:justify-end order-first md:order-last">
                        <img
                            src="/images/mobile-app-development.png"
                            alt="Service"
                            className="rounded-xl shadow-lg h-64 md:h-150 object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AppHero;
