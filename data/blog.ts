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
{
}

export const blogCategories = [
  '全部文章',
  'AI做图',
  'AI学习工具',
  'AI工具对比',
  'AI工具实战',
  '效率工具',
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-image-prompts-october-2025',
    title: '10组AI做图提示词，把国庆朋友圈秒变艺术品',
    description: '旅行攻略、城市地标、人山人海，3类场景10种风格全实测',
    category: 'AI做图',
    publishDate: '2025-10',
    readTime: 6,
    views: 2500,
    comments: 15,
    featured: true,
    thumbnail: '🎨',
    tags: ['AI做图', '提示词'],
    link: 'https://mp.weixin.qq.com/s/Jfm1OKeGNlavodmz9JvGaw',
    author: {
      name: '陈琦',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '2',
    slug: 'jimeng-chinese-poster',
    title: '9组提示词在即梦做中文海报',
    description: 'Nano banana还在画火星文？即梦4.0的中文海报实测与提示词分享',
    category: 'AI做图',
    publishDate: '2025-09',
    readTime: 5,
    views: 2100,
    comments: 12,
    featured: true,
    thumbnail: '🖼',
    tags: ['AI做图', '提示词'],
    link: 'https://mp.weixin.qq.com/s/hzWicRpPzpST38bsrlNfzQ',
    author: {
      name: '陈琦',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '3',
    slug: 'notebooklm-book-to-podcast',
    title: '用NotebookLM把难啃的书榨成30分钟播客',
    description: '用福格行为模型重新理解学习这件事，降低门槛才是关键',
    category: 'AI学习工具',
    publishDate: '2025-06',
    readTime: 8,
    views: 1800,
    comments: 8,
    featured: true,
    thumbnail: '📝',
    tags: ['AI学习工具', '效率方法'],
    link: 'https://mp.weixin.qq.com/s/wsPUGkz--z9XxecorfT7ZA',
    author: {
      name: '陈琦',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '4',
    slug: 'ai-tools-ppt-comparison',
    title: '老板逼我1小时交PPT！4款AI工具实测',
    description: 'Skywork、Coze空间、Flowith、Manus横评，谁做PPT最能打？',
    category: 'AI工具对比',
    publishDate: '2025-05',
    readTime: 10,
    views: 1600,
    comments: 18,
    featured: false,
    thumbnail: '📊',
    tags: ['AI工具对比', '效率工具'],
    link: 'https://mp.weixin.qq.com/s/XBMLtOUsGAfRJ-cOYvQQs2Q',
    author: {
      name: '陈琦',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '5',
    slug: 'gemini-webpage-redesign',
    title: '用Gemini 2.5 Pro 1小时翻新网页端产品',
    description: '录屏丢给AI，1小时生成15个可交互页面，省掉5万外包费用的实战记录',
    category: 'AI工具实战',
    publishDate: '2025-05',
    readTime: 12,
    views: 1500,
    comments: 10,
    featured: false,
    thumbnail: '🚀',
    tags: ['AI工具实战', '前端生成'],
    link: 'https://mp.weixin.qq.com/s/abKklWwBzmm-fj3_dEBmOw',
    author: {
      name: '陈琦',
      avatar: '/images/author-avatar.jpg'
    }
  }
]
