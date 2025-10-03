import EcommerceListingService from "@/components/EcommerceListingService";



export const metadata = {
  title: "Top E-commerce Listing Service in Jaipur- SEOcial Media Solutions",
  description:
    "Expand your business with our multi-platform e-commerce listing service. Get your products listed on Amazon, Flipkart, eBay, Etsy, Myntra, Meesho, and 50+ marketplaces with SEO-optimized listings and performance management.",
  keywords:
    "e-commerce listing service, multi-platform product listing, Amazon product listing, Flipkart listing service, marketplace SEO, eBay listing, Myntra product listing, Shopify listing service, Meesho listing, IndiaMart listing",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/ecommerce-listing-service-jaipur",
  },
  openGraph: {
    title: "Multi-Platform E-commerce Listing Service | Amazon, Flipkart, eBay, Etsy & More",
    description:
      "Boost your online sales by listing products on Amazon, Flipkart, eBay, Etsy, Myntra, Shopify, Meesho & 50+ marketplaces. Our experts handle SEO-optimized listings, pricing strategies, and performance analytics.",
    url: "https://seocialmedia.in/ecommerce-listing-service-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-ecommerce-listing.jpg",
        width: 1200,
        height: 630,
        alt: "Multi-Platform E-commerce Listing Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Platform E-commerce Listing Service | Amazon, Flipkart, eBay & More",
    description:
      "Professional multi-platform product listing service. List on Amazon, Flipkart, eBay, Etsy, Myntra & more. Get SEO-optimized listings and sales growth today.",
    images: ["https://seocialmedia.in/images/og-ecommerce-listing.jpg"],
  },
};


export default function EcommerceListingServiceJaipurPage() {
  return <div><EcommerceListingService/></div>;
}   