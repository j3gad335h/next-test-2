/** @type {import('next').NextConfig} */
// const { i18n } = require("./next-i18next.config");
const path = require("path");
const { version } = require('./package.json');
module.exports = {
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  publicRuntimeConfig: {
    version,
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: 'ar',
    localeDetection: false,
  },
  images: {
    unoptimized: true,
    domains: ['compunnet.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'compunnet.com',
        port: '',
        pathname: '/',
      },
    ],
  },
 
};


