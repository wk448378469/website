import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // 使用未优化的图片处理
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.doubanio.com',
      },
      {
        protocol: 'https',
        hostname: 'duihui.duoduocdn.com',
      },
    ],
  }
};

export default nextConfig;
