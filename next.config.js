const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/the-one-linked' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  assetPrefix: basePath,
  output: 'export',
  swcMinify: true,
}

module.exports = nextConfig
