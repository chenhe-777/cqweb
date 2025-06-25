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
  'All Articles',
  'Frontend Development',
  'Backend Development',
  'AI & Machine Learning',
  'Content Marketing',
  'Digital Strategy',
  'Case Studies',
  'Tutorials'
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'nextjs-14-performance-optimization',
    title: 'Next.js 14 Performance Optimization: Complete Guide',
    description: 'Learn advanced techniques to optimize your Next.js 14 applications for better performance, including app router optimizations, server components, and caching strategies.',
    category: 'Frontend Development',
    publishDate: '2024-02-15',
    readTime: 8,
    views: 1234,
    comments: 15,
    featured: true,
    thumbnail: '/images/blog/nextjs-optimization.jpg',
    tags: ['Next.js', 'Performance', 'React', 'Web Development'],
    author: {
      name: 'Alex Chen',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '2',
    slug: 'ai-powered-content-automation',
    title: 'Building AI-Powered Content Automation Workflows',
    description: 'Discover how to leverage AI tools and APIs to automate content creation, from blog posts to social media updates, saving hours of manual work.',
    category: 'AI & Machine Learning',
    publishDate: '2024-02-10',
    readTime: 12,
    views: 987,
    comments: 23,
    featured: true,
    thumbnail: '/images/blog/ai-automation.jpg',
    tags: ['AI', 'Automation', 'Content Marketing', 'Productivity'],
    author: {
      name: 'Alex Chen',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '3',
    slug: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns for Large Applications',
    description: 'Master advanced TypeScript patterns including conditional types, mapped types, and template literal types to build more maintainable applications.',
    category: 'Frontend Development',
    publishDate: '2024-02-05',
    readTime: 10,
    views: 756,
    comments: 8,
    featured: false,
    thumbnail: '/images/blog/typescript-patterns.jpg',
    tags: ['TypeScript', 'JavaScript', 'Software Architecture'],
    author: {
      name: 'Alex Chen',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '4',
    slug: 'content-marketing-roi-analysis',
    title: 'Measuring Content Marketing ROI: Data-Driven Approach',
    description: 'Learn how to track and measure the return on investment of your content marketing efforts using analytics, attribution models, and key performance indicators.',
    category: 'Content Marketing',
    publishDate: '2024-01-28',
    readTime: 7,
    views: 543,
    comments: 12,
    featured: false,
    thumbnail: '/images/blog/content-roi.jpg',
    tags: ['Content Marketing', 'Analytics', 'ROI', 'Marketing Strategy'],
    author: {
      name: 'Alex Chen',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '5',
    slug: 'nodejs-microservices-architecture',
    title: 'Building Scalable Microservices with Node.js and Docker',
    description: 'Complete guide to designing and implementing microservices architecture using Node.js, Express, Docker, and Kubernetes for enterprise applications.',
    category: 'Backend Development',
    publishDate: '2024-01-22',
    readTime: 15,
    views: 892,
    comments: 19,
    featured: true,
    thumbnail: '/images/blog/nodejs-microservices.jpg',
    tags: ['Node.js', 'Microservices', 'Docker', 'Architecture'],
    author: {
      name: 'Alex Chen',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '6',
    slug: 'react-server-components-guide',
    title: 'React Server Components: Everything You Need to Know',
    description: 'Deep dive into React Server Components, understanding how they work, when to use them, and how they improve performance and user experience.',
    category: 'Frontend Development',
    publishDate: '2024-01-18',
    readTime: 9,
    views: 1087,
    comments: 27,
    featured: false,
    thumbnail: '/images/blog/react-server-components.jpg',
    tags: ['React', 'Server Components', 'Performance', 'Next.js'],
    author: {
      name: 'Alex Chen',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '7',
    slug: 'digital-marketing-automation-tools',
    title: 'Top 10 Digital Marketing Automation Tools for 2024',
    description: 'Comprehensive review of the best marketing automation platforms, their features, pricing, and how to choose the right tool for your business needs.',
    category: 'Digital Strategy',
    publishDate: '2024-01-12',
    readTime: 6,
    views: 634,
    comments: 9,
    featured: false,
    thumbnail: '/images/blog/marketing-automation.jpg',
    tags: ['Marketing Automation', 'Digital Marketing', 'Tools', 'Strategy'],
    author: {
      name: 'Alex Chen',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '8',
    slug: 'saas-onboarding-optimization-case-study',
    title: 'Case Study: Optimizing SaaS User Onboarding for 40% Higher Retention',
    description: 'Real-world case study showing how we redesigned a SaaS onboarding flow, resulting in 40% higher user retention and 25% increase in feature adoption.',
    category: 'Case Studies',
    publishDate: '2024-01-08',
    readTime: 11,
    views: 721,
    comments: 16,
    featured: true,
    thumbnail: '/images/blog/saas-onboarding.jpg',
    tags: ['SaaS', 'User Experience', 'Onboarding', 'Case Study'],
    author: {
      name: 'Alex Chen',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '9',
    slug: 'python-data-analysis-tutorial',
    title: 'Python Data Analysis Tutorial: From Pandas to Visualization',
    description: 'Step-by-step tutorial covering data analysis with Python, including data cleaning, manipulation with Pandas, and creating visualizations with Matplotlib.',
    category: 'Tutorials',
    publishDate: '2024-01-03',
    readTime: 13,
    views: 1156,
    comments: 31,
    featured: false,
    thumbnail: '/images/blog/python-data-analysis.jpg',
    tags: ['Python', 'Data Analysis', 'Pandas', 'Tutorial'],
    author: {
      name: 'Alex Chen',
      avatar: '/images/author-avatar.jpg'
    }
  },
  {
    id: '10',
    slug: 'web-accessibility-checklist-2024',
    title: 'Complete Web Accessibility Checklist for 2024',
    description: 'Comprehensive accessibility checklist covering WCAG guidelines, testing tools, and practical implementation tips to make your websites inclusive.',
    category: 'Frontend Development',
    publishDate: '2023-12-28',
    readTime: 8,
    views: 445,
    comments: 7,
    featured: false,
    thumbnail: '/images/blog/web-accessibility.jpg',
    tags: ['Accessibility', 'WCAG', 'Web Development', 'Inclusive Design'],
    author: {
      name: 'Alex Chen',
      avatar: '/images/author-avatar.jpg'
    }
  }
] 