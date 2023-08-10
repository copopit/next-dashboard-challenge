/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mysql2"],
    serverActions: true,
  },
}

module.exports = nextConfig
