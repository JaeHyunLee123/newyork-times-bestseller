const BASE_API = "https://books-api.nomadcoders.workers.dev/list";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: "/api/list/:genre",
        destination: `${BASE_API}?name=:genre`,
      },
      {
        source: "/api/list",
        destination: `${BASE_API}s`,
      },
    ];
  },
};

module.exports = nextConfig;
