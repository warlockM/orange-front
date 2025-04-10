/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Remove `appDir` – it’s no longer needed or valid
  },
  async rewrites() {
    return [
      {
        source: '/platform/:path*',
        destination: '/platform/:path*',
      },
      {
        source: '/api/auth/:path*',
        destination: '/api/auth/:path*',
      }
    ];
  },
  basePath: '',
  trailingSlash: false,
};

module.exports = nextConfig;
