'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, AlertCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function ClientSignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Client signup attempt:', {
      email,
      password,
      agreeToTerms
    })
  }

  return (
    <div className="min-h-screen bg-white">
    
<Header />
      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Client sign up</h1>

        {/* Info Banner */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
          <p className="text-slate-700">
            Are you a provider wanting to advertise your services?{' '}
            <a href="/signup/provider" className="text-blue-600 hover:underline font-semibold">
              Create a provider account
            </a>{' '}
            instead.
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-8">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-slate-900"
              placeholder="your@email.com"
            />
            <div className="flex gap-2 mt-2 text-sm text-slate-600">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>We&apos;ll use this to keep in touch with you and to help you recover your account if needed.</span>
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-slate-900 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-slate-900"
              placeholder="••••••••"
            />
            <div className="flex gap-2 mt-2 text-sm text-slate-600">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>
                8 characters minimum. Make sure to set a strong, unique password to protect your account.{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Check out our password recommendations
                </a>{' '}
                for tips on creating and managing good passwords.
              </span>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-900 mb-2">
              Repeat your password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-slate-900"
              placeholder="••••••••"
            />
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agreeToTerms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              required
              className="w-5 h-5 border border-slate-300 rounded focus:ring-2 focus:ring-red-500 cursor-pointer mt-0.5"
            />
            <label htmlFor="agreeToTerms" className="text-sm text-slate-700 cursor-pointer">
              I agree to the platform policies and that I am over the age of 18 and the age of majority in my jurisdiction.
            </label>
          </div>

          {/* Terms Text */}
          <div className="bg-gray-50 p-6 rounded-lg text-sm text-slate-700 space-y-2">
            <p>
              By signing up to Tryst link you agree that you are{' '}
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                doing
              </a>{' '}
              so of your own free will, free of outside pressure, and that you have read and agreed to our{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Advertising Policy
              </a>
              ,{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>
              ,{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Code of Conduct
              </a>
              , and{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded transition-colors"
          >
            Next
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
