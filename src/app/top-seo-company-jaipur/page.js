
import SeoJaipur from '@/components/SeoJaipur'
import React from 'react'
export const metadata = {
  title: "Top SEO Company in Jaipur | SEOcial Media Solutions",
  description:
    "Rank higher on Google with SEOcial Media Solutions, the top SEO company in Jaipur. We provide expert on-page, off-page, and local SEO services to boost your online visibility and grow your business.",
  keywords:
    "top SEO company Jaipur, SEO services Jaipur, local SEO Jaipur, on-page SEO Jaipur, off-page SEO Jaipur, digital marketing Jaipur, SEOcial Media Solutions",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/top-seo-company-jaipur",
  },
  openGraph: {
    title: "Top SEO Company in Jaipur | SEOcial Media Solutions",
    description:
      "Hire the top SEO company in Jaipur. SEOcial Media Solutions provides on-page, off-page, and local SEO services to improve your website’s rankings and visibility.",
    url: "https://seocialmedia.in/top-seo-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-seo-company.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Company Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top SEO Company in Jaipur | SEOcial Media Solutions",
    description:
      "Professional SEO services in Jaipur – on-page, off-page, and local SEO to help your business rank higher in search engines.",
    images: ["https://seocialmedia.in/images/og-seo-company.jpg"],
  },
};

function Home() {
  return (
    <SeoJaipur />
  )
}

export default Home