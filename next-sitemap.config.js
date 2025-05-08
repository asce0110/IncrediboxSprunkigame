/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://incrediboxsprunkimod.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ]
  },
  // 添加优先级和更改频率
  changefreq: 'daily',
  priority: 0.7,
  // 排除不需要索引的路径
  exclude: ['/admin/*', '/private/*', '/api/*'],
  // 添加额外的sitemap
  additionalPaths: async (config) => {
    const result = [];
    
    // 添加游戏列表页面，设置高优先级
    result.push({
      loc: '/sprunked-games',
      changefreq: 'daily',
      priority: 0.9,
      lastmod: new Date().toISOString()
    });
    
    // 注释掉尚未创建的分类页面
    /*
    // 添加游戏分类页面
    const categories = ['popular-games', 'new-releases-games', 'featured-games', 'classic-games', 'experimental-games', 'remix-games', 'beat-maker-games'];
    categories.forEach(category => {
      result.push({
        loc: `/category/${category}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      });
    });
    */
    
    return result;
  },
  // 自动检测语言
  alternateRefs: [
    {
      href: 'https://incrediboxsprunkimod.com',
      hreflang: 'en'
    }
  ]
} 