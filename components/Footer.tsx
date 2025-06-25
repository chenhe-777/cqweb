'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
  ]

  return (
    <footer className="bg-bg-light-secondary dark:bg-bg-dark-secondary border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-text-light dark:text-text-dark mb-4">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-light-secondary dark:text-text-dark-secondary">
                <Mail size={18} />
                <span>hello@aicontentpro.com</span>
              </div>
              <div className="flex items-center gap-3 text-text-light-secondary dark:text-text-dark-secondary">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-text-light-secondary dark:text-text-dark-secondary">
                <MapPin size={18} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-text-light dark:text-text-dark mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-text-light dark:text-text-dark mb-4">
              Follow Me
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-bg-light dark:bg-bg-dark rounded-full flex items-center justify-center text-text-light-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </Link>
                )
              })}
            </div>
            <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm mt-4">
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm">
            © {currentYear} AI Content Pro. All rights reserved. Built with ❤️ using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
} 