/** @type {import('next').NextConfig} */
const config = {
  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/demos/*",
      },
    ],
  },
  //   experimental: {
  //     serverActions: true,
  //   },
};

export default config;
