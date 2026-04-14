'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

interface AgeVerificationModalProps {
  onClose: () => void
}

export function AgeVerificationModal({ onClose }: AgeVerificationModalProps) {
  const [profileFilter, setProfileFilter] = useState('Female')

  const handleAgree = () => {
    onClose()
  }

  const handleDecline = () => {
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-xl">
        {/* Logo and Title */}
        <div className="flex items-center justify-center mb-8">
          <Heart className="w-8 h-8 fill-red-500 text-red-500 mr-2" />
          <span className="text-3xl font-bold text-gray-900">tryst</span>
        </div>

        {/* Main heading */}
        <h2 className="text-xl font-semibold text-center text-gray-900 mb-6">
          This website contains adult content
        </h2>

        {/* Content text */}
        <div className="space-y-4 mb-8 text-sm text-gray-700 leading-relaxed">
          <p>
            By continuing to use Tryst, you agree you&apos;re{' '}
            <span className="font-semibold">over the age of 18</span> and have{' '}
            <span className="font-semibold">read and agreed</span>{' '}
            <a href="#" className="text-blue-600 hover:underline">
              to our terms
            </a>
            .
          </p>

          <p>
            <span className="font-semibold">Parents/guardians</span>, you can learn more
            about online safety in the{' '}
            <a href="#" className="text-red-500 hover:underline">
              Assembly Four parents guide
            </a>{' '}
            to adult content.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={handleAgree}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Agree and close
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Decline
          </button>
        </div>

        {/* Profile filter */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span>Showing</span>
            <span className="font-semibold">{profileFilter}</span>
            <span>profiles</span>
          </div>
          <button className="text-red-500 hover:text-red-600 font-semibold text-sm flex items-center gap-1">
            <span>✎</span> Change
          </button>
        </div>
      </div>
    </div>
  )
}
