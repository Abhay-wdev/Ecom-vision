
import GoogleBusinessServices from '@/components/GoogleBusinessServices'
import React from 'react'
export const metadata = {
  title: "Google Business Profile Services in Jaipur | SEOcial Media Solutions",
  description:
    "Boost your local presence with SEOcial Media Solutions, offering expert Google Business Profile management in Jaipur. Optimize your listings, attract more customers, and enhance online visibility.",
  keywords:
    "Google Business Profile services Jaipur, Google My Business Jaipur, local SEO Jaipur, business listing management Jaipur, online visibility Jaipur, SEOcial Media Google Business Profile",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/google-business-profile-services-jaipur",
  },
  openGraph: {
    title: "Google Business Profile Services in Jaipur | SEOcial Media Solutions",
    description:
      "Manage and optimize your Google Business Profile in Jaipur with SEOcial Media Solutions. Increase customer engagement and grow your local business online.",
    url: "https://seocialmedia.in/google-business-profile-services-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-google-business.jpg",
        width: 1200,
        height: 630,
        alt: "Google Business Profile Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Business Profile Services in Jaipur | SEOcial Media Solutions",
    description:
      "Enhance your local SEO and online visibility with professional Google Business Profile management services in Jaipur.",
    images: ["https://seocialmedia.in/images/og-google-business.jpg"],
  },
};

function Home() {
  return (
    <GoogleBusinessServices />
  )
}

export default Home