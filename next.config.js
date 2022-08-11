module.exports = {
  i18n: {
    // providing the locales supported by your application
    locales: ["uz-UZ", "en-US", "ru-RU"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "uz-UZ",

    domains: [
      {
        domain: 'uzbekvoiceapp.vercel.app',
        defaultLocale: 'uz-UZ',
        https: true,
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/bosqich',
        destination: '/bosqich/1',
        permanent: false,
      },
      {
        source: '/hakaton',
        destination: '/hakaton/1',
        permanent: false,
      },
      {
        source: '/teams',
        destination: '/',
        permanent: false,
      },
    ]
  },
}



