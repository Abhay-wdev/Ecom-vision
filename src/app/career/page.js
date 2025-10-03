import CareerPage from '@/components/CareerPage'
import React from 'react'
export const metadata = {
  title: " Join Our Digital Marketing & Web Development Team in Jaipur",
  description:
    "Explore exciting career opportunities at SEOcial Media, Jaipur's leading website development and digital marketing company. Join our team of creative professionals and grow your career with us.",
  keywords:
    "SEOcial Media careers, jobs in Jaipur digital marketing, web development jobs Jaipur, SEO company jobs, social media marketing careers, content writing jobs Jaipur, join SEOcial Media, digital marketing team Jaipur",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/career",
  },
  openGraph: {
    title: "Careers at SEOcial Media | Jaipur Digital Marketing & Web Development Jobs",
    description:
      "Join SEOcial Media Solutions for exciting roles in web development, SEO, digital marketing, and creative content. Build your career with a leading company in Jaipur.",
    url: "https://seocialmedia.in/career",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-careers.jpg",
        width: 1200,
        height: 630,
        alt: "SEOcial Media Careers OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at SEOcial Media | Join Our Jaipur Team",
    description:
      "Explore career opportunities at SEOcial Media Solutions. We're hiring talented web developers, digital marketers, and content creators in Jaipur.",
    images: ["https://seocialmedia.in/images/og-careers.jpg"],
  },
};


export default function Home() {
  
  return (
    <CareerPage />
  )
}
