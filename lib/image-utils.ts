/**
 * 图片工具函数库
 */

/**
 * 预加载图片 - 使用原生浏览器图片API
 * 注意: 必须在客户端使用，不能在服务器组件中直接调用
 * 
 * @param src 图片URL
 * @returns Promise 当图片加载完成时resolve
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      // 服务器端不执行预加载
      resolve();
      return;
    }
    
    try {
      // 确保使用的是浏览器原生的 Image 构造函数，而不是 Next.js 的 Image 组件
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = (e) => reject(e);
      img.src = src;
    } catch (error) {
      console.error('Error preloading image:', error);
      reject(error);
    }
  });
}

/**
 * 批量预加载图片
 * 
 * @param sources 图片URL数组
 * @returns Promise 当所有图片加载完成时resolve
 */
export function preloadImages(sources: string[]): Promise<void[]> {
  if (typeof window === 'undefined') {
    // 服务器端返回已完成的promise
    return Promise.resolve(sources.map(() => undefined));
  }
  
  return Promise.all(sources.map(src => preloadImage(src)));
} 