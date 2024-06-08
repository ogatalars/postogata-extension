import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const config = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: './',
  basePath: '',
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, os: false };
    return config;
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/404': { page: '/404' }
    };
  }
};

export default config;
