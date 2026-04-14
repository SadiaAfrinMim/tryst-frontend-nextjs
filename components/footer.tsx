'use client'

import { Heart } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 fill-red-500 text-red-500" />
              <span className="text-white font-bold text-lg">tryst</span>
            </div>
            <p className="text-sm text-gray-400">The fastest-growing escort platform built with safety and trust.</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-red-500 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition-colors">Safety Resources</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition-colors">Report Abuse</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-red-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition-colors">Code of Conduct</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition-colors">Advertising Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; 2026 Tryst. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
