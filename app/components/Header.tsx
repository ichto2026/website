import { useState } from 'react';
import { Link } from 'react-router';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownMenus = {
    about: [
      { name: 'Introducing IChTo', href: '/about', hash: '#introducing' },
      { name: 'Rules and Format', href: '/about', hash: '#rules' },
      { name: 'Welcome Message', href: '/about', hash: '#welcome' },
      { name: 'Organizing Committee', href: '/about', hash: '#committee' },
      { name: 'Jury Members', href: '/about', hash: '#jury' },
      { name: 'Past Competitions', href: '/about', hash: '#past' },
    ],
    participation: [
      { name: 'Official Problems', href: '/participation', hash: '#problems' },
      { name: 'Welcome to Korea', href: '/participation', hash: '#korea' },
      { name: 'About the Venue', href: '/participation', hash: '#venue' },
    ],
    program: [
      { name: 'Results', href: '/program', hash: '#results' },
      { name: 'Schedule', href: '/program', hash: '#schedule' },
      { name: 'Cultural Moments', href: '/program', hash: '#cultural' },
      { name: 'Accommodation', href: '/program', hash: '#accommodation' },
      { name: 'Useful Informations', href: '/program', hash: '#info' },
    ],
    partners: [
      { name: 'Sponsors', href: '/partners', hash: '#sponsors' },
    ],
  };

  const handleDropdownEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleMobileDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setActiveDropdown(null);
          }}
        ></div>
      )}
      
      {/* Desktop Dropdown Overlay */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40 hidden md:block"
          onClick={() => setActiveDropdown(null)}
        ></div>
      )}
      
      <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 pt-3">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Logo */}
          <div className="bg-gray-50 rounded-3xl px-3 py-3">
            <Link to="/">
              <img 
                src="/ichtoLogo180ai.png"
                alt="IChTo Logo" 
                className="h-11 w-11"
              />
            </Link>
          </div>

          {/* Right side - Desktop Navigation */}
          <div 
            className="hidden md:flex bg-gray-50 rounded-3xl pl-6 pr-4 py-3"
            onMouseLeave={handleDropdownLeave}
          >
            <nav className="flex items-center space-x-6">
              {/* About IChTo Dropdown */}
              <div 
                className="relative h-11 flex items-center"
                onMouseEnter={() => handleDropdownEnter('about')}
              >
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-900 transition-colors text-lg"
                >
                  About IChTo
                </Link>
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    {dropdownMenus.about.map((item, index) => (
                      <Link
                        key={index}
                        to={`${item.href}${item.hash}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Participation Dropdown */}
              <div 
                className="relative h-11 flex items-center"
                onMouseEnter={() => handleDropdownEnter('participation')}
              >
                <Link
                  to="/participation"
                  className="text-gray-700 hover:text-blue-900 transition-colors text-lg"
                >
                  Participation
                </Link>
                {activeDropdown === 'participation' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    {dropdownMenus.participation.map((item, index) => (
                      <Link
                        key={index}
                        to={`${item.href}${item.hash}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Program Dropdown */}
              <div 
                className="relative h-11 flex items-center"
                onMouseEnter={() => handleDropdownEnter('program')}
              >
                <Link
                  to="/program"
                  className="text-gray-700 hover:text-blue-900 transition-colors text-lg"
                >
                  Program
                </Link>
                {activeDropdown === 'program' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    {dropdownMenus.program.map((item, index) => (
                      <Link
                        key={index}
                        to={`${item.href}${item.hash}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Partners Dropdown */}
              <div 
                className="relative h-11 flex items-center"
                onMouseEnter={() => handleDropdownEnter('partners')}
              >
                <Link
                  to="/partners"
                  className="text-gray-700 hover:text-blue-900 transition-colors text-lg"
                >
                  Partners
                </Link>
                {activeDropdown === 'partners' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    {dropdownMenus.partners.map((item, index) => (
                      <Link
                        key={index}
                        to={`${item.href}${item.hash}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="ml-2">
                <Link 
                  to="/register" 
                  className="bg-blue-800 text-white px-5 py-2 rounded-2xl hover:bg-blue-900 transition-colors font-medium text-lg"
                >
                  Register Now
                </Link>
              </div>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden bg-gray-50 rounded-3xl px-3 py-3">
            <button
              className="flex items-center justify-center w-11 h-11"
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
          <div className="mt-2 bg-gray-50 rounded-3xl px-6 py-4 space-y-4">
            {/* About IChTo Mobile */}
            <div>
              <button
                onClick={() => handleMobileDropdownToggle('about')}
                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-900 transition-colors"
              >
                About IChTo
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'about' && (
                <div className="mt-2 ml-4 space-y-2">
                  {dropdownMenus.about.map((item, index) => (
                    <Link
                      key={index}
                      to={`${item.href}${item.hash}`}
                      className="block text-sm text-gray-600 hover:text-blue-900"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Participation Mobile */}
            <div>
              <button
                onClick={() => handleMobileDropdownToggle('participation')}
                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-900 transition-colors"
              >
                Participation
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'participation' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'participation' && (
                <div className="mt-2 ml-4 space-y-2">
                  {dropdownMenus.participation.map((item, index) => (
                    <Link
                      key={index}
                      to={`${item.href}${item.hash}`}
                      className="block text-sm text-gray-600 hover:text-blue-900"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Program Mobile */}
            <div>
              <button
                onClick={() => handleMobileDropdownToggle('program')}
                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-900 transition-colors"
              >
                Program
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'program' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'program' && (
                <div className="mt-2 ml-4 space-y-2">
                  {dropdownMenus.program.map((item, index) => (
                    <Link
                      key={index}
                      to={`${item.href}${item.hash}`}
                      className="block text-sm text-gray-600 hover:text-blue-900"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Partners Mobile */}
            <div>
              <button
                onClick={() => handleMobileDropdownToggle('partners')}
                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-900 transition-colors"
              >
                Partners
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'partners' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'partners' && (
                <div className="mt-2 ml-4 space-y-2">
                  {dropdownMenus.partners.map((item, index) => (
                    <Link
                      key={index}
                      to={`${item.href}${item.hash}`}
                      className="block text-sm text-gray-600 hover:text-blue-900"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/register" 
              className="block bg-blue-800 text-white px-4 py-2 rounded-2xl hover:bg-blue-900 transition-colors font-medium text-center"
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