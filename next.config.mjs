/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export
  images: {
    unoptimized: true, // ✅ important for static export
  },
};

export default nextConfig;
