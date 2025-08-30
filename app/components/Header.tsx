import { useState } from 'react';
import { Link } from 'react-router';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl text-blue-800">
            IChTo 2026
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-blue-900 transition-colors">
              About
            </Link>
            <Link to="/participation" className="text-gray-700 hover:text-blue-900 transition-colors">
              Participation
            </Link>
            <Link to="/program" className="text-gray-700 hover:text-blue-900 transition-colors">
              Program
            </Link>
            <Link 
              to="/register" 
              className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors font-medium"
            >
              Register Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="py-4 space-y-4">
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
              className="block bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium text-center"
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