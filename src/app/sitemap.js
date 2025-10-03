// app/sitemap.js
const URL = "https://seocialmedia.in";

export default async function sitemap() {
  const routes = [
    "/",
    "/blog",
    "/career",
    "/contact",
    "/content-writing-company-jaipur",
    "/content-writing-company-ajmer",
    "/digital-marketing-company-jaipur",
    "/digital-markting-services-ajmer",
    "/digital-markting-services-jaipur",
    "/google-business-profile-services-jaipur",
    "/lead-generation-company-ajmer",
    "/lead-generation-company-jaipur ",
    "/privacy-policy",
    "/seo-company-ajmer",
    "/seo-company-jaipur",
    "/social-media-marketing-company-ajmer",
    "/social-media-marketing-jaipur",
    "/top-content-writing-company-jaipur",
    "/top-lead-generation-company-jaipur",
    "/top-seo-company-jaipur",
    "/top-social-media-solution-company-jaipur",
    "/top-video-editing-company-jaipur",
    "/video-editing-company-ajmer",
    "/video-editing-company-jaipur",
    "/web-development-company-ajmer",
    "/web-development-company-jaipur",
    "/best-digital-marketing-branding-services-jaipur",
    "/top-app-development-company-jaipur",
    "/seocial-media-total-solution-application",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: getChangeFrequency(route),
    priority: getPriority(route),
  }));

  // Dynamic blog posts
  const blogPosts = [
    "/blog/best-digital-marketing-agency-jaipur-seocial-media-solutions",
    "/blog/best-digital-marketing-company-jaipur-seocial-media",
    "/blog/best-google-ads-company-jaipur-seocial-media",
    "/blog/content-marketing-in-jaipur",
    "/blog/digital-marketing-company-jaipur",
    "/blog/fast-loading-websites-customer-conversion-google-ranking",
    "/blog/how-to-choose-best-digital-marketing-company-jaipur",
    "/blog/local-seo-jaipur-businesses-dominate-search-2025",
    "/blog/seo-for-small-businesses-jaipur",
    "/blog/seo-web-development-agency-jaipur",
    "/blog/top-10-digital-marketing-agencies-jaipur-seocial-media-solutions",
    "/blog/seo-company-jaipur",
    "/blog/top-app-development-company-jaipur-seocial-media",
    "/blog/top-10-website-development-companies-jaipur-2025",
  ].map((post) => ({
    url: `${URL}${post}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...routes, ...blogPosts];
  ``;
}

// Helper functions for SEO optimization
function getPriority(route) {
  if (route === "/") return 1.0; // Homepage highest priority
  // if (route === "") return 0.9;
  // if (route === "") return 0.9;
  // if (route === "") return 0.85;
  return 0.7;
}

function getChangeFrequency(route) {
  if (route === "/blog") return "daily";
  // if (route === "/") return "weekly";
  return "monthly";
}
