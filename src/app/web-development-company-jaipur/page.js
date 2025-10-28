import WebDevelopment from '@/components/WebDevelopment'
import React from 'react'
export const metadata = {
  title: "Web Development Company in Jaipur | VIRAL nexus",
  description:
    "Build your online presence with VIRAL nexus, the leading web development company in Jaipur. We provide custom website design, responsive development, e-commerce solutions, and digital strategies to grow your business.",
  keywords:
    "web development company Jaipur, website design Jaipur, responsive websites Jaipur, e-commerce development Jaipur, VIRAL nexus, web development services Jaipur",
  authors: [{ name: "VIRAL nexus" }],
  publisher: "VIRAL nexus",
  robots: "index, follow",
  alternates: {
    canonical: "https://ecomvision.in/web-development-company-jaipur",
  },
  openGraph: {
    title: "Web Development Company in Jaipur | VIRAL nexus",
    description:
      "Hire VIRAL nexus for expert web development in Jaipur. Services include custom website design, responsive development, and e-commerce solutions.",
    url: "https://ecomvision.in/web-development-company-jaipur",
    siteName: "VIRAL nexus",
    images: [
      {
        url: "https://ecomvision.in/images/og-web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Jaipur | VIRAL nexus",
    description:
      "Professional web development services in Jaipur – custom website design, responsive development, and e-commerce solutions to grow your business.",
    images: ["https://ecomvision.in/images/og-web-development.jpg"],
  },
};

function Home() {
  return (
   <WebDevelopment />
  )
}

export default Home