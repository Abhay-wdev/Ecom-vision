
import SocialMediaServicesJaipur from '@/components/SocialMediaServicesJaipur'
import React from 'react'
export const metadata = {
  title: "Social Media Marketing Company in Jaipur | SEOcial Media Solutions",
  description:
    "Grow your brand with SEOcial Media Solutions, the leading social media marketing company in Jaipur. We provide Facebook, Instagram, LinkedIn, and Twitter marketing services to boost engagement and drive sales.",
  keywords:
    "social media marketing company Jaipur, SMM services Jaipur, Facebook marketing Jaipur, Instagram marketing Jaipur, LinkedIn marketing Jaipur, Twitter marketing Jaipur, digital marketing Jaipur",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/social-media-marketing-company-jaipur",
  },
  openGraph: {
    title: "Social Media Marketing Company in Jaipur | SEOcial Media Solutions",
    description:
      "Hire SEOcial Media Solutions for expert social media marketing in Jaipur. Increase brand awareness, engagement, and sales through strategic social campaigns.",
    url: "https://seocialmedia.in/social-media-marketing-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-smm.jpg",
        width: 1200,
        height: 630,
        alt: "Social Media Marketing Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Company in Jaipur | SEOcial Media Solutions",
    description:
      "Professional social media marketing services in Jaipur – Facebook, Instagram, LinkedIn, and Twitter marketing to grow your business.",
    images: ["https://seocialmedia.in/images/og-smm.jpg"],
  },
};

function Home() {
  return (
    <SocialMediaServicesJaipur />
  )
}

export default Home