/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@material-tailwind/react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
