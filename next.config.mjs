import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // ✅ 여기서 @ 별칭 추가
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@': path.resolve(process.cwd(), 'src'),
    };

    // 기존 SVG 설정 유지
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
