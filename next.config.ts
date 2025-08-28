import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Use a custom build dir to avoid Windows locks on .next
  distDir: '.next-dev',
  reactStrictMode: true,
  images: {
    // Use remotePatterns for flexibility and TS support
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
    ],
  },
  async rewrites() {
    const isDev = process.env.NODE_ENV !== 'production'
    if (!isDev) return []
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*',
      },
    ]
  },
  webpack(config, { dev }) {
    // Workaround for Windows file locking errors on Webpack persistent cache
    // Error: ENOENT rename .next\\cache\\webpack\\client-development\\*.pack.gz_
    if (dev) {
      // Disable persistent caching in development
      // See: https://webpack.js.org/configuration/cache/
      // Type is boolean | object, false disables caching
      config.cache = false
    }
    return config
  },
}

export default nextConfig

