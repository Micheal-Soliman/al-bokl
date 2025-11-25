/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Performance optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Compression
  compress: true,
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
  // Optimize font loading
  optimizeFonts: true,
  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us-dr-osama-albokl', destination: '/contact', permanent: true },
      { source: '/videos-dr-osama-albokl', destination: '/videos', permanent: true },
      { source: '/about-dr-osama-albokl', destination: '/about/doctor', permanent: true },
      { source: '/category/:path*', destination: '/articles', permanent: true },
      { source: '/tag/:path*', destination: '/articles', permanent: true },
      { source: '/author/:path*', destination: '/articles', permanent: true },
      { source: '/blogs-dr-osama-albokl/:path*', destination: '/articles', permanent: true },
      { source: '/portfolio-category/:path*', destination: '/articles', permanent: true },
      { source: '/:path*/feed', destination: '/articles', permanent: true },
      { source: '/services/sexual-health', destination: '/sexual-health', permanent: true },
      { source: '/services/premature-ejaculation', destination: '/sexual-problems/premature-ejaculation', permanent: true },
      { source: '/services/testosterone-deficiency', destination: '/sexual-health', permanent: true },
      { source: '/services/premarital-counseling', destination: '/contact/appointment', permanent: true },
      { source: '/services/healthy-habits', destination: '/videos', permanent: true }
    ];
  },
};

export default nextConfig;
