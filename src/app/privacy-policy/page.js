import PrivacyPolicy from '@/components/PrivacyPolicy'
import React from 'react'
export const metadata = {
  title: "Privacy Policy | SEOcial Media Solutions",
  description:
    "Read the privacy policy of SEOcial Media Solutions. Learn how we collect, use, and protect your personal information while providing digital marketing, web development, and content services.",
  keywords:
    "privacy policy, SEOcial Media privacy, personal data protection, website privacy, digital marketing privacy, SEOcial Media Solutions policies",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | SEOcial Media Solutions",
    description:
      "Understand how SEOcial Media Solutions handles your personal information and ensures data privacy while delivering digital marketing and web development services.",
    url: "https://seocialmedia.in/privacy-policy",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-privacy-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | SEOcial Media Solutions",
    description:
      "Learn how SEOcial Media Solutions protects your data and maintains privacy while offering web development, SEO, and digital marketing services.",
    images: ["https://seocialmedia.in/images/og-privacy-policy.jpg"],
  },
};

export default function home() {
  return (
   <PrivacyPolicy />
  )
}
