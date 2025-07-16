/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ymimg1.b8cdn.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
