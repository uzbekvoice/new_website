module.exports = {
  i18n: {
    // providing the locales supported by your application
    locales: ["uz-UZ", "en-US", "ru-RU"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "uz-UZ",    
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
      {
        source: '/guide',
        destination: '/',
        permanent: false,
      },
    ]
  },
}



