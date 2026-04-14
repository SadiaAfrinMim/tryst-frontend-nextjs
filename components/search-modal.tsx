'use client'

import { X, MapPin, Search } from 'lucide-react'
import { useState } from 'react'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [location, setLocation] = useState('')
  const [distance, setDistance] = useState('30mi')
  const [selectedGender, setSelectedGender] = useState<string | null>(null)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-6xl relative shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="p-8">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
            Find escorts
          </h2>

          {/* Search Bar Row */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            {/* Location Input */}
            <div className="flex-1 min-w-[300px] relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="A city or postcode"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-gray-200 text-lg focus:border-red-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Distance Select */}
            <select
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="px-6 py-4 rounded-2xl border-2 border-gray-200 text-lg bg-white focus:border-red-400 focus:outline-none transition-colors"
            >
              <option>within 5mi</option>
              <option>within 10mi</option>
              <option>within 20mi</option>
              <option>within 30mi</option>
              <option>within 50mi</option>
              <option>within 100mi</option>
            </select>

            {/* Gender Buttons */}
            {['Female', 'Male', 'Non-binary', 'Trans Only'].map((gender) => (
              <button
                key={gender}
                onClick={() => setSelectedGender(selectedGender === gender ? null : gender)}
                className={`px-6 py-4 rounded-2xl text-lg font-medium transition-all ${
                  selectedGender === gender
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                {gender}
              </button>
            ))}

            {/* Search Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold flex items-center gap-3 transition-colors shadow-lg hover:shadow-xl">
              <Search className="w-6 h-6" />
              Search
            </button>
          </div>

          {/* Filter Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6">
            {/* Column 1 */}
            <div className="space-y-6 border-r border-gray-200 pr-12">
              <FilterRow label="KEYWORDS" />
              <FilterRow label="SERVICE TYPE" />
              <FilterRow label="CATERS TO" />
              <FilterRow label="HOURLY RATE" />
            </div>

            {/* Column 2 */}
            <div className="space-y-6 border-r border-gray-200 pr-12">
              <FilterRow label="AVAILABILITY" />
              <FilterRow label="AGE" value="18+" />
              <FilterRow label="ETHNICITY" />
              <FilterRow label="BODY TYPE" />
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <FilterRow label="BREAST SIZE" />
              <FilterRow label="HEIGHT" />
              <FilterRow label="HAIR COLOUR" />
              <FilterRow label="EYE COLOUR" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterRow({ label, value = 'ANY' }: { label: string; value?: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600 font-medium text-lg">{label}</span>
      <button className="text-gray-400 hover:text-gray-600 font-medium text-lg transition-colors">
        {value}
      </button>
    </div>
  )
}
