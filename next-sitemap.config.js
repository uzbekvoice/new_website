const siteUrl = "https://uzbekvoice.ai";

module.exports = {
  siteUrl,
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

  },
};