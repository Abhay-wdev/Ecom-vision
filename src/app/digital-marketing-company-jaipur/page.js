import AboutUs from "@/components/AboutUs";
import React from "react";
export const metadata = {
  title: "Best Website Development & Digital Marketing Company in Jaipur | SEOcial Media",
  description:
    "Looking for the best website development company in Jaipur? SEOcial Media offers web design, SEO, content marketing, and full-scale digital solutions tailored to your business.",
  keywords:
    "best website development company in Jaipur, top digital marketing agency, SEO company Jaipur, social media marketing Jaipur, content writing services, Google Ads Jaipur, web design services, responsive websites, Jaipur web development, startup marketing solutions",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/digital-marketing-company-jaipur",
  },
  openGraph: {
    title: "Best Website Development & Digital Marketing Company in Jaipur",
    description:
      "Complete online marketing solutions including SEO, web development, and social media strategies.",
    url: "https://seocialmedia.in/digital-marketing-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "SEOcial Media OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEOcial Media | Best Website Development in Jaipur",
    description:
      "SEOcial Media Solutions builds modern websites and digital strategies that deliver real results.",
    images: ["https://seocialmedia.in/images/og-home.jpg"],
  },
};


export default function Home() {
  return (<AboutUs />);
}
