import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-indigo-600">Sample</span>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <a href="#" className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium">
              Home
            </a>
            <a href="#features" className="text-gray-500 hover:text-indigo-600 px-3 py-2 font-medium">
              Features
            </a>
            <a href="#testimonials" className="text-gray-500 hover:text-indigo-600 px-3 py-2 font-medium">
              Testimonials
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 px-3 py-2 font-medium">
              About
            </a>
          </nav>
          <div className="hidden md:flex items-center">
            <a href="#contact" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Get Started
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-2">
            <a href="#" className="bg-indigo-50 text-indigo-700 block px-3 py-2 rounded-md font-medium">
              Home
            </a>
            <a href="#features" className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md font-medium">
              Features
            </a>
            <a href="#testimonials" className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md font-medium">
              Testimonials
            </a>
            <a href="#" className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md font-medium">
              About
            </a>
            <a href="#contact" className="text-center mt-3 block w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Get Started
            </a>
          </div>
        </div>}
    </header>;
}