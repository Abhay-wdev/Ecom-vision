import SeoAjmer from "@/components/SeoAjmer";
import React from "react";
export const metadata = {
  title: "Digital Marketing Services in Ajmer | SEOcial Media Solutions",
  description:
    "Grow your business with SEOcial Media Solutions, the leading digital marketing agency in Ajmer. We provide SEO, social media marketing, PPC, content marketing, and web development services tailored for your brand.",
  keywords:
    "digital marketing services Ajmer, SEO company Ajmer, social media marketing Ajmer, PPC services Ajmer, content marketing Ajmer, website development Ajmer, online marketing Ajmer",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/digital-markting-services-ajmer",
  },
  openGraph: {
    title: "Digital Marketing Services in Ajmer | SEOcial Media Solutions",
    description:
      "Get expert digital marketing services in Ajmer including SEO, social media, PPC, and content marketing to boost your business online.",
    url: "https://seocialmedia.in/digital-markting-services-ajmer",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-digital-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Ajmer OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services in Ajmer | SEOcial Media Solutions",
    description:
      "Professional digital marketing agency in Ajmer offering SEO, social media marketing, PPC, and content marketing services for businesses.",
    images: ["https://seocialmedia.in/images/og-digital-marketing.jpg"],
  },
};

export default function Home() {
  return <SeoAjmer />;
}
