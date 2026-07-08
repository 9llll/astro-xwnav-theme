// src/data/navLinks.js

// 1. 定义你的资源分类
export const categories = [
  { id: 'code', name: '源码资源' },
  { id: 'game', name: '游戏资源' },
  // 可以继续添加更多分类
];

// 2. 填入你的资源数据
export const navLinks = [
  {
    id: 'resource-1',              // 资源的唯一ID
    name: '项目名称/标题',          // 资源的标题
    url: 'https://example.com',    // 资源的链接
    icon: 'https://example.com/icon.png', // 资源的图标
    category: 'code',              // 对应上面定义的分类ID
    description: '这是一段关于这个资源的简短描述。', // 资源的描述
    // 如果你的资源有特殊属性，可以在这里添加自定义字段
    // downloadCount: '1.2k',
    // version: 'v2.0.1',
  },
  // ... 更多资源
];
