'use client'

import { useState, useEffect } from 'react'
import { AgeVerificationModal } from '@/components/age-verification-modal'

export default function ClientAgeVerification({ children }: { children: React.ReactNode }) {
  const [isAgeVerified, setIsAgeVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const verified = sessionStorage.getItem('ageVerified')
    if (verified === 'true') {
      setIsAgeVerified(true)
    }
    setIsLoading(false)
  }, [])

  const handleAgeVerificationClose = () => {
    setIsAgeVerified(true)
    sessionStorage.setItem('ageVerified', 'true')
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </main>
    )
  }

  return (
    <>
      {!isAgeVerified && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <AgeVerificationModal onClose={handleAgeVerificationClose} />
        </div>
      )}
      
      {isAgeVerified && children}
    </>
  )
}
