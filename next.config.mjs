import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // 1. alias 설정 추가
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@': path.resolve(__dirname, 'src'),
    };

    // 2. 기존 svg 설정 유지
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
