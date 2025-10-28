import PrivacyPolicy from '@/components/PrivacyPolicy'
import React from 'react'
export const metadata = {
  title: "Privacy Policy | VIRAL nexus",
  description:
    "Read the privacy policy of VIRAL nexus. Learn how we collect, use, and protect your personal information while providing digital marketing, web development, and content services.",
  keywords:
    "privacy policy, SEOcial Media privacy, personal data protection, website privacy, digital marketing privacy, VIRAL nexus policies",
  authors: [{ name: "VIRAL nexus" }],
  publisher: "VIRAL nexus",
  robots: "index, follow",
  alternates: {
    canonical: "https://ecomvision.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | VIRAL nexus",
    description:
      "Understand how VIRAL nexus handles your personal information and ensures data privacy while delivering digital marketing and web development services.",
    url: "https://ecomvision.in/privacy-policy",
    siteName: "VIRAL nexus",
    images: [
      {
        url: "https://ecomvision.in/images/og-privacy-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | VIRAL nexus",
    description:
      "Learn how VIRAL nexus protects your data and maintains privacy while offering web development, SEO, and digital marketing services.",
    images: ["https://ecomvision.in/images/og-privacy-policy.jpg"],
  },
};

export default function home() {
  return (
   <PrivacyPolicy />
  )
}
