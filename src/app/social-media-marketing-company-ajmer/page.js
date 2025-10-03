import SocialMediaServicesAjmer from '@/components/SocialMediaServicesAjmer'
import React from 'react'
export const metadata = {
  title: "Social Media Marketing Company in Ajmer | SEOcial Media Solutions",
  description:
    "Grow your brand with SEOcial Media Solutions, the leading social media marketing company in Ajmer. We offer Facebook, Instagram, LinkedIn, and Twitter marketing services to boost engagement and drive sales.",
  keywords:
    "social media marketing company Ajmer, SMM services Ajmer, Facebook marketing Ajmer, Instagram marketing Ajmer, LinkedIn marketing Ajmer, Twitter marketing Ajmer, digital marketing Ajmer",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/social-media-marketing-company-ajmer",
  },
  openGraph: {
    title: "Social Media Marketing Company in Ajmer | SEOcial Media Solutions",
    description:
      "Hire SEOcial Media Solutions for expert social media marketing in Ajmer. Increase brand awareness, engagement, and sales through strategic social campaigns.",
    url: "https://seocialmedia.in/social-media-marketing-company-ajmer",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-smm.jpg",
        width: 1200,
        height: 630,
        alt: "Social Media Marketing Ajmer OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Company in Ajmer | SEOcial Media Solutions",
    description:
      "Professional social media marketing services in Ajmer – Facebook, Instagram, LinkedIn, and Twitter marketing to grow your business.",
    images: ["https://seocialmedia.in/images/og-smm.jpg"],
  },
};

export default function Home() {
  return (
    <SocialMediaServicesAjmer />
  )
}
