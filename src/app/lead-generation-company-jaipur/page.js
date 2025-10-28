import GoogleServices from "@/components/GoogleServices";
import React from "react";
export const metadata = {
  title: "Lead Generation Company in Jaipur | VIRAL nexus",
  description:
    "Grow your business with VIRAL nexus, the top lead generation company in Jaipur. We offer B2B and B2C lead generation, email campaigns, and sales prospecting to increase revenue.",
  keywords:
    "lead generation company Jaipur, B2B lead generation Jaipur, B2C lead generation Jaipur, sales leads Jaipur, business leads Jaipur, marketing leads Jaipur",
  authors: [{ name: "VIRAL nexus" }],
  publisher: "VIRAL nexus",
  robots: "index, follow",
  alternates: {
    canonical: "https://ecomvision.in/lead-generation-company-jaipur",
  },
  openGraph: {
    title: "Lead Generation Company in Jaipur | VIRAL nexus",
    description:
      "Get quality leads for your business with VIRAL nexus in Jaipur. Expert B2B & B2C lead generation services to boost sales and revenue.",
    url: "https://ecomvision.in/lead-generation-company-jaipur",
    siteName: "VIRAL nexus",
    images: [
      {
        url: "https://ecomvision.in/images/og-lead-generation.jpg",
        width: 1200,
        height: 630,
        alt: "Lead Generation Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Company in Jaipur | VIRAL nexus",
    description:
      "Professional lead generation services in Jaipur – B2B & B2C leads, email campaigns, and sales prospecting to grow your business.",
    images: ["https://ecomvision.in/images/og-lead-generation.jpg"],
  },
};

function Home() {
  return (<GoogleServices />);
}

export default Home;
