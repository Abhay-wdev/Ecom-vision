import WebDevelopment from '@/components/WebDevelopment'
import React from 'react'
export const metadata = {
  title: "Web Development Company in Jaipur | SEOcial Media Solutions",
  description:
    "Build your online presence with SEOcial Media Solutions, the leading web development company in Jaipur. We provide custom website design, responsive development, e-commerce solutions, and digital strategies to grow your business.",
  keywords:
    "web development company Jaipur, website design Jaipur, responsive websites Jaipur, e-commerce development Jaipur, SEOcial Media Solutions, web development services Jaipur",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/web-development-company-jaipur",
  },
  openGraph: {
    title: "Web Development Company in Jaipur | SEOcial Media Solutions",
    description:
      "Hire SEOcial Media Solutions for expert web development in Jaipur. Services include custom website design, responsive development, and e-commerce solutions.",
    url: "https://seocialmedia.in/web-development-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Jaipur | SEOcial Media Solutions",
    description:
      "Professional web development services in Jaipur – custom website design, responsive development, and e-commerce solutions to grow your business.",
    images: ["https://seocialmedia.in/images/og-web-development.jpg"],
  },
};

function Home() {
  return (
   <WebDevelopment />
  )
}

export default Home