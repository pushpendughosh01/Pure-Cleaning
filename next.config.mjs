/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Wildcard to allow any hostname
        port: '', // Empty string to allow any port
      },
    ],
  },
};

export default nextConfig;
