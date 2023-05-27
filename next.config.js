/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.gif$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

module.exports = nextConfig;
