/**
 * 主题切换适配指南
 * 
 * 以下是需要在所有游戏页面中替换的 CSS 类，以支持深色/浅色主题切换
 * 
 * 使用查找替换功能在所有 app/(game)/**/page.tsx 文件中进行以下替换:
 * 
 * 1. 基础背景色:
 *    替换: className="min-h-screen bg-black/90" 
 *    为: className="min-h-screen bg-gray-100 dark:bg-black/90 transition-colors duration-300"
 * 
 * 2. 标题文本颜色:
 *    替换: text-[#2EE59D]
 *    为: text-[#1D9E6F] dark:text-[#2EE59D]
 * 
 * 3. 普通文本颜色:
 *    替换: text-gray-400
 *    为: text-gray-600 dark:text-gray-400
 * 
 * 4. 卡片背景:
 *    替换: bg-black/50
 *    为: bg-white dark:bg-black/50
 * 
 * 5. 卡片标题颜色:
 *    替换: text-white
 *    为: text-gray-800 dark:text-white
 * 
 * 6. 卡片内容颜色:
 *    替换: text-gray-300
 *    为: text-gray-700 dark:text-gray-300
 * 
 * 7. 边框颜色:
 *    替换: border-[#2EE59D]/10
 *    为: border-gray-200 dark:border-[#2EE59D]/10
 * 
 * 8. 特性框背景:
 *    替换: bg-black/30
 *    为: bg-gray-50 dark:bg-black/30
 * 
 * 9. 特性框边框:
 *    添加: border border-gray-200 dark:border-transparent
 * 
 * 10. 渐变背景:
 *     替换: from-black via-black/95
 *     为: from-white via-white/95 dark:from-black dark:via-black/95
 * 
 * 11. 阴影效果:
 *     替换: shadow-lg shadow-[#2EE59D]/10
 *     为: shadow-md dark:shadow-lg dark:shadow-[#2EE59D]/10
 * 
 * 12. 卡片阴影:
 *     为所有卡片添加: shadow-sm dark:shadow-none
 * 
 * 每个页面的 iframe 样式也应该更新:
 * style={{ 
 *   border: 'none',
 *   backgroundColor: 'white', // 原来是 'black'
 *   height: '600px',
 *   marginTop: '40px'
 * }}
 * 
 * 示例模板可以参考已更新的 sprunki-incredibox/page.tsx 和 sprunki-smg4/page.tsx 页面
 */

// 执行示例 - 可以通过 Node.js 运行这个脚本来批量处理文件
// 这里只是示例代码，实际执行需要使用文件系统API

/*
const fs = require('fs');
const path = require('path');
const gameDir = path.join(__dirname, 'app', '(game)');

// 获取所有游戏目录
const gameDirs = fs.readdirSync(gameDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => path.join(gameDir, dirent.name));

// 处理每个游戏目录中的 page.tsx 文件
gameDirs.forEach(dir => {
  const pagePath = path.join(dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // 应用上面列出的所有替换
    content = content
      .replace(/className="min-h-screen bg-black\/90"/g, 'className="min-h-screen bg-gray-100 dark:bg-black/90 transition-colors duration-300"')
      .replace(/text-\[#2EE59D\]/g, 'text-[#1D9E6F] dark:text-[#2EE59D]')
      // ... 应用其他替换
      
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`Updated ${pagePath}`);
  }
});
*/ 