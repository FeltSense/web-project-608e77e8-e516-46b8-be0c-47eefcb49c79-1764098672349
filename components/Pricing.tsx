'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for personal growth',
      monthlyPrice: 9,
      yearlyPrice: 90,
      features: [
        'Personal profile dashboard',
        'Track your progress',
        'Basic analytics',
        'Community access',
        'Mobile app access'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Pro',
      description: 'For serious self-improvement',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Everything in Starter',
        'Advanced analytics & insights',
        'Goal tracking & milestones',
        'Priority support',
        'Exclusive content library',
        'Custom branding',
        'Export your data'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Elite',
      description: 'Maximum growth potential',
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        'Everything in Pro',
        '1-on-1 coaching sessions',
        'Personalized growth plan',
        'White-label options',
        'API access',
        'Dedicated account manager',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Invest In Your Growth
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12">
            Choose the plan that matches your ambition. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 rounded-full transition-all duration-300"
              style={{ backgroundColor: billingCycle === 'yearly' ? '#f43f5e' : '#cbd5e1' }}
            >
              <motion.div
                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-sm"
                animate={{ x: billingCycle === 'yearly' ? 32 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-semibold ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-sm font-semibold text-cyan-400 bg-cyan-50 px-3 py-1 rounded-full"
              >
                Save 17%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                plan.popular ? 'border-rose-500 relative' : 'border-slate-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold tracking-tight leading-[1.1] text-slate-900">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-slate-500">
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-slate-500 mt-1">
                      ${(plan.yearlyPrice / 12).toFixed(2)} per month
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                {plan.name === 'Pro' ? (
                  <button
                    onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                    className={`w-full py-4 font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md mb-8 ${
                      plan.popular
                        ? 'bg-rose-500 hover:bg-rose-600 text-white'
                        : 'border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className={`block w-full py-4 font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md mb-8 text-center ${
                      plan.popular
                        ? 'bg-rose-500 hover:bg-rose-600 text-white'
                        : 'border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </a>
                )}

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-rose-50 flex items-center justify-center">
                          <Check className="w-3 h-3 text-rose-500" />
                        </div>
                      </div>
                      <span className="text-slate-600 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 mb-4">
            Need a custom plan for your team?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-rose-500 font-semibold hover:text-rose-600 transition-colors duration-300"
          >
            Contact our sales team
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
