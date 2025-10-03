import GoogleServices from "@/components/GoogleServices";
import React from "react";
export const metadata = {
  title: "Lead Generation Company in Jaipur | SEOcial Media Solutions",
  description:
    "Grow your business with SEOcial Media Solutions, the top lead generation company in Jaipur. We offer B2B and B2C lead generation, email campaigns, and sales prospecting to increase revenue.",
  keywords:
    "lead generation company Jaipur, B2B lead generation Jaipur, B2C lead generation Jaipur, sales leads Jaipur, business leads Jaipur, marketing leads Jaipur",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/lead-generation-company-jaipur",
  },
  openGraph: {
    title: "Lead Generation Company in Jaipur | SEOcial Media Solutions",
    description:
      "Get quality leads for your business with SEOcial Media Solutions in Jaipur. Expert B2B & B2C lead generation services to boost sales and revenue.",
    url: "https://seocialmedia.in/lead-generation-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-lead-generation.jpg",
        width: 1200,
        height: 630,
        alt: "Lead Generation Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Company in Jaipur | SEOcial Media Solutions",
    description:
      "Professional lead generation services in Jaipur – B2B & B2C leads, email campaigns, and sales prospecting to grow your business.",
    images: ["https://seocialmedia.in/images/og-lead-generation.jpg"],
  },
};

function Home() {
  return (<GoogleServices />);
}

export default Home;
