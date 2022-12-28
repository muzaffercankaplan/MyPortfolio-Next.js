/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};
module.exports = nextConfig;
// module.exports = {
//   eslint: {
//     dirs: ["app", "components"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
//   },
// };
