// 定义分类相关的类型

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
}

export interface CategoryCardProps {
  category: Category;
} 