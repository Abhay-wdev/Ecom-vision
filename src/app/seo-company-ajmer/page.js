
import SeoAjmerpage from '@/components/SeoAjmerpage'
import React from 'react'
export const metadata = {
  title: "Best SEO Company in Ajmer | SEOcial Media Solutions",
  description:
    "Boost your online presence with SEOcial Media Solutions, the leading SEO company in Ajmer. We offer expert SEO services, including on-page, off-page, and local SEO to help your business rank higher in search results.",
  keywords:
    "SEO company Ajmer, SEO services Ajmer, local SEO Ajmer, on-page SEO Ajmer, off-page SEO Ajmer, digital marketing Ajmer, SEOcial Media Solutions",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/seo-company-ajmer",
  },
  openGraph: {
    title: "SEO Company in Ajmer | SEOcial Media Solutions",
    description:
      "Hire the best SEO company in Ajmer. SEOcial Media Solutions provides on-page, off-page, and local SEO services to increase your website’s visibility and rankings.",
    url: "https://seocialmedia.in/seo-company-ajmer",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-seo-company.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Company Ajmer OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company in Ajmer | SEOcial Media Solutions",
    description:
      "Professional SEO services in Ajmer – on-page, off-page, and local SEO to help your business rank higher in search engines.",
    images: ["https://seocialmedia.in/images/og-seo-company.jpg"],
  },
};

function Home() {
  return (
    <SeoAjmerpage />
  )
}

export default Home