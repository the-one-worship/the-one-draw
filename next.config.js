const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/the-one-linked' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  assetPrefix: basePath,
  output: 'export',
  swcMinify: true,
}

module.exports = withBundleAnalyzer(nextConfig)
