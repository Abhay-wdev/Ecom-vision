
import ContentWritingServicesAjmer from '@/components/ContentWritingServicesAjmer'
import React from 'react'
export const metadata = {
  title: "Best Content Writing Company in Ajmer | SEOcial Media Solutions",
  description:
    "Looking for professional content writing services in Ajmer? SEOcial Media Solutions provides high-quality SEO content, blogs, website copy, and marketing content tailored to your business.",
  keywords:
    "content writing company Ajmer, professional content writers Ajmer, SEO content writing Ajmer, website content services Ajmer, blog writing services Ajmer, marketing content Ajmer",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/content-writing-company-ajmer",
  },
  openGraph: {
    title: "Content Writing Company in Ajmer | SEOcial Media Solutions",
    description:
      "Hire expert content writers in Ajmer for SEO blogs, website content, and marketing materials. Grow your business with quality content.",
    url: "https://seocialmedia.in/content-writing-company-ajmer",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-content-writing.jpg",
        width: 1200,
        height: 630,
        alt: "Content Writing Ajmer OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Writing Company in Ajmer | SEOcial Media Solutions",
    description:
      "Professional content writing services in Ajmer – blogs, website copy, SEO content, and marketing materials to boost your business.",
    images: ["https://seocialmedia.in/images/og-content-writing.jpg"],
  },
};

function Home() {
  return (
    <ContentWritingServicesAjmer />
  )
}

export default Home