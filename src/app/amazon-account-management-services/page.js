import AmazonManagementSolution from "@/components/AmazonAcc";
export const metadata = {
  title: "VIRAL nexus | Amazon Account Management Services",
  description:
    "Scale your Amazon business with VIRAL nexus’s expert account management services. From product listing optimisation to PPC, inventory management and full-store support, we help your brand succeed on Amazon.",
  keywords:
    "VIRAL nexus Amazon account management, Amazon seller services Jaipur, Amazon store management India, product listing optimisation Amazon, Amazon PPC management India, Amazon inventory management services",
  authors: [{ name: "VIRAL nexus" }],
  publisher: "VIRAL nexus",
  robots: "index, follow",
  alternates: {
    canonical: "https://ecomvision.in/amazon-account-management-services",
  },
  openGraph: {
    title: "VIRAL nexus | Amazon Account Management Services",
    description:
      "Partner with VIRAL nexus for end-to-end Amazon account management — listing, ads, inventory & growth support for sellers on Amazon.",
    url: "https://ecomvision.in/amazon-account-management-services",
    siteName: "VIRAL nexus",
    images: [
      {
        url: "https://ecomvision.in/images/og-amazon-services.jpg",  // **Note**: you’ll need to replace this with the actual OG image URL if different
        width: 1200,
        height: 630,
        alt: "Amazon Account Management Services by VIRAL nexus"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIRAL nexus | Amazon Account Management Services",
    description:
      "Get full-service Amazon account management from VIRAL nexus – optimise listings, boost advertising ROI & manage inventory for better results.",
    images: ["https://ecomvision.in/images/og-amazon-services.jpg"]  // same note as above
  },
};

 export default function Home() {




  
  return (
    <> <AmazonManagementSolution/></>
  )
}
