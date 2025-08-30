import { useState } from 'react';
import { Link } from 'react-router';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="bg-white rounded-4xl px-2 py-2">
            <Link to="/">
              <img 
                src="/cropped-Olimpiada-de-chimie-logo-orizontal-1-1-192x192.png" 
                alt="IChTo Logo" 
                className="h-8"
              />
            </Link>
          </div>

          {/* Right side - Desktop Navigation */}
          <div className="hidden md:flex bg-white rounded-4xl pl-4 pr-2 py-2">
            <nav className="flex items-center space-x-6">
              <Link to="/about" className="text-gray-700 hover:text-blue-900 transition-colors">
                About
              </Link>
              <Link to="/participation" className="text-gray-700 hover:text-blue-900 transition-colors">
                Participation
              </Link>
              <Link to="/program" className="text-gray-700 hover:text-blue-900 transition-colors mr-4">
                Program
              </Link>
              <Link 
                to="/register" 
                className="bg-blue-800 text-white px-4 py-1 rounded-4xl hover:bg-blue-900 transition-colors font-medium"
              >
                Register Now
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden bg-white rounded-4xl px-2 py-2">
            <button
              className="flex items-center justify-center w-8 h-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="space-y-1">
                <div className={`w-5 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="mt-2 bg-white rounded-4xl px-6 py-4 space-y-4">
            <Link 
              to="/about" 
              className="block text-gray-700 hover:text-blue-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/participation" 
              className="block text-gray-700 hover:text-blue-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Participation
            </Link>
            <Link 
              to="/program" 
              className="block text-gray-700 hover:text-blue-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Program
            </Link>
            <Link 
              to="/register" 
              className="block bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-900 transition-colors font-medium text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}