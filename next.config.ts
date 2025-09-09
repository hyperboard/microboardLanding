import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const repoName = 'microboardLanding';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Говорим Next.js генерировать статический HTML
  output: 'export',

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  images: {
    unoptimized: true,
  },

  trailingSlash: false,
};

export default withNextIntl(nextConfig);
