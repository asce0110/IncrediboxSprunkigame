/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://incrediboxsprunkimod.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ]
  }
} 