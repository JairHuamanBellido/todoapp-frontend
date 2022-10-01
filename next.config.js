/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: { styledComponents: { ssr: true } },
};

module.exports = nextConfig;
