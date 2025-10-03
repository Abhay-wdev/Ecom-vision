import AboutUs from "@/components/AboutUs";
import Seo from "@/components/Seo";
import React from "react";

export const metadata = {
  title: "Best SEO Company in Jaipur | SEOcial Media Solutions",
  description:
    "Boost your online presence with SEOcial Media Solutions, the leading SEO company in Jaipur. We provide expert on-page, off-page, and local SEO services to help your business rank higher in search results.",
  keywords:
    "SEO company Jaipur, SEO services Jaipur, local SEO Jaipur, on-page SEO Jaipur, off-page SEO Jaipur, digital marketing Jaipur, SEOcial Media Solutions",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/seo-company-jaipur",
  },
  openGraph: {
    title: "SEO Company in Jaipur | SEOcial Media Solutions",
    description:
      "Hire the best SEO company in Jaipur. SEOcial Media Solutions provides on-page, off-page, and local SEO services to increase your website’s visibility and rankings.",
    url: "https://seocialmedia.in/seo-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-seo-company.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Company Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company in Jaipur | SEOcial Media Solutions",
    description:
      "Professional SEO services in Jaipur – on-page, off-page, and local SEO to help your business rank higher in search engines.",
    images: ["https://seocialmedia.in/images/og-seo-company.jpg"],
  },
};

export default function Home() {
  return (<Seo />);
}
