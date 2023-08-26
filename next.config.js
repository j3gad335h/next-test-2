/** @type {import('next').NextConfig} */
// const { i18n } = require("./next-i18next.config");
const path = require("path");
const { version } = require("./package.json");
module.exports = {
  publicRuntimeConfig: {
    version,
  },
  reactStrictMode: true,
  swcMinify: false,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "ar",
    localeDetection: false,
  },
  compiler: {
    styledComponents: true,
    emotion: true,
  },
  images: {
    unoptimized: true,
    domains: ["compunnet.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "compunnet.com",
        port: "",
        pathname: "/",
      },
    ],
  },
};
