'use client'

import { Shield, Users, Lock } from 'lucide-react'

export function InfoSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A safer way to connect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Tryst is designed with safety and privacy at the forefront. We verify all service providers and maintain strict community standards to create a trusted platform for both clients and professionals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to transparency and accountability means you can browse, connect, and engage with confidence on our platform.
            </p>
          </div>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-400">
              <Shield className="w-16 h-16 mx-auto mb-2" />
              <p>Featured Content</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Profiles</h3>
            <p className="text-gray-600">All service providers are verified to ensure authenticity and safety for all users.</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Lock className="w-12 h-12 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy Protected</h3>
            <p className="text-gray-600">Your personal information is encrypted and protected with industry-standard security.</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community Driven</h3>
            <p className="text-gray-600">Ratings, reviews, and feedback from real users help you make informed decisions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
