import MeeshoManagementSolution from "@/components/MeeshoAcc";
export const metadata = {
  title: "VIRAL nexus | Meesho Account Management Services",
  description:
    "Expand your business on Meesho with VIRAL nexus’s expert account management services. From seller account setup and product listing optimisation to catalog management, advertising and full-store support for Meesho sellers.",
  keywords:
    "VIRAL nexus Meesho account management, Meesho seller services Jaipur, Meesho store management India, Meesho listing optimisation services, Meesho reseller growth India, Meesho inventory & order management services",
  authors: [{ name: "VIRAL nexus" }],
  publisher: "VIRAL nexus",
  robots: "index, follow",
  alternates: {
    canonical: "https://ecomvision.in/meesho-account-management-services",
  },
  openGraph: {
    title: "VIRAL nexus | Meesho Account Management Services",
    description:
      "Get end-to-end Meesho seller account management from VIRAL nexus – listing optimisation, store setup, ad campaigns, inventory management and store growth on Meesho.",
    url: "https://ecomvision.in/meesho-account-management-services",
    siteName: "VIRAL nexus",
    images: [
      {
        url: "https://ecomvision.in/images/og-meesho-services.jpg",  // replace with actual image URL if different
        width: 1200,
        height: 630,
        alt: "Meesho Account Management Services by VIRAL nexus"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIRAL nexus | Meesho Account Management Services",
    description:
      "Discover professional Meesho seller account management with VIRAL nexus – optimise listings, launch ad campaigns, manage orders and scale your Meesho business.",
    images: ["https://ecomvision.in/images/og-meesho-services.jpg"]  // confirm image path
  },
};

 export default function Meesho() {
  
  return (
    <div>
      <MeeshoManagementSolution/>
    </div>
  )
}