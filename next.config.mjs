/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — produces a portable `out/` deployable to the user's own
  // server (nginx/any static host), GitHub Pages, or Vercel.
  output: "export",
  images: { unoptimized: true }, // required: no Image Optimization server in a static export
  trailingSlash: true, // friendlier for static hosts serving directories
  // basePath: "/dmp-web", // uncomment ONLY if served from a GitHub project subpath
};

export default nextConfig;
