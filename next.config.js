/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindcss.com",
        port: "",
        pathname: "/img/*",
      },
      {
        protocol: "https",
        hostname: "wmdb.querydata.org",
        port: "",
        pathname: "/movie/*/**",
      },
    ],
  },
};

module.exports = nextConfig;
