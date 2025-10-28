
import SocialMediaServices from '@/components/SocialMediaServices'
import React from 'react'
export const metadata = {
  title: "Social Media Marketing in Jaipur | VIRAL nexus",
  description:
    "Boost your brand’s online presence with VIRAL nexus in Jaipur. We provide expert social media marketing services across Facebook, Instagram, LinkedIn, and Twitter to increase engagement and drive business growth.",
  keywords:
    "social media marketing Jaipur, SMM services Jaipur, Facebook marketing Jaipur, Instagram marketing Jaipur, LinkedIn marketing Jaipur, Twitter marketing Jaipur, digital marketing Jaipur",
  authors: [{ name: "VIRAL nexus" }],
  publisher: "VIRAL nexus",
  robots: "index, follow",
  alternates: {
    canonical: "https://ecomvision.in/social-media-marketing-jaipur",
  },
  openGraph: {
    title: "Social Media Marketing in Jaipur | VIRAL nexus",
    description:
      "Get professional social media marketing in Jaipur with VIRAL nexus. Grow your business with Facebook, Instagram, LinkedIn, and Twitter campaigns.",
    url: "https://ecomvision.in/social-media-marketing-jaipur",
    siteName: "VIRAL nexus",
    images: [
      {
        url: "https://ecomvision.in/images/og-smm.jpg",
        width: 1200,
        height: 630,
        alt: "Social Media Marketing Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing in Jaipur | VIRAL nexus",
    description:
      "Expert social media marketing in Jaipur – Facebook, Instagram, LinkedIn, and Twitter campaigns to grow your business online.",
    images: ["https://ecomvision.in/images/og-smm.jpg"],
  },
};

function Home() {
  return (
    <SocialMediaServices />
  )
}

export default Home