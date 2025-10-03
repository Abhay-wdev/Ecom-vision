import VideoEditing from "@/components/VideoEditing";
import VideoEditingAjmer from "@/components/VideoEditingAjmer";
import React from "react";
export const metadata = {
  title: "Video Editing Company in Jaipur | SEOcial Media Solutions",
  description:
    "Transform your videos with SEOcial Media Solutions, a professional video editing company in Jaipur. We offer expert video editing, motion graphics, post-production, and promotional video services to enhance your brand presence.",
  keywords:
    "video editing company Jaipur, professional video editors Jaipur, motion graphics Jaipur, post-production Jaipur, promotional video services Jaipur, SEOcial Media Solutions",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/video-editing-company-jaipur",
  },
  openGraph: {
    title: "Video Editing Company in Jaipur | SEOcial Media Solutions",
    description:
      "Hire SEOcial Media Solutions for professional video editing in Jaipur. Services include post-production, motion graphics, and promotional video creation.",
    url: "https://seocialmedia.in/video-editing-company-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-video-editing.jpg",
        width: 1200,
        height: 630,
        alt: "Video Editing Jaipur OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Editing Company in Jaipur | SEOcial Media Solutions",
    description:
      "Professional video editing services in Jaipur – motion graphics, post-production, and promotional videos to boost your brand.",
    images: ["https://seocialmedia.in/images/og-video-editing.jpg"],
  },
};

function Home() {
  return <VideoEditingAjmer />;
}

export default Home;
