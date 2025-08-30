import { useState } from 'react';
import { Link } from 'react-router';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-gray-500 opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      
      <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 pt-3">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Logo */}
          <div className="bg-white rounded-4xl px-3 py-3">
            <Link to="/">
              <img 
                src="/cropped-Olimpiada-de-chimie-logo-orizontal-1-1-192x192.png" 
                alt="IChTo Logo" 
                className="h-10"
              />
            </Link>
          </div>

          {/* Right side - Desktop Navigation */}
          <div className="hidden md:flex bg-white rounded-4xl pl-6 pr-4 py-3">
            <nav className="flex items-center space-x-8">
              <Link to="/about" className="text-gray-700 hover:text-blue-900 transition-colors text-lg">
                About
              </Link>
              <Link to="/participation" className="text-gray-700 hover:text-blue-900 transition-colors text-lg">
                Participation
              </Link>
              <Link to="/program" className="text-gray-700 hover:text-blue-900 transition-colors text-lg mr-4">
                Program
              </Link>
              <Link 
                to="/register" 
                className="bg-blue-800 text-white px-5 py-2 rounded-4xl hover:bg-blue-900 transition-colors font-medium text-lg"
              >
                Register Now
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden bg-white rounded-4xl px-3 py-3">
            <button
              className="flex items-center justify-center w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="space-y-1.5">
                <div className={`w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
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
    </>
  );
}