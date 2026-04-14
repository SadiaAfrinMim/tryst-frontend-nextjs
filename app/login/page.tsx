import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import LoginForm from './login-form'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
     <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Login Form */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Log in</h1>
            <LoginForm />
          </div>

          {/* Sign Up Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Sign up</h2>
            
            <p className="text-slate-700 mb-6">
              Tryst.link is one of the fastest-growing escort platforms in the world. Built by the same team behind{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Switter
              </a>
              !
            </p>

            <p className="text-slate-900 font-semibold mb-4">
              Please select which type of account you&apos;d like to sign up for:
            </p>

            <div className="space-y-3">
              <Link href="/signup/provider">
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-slate-900 font-semibold py-3 px-4 rounded transition-colors">
                  I am a provider
                </button>
              </Link>
              <Link href="/signup/client">
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-slate-900 font-semibold py-3 px-4 rounded transition-colors">
                  I am a client
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />    
    </div>
  )
}
