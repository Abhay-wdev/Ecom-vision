
import SocialMediaServices from '@/components/SocialMediaServices'
import React from 'react'
export const metadata = {
  title: "Social Media Marketing in Jaipur | SEOcial Media Solutions",
  description:
    "Boost your brand’s online presence with SEOcial Media Solutions in Jaipur. We provide expert social media marketing services across Facebook, Instagram, LinkedIn, and Twitter to increase engagement and drive business growth.",
  keywords:
    "social media marketing Jaipur, SMM services Jaipur, Facebook marketing Jaipur, Instagram marketing Jaipur, LinkedIn marketing Jaipur, Twitter marketing Jaipur, digital marketing Jaipur",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/social-media-marketing-jaipur",
  },
  openGraph: {
    title: "Social Media Marketing in Jaipur | SEOcial Media Solutions",
    description:
      "Get professional social media marketing in Jaipur with SEOcial Media Solutions. Grow your business with Facebook, Instagram, LinkedIn, and Twitter campaigns.",
    url: "https://seocialmedia.in/social-media-marketing-jaipur",
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
    title: "Social Media Marketing in Jaipur | SEOcial Media Solutions",
    description:
      "Expert social media marketing in Jaipur – Facebook, Instagram, LinkedIn, and Twitter campaigns to grow your business online.",
    images: ["https://seocialmedia.in/images/og-smm.jpg"],
  },
};

function Home() {
  return (
    <SocialMediaServices />
  )
}

export default Home