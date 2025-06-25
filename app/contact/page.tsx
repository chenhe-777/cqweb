import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact - AI Content Pro',
  description: 'Get in touch with AI Content Pro for content marketing projects and AI consulting services',
}

export default function ContactPage() {
  return <ContactClient />
} 