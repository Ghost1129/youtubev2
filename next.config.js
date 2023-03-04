/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    images: {
    domains: ['i.ytimg.com','yt3.ggpht.com'],
    },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig


