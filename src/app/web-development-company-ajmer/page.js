
import WebDevelopmentAjmer from '@/components/WebDevelopmentAjmer'
import React from 'react'
export const metadata = {
  title: "Web Development Company in Ajmer | SEOcial Media Solutions",
  description:
    "Build your online presence with SEOcial Media Solutions, the leading web development company in Ajmer. We provide custom website design, responsive development, e-commerce solutions, and digital strategies to grow your business.",
  keywords:
    "web development company Ajmer, website design Ajmer, responsive websites Ajmer, e-commerce development Ajmer, SEOcial Media Solutions, web development services Ajmer",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/web-development-company-ajmer",
  },
  openGraph: {
    title: "Web Development Company in Ajmer | SEOcial Media Solutions",
    description:
      "Hire SEOcial Media Solutions for expert web development in Ajmer. Services include custom website design, responsive development, and e-commerce solutions.",
    url: "https://seocialmedia.in/web-development-company-ajmer",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Ajmer OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Ajmer | SEOcial Media Solutions",
    description:
      "Professional web development services in Ajmer – custom website design, responsive development, and e-commerce solutions to grow your business.",
    images: ["https://seocialmedia.in/images/og-web-development.jpg"],
  },
};

function Home() {
  return (
    <WebDevelopmentAjmer />
  )
}

export default Home