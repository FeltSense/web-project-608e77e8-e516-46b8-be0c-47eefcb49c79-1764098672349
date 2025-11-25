'use client'

import { motion } from 'framer-motion'
import { Sparkles, Target, TrendingUp, Users } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Personal Brand Building',
      description: 'Craft a magnetic online presence that turns followers into fans. Strategic content that showcases your authentic self.',
      span: 'md:col-span-2',
      featured: true
    },
    {
      icon: Target,
      title: 'Growth Strategy',
      description: 'Data-driven tactics to expand your reach and influence across platforms.',
      span: 'md:col-span-1',
      featured: false
    },
    {
      icon: TrendingUp,
      title: 'Content Mastery',
      description: 'Learn what works. Create content that stops the scroll and drives engagement.',
      span: 'md:col-span-1',
      featured: false
    },
    {
      icon: Users,
      title: 'Community Power',
      description: 'Build a loyal tribe that amplifies your message and supports your journey.',
      span: 'md:col-span-1',
      featured: false
    }
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Elevate Your Influence
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Transform your social presence from overlooked to unmissable. Build the confidence and strategy to stand out.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className={`${service.span} bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                service.featured ? 'md:p-12' : ''
              }`}
            >
              <div className={`inline-flex items-center justify-center rounded-2xl bg-rose-50 ${
                service.featured ? 'w-16 h-16 mb-6' : 'w-14 h-14 mb-5'
              }`}>
                <service.icon className={`text-rose-500 ${service.featured ? 'w-8 h-8' : 'w-7 h-7'}`} />
              </div>
              <h3 className={`${
                service.featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
              } font-semibold tracking-tight leading-[1.3] text-slate-900 mb-3`}>
                {service.title}
              </h3>
              <p className={`text-slate-500 ${service.featured ? 'text-lg' : 'text-base'}`}>
                {service.description}
              </p>
              {service.featured && (
                <a
                  href="#contact"
                  className="inline-block mt-6 text-rose-500 font-semibold hover:text-rose-600 transition-colors duration-300"
                >
                  Get Started →
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
