import AboutUs from "@/components/AboutUs";
import React from "react";
export const metadata = {
  title: "Best Website Development & Digital Marketing Company in Jaipur | VIRAL nexus",
  description:
    "Looking for the best website development company in Jaipur? VIRAL nexus offers web design, SEO, content marketing, and full-scale digital solutions tailored to your business.",
  keywords:
    "best website development company in Jaipur, top digital marketing agency, SEO company Jaipur, social media marketing Jaipur, content writing services, Google Ads Jaipur, web design services, responsive websites, Jaipur web development, startup marketing solutions",
  authors: [{ name: "VIRAL nexus" }],
  publisher: "VIRAL nexus",
  robots: "index, follow",
  alternates: {
    canonical: "https://ecomvision.in/digital-marketing-company-jaipur",
  },
  openGraph: {
    title: "Best Website Development & Digital Marketing Company in Jaipur",
    description:
      "Complete online marketing solutions including SEO, web development, and social media strategies.",
    url: "https://ecomvision.in/digital-marketing-company-jaipur",
    siteName: "VIRAL nexus",
    images: [
      {
        url: "https://ecomvision.in/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "VIRAL nexus OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIRAL nexus | Best Website Development in Jaipur",
    description:
      "VIRAL nexus builds modern websites and digital strategies that deliver real results.",
    images: ["https://ecomvision.in/images/og-home.jpg"],
  },
};


export default function Home() {
  return (<AboutUs />);
}
