import JioMartManagementSolution from "@/components/JioMartAcc";
export const metadata = {
  title: "VIRAL nexus | JioMart Account Management Services",
  description:
    "Boost your brand’s presence on JioMart with VIRAL nexus’s expert account management services. From seller account setup and catalog optimization to advertising, order management, and full-store growth support for JioMart sellers.",
  keywords:
    "VIRAL nexus JioMart account management, JioMart seller services Jaipur, JioMart store management India, JioMart listing optimisation, JioMart PPC management, JioMart catalog and order management services",
  authors: [{ name: "VIRAL nexus" }],
  publisher: "VIRAL nexus",
  robots: "index, follow",
  alternates: {
    canonical: "https://ecomvision.in/jiomart-account-management-services",
  },
  openGraph: {
    title: "VIRAL nexus | JioMart Account Management Services",
    description:
      "Grow your sales on JioMart with VIRAL nexus – professional seller account management, product listing optimisation, advertising, and inventory control for your JioMart store.",
    url: "https://ecomvision.in/jiomart-account-management-services",
    siteName: "VIRAL nexus",
    images: [
      {
        url: "https://ecomvision.in/images/og-jiomart-services.jpg", // replace with actual OG image if available
        width: 1200,
        height: 630,
        alt: "JioMart Account Management Services by VIRAL nexus",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIRAL nexus | JioMart Account Management Services",
    description:
      "Get complete JioMart account management with VIRAL nexus — optimise listings, manage ads, handle inventory and grow your seller business efficiently.",
    images: ["https://ecomvision.in/images/og-jiomart-services.jpg"], // confirm correct image path
  },
};

 export default function Jiomart() {
  
  return (
    <div>
      <JioMartManagementSolution/>
    </div>
  )
}