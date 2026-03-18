export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  category: string
  publishDate: string
  readTime: number
  views: number
  comments: number
  featured: boolean
  thumbnail: string
  tags: string[]
  author: {
    name: string
    avatar: string
  }
}

export const blogCategories = [
  '全部文章',
  '内容营销',
  'AI与机器学习',
  '数字策略',
  '案例研究',
  '运营技巧',
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'content-sop-framework',
    title: '内容 SOP 框架搭建指南',
    description: '从 0 到 1 搭建可复用的内容 SOP 体系，包括选题流程、撰写规范、审核机制和分发策略，提升团队内容生产效率。',
    category: '内容营销',
    publishDate: '2024-02-15',
    readTime: 8,
    views: 1234,
    comments: 15,
    featured: true,
    thumbnail: '📝',
    tags: ['内容SOP', '流程规范', '团队协作'],
    author: {
      name: '陈琦',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '2',
    slug: 'ai-content-automation',
    title: 'AI 赋能内容生产实践',
    description: '分享使用 ChatGPT、Claude 等 AI 工具辅助内容创作的实战经验，从选题策划到文案生成，提升内容产出效率。',
    category: 'AI与机器学习',
    publishDate: '2024-02-12',
    readTime: 10,
    views: 987,
    comments: 23,
    featured: true,
    thumbnail: '🤖',
    tags: ['AI工具', '内容生产', '效率提升'],
    author: {
      name: '陈琦',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '3',
    slug: 'xiaohongshu-explosive-content',
    title: '小红书爆文写作方法论',
    description: '拆解小红书爆款内容共性，从标题优化、封面设计到话题选择，总结可复用的爆文创作技巧。',
    category: '内容营销',
    publishDate: '2024-02-05',
    readTime: 12,
    views: 756,
    comments: 8,
    featured: false,
    thumbnail: '🌸',
    tags: ['小红书', '爆文策略', '内容增长'],
    author: {
      name: '陈琦',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '4',
    slug: 'live-stream-sop',
    title: '直播 SOP 固化与执行',
    description: '分享直播会销的完整 SOP 模板，包括前中后三阶段的关键节点把控，提升直播转化效果。',
    category: '案例研究',
    publishDate: '2024-01-28',
    readTime: 9,
    views: 543,
    comments: 12,
    featured: false,
    thumbnail: '🎙️',
    tags: ['直播策划', 'SOP', '转化优化'],
    author: {
      name: '陈琦',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '5',
    slug: 'zhihu-growth-strategy',
    title: '知乎账号冷启动实战',
    description: '记录知乎个人账号从 0 到万粉的运营过程，包括选题策略、内容规划和数据复盘方法。',
    category: '内容营销',
    publishDate: '2024-01-22',
    readTime: 11,
    views: 892,
    comments: 19,
    featured: true,
    thumbnail: '📈',
    tags: ['知乎', '冷启动', '增长策略'],
    author: {
      name: '陈琦',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '6',
    slug: 'competitor-analysis',
    title: '竞品调研与内容定位',
    description: '如何通过系统化的竞品分析找到差异化内容方向，避免同质化竞争，建立内容护城河。',
    category: '数字策略',
    publishDate: '2024-01-18',
    readTime: 8,
    views: 1087,
    comments: 27,
    featured: false,
    thumbnail: '🔍',
    tags: ['竞品分析', '内容定位', '策略'],
    author: {
      name: '陈琦',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '7',
    slug: 'content-roi-measurement',
    title: '内容营销 ROI 量化评估',
    description: '介绍内容营销效果的评估方法，包括核心指标选择、归因模型和数据复盘思路。',
    category: '数字策略',
    publishDate: '2024-01-12',
    readTime: 7,
    views: 634,
    comments: 9,
    featured: false,
    thumbnail: '📊',
    tags: ['ROI', '数据分析', '效果评估'],
    author: {
      name: '陈琦',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '8',
    slug: 'multimedia-content-distribution',
    title: '多媒体内容分发策略',
    description: '同一篇内容如何适配公众号、知乎、小红书等不同平台，实现一鱼多吃。',
    category: '运营技巧',
    publishDate: '2024-01-08',
    readTime: 6,
    views: 721,
    comments: 16,
    featured: true,
    thumbnail: '📱',
    tags: ['多平台', '内容分发', '效率'],
    author: {
      name: '陈琦',
      avatar: '/images/author-avatar.jpg'
    }
  }
]
