import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), "public", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);
  return blogs;
}

// Generate metadata for each blog page
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const blogs = getBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog post could not be found.",
      robots: "noindex, nofollow",
    };
  }

  return {
    title: blog.title,
    description:
      blog.metaDescription || blog.excerpt || blog.content.substring(0, 160),
    robots: "index, follow",
    alternates: {
      canonical:
        blog.canonicalUrl || `https://www.seocialmedia.in/blog/${blog.slug}`,
    },
    other: {
      keywords: blog.keywords
        ? Array.isArray(blog.keywords)
          ? blog.keywords.join(", ")
          : blog.keywords
        : Array.isArray(blog.tags)
        ? blog.tags.join(", ")
        : "",
      "article:author": blog.author || "Gaurnish Health",
      "article:publisher": "Gaurnish Health",
      "article:published_time": blog.date,
      "article:section": "Health",
      "article:tag": Array.isArray(blog.tags)
        ? blog.tags.join(", ")
        : blog.tags || "",
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: blog.title,
        description: blog.metaDescription || blog.excerpt,
        image: `https://www.seocialmedia.in${blog.image}`,
        author: {
          "@type": "Person",
          name: blog.author || "Gaurnish Health",
        },
        publisher: {
          "@type": "Organization",
          name: "Gaurnish Health",
          logo: {
            "@type": "ImageObject",
            url: "https://www.seocialmedia.in/logo.png",
          },
        },
        datePublished: blog.date,
        dateModified: blog.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.seocialmedia.in/blog/${blog.slug}`,
        },
      }),
    },
    openGraph: {
      title: blog.title,
      description: blog.metaDescription || blog.excerpt,
      type: "article",
      url: `https://www.seocialmedia.in/blog/${blog.slug}`,
      images: [
        {
          url: `https://www.seocialmedia.in${blog.image}`,
          width: 1200,
          height: 630,
          alt: blog.alt || blog.title,
        },
      ],
      authors: [blog.author || "VIRAL nexus"],
      publishedTime: blog.date,
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: [`https://www.seocialmedia.in${blog.image}`],
      creator: "@seocialmedia",
    },
  };
}

// Custom blog content renderer component
function BlogContent({ content }) {
  const customStyles = `
    .blog-content {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      color: #1f2937;
      line-height: 1.7;
    }
    
    .blog-content h2 {
      font-size: 1.875rem;
      font-weight: 700;
      margin-top: 2.5rem;
      margin-bottom: 1.25rem;
      color: #016630;
      line-height: 1.2;
      position: relative;
      padding-bottom: 0.5rem;
    }
    
    .blog-content h2:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: #016630;
    }
    
    .blog-content h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #016630;
      line-height: 1.3;
    }
    
    .blog-content p {
      margin-bottom: 1.25rem;
      line-height: 1.7;
      color: #374151;
    }
    
    .blog-content ul, .blog-content ol {
      margin-bottom: 1.25rem;
      padding-left: 1.5rem;
    }
    
    .blog-content li {
      margin-bottom: 0.5rem;
      position: relative;
    }
    
    .blog-content a {
      color: #016630;
      text-decoration: underline;
      text-underline-offset: 2px;
      transition: all 0.2s ease;
    }
    
    .blog-content a:hover {
      color: #014d24;
      text-decoration-color: #014d24;
    }
    
    .blog-content blockquote {
      border-left: 4px solid #016630;
      padding-left: 1.5rem;
      margin: 1.5rem 0;
      font-style: italic;
      color: #4b5563;
    }
    
    .blog-content img {
      border-radius: 0.5rem;
      margin: 1.5rem 0;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  `;

  return (
    <div className="blog-content">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default async function SingleBlogPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const blogs = getBlogs();
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                Could not find blog with slug: {slug}
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="mr-2 -ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero section with image */}
      <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] max-w-7xl mx-auto">
        <Image
          src={blog.image || "/images/placeholder.jpg"}
          alt={blog.alt || blog.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {blog.heading}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-200">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <span className="font-semibold">{blog.author.charAt(0)}</span>
                </div>
                <span>{blog.author}</span>
              </div>
              <span>•</span>
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Author and date info */}
          <div className="p-6 md:p-8 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
                  {blog.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{blog.author}</p>
                  <p className="text-gray-500 flex items-center">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {formattedDate}
                  </p>
                </div>
              </div>
              
              {/* Social share buttons placeholder */}
              <div className="flex space-x-3">
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Tags */}
          {blog.tags && (
            <div className="px-6 md:px-8 py-4 border-b border-gray-100">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-50 text-green-800 border border-green-100"
                  >
                    <svg className="mr-1.5 h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                    </svg>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Blog content */}
          <div className="p-6 md:p-8">
            <BlogContent content={blog.content} />
          </div>

          {/* Back button */}
          <div className="px-6 md:px-8 py-6 bg-gray-50 border-t border-gray-100">
            <Link
              href="/blog"
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
            >
              <svg className="mr-2 -ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to All Blogs
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

// Generate static paths for all blogs
export async function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}