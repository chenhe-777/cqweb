/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isGitHubPages = process.env.GITHUB_ACTIONS

// 如果你有自定义域名，设置为 ''
// 如果使用 GitHub Pages 默认域名，设置为仓库名
const basePath = isProd && isGitHubPages ? '/cqweb' : ''
const assetPrefix = isProd && isGitHubPages ? '/cqweb/' : ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 's3.us-west-2.amazonaws.com'],
  },
}

module.exports = nextConfig 