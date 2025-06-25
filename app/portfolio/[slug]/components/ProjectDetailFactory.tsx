import { PortfolioItem } from '@/data/portfolio'
import AIProjectDetail from './AIProjectDetail'
import ContentMarketingDetail from './ContentMarketingDetail'
import CaseStudyDetail from './CaseStudyDetail'
import TechnicalProjectDetail from './TechnicalProjectDetail'

interface ProjectDetailFactoryProps {
  item: PortfolioItem
}

export default function ProjectDetailFactory({ item }: ProjectDetailFactoryProps) {
  switch (item.category) {
    case 'ai-project':
      return <AIProjectDetail item={item} />
    case 'content-marketing':
      return <ContentMarketingDetail item={item} />
    case 'case-study':
      return <CaseStudyDetail item={item} />
    case 'technical':
      return <TechnicalProjectDetail item={item} />
    default:
      return <ContentMarketingDetail item={item} />
  }
} 