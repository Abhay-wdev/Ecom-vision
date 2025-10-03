import BenefitsSection from "@/components/BenefitsSection";
import BrandFAQ from "@/components/BrandFAQ";
import HeroSection from "@/components/HeroSection";
import ServicesPage from "@/components/ServicesPage";
export const metadata = {
  title: "Best Brand Management Service in Jaipur | SEOcial Media Solutions",
  description:
    "Grow your business with our complete digital marketing and branding services in Jaipur. We offer social media management, SEO, paid ads, web design, and more.",
  keywords:
    "digital marketing services Jaipur, branding agency Jaipur, social media marketing Jaipur, SEO services Jaipur, content creation, paid ads management, website design Jaipur, Instagram marketing, Facebook ads Jaipur, video editing services",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://seocialmedia.in/best-digital-marketing-branding-services-jaipur",
  },
  openGraph: {
    title: "Best Digital Marketing & Branding Services in Jaipur",
    description:
      "SEOcial Media Solutions offers social media management, SEO, paid ads, content creation, and branding services to grow your business online.",
    url: "https://seocialmedia.in/best-digital-marketing-branding-services-jaipur",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-digital-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services in Jaipur",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEOcial Media | Digital Marketing & Branding Services",
    description:
      "Boost your online presence with SEOcial Media Solutions. Social media, SEO, paid ads, branding, and more.",
    images: ["https://seocialmedia.in/images/og-digital-marketing.jpg"],
  },
};

 
 

export default function MakeYourProductBrand() {
 const faq = [
    {
      question: "What services does your branding agency offer?",
      answer: "We provide a complete range of digital branding services including social media marketing, logo and graphic design, content creation, website design, SEO, paid ads, and more to help your business grow online."
    },
    {
      question: "How can social media marketing help my business?",
      answer: "Social media marketing increases your brand visibility, engages your audience, drives traffic to your website, and generates leads through targeted campaigns across platforms like Facebook, Instagram, LinkedIn, TikTok, and YouTube."
    },
    {
      question: "Do you provide custom logo and design services?",
      answer: "Yes! We create professional logos, business cards, social media graphics, brochures, and other branding materials tailored to reflect your brand identity and stand out in the market."
    },
    {
      question: "Can you manage my social media accounts?",
      answer: "Absolutely. We provide full social media management including account setup, content creation, post scheduling, engagement with followers, and monthly performance reports for all major platforms."
    },
    {
      question: "Do you offer SEO services for my website?",
      answer: "Yes, our SEO services include on-page optimization, off-page backlink building, technical SEO, local SEO, e-commerce SEO, blog writing with SEO, and analytics to improve search rankings and drive organic traffic."
    },
    {
      question: "Can you run paid ad campaigns on social media and Google?",
      answer: "Yes! We manage targeted paid advertising campaigns on platforms like Facebook, Instagram, LinkedIn, YouTube, TikTok, Pinterest, and Google Ads to maximize ROI and drive qualified leads."
    },
    {
      question: "Do you provide content creation and video production?",
      answer: "Yes, we create engaging content including social media posts, blogs, animated videos, reels, stories, and promotional videos designed to resonate with your audience and strengthen your brand presence."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results depend on the service type. Social media engagement and brand awareness improvements can be seen in a few weeks, while SEO and content marketing may take a few months to show significant impact."
    },
    {
      question: "Can I track the performance of your services?",
      answer: "Yes, we provide detailed analytics and monthly reports to track the performance of your social media campaigns, website traffic, ad campaigns, and overall brand growth."
    },
    {
      question: "Do you offer support and consultation?",
      answer: "Absolutely. We provide continuous support, strategy consultation, and regular updates to ensure your branding and digital marketing efforts are aligned with your business goals."
    }
  ];

return(


    <>
        <div className="bg-[#F9FAFB]">
 <HeroSection/>
 <ServicesPage/>
<BenefitsSection/>
<BrandFAQ  faqItems={faq}/>
</div>
     </>
)
}