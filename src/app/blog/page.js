import fs from "fs";
import path from "path";
import BlogListClient from "./BlogListClient";

// Function to read all blogs data from the JSON file on the server.
export const metadata = {
  title: "VIRAL nexus Blog | Digital Marketing, SEO & Web Development",
  description:
    "Stay updated with VIRAL nexus's blog! Discover expert insights, tips, and trends on digital marketing, web development, SEO, and social media strategies.",
  keywords:
    "VIRAL nexus blog, digital marketing articles, web development insights, SEO tips, social media strategies, online marketing blog, content marketing, Jaipur digital marketing blog",
  authors: [{ name: "VIRAL nexus" }],
  publisher: "VIRAL nexus",
  robots: "index, follow",
  alternates: {
    canonical: "https://ecomvision.in/blog",
  },
  openGraph: {
    title: "VIRAL nexus Blog | Expert Insights on Marketing & Web Development",
    description:
      "Explore our blog for the latest trends, tips, and strategies in digital marketing, web development, SEO, and social media.",
    url: "https://ecomvision.in/blog",
    siteName: "VIRAL nexus",
    images: [
      {
        url: "https://ecomvision.in/images/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "VIRAL nexus Blog OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIRAL nexus Blog | Digital Marketing & Web Development Insights",
    description:
      "Read VIRAL nexus's blog for expert advice on SEO, web development, social media, and digital marketing strategies.",
    images: ["https://ecomvision.in/images/og-blog.jpg"],
  },
};


export default function BlogListPage() {
  // The Server Component simply fetches the data and passes it down.
  // The client component will handle the interactive UI, including pagination.
  return <BlogListClient />;
}
