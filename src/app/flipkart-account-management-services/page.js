import FlipkartManagementSolution from "@/components/FlipkartAcc";

export const metadata = {
  title: "VIRAL nexus | Flipkart Account Management Services",
  description:
    "Grow your business on Flipkart with VIRAL nexus’s expert account management services. From seller account setup and product listing optimisation to catalog management, advertising and full-store support for Flipkart sellers.",
  keywords:
    "VIRAL nexus Flipkart account management, Flipkart seller services Jaipur, Flipkart store management India, Flipkart listing optimisation services, Flipkart PPC management India, Flipkart inventory & order management services",
  authors: [{ name: "VIRAL nexus" }],
  publisher: "VIRAL nexus",
  robots: "index, follow",
  alternates: {
    canonical: "https://ecomvision.in/flipkart-account-management-services",
  },
  openGraph: {
    title: "VIRAL nexus | Flipkart Account Management Services",
    description:
      "Let VIRAL nexus handle your Flipkart seller account from A to Z—listings, advertising, inventory, orders and scale-up support to maximize your presence on Flipkart.",
    url: "https://ecomvision.in/flipkart-account-management-services",
    siteName: "VIRAL nexus",
    images: [
      {
        url: "https://ecomvision.in/images/og-flipkart-services.jpg",  // replace with actual image path if different
        width: 1200,
        height: 630,
        alt: "Flipkart Account Management Services by VIRAL nexus"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIRAL nexus | Flipkart Account Management Services",
    description:
      "Discover full-service Flipkart seller account management with VIRAL nexus – optimise listings, manage ads, handle orders and scale your Flipkart business.",
    images: ["https://ecomvision.in/images/og-flipkart-services.jpg"]  // same note: confirm image URL
  },
};


 export default function Flipkart() {
  
  return (
    <div>
      <FlipkartManagementSolution/>
    </div>
  )
}