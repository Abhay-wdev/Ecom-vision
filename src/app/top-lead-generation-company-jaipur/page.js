
import GoogleServicesJaipur from '@/components/GoogleServicesJaipur'
import React from 'react'
export const metadata = {
  title: "Top Lead Generation Company in Jaipur | SEOcial Media Solutions",
  description:
    "Boost your business with SEOcial Media Solutions, the top lead generation company in Jaipur. We provide B2B & B2C lead generation, email campaigns, and sales prospecting to increase revenue.",
  keywords:
    "top lead generation company Jaipur, lead generation services Jaipur, B2B lead generation Jaipur, B2C lead generation Jaipur, sales leads Jaipur, marketing leads Jaipur",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/top-lead-generation-company-jaipur",
  },
  openGraph: {
    title: "Top Lead Generation Company in Jaipur | SEOcial Media Solutions",
    description:
      "Hire SEOcial Media Solutions for expert lead generation in Jaipur. B2B & B2C leads, email campaigns, and sales prospecting to grow your business.",
    url: "https://seocialmedia.in/top-lead-generation-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-lead-generation.jpg",
        width: 1200,
        height: 630,
        alt: "Lead Generation Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Lead Generation Company in Jaipur | SEOcial Media Solutions",
    description:
      "Professional lead generation services in Jaipur – B2B & B2C leads, email campaigns, and sales prospecting to boost your business.",
    images: ["https://seocialmedia.in/images/og-lead-generation.jpg"],
  },
};

function Home() {
  return (
   <GoogleServicesJaipur /> 
  )
}

export default Home