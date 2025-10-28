import MetaAdsManagement from "@/components/MetaAds";
export const metadata = {
  title: "VIRAL nexus | Meta Ads Services",
  description:
    "Maximize your ROI with VIRAL nexus’s expert Meta ads services — full-funnel Facebook & Instagram advertising, pixel & event tracking, creative optimization, and scaled campaigns for growth.",
  keywords:
    "VIRAL nexus meta ads services, Facebook ads management India, Instagram ads agency Jaipur, Meta advertising services India, Meta campaign optimization, social media ad services Jaipur",
  authors: [{ name: "VIRAL nexus" }],
  publisher: "VIRAL nexus",
  robots: "index, follow",
  alternates: {
    canonical: "https://ecomvision.in/meta-ads-services",
  },
  openGraph: {
    title: "VIRAL nexus | Meta Ads Services",
    description:
      "Drive sales and leads with expert Meta ad campaigns from VIRAL nexus — strategic targeting, creative performance, and continuous optimization on Facebook & Instagram.",
    url: "https://ecomvision.in/meta-ads-services",
    siteName: "VIRAL nexus",
    images: [
      {
        url: "https://ecomvision.in/images/og-meta-ads-services.jpg", // replace with actual image URL if different
        width: 1200,
        height: 630,
        alt: "Meta Ads Services by VIRAL nexus",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIRAL nexus | Meta Ads Services",
    description:
      "Get high-performing Facebook & Instagram ad campaigns managed by VIRAL nexus — targeting, creative, tracking & scaling included.",
    images: ["https://ecomvision.in/images/og-meta-ads-services.jpg"] // confirm image path
  },
};

 export default function MetaAdsServices() {
  return <div><MetaAdsManagement/></div>;
}