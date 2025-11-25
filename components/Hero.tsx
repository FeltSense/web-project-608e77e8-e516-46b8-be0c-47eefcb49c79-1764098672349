'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-slate-950 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-cyan-400/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-semibold text-rose-500">Transform Your Digital Presence</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6"
            >
              Build Your Personal Brand.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-cyan-400">
                Own Your Story.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
            >
              Elevate your social presence with AI-powered insights, authentic engagement strategies, and personal development tools designed for modern creators.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300"
              >
                Explore Features
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-8 mt-12 pt-12 border-t border-slate-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-slate-500">Active Creators</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">2.5M+</div>
                  <div className="text-sm text-slate-500">Engagements</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Floating accent card */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl opacity-20 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl opacity-20 blur-3xl" />
            
            {/* Main dashboard mockup */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              {/* Browser chrome */}
              <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 ml-4">
                  <div className="h-6 bg-white rounded-lg border border-slate-200 flex items-center px-3">
                    <span className="text-xs text-slate-400">ego.app/dashboard</span>
                  </div>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                {/* Header */}
                <div className="mb-6">
                  <div className="h-8 w-48 bg-slate-900 rounded-lg mb-2" />
                  <div className="h-4 w-32 bg-slate-200 rounded" />
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                    <div className="h-3 w-16 bg-slate-200 rounded mb-3" />
                    <div className="h-8 w-20 bg-rose-500 rounded-lg mb-2" />
                    <div className="h-2 w-24 bg-green-400 rounded" />
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                    <div className="h-3 w-16 bg-slate-200 rounded mb-3" />
                    <div className="h-8 w-20 bg-cyan-400 rounded-lg mb-2" />
                    <div className="h-2 w-24 bg-rose-400 rounded" />
                  </div>
                </div>
                
                {/* Chart area */}
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                  <div className="h-3 w-24 bg-slate-200 rounded mb-4" />
                  <div className="flex items-end gap-2 h-32">
                    <div className="flex-1 bg-rose-500/20 rounded-t-lg h-16" />
                    <div className="flex-1 bg-rose-500/20 rounded-t-lg h-24" />
                    <div className="flex-1 bg-rose-500 rounded-t-lg h-32" />
                    <div className="flex-1 bg-rose-500/20 rounded-t-lg h-20" />
                    <div className="flex-1 bg-rose-500/20 rounded-t-lg h-28" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl border border-slate-200 p-4 max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Growth Rate</div>
                  <div className="text-lg font-bold text-slate-900">+127%</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
