'use client';

import { Search, MapPin, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-full bg-[#f7f7fb]">
      
      {/* Top Illustration */}
      <div className="w-full pt-8 relative h-80">
        <Image
          src="/hero-illustration.jpg"
          alt="Diverse group illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title */}
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold text-red-500">
          Home of the independent escort
        </h1>
        <p className="text-gray-500 mt-2">
          Listing thousands of independent adult entertainers. Escorts, BDSM,
          kink, video, massage and much more.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-md rounded-full flex items-center px-4 py-3 w-[700px] gap-3">

          {/* Location Input */}
          <div className="flex items-center flex-1 gap-2">
            <MapPin className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="A city or postcode"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Distance */}
          <select className="text-sm text-gray-500 outline-none bg-transparent">
            <option>within 30mi</option>
            <option>within 10mi</option>
            <option>within 50mi</option>
          </select>

          {/* Search Button */}
          <button className="bg-red-500 text-white p-2 rounded-full">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-3 mt-6 flex-wrap">
        {["Female", "Male", "Non-binary", "Trans Only"].map((item) => (
          <button
            key={item}
            className="px-5 py-2 rounded-full bg-white shadow text-sm hover:bg-red-100 transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* More Details Button */}
      <div className="flex justify-center mt-4 pb-10">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 rounded-full bg-red-500 text-white text-sm hover:bg-red-600 transition shadow"
        >
          More Details
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-5xl p-8 relative">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
            >
              <X size={28} />
            </button>

            <h2 className="text-4xl font-bold text-center mb-8">Find escorts</h2>

            {/* Search Row */}
            <div className="flex items-center gap-3 mb-10">
              <div className="flex items-center flex-1 gap-3 border-2 border-gray-200 rounded-2xl px-4 py-3">
                <MapPin className="text-gray-400" size={24} />
                <input
                  type="text"
                  placeholder="A city or postcode"
                  className="w-full outline-none text-lg"
                />
                <div className="border-l pl-3">
                  <select className="text-lg text-gray-500 outline-none bg-transparent">
                    <option>within 30mi</option>
                    <option>within 10mi</option>
                    <option>within 50mi</option>
                  </select>
                </div>
              </div>

              {["Female", "Male", "Non-binary", "Trans Only"].map((item) => (
                <button
                  key={item}
                  className="px-6 py-3 rounded-2xl bg-white border-2 border-gray-100 text-base"
                >
                  {item}
                </button>
              ))}

              <button className="bg-red-500 text-white px-8 py-3 rounded-2xl flex items-center gap-2 text-lg font-medium">
                <Search size={24} />
                Search
              </button>
            </div>

            {/* Filters Grid */}
            <div className="grid grid-cols-3 gap-8">
              {/* Column 1 */}
              <div className="space-y-6 border-r pr-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">KEYWORDS</span>
                  <span className="text-gray-400">ANY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">SERVICE TYPE</span>
                  <span className="text-gray-400">ANY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">CATERS TO</span>
                  <span className="text-gray-400">ANY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">HOURLY RATE</span>
                  <span className="text-gray-400">ANY</span>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6 border-r pr-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">AVAILABILITY</span>
                  <span className="text-gray-400">ANY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">AGE</span>
                  <span className="text-gray-400">18+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">ETHNICITY</span>
                  <span className="text-gray-400">ANY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">BODY TYPE</span>
                  <span className="text-gray-400">ANY</span>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">BREAST SIZE</span>
                  <span className="text-gray-400">ANY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">HEIGHT</span>
                  <span className="text-gray-400">ANY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">HAIR COLOUR</span>
                  <span className="text-gray-400">ANY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">EYE COLOUR</span>
                  <span className="text-gray-400">ANY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}