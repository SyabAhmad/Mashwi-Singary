import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({ business }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const nameParts = business.name.split(' | ')

  const googleReviewUrl = business.googleMapsUrl + '&tab=reviews'

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              {nameParts[0]}
            </h1>
            {nameParts[1] && (
              <p className="text-xs text-gray-500 tracking-wide">{nameParts[1]}</p>
            )}
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-900 transition-colors font-medium py-2">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-blue-900 transition-colors font-medium py-2">Menu</Link>
            <Link to="/location" className="text-gray-700 hover:text-blue-900 transition-colors font-medium py-2">Location</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Rate on Google
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-900 p-2"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-blue-900 py-2 font-medium">Home</Link>
              <Link to="/menu" className="text-gray-700 hover:text-blue-900 py-2 font-medium">Menu</Link>
              <Link to="/location" className="text-gray-700 hover:text-blue-900 py-2 font-medium">Location</Link>
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Rate on Google
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
