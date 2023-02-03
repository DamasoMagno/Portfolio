/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["repository-images.githubusercontent.com", "media.graphassets.com"]
  }
}

module.exports = nextConfig
