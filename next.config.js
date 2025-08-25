const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export",
  distDir: "dist",
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;
