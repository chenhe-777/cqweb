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
    slug: 'ai-content-automation',
    title: 'AI Content Automation System',
    description: 'Built an end-to-end content production pipeline using GPT-4 and automation tools that increased content output by 300%.',
    category: 'ai-project',
    tags: ['AI', 'Automation', 'Content Strategy'],
    publishDate: '2024-01-15',
    featured: true,
    thumbnail: '🤖',
    metrics: {
      roi: '300% increase',
      engagement: '45% boost'
    },
    links: {
      github: 'https://github.com/example/ai-content',
      demo: 'https://demo.example.com'
    },
    technologies: ['Python', 'OpenAI API', 'Zapier', 'Notion'],
    client: 'TechCorp',
    duration: '3 months'
  },
  {
    id: '2',
    slug: 'b2b-saas-strategy',
    title: 'B2B SaaS Content Strategy',
    description: 'Developed comprehensive content marketing strategy for a SaaS startup, resulting in 250% lead growth in 6 months.',
    category: 'content-marketing',
    tags: ['B2B', 'SaaS', 'Lead Generation'],
    publishDate: '2023-12-10',
    featured: true,
    thumbnail: '📈',
    metrics: {
      views: 50000,
      roi: '250% lead growth'
    },
    links: {
      article: 'https://blog.example.com/case-study'
    },
    technologies: ['HubSpot', 'SEMrush', 'Canva'],
    client: 'StartupAI',
    duration: '6 months'
  },
  {
    id: '3',
    slug: 'social-media-growth',
    title: 'Social Media Growth Hack',
    description: 'Managed 3 social media accounts using AI-assisted content creation, achieving 1000% follower growth.',
    category: 'case-study',
    tags: ['Social Media', 'Growth Hacking', 'AI'],
    publishDate: '2023-11-20',
    featured: false,
    thumbnail: '📱',
    metrics: {
      engagement: '1000% growth',
      views: 100000
    },
    links: {
      demo: 'https://twitter.com/example'
    },
    technologies: ['Buffer', 'Canva AI', 'ChatGPT'],
    client: 'Multiple Brands',
    duration: '12 months'
  },
  {
    id: '4',
    slug: 'ai-chatbot-development',
    title: 'Smart Customer Service Bot',
    description: 'Developed an intelligent chatbot for SaaS customer support that improved response time by 400%.',
    category: 'technical',
    tags: ['Chatbot', 'AI', 'Customer Service'],
    publishDate: '2023-10-05',
    featured: false,
    thumbnail: '🛠️',
    metrics: {
      roi: '400% efficiency'
    },
    links: {
      github: 'https://github.com/example/chatbot',
      demo: 'https://chatbot.example.com'
    },
    technologies: ['Node.js', 'OpenAI API', 'React', 'MongoDB'],
    client: 'CloudTech',
    duration: '4 months'
  },
  {
    id: '5',
    slug: 'ai-tools-review',
    title: 'AI Writing Tools Comprehensive Review',
    description: 'In-depth analysis and comparison of 20+ AI writing tools, generating over 100K views and social shares.',
    category: 'content-marketing',
    tags: ['AI Tools', 'Review', 'Content'],
    publishDate: '2023-09-15',
    featured: false,
    thumbnail: '✍️',
    metrics: {
      views: 100000,
      engagement: '25% CTR'
    },
    links: {
      article: 'https://blog.example.com/ai-tools-review'
    },
    technologies: ['Research', 'Content Writing', 'Data Analysis'],
    client: 'Personal Project',
    duration: '2 months'
  },
  {
    id: '6',
    slug: 'marketing-automation',
    title: 'Email Marketing Automation',
    description: 'Created sophisticated email marketing workflows that increased conversion rates by 180%.',
    category: 'content-marketing',
    tags: ['Email Marketing', 'Automation', 'Conversion'],
    publishDate: '2023-08-30',
    featured: false,
    thumbnail: '📧',
    metrics: {
      roi: '180% conversion boost'
    },
    links: {
      demo: 'https://mailchimp.com/example'
    },
    technologies: ['Mailchimp', 'Zapier', 'Google Analytics'],
    client: 'E-commerce Co',
    duration: '2 months'
  }
]

export const categories = [
  { id: 'all', label: 'All Projects', count: portfolioItems.length },
  { id: 'content-marketing', label: 'Content Marketing', count: portfolioItems.filter(item => item.category === 'content-marketing').length },
  { id: 'ai-project', label: 'AI Projects', count: portfolioItems.filter(item => item.category === 'ai-project').length },
  { id: 'case-study', label: 'Case Studies', count: portfolioItems.filter(item => item.category === 'case-study').length },
  { id: 'technical', label: 'Technical', count: portfolioItems.filter(item => item.category === 'technical').length },
] 