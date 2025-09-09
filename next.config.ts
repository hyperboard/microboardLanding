import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const repoName = 'microboardLanding';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: "",
  assetPrefix: "",

  images: {
    unoptimized: true,
  },

  trailingSlash: false,
} as const;

export default withNextIntl(nextConfig);
