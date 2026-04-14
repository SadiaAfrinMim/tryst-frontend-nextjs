"use client";

import { Search, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SearchModal } from "./search-modal";

export function Header() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <Heart className="w-7 h-7 fill-red-500 text-red-500" />
              <span className="text-xl font-bold text-gray-900">tryst</span>
            </Link>

            {/* Search Button (opens modal) */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="flex-1 max-w-md flex items-center gap-3 bg-gray-50 text-gray-500 pl-4 pr-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <Search className="w-5 h-5" />
              <span>Search escorts...</span>
            </button>

            {/* Auth Links */}
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-gray-700 hover:text-red-500 font-medium transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
}
