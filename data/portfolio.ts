export interface PortfolioItem {
  id: string
  slug: string
  title: string
  description: string
  category: 'content-marketing' | 'ai-project' | 'case-study' | 'technical'
  tags: string[]
  publishDate: string
  featured: boolean
  thumbnail: string
  metrics?: {
    views?: number
    engagement?: string
    roi?: string
  }
  links?: {
    github?: string
    demo?: string
    article?: string
  }
  technologies?: string[]
  client?: string
  duration?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    slug: 'zhihu-account-growth',
    title: '知乎万粉账号增长',
    description: '从0到万粉的知乎个人账号运营，建立个人IP，提升行业影响力。通过优质内容回答和专栏文章，实现粉丝快速增长。',
    category: 'case-study',
    tags: ['知乎', '冷启动', '个人IP'],
    publishDate: '2023-06-01',
    featured: true,
    thumbnail: '📈',
    metrics: {
      engagement: '万粉粉丝',
      views: 100000
    },
    technologies: ['内容策略', '数据分析', '用户增长'],
    client: '个人项目',
    duration: '持续运营'
  },
  {
    id: '2',
    slug: 'xiaohongshu-account-start',
    title: '小红书冷启动',
    description: '打造小红书个人账号冷启动，从0开始实现粉丝快速增长。通过研究爆款笔记规律，打造多篇高赞高评论的优质内容。',
    category: 'content-marketing',
    tags: ['小红书', '冷启动', '爆文策略'],
    publishDate: '2023-09-15',
    featured: true,
    thumbnail: '🌸',
    metrics: {
      engagement: '快速增长',
      views: 50000
    },
    technologies: ['内容策划', '数据优化', '平台算法'],
    client: '个人项目',
    duration: '3个月'
  },
  {
    id: '3',
    slug: 'chucheng-capital-interview',
    title: '初橙资本专访',
    description: '接受初橙资本专访，分享个人在内容运营领域的经验和见解。文章获得广泛传播，提升个人行业影响力。',
    category: 'case-study',
    tags: ['媒体专访', '个人品牌', '经验分享'],
    publishDate: '2023-12-10',
    featured: false,
    thumbnail: '🎤',
    metrics: {
      engagement: '媒体传播'
    },
    technologies: ['个人IP', '内容输出', '品牌建设'],
    client: '初橙资本',
    duration: '一次活动'
  },
  {
    id: '4',
    slug: 'jiulingmen-case-study',
    title: '九零门变现案例',
    description: '参与九零门课程产品的运营与内容营销工作，通过内容策略实现课程变现GMV突破百万。',
    category: 'case-study',
    tags: ['课程运营', '内容营销', '变现'],
    publishDate: '2023-11-20',
    featured: false,
    thumbnail: '💰',
    metrics: {
      roi: 'GMV破百万'
    },
    links: {
      article: 'https://blog.example.com/case-study'
    },
    technologies: ['内容策略', '转化优化', '用户增长'],
    client: '九零门',
    duration: '12个月'
  },
  {
    id: '5',
    slug: 'youxiao-livestream-sop',
    title: '友笑直播SOP',
    description: '负责友笑信息科技的直播会销工作，建立完整的直播运营SOP体系，规范流程，提升直播转化效率。',
    category: 'technical',
    tags: ['直播策划', 'SOP固化', '会销转化'],
    publishDate: '2023-10-05',
    featured: false,
    thumbnail: '🎙️',
    metrics: {
      roi: '转化效率提升'
    },
    links: {
      github: 'https://github.com/example/livestream',
      demo: 'https://livestream.example.com'
    },
    technologies: ['直播策划', '流程规范', '数据复盘'],
    client: '友笑信息科技',
    duration: '1年5个月'
  },
  {
    id: '6',
    slug: 'guanghua-content-system',
    title: '光华赋能内容体系',
    description: '在光华赋能负责内容运营工作，搭建内容SOP体系，管理内容团队，实现内容产出效率提升300%。',
    category: 'content-marketing',
    tags: ['内容SOP', '团队管理', '效率提升'],
    publishDate: '2023-08-30',
    featured: false,
    thumbnail: '📝',
    metrics: {
      roi: '效率提升300%'
    },
    links: {
      article: 'https://blog.example.com/ai-tools-review'
    },
    technologies: ['SOP体系', '团队管理', '内容生产'],
    client: '光华赋能',
    duration: '1年10个月'
  }
]

export const categories = [
  { id: 'all', label: '全部项目', count: portfolioItems.length },
  { id: 'content-marketing', label: '内容营销', count: portfolioItems.filter(item => item.category === 'content-marketing').length },
  { id: 'ai-project', label: 'AI项目', count: portfolioItems.filter(item => item.category === 'ai-project').length },
  { id: 'case-study', label: '案例研究', count: portfolioItems.filter(item => item.category === 'case-study').length },
  { id: 'technical', label: '技术项目', count: portfolioItems.filter(item => item.category === 'technical').length },
]
