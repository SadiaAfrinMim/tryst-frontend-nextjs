'use client'

import Image from 'next/image'
import { Camera, Heart } from 'lucide-react'

interface Profile {
  id: number
  name: string
  location: string
  age: number
  image: string
  rating: number
  verified: boolean
}

const profiles: Profile[] = [
  {
    id: 1,
    name: 'Alexandra',
    location: 'Cleveland, OH, US',
    age: 24,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    rating: 4.8,
    verified: true,
  },
  {
    id: 2,
    name: 'Victoria',
    location: 'Cleveland, OH, US',
    age: 26,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 4.9,
    verified: true,
  },
  {
    id: 3,
    name: 'Sophia',
    location: 'London, UK',
    age: 23,
    image: 'https://images.unsplash.com/photo-1438761681036-6461ffad8d80?w=400',
    rating: 4.7,
    verified: true,
  },
  {
    id: 4,
    name: 'Isabella',
    location: 'Boston, MA, US',
    age: 25,
    image: 'https://images.unsplash.com/photo-1534528741775-53a8c7b1e6d8?w=400',
    rating: 4.6,
    verified: false,
  },
  {
    id: 5,
    name: 'Olivia',
    location: 'New York, NY, US',
    age: 27,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
    rating: 4.5,
    verified: true,
  },
  {
    id: 6,
    name: 'Mia',
    location: 'Chicago, IL, US',
    age: 22,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
    rating: 4.8,
    verified: true,
  },
  {
    id: 7,
    name: 'Charlotte',
    location: 'Los Angeles, CA, US',
    age: 28,
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
    rating: 4.7,
    verified: false,
  },
  {
    id: 8,
    name: 'Amelia',
    location: 'Miami, FL, US',
    age: 21,
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400',
    rating: 4.9,
    verified: true,
  },
]

export function ProfileGrid() {
  return (
    <section className="bg-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b border-red-500 pb-2">
          <h2 className="text-2xl font-semibold text-white">
            Available now
          </h2>
          <span className="text-red-400 text-sm cursor-pointer">
            See all →
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="group relative rounded-xl overflow-hidden bg-slate-800 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[340px]">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />

                {/* Top Left */}
                <div className="absolute top-2 left-2 bg-white/80 px-1 py-0.5 rounded text-xs">
                  ★
                </div>

                {/* Top Right */}
                <div className="absolute top-2 right-2 flex items-center gap-2 text-xs">
                  <span className="bg-black/70 text-white px-2 py-1 rounded">
                    Escort
                  </span>

                  <span className="bg-black/70 text-white px-2 py-1 rounded flex items-center gap-1">
                    <Camera className="w-3 h-3" />
                    {Math.floor(profile.rating * 2)}
                  </span>

                  <span className="bg-black/70 text-white px-2 py-1 rounded">
                    ${profile.age * 20}
                  </span>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-xs">
                    Apr 16–17 · {profile.location}
                  </p>
                </div>
              </div>

              {/* Full info overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 translate-y-[calc(100%-48px)] group-hover:translate-y-0 transition-transform duration-300 z-10">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">
                  {profile.name}
                </h3>
                
                <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300">
                  <p className="text-xs text-gray-500 italic">
                    Natural beauty
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-600">
                      {profile.location}
                    </span>
                    <span className="text-green-500 text-xs flex items-center gap-1">
                      ● Available
                    </span>
                  </div>
                  <p className="text-gray-800 text-xs text-center mt-2 pt-2 border-t border-gray-200">
                    Tryst is a safe place, that treats us with respect and is for the workers
                  </p>
                </div>
              </div>

              {/* Hover Heart */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition">
                <Heart className="w-5 h-5 text-white fill-red-500" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}