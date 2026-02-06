/**
 * @param {import('next').NextConfig} nextConfig
 */
const rssFeedPlugin = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    async rewrites() {
      return [
        ...(await nextConfig.rewrites()),
        // rss feed route
        {
          source: '/mysearch/getsearchrssfeed',
          destination: '/api/healthz',
        },
      ];
    },
  });
};

module.exports = rssFeedPlugin;
