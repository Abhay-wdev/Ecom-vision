import ContactForm from '@/components/ContactUs'
import React from 'react'
export const metadata = {
  title: "Contact VIRAL nexus | Website Development & Digital Marketing in Jaipur",
  description:
    "Get in touch with VIRAL nexus, the leading website development and digital marketing company in Jaipur. Reach out for web design, SEO, and online marketing solutions tailored to your business.",
  keywords:
    "contact VIRAL nexus, website development Jaipur contact, digital marketing agency Jaipur contact, SEO company Jaipur contact, social media marketing Jaipur contact, web design services Jaipur, startup marketing solutions contact",
  authors: [{ name: "VIRAL nexus" }],
  publisher: "VIRAL nexus",
  robots: "index, follow",
  alternates: {
    canonical: "https://ecomvision.in/contact",
  },
  openGraph: {
    title: "Contact VIRAL nexus | Jaipur Digital Marketing & Web Development",
    description:
      "Reach out to VIRAL nexus for expert web development, SEO, and digital marketing services in Jaipur.",
    url: "https://ecomvision.in/contact",
    siteName: "VIRAL nexus",
    images: [
      {
        url: "https://ecomvision.in/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact VIRAL nexus OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact VIRAL nexus | Jaipur Website Development & Marketing",
    description:
      "Get in touch with VIRAL nexus for modern websites, SEO, and digital strategies that get results.",
    images: ["https://ecomvision.in/images/og-contact.jpg"],
  },
};
export default function Contact() {
  return (
    <><ContactForm /></>
  )
}
