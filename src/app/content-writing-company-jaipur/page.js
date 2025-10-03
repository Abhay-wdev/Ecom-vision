import ContentWritingServices from "@/components/ContentWritingServices";
import React from "react";
export const metadata = {
  title: "Best Content Writing Company in Jaipur | SEOcial Media Solutions",
  description:
    "Looking for top-notch content writing services in Jaipur? SEOcial Media Solutions delivers high-quality SEO content, blogs, website copy, and marketing content tailored for your business growth.",
  keywords:
    "content writing company Jaipur, professional content writers Jaipur, SEO content writing Jaipur, website content services Jaipur, blog writing services Jaipur, marketing content Jaipur",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/content-writing-company-jaipur",
  },
  openGraph: {
    title: "Content Writing Company in Jaipur | SEOcial Media Solutions",
    description:
      "Hire expert content writers in Jaipur for SEO blogs, website content, and marketing materials that help grow your business.",
    url: "https://seocialmedia.in/content-writing-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-content-writing.jpg",
        width: 1200,
        height: 630,
        alt: "Content Writing Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Writing Company in Jaipur | SEOcial Media Solutions",
    description:
      "Professional content writing services in Jaipur – blogs, website copy, SEO content, and marketing materials to boost your business.",
    images: ["https://seocialmedia.in/images/og-content-writing.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <ContentWritingServices />
    </>
  );
}
