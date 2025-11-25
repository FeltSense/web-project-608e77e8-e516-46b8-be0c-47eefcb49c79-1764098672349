'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    quote: "Ego transformed how I present myself online. My engagement doubled and I finally feel confident in my personal brand.",
    name: "Sarah Chen",
    role: "Content Creator",
    avatar: "https://i.pravatar.cc/150?img=5",
    company: "TikTok",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=40&fit=crop&q=80"
  },
  {
    quote: "The insights I gained about my social presence were incredible. Ego helped me understand what resonates with my audience.",
    name: "Marcus Johnson",
    role: "Entrepreneur",
    avatar: "https://i.pravatar.cc/150?img=12",
    company: "LinkedIn",
    logo: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=120&h=40&fit=crop&q=80"
  },
  {
    quote: "I've tried every social growth tool out there. Ego is the first one that actually made me better at connecting with people.",
    name: "Emily Rodriguez",
    role: "Brand Strategist",
    avatar: "https://i.pravatar.cc/150?img=9",
    company: "Instagram",
    logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=120&h=40&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      id="testimonials"
      className="py-24 md:py-32 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Trusted by Creators & Influencers
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            See how Ego is helping thousands build authentic personal brands
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="h-8 flex items-center opacity-40 grayscale">
                  <span className="text-sm font-semibold text-slate-400">{testimonial.company}</span>
                </div>
              </div>

              <p className="text-slate-900 text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
