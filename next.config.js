/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/cqweb',
  assetPrefix: '/cqweb/',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 's3.us-west-2.amazonaws.com'],
  },
}

module.exports = nextConfig 