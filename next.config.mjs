/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.thecleaning.company',
            port: '',
          },
        ],
      },
};

export default nextConfig;

