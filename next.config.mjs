/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: '@import "_sassHelpers/index.scss";',
  },
};

export default nextConfig;
