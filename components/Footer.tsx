'use client'

import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#services' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'FAQ', href: '#contact' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
        { label: 'Careers', href: '#contact' },
        { label: 'Blog', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Help Center', href: '#contact' },
        { label: 'Community', href: '#testimonials' },
        { label: 'Privacy Policy', href: '#contact' },
        { label: 'Terms of Service', href: '#contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@ego.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: 'San Francisco, CA' }
  ];

  return (
    <footer className="bg-slate-950 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold tracking-tight leading-[1.1] text-white mb-4">
                Ego
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Elevate your personal brand. Connect authentically. Build your influence in the digital age.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-400">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-rose-500 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {footerLinks.map((column, columnIndex) => (
              <motion.div
                key={columnIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: columnIndex * 0.1 }}
              >
                <h4 className="text-lg font-semibold tracking-tight leading-[1.3] text-white mb-6">
                  {column.title}
                </h4>
                <ul className="space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-rose-500 transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform transition-transform"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-slate-900 pt-12 mb-12"
        >
          <div className="max-w-2xl">
            <h4 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-white mb-3">
              Stay in the loop
            </h4>
            <p className="text-slate-400 mb-6">
              Get the latest updates, tips, and exclusive content delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-slate-800 bg-slate-900 text-white placeholder:text-slate-500 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 focus:outline-none transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ego. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#contact" className="text-slate-500 hover:text-rose-500 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#contact" className="text-slate-500 hover:text-rose-500 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#contact" className="text-slate-500 hover:text-rose-500 text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
