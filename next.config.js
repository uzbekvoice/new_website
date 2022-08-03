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
}


