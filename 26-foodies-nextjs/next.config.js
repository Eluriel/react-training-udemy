/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "9900",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
