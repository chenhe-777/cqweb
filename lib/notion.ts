import { Client } from '@notionhq/client'

// 初始化Notion客户端
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

// 数据库ID配置
export const NOTION_DATABASES = {
  PORTFOLIO: process.env.NOTION_PORTFOLIO_DB_ID || '',
  BLOG: process.env.NOTION_BLOG_DB_ID || '',
  ABOUT: process.env.NOTION_ABOUT_DB_ID || '',
}

// 获取作品集项目
export async function getPortfolioProjects() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.PORTFOLIO,
      sorts: [
        {
          property: 'Created',
          direction: 'descending',
        },
      ],
    })
    
    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title?.title?.[0]?.plain_text || '',
      description: page.properties.Description?.rich_text?.[0]?.plain_text || '',
      category: page.properties.Category?.select?.name || '',
      tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      image: page.properties.Image?.files?.[0]?.file?.url || '',
      url: page.properties.URL?.url || '',
      date: page.properties.Date?.date?.start || '',
    }))
  } catch (error) {
    console.error('Error fetching portfolio projects:', error)
    return []
  }
}

// 获取博客文章
export async function getBlogPosts() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.BLOG,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'PublishDate',
          direction: 'descending',
        },
      ],
    })
    
    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title?.title?.[0]?.plain_text || '',
      excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text || '',
      content: page.properties.Content?.rich_text?.[0]?.plain_text || '',
      category: page.properties.Category?.select?.name || '',
      tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      publishDate: page.properties.PublishDate?.date?.start || '',
      readTime: page.properties.ReadTime?.number || 5,
      featured: page.properties.Featured?.checkbox || false,
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// 获取个人信息
export async function getAboutInfo() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASES.ABOUT,
      page_size: 1,
    })
    
    const page = response.results[0] as any
    if (!page) return null
    
    return {
      id: page.id,
      name: page.properties.Name?.title?.[0]?.plain_text || '',
      title: page.properties.Title?.rich_text?.[0]?.plain_text || '',
      bio: page.properties.Bio?.rich_text?.[0]?.plain_text || '',
      avatar: page.properties.Avatar?.files?.[0]?.file?.url || '',
      email: page.properties.Email?.email || '',
      skills: page.properties.Skills?.multi_select?.map((skill: any) => ({
        name: skill.name,
        level: 85, // 默认值，可以后续扩展
      })) || [],
    }
  } catch (error) {
    console.error('Error fetching about info:', error)
    return null
  }
} 