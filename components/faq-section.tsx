'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How do I verify my profile?',
    answer: 'Service providers can verify their profiles by submitting government-issued ID and selfie verification. Our team reviews submissions within 24 hours.',
  },
  {
    question: 'Is my information safe on Tryst?',
    answer: 'Yes, all user data is encrypted and protected with industry-standard security measures. We never share your information with third parties.',
  },
  {
    question: 'How do I report inappropriate behavior?',
    answer: 'You can report any user or content through our safety center. Our moderation team reviews reports 24/7 and takes swift action.',
  },
  {
    question: 'Can I filter profiles by specific criteria?',
    answer: 'Yes, our advanced search allows you to filter by location, rate, services, and other preferences to find exactly what you need.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and digital payment methods. All transactions are secure and discreet.',
  },
  {
    question: 'How often are new profiles added?',
    answer: 'New verified profiles are added daily. Check back regularly or use our notification features to stay updated on new listings.',
  },
]

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-left font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
