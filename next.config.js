/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withNextra = require('nextra')({
  ...nextConfig,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

module.exports = withNextra()
