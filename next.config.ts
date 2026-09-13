import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = '/Wastewise_demowebsite'; // GitHub repository ka exact naam

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,

  // GitHub Pages subpath ke liye
  basePath: isProd ? repoName : '',

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

  webpack: (config, { dev }) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;

