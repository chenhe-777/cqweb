import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: '联系我 - 陈琦',
  description: '内容运营专家，专注于内容营销增长、用户运营、账号孵化',
}

export default function ContactPage() {
  return <ContactClient />
}
