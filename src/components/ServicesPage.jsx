'use client'
import Link from 'next/link';
import { useState } from 'react';
const ServicesPage = () =>
{
  const [activeTab, setActiveTab] = useState('all');
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Facebook Page Management",
      description: "Optimize and manage your business Facebook page for better engagement and visibility.",
      features: [
        "Page setup and optimization for business branding",
        "Content calendar planning and scheduling",
        "Daily posts with high-quality graphics and captions",
        "Engaging with followers through comments and messages",
        "Running targeted ad campaigns for better reach",
        "Audience insights and analytics reporting",
        "Facebook Stories and Live sessions for real-time engagement",
        "Custom call-to-action buttons for lead generation"
      ],
      platforms: ["Facebook"],
      category: "content",
      url: "/content-writing-company-jaipur"
    },
    {
      id: 2,
      title: "Instagram Marketing",
      description: "Content creation, engaging reels, and result-driven strategies to grow your Instagram presence.",
      features: [
        "Profile optimization for brand identity",
        "Creative and visually appealing post designs",
        "High-quality Instagram Reels production",
        "Engaging Stories with interactive elements (polls, Q&A, stickers)",
        "Hashtag research and strategy for better reach",
        "Audience interaction through comments and DMs",
        "Influencer collaboration and shoutouts",
        "Monthly growth and engagement analytics"
      ],
      platforms: ["Instagram"],
      category: "content",
      url: "/content-writing-company-jaipur"
    },
    {
      id: 3,
      title: "LinkedIn Marketing",
      description: "Professional branding and lead generation strategies to grow your LinkedIn presence and network.",
      features: [
        "Profile optimization for personal or business branding",
        "Content strategy for thought leadership and engagement",
        "Creating and publishing professional posts & articles",
        "Lead generation through targeted outreach",
        "Managing company pages and showcase pages",
        "Connecting with potential clients and industry experts",
        "Running LinkedIn Ads for lead generation",
        "Analytics and reporting for campaign performance"
      ],
      platforms: ["LinkedIn"],
      category: "content",
      url: "/content-writing-company-jaipur"
    },
    {
      id: 4,
      title: "Twitter (X) Marketing",
      description: "Trend-based content creation and hashtag campaigns to increase engagement on Twitter (X).",
      features: [
        "Daily tweet strategy aligned with brand goals",
        "Trending hashtag research and implementation",
        "Real-time engagement during trending topics",
        "Custom graphics and short-form video for tweets",
        "Community interaction and reply management",
        "Running Twitter Ads for visibility and growth",
        "Analytics and insights on tweet performance",
        "Hashtag campaigns to amplify reach"
      ],
      platforms: ["Twitter (X)"],
      category: "content",
      url: "/content-writing-company-jaipur"
    },

    {
      id: 6,
      title: "YouTube Marketing",
      description: "Video optimization, channel growth, and engagement strategies to boost your YouTube presence.",
      features: [
        "SEO optimization for video titles, descriptions, and tags",
        "Eye-catching custom thumbnails",
        "Engaging video content strategy",
        "Playlist creation for better watch time",
        "End screens and cards optimization",
        "YouTube Ads campaign setup and management",
        "Channel branding and optimization",
        "Performance analytics and growth tracking"
      ],
      platforms: ["YouTube"],
      category: "content",
      url: "/content-writing-company-jaipur"
    },


    {
      id: 9,
      title: "Threads Marketing",
      description: "Engagement-driven content strategies to build an active audience on Meta's Threads.",
      features: [
        "Content strategy and planning",
        "Trending topic engagement",
        "Community building and interaction",
        "Brand storytelling through threads",
        "Visual and text-based post optimization",
        "Hashtag research for better reach",
        "Analytics and performance tracking"
      ],
      platforms: ["Meta Threads"],
      category: "content",
      url: "/content-writing-company-jaipur"
    },
    {
      id: 11,
      title: "Logo Design",
      description: "Professional and modern logo design to establish a strong and memorable brand identity.",
      features: [
        "Custom logo design tailored to your brand",
        "Multiple design concepts",
        "High-resolution files (JPEG, PNG, SVG)",
        "Vector files for scaling",
        "Brand color and typography consistency",
        "Revisions until satisfaction",
        "Logo variations for different platforms"
      ],
      platforms: ["All Business Types"],
      category: "design",
      url: "/video-editing-company-jaipur"
    },
    {
      id: 12,
      title: "Business Card Design",
      description: "Premium and creative business card design that reflects your brand identity.",
      features: [
        "Custom and unique design",
        "Double-sided layout",
        "Print-ready files (CMYK format)",
        "High-resolution design (300 DPI)",
        "Multiple design concepts",
        "Revisions included",
        "Files in JPEG, PNG, and PDF format"
      ],
      platforms: ["All Business Types"],
      category: "design",
      url: "/video-editing-company-jaipur"
    },
    {
      id: 13,
      title: "Letterhead Design",
      description: "Corporate-style letterhead design for consistent and professional branding.",
      features: [
        "Clean and professional layout",
        "Custom brand colors and typography",
        "Compatible with MS Word & Google Docs",
        "Print-ready format (CMYK)",
        "High-resolution design (300 DPI)",
        "Multiple design variations",
        "Files in PDF, DOCX, and PNG formats"
      ],
      platforms: ["Corporate", "Startups", "Agencies"],
      category: "design",
      url: "/video-editing-company-jaipur"
    },
    {
      id: 14,
      title: "Flyer & Brochure Design",
      description: "Attractive and impactful flyer & brochure designs for both offline and online promotions.",
      features: [
        "Custom creative designs tailored to your brand",
        "Single-page and multi-page brochure options",
        "Print-ready files (CMYK, 300 DPI)",
        "High-quality graphics for digital sharing",
        "Professional typography and layout",
        "Multiple design concepts to choose from",
        "Delivery in PDF, PNG, and editable formats"
      ],
      platforms: ["Corporate", "Events", "Marketing Campaigns", "Retail Businesses"],
      category: "design",
      url: "/video-editing-company-jaipur"
    },
    {
      id: 15,
      title: "Social Media Post Design",
      description: "Custom social media post designs for all major platforms like Facebook, Instagram, LinkedIn, and more.",
      features: [
        "Unique, eye-catching designs for your brand",
        "Optimized sizes for Facebook, Instagram, LinkedIn, Twitter, etc.",
        "Static and animated post options",
        "Professional typography and color schemes",
        "Theme-based design for brand consistency",
        "Editable source files (PSD/AI) included",
        "Quick turnaround time for trending content"
      ],
      platforms: ["Facebook", "Instagram", "LinkedIn", "Twitter", "Pinterest"],
      category: "design",
      url: "/video-editing-company-jaipur"
    },
    {
      id: 16,
      title: "Video Editing Services",
      description: "High-quality video production and editing services tailored for social media platforms.",
      features: [
        "Professional video editing for social media platforms",
        "Transitions, effects, and motion graphics for engagement",
        "Custom intros and outros with your branding",
        "Color correction and audio enhancement",
        "Short-form videos for Instagram Reels, TikTok, and YouTube Shorts",
        "Captions and subtitles for accessibility",
        "Optimized video formats for all major platforms"
      ],
      platforms: ["Instagram", "TikTok", "YouTube", "Facebook", "LinkedIn"],
      category: "design",
      url: "/video-editing-company-jaipur"
    },
    {
      id: 17,
      title: "Animated Videos",
      description: "Engaging animated explainer videos designed to boost audience reach and brand storytelling.",
      features: [
        "High-quality 2D and 3D animation",
        "Custom character and scene creation",
        "Brand-focused color themes and typography",
        "Professional voice-over and background music",
        "Scriptwriting and storyboard development",
        "Social media optimized formats",
        "Quick turnaround and unlimited revisions"
      ],
      platforms: ["YouTube", "Instagram", "Facebook", "LinkedIn", "TikTok"],
      category: "design",
      url: "/video-editing-company-jaipur"
    },
    {
      id: 18,
      title: "Brand Identity Kit",
      description: "Comprehensive brand identity kit including logo, color palette, fonts, and style guide for a consistent brand presence.",
      features: [
        "Custom logo design with multiple variations",
        "Curated color palette for brand consistency",
        "Typography selection with font pairings",
        "Complete brand style guide",
        "Business card and stationery design",
        "Social media branding templates",
        "High-resolution files for print and digital use"
      ],
      platforms: ["Print", "Digital", "Social Media", "Website"],
      category: "design",
      url: "/video-editing-company-jaipur"
    },
    {
      id: 19,
      title: "Product Photography & Editing",
      description: "Professional product photography and editing for high-quality images tailored for e-commerce and marketing needs.",
      features: [
        "High-resolution product images",
        "Multiple angles and close-up shots",
        "Background removal and white background options",
        "Color correction and image enhancement",
        "Shadow and reflection effects",
        "360° product photography option",
        "Optimized images for e-commerce platforms"
      ],
      platforms: ["Amazon", "Flipkart", "Shopify", "E-commerce websites", "Social Media"],
      category: "design",
      url: "/seo-company-jaipur"
    },
    {
      id: 20,
      title: "On-Page SEO",
      description: "Optimize website pages for better search engine visibility with proper meta tags, keyword targeting, and content enhancements.",
      features: [
        "Meta title and description optimization",
        "Header tag (H1, H2, H3) structuring",
        "Keyword research and placement",
        "Image alt text optimization",
        "Internal linking strategy",
        "Content optimization for SEO",
        "URL structure optimization",
        "Mobile-friendly and responsive checks"
      ],
      platforms: ["Websites", "Blogs", "E-commerce Stores"],
      category: "analytics",
      url: "/seo-company-jaipur"
    },
    {
      id: 21,
      title: "Off-Page SEO",
      description: "Boost your website authority and search engine rankings with high-quality backlinks and off-page strategies.",
      features: [
        "High-authority backlink building",
        "Guest posting on niche websites",
        "Forum posting and Q&A submissions",
        "Social bookmarking",
        "Directory submissions",
        "Influencer outreach",
        "Content syndication",
        "Competitor backlink analysis"
      ],
      platforms: ["Websites", "Blogs", "E-commerce Stores"],
      category: "analytics",
      url: "/seo-company-jaipur"
    },
    {
      id: 22,
      title: "Technical SEO",
      description: "Optimize your website's technical aspects for better crawling, indexing, and overall SEO performance.",
      features: [
        "Website speed optimization",
        "Mobile-friendliness and responsive design",
        "XML sitemap creation and submission",
        "Robots.txt optimization",
        "Fixing crawl errors",
        "Canonicalization setup",
        "Structured data & schema markup",
        "SSL certificate implementation (HTTPS)",
        "Core Web Vitals optimization"
      ],
      platforms: ["Websites", "E-commerce Stores", "Blogs"],
      category: "analytics",
      url: "/seo-company-jaipur"
    },
    {
      id: 23,
      title: "Local SEO",
      description: "Boost your local presence and attract nearby customers with optimized local SEO strategies.",
      features: [
        "Google My Business (GMB) setup & optimization",
        "Local business citation building",
        "NAP consistency (Name, Address, Phone)",
        "Local keyword research",
        "Customer review management & strategy",
        "Local link building",
        "Location-based landing pages",
        "Optimizing for Google Maps ranking"
      ],
      platforms: ["Google My Business", "Local Directories", "Maps"],
      category: "analytics",
      url: "/seo-company-jaipur"
    },
    {
      id: 24,
      title: "E-commerce SEO",
      description: "Drive traffic and sales to your online store by optimizing product and category pages for search engines.",
      features: [
        "Product page SEO optimization",
        "Optimized product titles & descriptions",
        "Schema markup for products",
        "Image optimization (Alt tags & compression)",
        "Site structure & internal linking for e-commerce",
        "Category page optimization",
        "Product reviews & rating integration",
        "Technical SEO for e-commerce sites"
      ],
      platforms: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
      category: "analytics",
      url: "/seo-company-jaipur"
    },
    {
      id: 25,
      title: "Blog Writing with SEO",
      description: "High-quality, keyword-rich blog posts that drive organic traffic and improve search engine rankings.",
      features: [
        "SEO-optimized blog content",
        "Keyword research for each blog",
        "Engaging and informative writing",
        "Internal linking to boost SEO",
        "Meta title & description optimization",
        "Proper heading structure (H1, H2, H3)",
        "Plagiarism-free and unique content",
        "Regular blog posting schedule"
      ],
      contentLength: ["500 words", "1000 words", "1500+ words"],
      platforms: ["Websites", "Blogs", "E-commerce Stores"],
      category: "analytics",
      url: "/seo-company-jaipur"
    },

    {
      id: 27,
      title: "Image SEO",
      description: "Optimize images on your website to improve search engine visibility and enhance page load performance.",
      features: [
        "Optimized image file names",
        "Proper ALT text for SEO",
        "Image compression for faster load times",
        "Responsive image sizing for all devices",
        "Structured data for images",
        "Image sitemap creation",
        "WebP & modern formats for SEO",
        "Image performance monitoring"
      ],
      platforms: ["Websites", "Blogs", "E-commerce Stores"],
      category: "analytics",
      url: "/seo-company-jaipur"
    },
    {
      id: 28,
      title: "Video SEO",
      description: "Optimize videos for YouTube and other search engines to improve visibility and engagement.",
      features: [
        "Optimized video titles and descriptions",
        "Targeted keyword research for videos",
        "Tags and category optimization",
        "Custom thumbnails for higher CTR",
        "Video transcripts for SEO",
        "Closed captions and subtitles",
        "Playlist creation for better watch time",
        "Performance tracking and analytics"
      ],
      platforms: ["YouTube", "Vimeo", "Social Media"],
      category: "analytics",
      url: "/seo-company-jaipur"
    },
    {
      id: 29,
      title: "SEO Audit",
      description: "Comprehensive SEO analysis of your website with actionable strategies to improve search rankings.",
      features: [
        "Technical SEO audit (crawlability, site speed, mobile-friendliness)",
        "On-page SEO audit (meta tags, content, headings)",
        "Off-page SEO audit (backlinks, social signals)",
        "Competitor analysis",
        "Keyword analysis and recommendations",
        "Content performance review",
        "Site structure and internal linking audit",
        "Actionable strategy report for optimization"
      ],
      platforms: ["Websites", "E-commerce Stores", "Blogs"],
      category: "analytics",
      url: "/seo-company-jaipur"
    },
    {
      id: 30,
      title: "Google Ads Campaigns",
      description: "Create and manage high-performing search and display ad campaigns to drive traffic and conversions.",
      features: [
        "Search Ads creation and optimization",
        "Display Ads with targeted placements",
        "Keyword research and bidding strategy",
        "Ad copywriting and creative design",
        "Conversion tracking and analytics setup",
        "A/B testing for continuous improvement",
        "Remarketing campaigns",
        "Campaign performance reporting"
      ],
      platforms: ["Google Search", "Google Display Network", "YouTube"],
      category: "marketing",
      url: "/lead-generation-company-jaipur"
    },
    {
      id: 31,
      title: "Facebook Ads Management",
      description: "Manage and optimize targeted Facebook ad campaigns to increase conversions and ROI.",
      features: [
        "Audience research and targeting",
        "Custom ad creative design",
        "Ad copywriting and CTA optimization",
        "A/B testing of campaigns",
        "Conversion tracking and analytics",
        "Retargeting campaigns for lost leads",
        "Campaign performance reporting",
        "Budget optimization for maximum ROI"
      ],
      platforms: ["Facebook"],
      category: "marketing",
      url: "/lead-generation-company-jaipur"
    },
    {
      id: 32,
      title: "Instagram Ads",
      description: "Create visually engaging Instagram ads to reach your target audience and boost engagement.",
      features: [
        "Audience research and precise targeting",
        "Eye-catching ad creative design",
        "Story, Reel, and feed ad formats",
        "Ad copywriting and call-to-action optimization",
        "A/B testing for continuous improvement",
        "Conversion tracking and analytics",
        "Retargeting campaigns for higher ROI",
        "Budget and bid optimization"
      ],
      platforms: ["Instagram", "Facebook"],
      category: "marketing",
      url: "/lead-generation-company-jaipur"
    },
    {
      id: 33,
      title: "LinkedIn Ads",
      description: "Run professional LinkedIn ad campaigns to generate high-quality leads and build brand authority.",
      features: [
        "Targeted audience research for B2B campaigns",
        "Sponsored content and InMail ads",
        "Ad creative and copywriting tailored for LinkedIn",
        "A/B testing to optimize performance",
        "Conversion tracking and analytics",
        "Retargeting for engaged prospects",
        "Budget and bid management",
        "Performance reporting and recommendations"
      ],
      platforms: ["LinkedIn"],
      category: "marketing",
      url: "/lead-generation-company-jaipur"
    },
    {
      id: 34,
      title: "YouTube Ads",
      description: "Create engaging video ad campaigns on YouTube to boost brand awareness and reach a targeted audience.",
      features: [
        "Video ad creation and optimization",
        "Targeted audience research",
        "Skippable and non-skippable ad formats",
        "YouTube Shorts and in-stream ads",
        "A/B testing for improved engagement",
        "Conversion tracking and analytics",
        "Remarketing campaigns",
        "Budget and bid management"
      ],
      platforms: ["YouTube", "Google Display Network"],
      category: "marketing",
      url: "/lead-generation-company-jaipur"
    },
 

    {
      id: 38,
      title: "Twitter Ads",
      description: "Run promoted tweets and trending ad campaigns on Twitter to increase engagement and brand visibility.",
      features: [
        "Targeted audience research and segmentation",
        "Promoted tweets and trend campaigns",
        "Ad creative and copywriting for Twitter",
        "A/B testing to improve performance",
        "Conversion tracking and analytics setup",
        "Retargeting for interested users",
        "Hashtag and trend optimization",
        "Budget and bid management"
      ],
      platforms: ["Twitter"],
      category: "marketing",
      url: "/lead-generation-company-jaipur"
    },
    {
      id: 39,
      title: "Remarketing Ads",
      description: "Retarget previous website visitors and potential leads across multiple platforms to boost conversions.",
      features: [
        "Custom audience creation for retargeting",
        "Cross-platform campaigns (Google, Facebook, Instagram, etc.)",
        "Dynamic product ads for e-commerce",
        "A/B testing for ad performance",
        "Conversion tracking and analytics",
        "Ad creative optimization for higher engagement",
        "Frequency capping to avoid ad fatigue",
        "Budget and bid management"
      ],
      platforms: ["Google Ads", "Facebook Ads", "Instagram Ads", "YouTube Ads"],
      category: "marketing",
      url: "/lead-generation-company-jaipur"
    },
    {
      id: 40,
      title: "Website Design & Development",
      description: "Build responsive, SEO-friendly, and high-converting websites tailored to your business needs.",
      features: [
        "Custom UI/UX design for optimal user experience",
        "Responsive and mobile-first development",
        "SEO-friendly website structure",
        "E-commerce website development",
        "Secure hosting and maintenance",
        "Fast loading speeds and performance optimization",
        "CMS integration (WordPress, Shopify, etc.)",
        "Cross-browser compatibility"
      ],
      platforms: ["Websites", "E-commerce Stores", "Landing Pages"],
      category: "development",
      url: "/web-development-company-jaipur"
    },
    {
      id: 41,
      title: "Landing Page Design",
      description: "Create high-converting landing pages optimized for campaigns, lead generation, and sales.",
      features: [
        "Custom design for conversion-focused layouts",
        "Responsive and mobile-friendly pages",
        "SEO-optimized content and structure",
        "Fast loading speeds and performance optimization",
        "Call-to-action (CTA) placement strategy",
        "Integration with email marketing & CRM",
        "A/B testing for continuous improvement",
        "Analytics tracking for conversions"
      ],
      platforms: ["Websites", "E-commerce Stores", "Campaign Pages"],
      category: "development",
      url: "/web-development-company-jaipur"
    },
    {
      id: 42,
      title: "E-commerce Website Development",
      description: "Develop fully functional online stores with secure payment integration and user-friendly design.",
      features: [
        "Custom e-commerce website design",
        "Secure payment gateway integration",
        "Product catalog setup and management",
        "Responsive and mobile-friendly design",
        "SEO-friendly product pages",
        "Shopping cart and checkout optimization",
        "Inventory and order management system",
        "Analytics tracking and reporting"
      ],
      platforms: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
      category: "development",
      url: "/web-development-company-jaipur"
    },
    {
      id: 43,
      title: "WordPress Website Design",
      description: "Design and develop custom WordPress websites with tailored themes and advanced functionality.",
      features: [
        "Custom WordPress theme development",
        "Responsive and mobile-friendly design",
        "SEO-optimized pages and content",
        "Plugin installation and configuration",
        "Custom functionality and integrations",
        "Page builder support (Elementor, WPBakery)",
        "E-commerce functionality with WooCommerce",
        "Ongoing maintenance and updates"
      ],
      platforms: ["WordPress"],
      category: "development",
      url: "/web-development-company-jaipur"
    },
    {
      id: 44,
      title: "Mobile App Development",
      description: "Develop custom mobile applications for iOS and Android platforms to enhance your business reach.",
      features: [
        "iOS and Android app development",
        "User-centric UI/UX design",
        "App Store and Play Store optimization",
        "Cross-platform app solutions",
        "Push notifications integration",
        "Secure authentication and data management",
        "Performance optimization and bug fixes",
        "Ongoing updates and maintenance"
      ],
      platforms: ["iOS", "Android", "Cross-Platform (Flutter, React Native)"],
      category: "development",
      url: "/web-development-company-jaipur"
    },
    {
      id: 45,
      title: "UI/UX Design",
      description: "Craft intuitive and visually appealing UI/UX designs for websites, apps, and digital platforms.",
      features: [
        "User-centered interface design",
        "Wireframing and prototyping",
        "High-fidelity mockups",
        "Responsive and mobile-first design",
        "Interaction design and animation",
        "Usability testing and feedback",
        "Design system and component library creation",
        "Collaboration with developers for implementation"
      ],
      platforms: ["Websites", "Mobile Apps", "Web Apps"],
      category: "development",
      url: "/web-development-company-jaipur"
    },
    {
      id: 46,
      title: "Website Speed Optimization",
      description: "Enhance your website's performance and user experience by optimizing loading speed and responsiveness.",
      features: [
        "Minification of CSS, JS, and HTML",
        "Image compression and optimization",
        "Browser caching setup",
        "Lazy loading of content and images",
        "Server and hosting performance optimization",
        "CDN integration for faster delivery",
        "Database optimization",
        "Monitoring and performance reporting"
      ],
      platforms: ["Websites", "E-commerce Stores", "Landing Pages"],
      category: "development",
      url: "/web-development-company-jaipur"
    },
    {
      id: 47,
      title: "Website Maintenance",
      description: "Ensure your website remains secure, up-to-date, and fully functional with ongoing maintenance services.",
      features: [
        "Regular software and plugin updates",
        "Security monitoring and malware removal",
        "Backup and recovery solutions",
        "Performance optimization",
        "Content updates and website edits",
        "Broken link and error monitoring",
        "Uptime monitoring",
        "Technical support and troubleshooting"
      ],
      platforms: ["Websites", "E-commerce Stores", "Landing Pages"],
      category: "development",
      url: "/web-development-company-jaipur"
    },
    {
      id: 48,
      title: "Blog Setup & Management",
      description: "Set up and manage professional blogs to drive traffic, engagement, and SEO growth for your website.",
      features: [
        "Custom blog setup and theme design",
        "Content planning and calendar management",
        "SEO-optimized post publishing",
        "Category and tag management",
        "Internal linking and navigation optimization",
        "Regular updates and content scheduling",
        "Performance tracking and analytics",
        "Integration with social media for content promotion"
      ],
      platforms: ["WordPress", "Blogger", "Medium"],
      category: "development",
      url: "/web-development-company-jaipur"
    },
    {
      id: 49,
      title: "Portfolio Website Development",
      description: "Design and develop professional portfolio websites for individuals or businesses to showcase their work.",
      features: [
        "Custom portfolio website design",
        "Responsive and mobile-friendly layouts",
        "SEO-friendly structure",
        "Interactive galleries and project showcases",
        "Contact forms and lead capture",
        "CMS integration for easy updates",
        "Performance and speed optimization",
        "Analytics tracking for visitor insights"
      ],
      platforms: ["Websites", "Personal Portfolio Platforms"],
      category: "development",
      url: "/web-development-company-jaipur"
    }
  ];
  const whyChooseUs = [
    { title: "Expert Team", description: "Seasoned professionals with proven track records across industries" },
    { title: "Custom Strategies", description: "Bespoke solutions tailored to your unique business goals" },
    { title: "Affordable Packages", description: "Premium services at competitive, transparent prices" },
    { title: "Transparent Reporting", description: "Regular updates and deep performance insights" },
    { title: "Cutting-Edge Technology", description: "Latest tools and platforms for maximum effectiveness" },
    { title: "Dedicated Support", description: "Personal account managers and responsive communication" },
    { title: "Results-Driven Approach", description: "Focused on metrics that matter to your bottom line" }
  ];
  const process = [
    { step: 1, title: "Discover", description: "We thoroughly understand your business, industry, and competitors" },
    { step: 2, title: "Strategize", description: "We create a customized, multi-channel strategy aligned with your goals" },
    { step: 3, title: "Execute", description: "We implement with creativity, precision, and attention to detail" },
    { step: 4, title: "Analyze", description: "We monitor performance and gather actionable insights" },
    { step: 5, title: "Optimize", description: "We continuously refine our approach for maximum results" }
  ];
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'content', name: 'Content' },
    { id: 'analytics', name: 'Analytics' }
  ];
  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(service => service.category === activeTab);

  const toggleFeatures = (serviceId) =>
  {
    if (expandedService === serviceId)
    {
      setExpandedService(null);
    } else
    {
      setExpandedService(serviceId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br sm:pt-[100px] sm:px-4 px-0 from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="text-[#101340] py-0  ">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6"> SEOcial Media Solutions Expert Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Explore our complete range of social media, branding, and digital marketing solutions to grow your business and build a strong online presence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === category.id
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'bg-blue-300 hover:bg-blue-500'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <Link href={service.url} target='_blank' >
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </Link>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, expandedService === service.id ? service.features.length : 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li
                      className="text-blue-600 font-medium cursor-pointer hover:text-blue-800 transition-colors duration-200 flex items-center"
                      onClick={() => toggleFeatures(service.id)}
                    >
                      <svg
                        className={`h-4 w-4 mr-1 transition-transform duration-200 ${expandedService === service.id ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {expandedService === service.id
                        ? "Show less features"
                        : `+${service.features.length - 3} more features`}
                    </li>
                  )}
                </ul>
                {service.platforms && (
                  <div className="mt-4">
                    <p className="font-medium text-gray-700 mb-2">Platforms We Cover:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.platforms.map((platform, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 transition-all duration-300 hover:border-blue-300 hover:shadow-md">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Proven Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure your success at every stage of your digital journey.
            </p>
          </div>
          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-blue-200 z-0"></div>
            {/* Vertical line for mobile */}
            <div className="block md:hidden absolute left-4 top-0 bottom-0 w-1 bg-blue-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="flex md:flex-col items-start md:items-center gap-4 relative"
                >
                  {/* Step Circle */}
                  <div className="bg-blue-600 border-2 text-white rounded-full w-10 h-10 md:w-20 md:h-20 flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg z-10">
                    {step.step}
                  </div>

                  {/* Step Title & Description */}
                  <div className="text-left md:text-center">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
   

    </div>
  );
};
export default ServicesPage;