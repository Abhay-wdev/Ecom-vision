import ContactForm from '@/components/ContactUs'
import React from 'react'
export const metadata = {
  title: "Contact SEOcial Media | Website Development & Digital Marketing in Jaipur",
  description:
    "Get in touch with SEOcial Media, the leading website development and digital marketing company in Jaipur. Reach out for web design, SEO, and online marketing solutions tailored to your business.",
  keywords:
    "contact SEOcial Media, website development Jaipur contact, digital marketing agency Jaipur contact, SEO company Jaipur contact, social media marketing Jaipur contact, web design services Jaipur, startup marketing solutions contact",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/contact",
  },
  openGraph: {
    title: "Contact SEOcial Media | Jaipur Digital Marketing & Web Development",
    description:
      "Reach out to SEOcial Media Solutions for expert web development, SEO, and digital marketing services in Jaipur.",
    url: "https://seocialmedia.in/contact",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact SEOcial Media OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SEOcial Media | Jaipur Website Development & Marketing",
    description:
      "Get in touch with SEOcial Media Solutions for modern websites, SEO, and digital strategies that get results.",
    images: ["https://seocialmedia.in/images/og-contact.jpg"],
  },
};
export default function Home() {
  return (
    <><ContactForm /></>
  )
}
