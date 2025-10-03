import fs from "fs";
import path from "path";
import BlogListClient from "./BlogListClient";

// Function to read all blogs data from the JSON file on the server.
export const metadata = {
  title: "SEOcial Media Blog | Digital Marketing, SEO & Web Development",
  description:
    "Stay updated with SEOcial Media's blog! Discover expert insights, tips, and trends on digital marketing, web development, SEO, and social media strategies.",
  keywords:
    "SEOcial Media blog, digital marketing articles, web development insights, SEO tips, social media strategies, online marketing blog, content marketing, Jaipur digital marketing blog",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/blog",
  },
  openGraph: {
    title: "SEOcial Media Blog | Expert Insights on Marketing & Web Development",
    description:
      "Explore our blog for the latest trends, tips, and strategies in digital marketing, web development, SEO, and social media.",
    url: "https://seocialmedia.in/blog",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "SEOcial Media Blog OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEOcial Media Blog | Digital Marketing & Web Development Insights",
    description:
      "Read SEOcial Media's blog for expert advice on SEO, web development, social media, and digital marketing strategies.",
    images: ["https://seocialmedia.in/images/og-blog.jpg"],
  },
};


export default function BlogListPage() {
  // The Server Component simply fetches the data and passes it down.
  // The client component will handle the interactive UI, including pagination.
  return <BlogListClient />;
}
