const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: 'en',
    localeDetection: false,
    domains: [
      {
        domain: 'raqamyah.com',
        defaultLocale: 'en',
      },
      {
        domain: 'raqamyah.com',
        defaultLocale: 'ar',
      },
    ],
    localePath: path.resolve("./public/locales/"),
  },
};
