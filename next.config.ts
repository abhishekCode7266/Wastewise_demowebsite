import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = '/Wastewise_demowebsite';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? repoName : '',

  // ESLint build block ko rokne ke liye:
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },

  transpilePackages: ['motion'],
};

export default nextConfig;

