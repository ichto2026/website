import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 md:h-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mt-4">
          {/* 좌측: Where to find us와 소셜미디어 링크들 */}
          <div className="flex flex-row items-start space-x-4 md:space-x-16 mb-4 md:mb-0">
            <div className="mb-4 md:mb-0">
              <div className="flex space-x-4 items-center justify-around">
                <a
                  href="https://www.facebook.com/share/18xJ5sHSpj/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/chemtourn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-6.5 h-6.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 20.312c-2.24 0-4.056-1.816-4.056-4.056V7.744c0-2.24 1.816-4.056 4.056-4.056h7.112c2.24 0 4.056 1.816 4.056 4.056v8.512c0 2.24-1.816 4.056-4.056 4.056H8.449z"/>
                    <path d="M12.017 5.838a6.149 6.149 0 1 0 0 12.298 6.149 6.149 0 0 0 0-12.298zm0 10.13a3.981 3.981 0 1 1 0-7.962 3.981 3.981 0 0 1 0 7.962z"/>
                    <circle cx="18.406" cy="5.594" r="1.44"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          

          {/* 우측 */}
          <div className="text-center text-gray-300 md:flex md:flex-row space-x-1 space-y-1 mt-18">
            <h4 className="text-gray-100 md:mr-6"><Link to="/faq">FAQ</Link></h4>
            <h4>© 2025-2026 IChTo 2026.</h4>
            <h4>All rights reserved.</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}