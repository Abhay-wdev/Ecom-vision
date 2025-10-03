
import ContentWritingServicesJaipur from '@/components/ContentWritingServicesJaipur'
import React from 'react'
export const metadata = {
  title: "Top Content Writing Company in Jaipur | SEOcial Media Solutions",
  description:
    "Looking for the best content writing services in Jaipur? SEOcial Media Solutions provides high-quality website content, blogs, SEO content, and marketing materials to help your business grow.",
  keywords:
    "top content writing company Jaipur, professional content writers Jaipur, SEO content writing Jaipur, website content services Jaipur, blog writing services Jaipur, marketing content Jaipur",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/top-content-writing-company-jaipur",
  },
  openGraph: {
    title: "Top Content Writing Company in Jaipur | SEOcial Media Solutions",
    description:
      "Hire the best content writing company in Jaipur. SEOcial Media Solutions delivers SEO content, blogs, website copy, and marketing content tailored for your business.",
    url: "https://seocialmedia.in/top-content-writing-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-content-writing.jpg",
        width: 1200,
        height: 630,
        alt: "Content Writing Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Content Writing Company in Jaipur | SEOcial Media Solutions",
    description:
      "Professional content writing services in Jaipur – SEO content, blogs, website copy, and marketing content to grow your business.",
    images: ["https://seocialmedia.in/images/og-content-writing.jpg"],
  },
};

function Home() {
  return (
    <ContentWritingServicesJaipur />
  )
}

export default Home