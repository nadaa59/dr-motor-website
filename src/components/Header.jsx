"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { MapPin, Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-gray-900 font-bold text-lg">DR</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">DR MOTOR</h1>
              <p className="text-xs text-gray-300">Professional Auto Care</p>
            </div>
          </Link>

          {/* Location Icon */}
          <div className="hidden md:flex items-center space-x-2 text-yellow-400">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">UAE Locations</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-yellow-400 transition-colors ${isActive("/") ? "text-yellow-400" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`hover:text-yellow-400 transition-colors ${isActive("/services") ? "text-yellow-400" : ""}`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`hover:text-yellow-400 transition-colors ${isActive("/about") ? "text-yellow-400" : ""}`}
            >
              About
            </Link>
            <Link
              to="/locations"
              className={`hover:text-yellow-400 transition-colors ${isActive("/locations") ? "text-yellow-400" : ""}`}
            >
              Locations
            </Link>
            <Link
              to="/contact"
              className={`hover:text-yellow-400 transition-colors ${isActive("/contact") ? "text-yellow-400" : ""}`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                to="/services"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/locations"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </Link>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
