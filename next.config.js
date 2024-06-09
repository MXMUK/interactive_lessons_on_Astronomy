/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ['i.imgur.com'], formats: ['image/avif', 'image/webp'] }, 
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/models',
        permanent: true,
      },
      {
        source: '/',
        destination: '/lessons',
        permanent: true,
      },
    ]
  },
  transpilePackages: [
    "three",
    "react-three-fiber",
    "drei",
  ],
};

module.exports = nextConfig;
