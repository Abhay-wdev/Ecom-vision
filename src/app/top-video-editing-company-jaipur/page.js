
import VideoEditingJaipur from '@/components/VideoEditingJaipur'
import React from 'react'
export const metadata = {
  title: "Top Video Editing Company in Jaipur | SEOcial Media Solutions",
  description:
    "Bring your visuals to life with SEOcial Media Solutions, the top video editing company in Jaipur. We provide professional video editing, post-production, motion graphics, and promotional video services to enhance your brand.",
  keywords:
    "top video editing company Jaipur, professional video editors Jaipur, video post-production Jaipur, motion graphics Jaipur, promotional video services Jaipur, SEOcial Media Solutions",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/top-video-editing-company-jaipur",
  },
  openGraph: {
    title: "Top Video Editing Company in Jaipur | SEOcial Media Solutions",
    description:
      "Hire SEOcial Media Solutions for expert video editing in Jaipur. We deliver professional editing, motion graphics, and promotional videos to enhance your brand.",
    url: "https://seocialmedia.in/top-video-editing-company-jaipur",
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
    title: "Top Video Editing Company in Jaipur | SEOcial Media Solutions",
    description:
      "Professional video editing services in Jaipur – post-production, motion graphics, and promotional videos to elevate your brand.",
    images: ["https://seocialmedia.in/images/og-video-editing.jpg"],
  },
};

function Home() {
  return (
    <VideoEditingJaipur />
  )
}

export default Home