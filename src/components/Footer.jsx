import { Link } from 'react-router-dom'

function Footer({ business }) {
  const reservationMessage = encodeURIComponent("Hi, I'd like to reserve a table.\n\nDate:\nTime:\nGuests:")

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Reserve Your Table Today
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Experience the finest fresh seafood in Riyadh. Direct reservations via WhatsApp - no platform fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${business.whatsapp}?text=${reservationMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-lg shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2 text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.152 3.337.091.098.16.177.16.264 0 .174-.139.299-.308.299h-.107c-.114 0-.231.009-.347.017a3.73 3.73 0 0 1-.851.074c-.173 0-.375-.033-.543-.033-.242 0-.47.076-.666.141-.916.338-1.513 1.063-1.513 2.021 0 .395.176.777.441 1.076.387.396.936.713 1.569.713.986 0 1.857-.693 2.342-1.704.91 0 1.805-.414 2.547-1.074.426-.373.754-.856.974-1.396a5.696 5.696 0 0 1 .589-1.016c.273-.44.399-.916.399-1.406 0-1.187-.767-1.897-1.752-1.897z"/>
              </svg>
              Reserve via WhatsApp
            </a>
          </div>
        </div>

         <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {business.name.split(' | ')[0]}
              </h3>
              <p className="text-gray-400">
                {business.businessType} serving fresh seafood in the heart of Riyadh.
                Premium quality, authentic taste.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/menu" className="hover:text-white transition-colors">Our Menu</Link>
                </li>
                <li>
                  <Link to="/location" className="hover:text-white transition-colors">Visit Us</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {business.phone}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {business.location}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Opening Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Sun - Thu</span>
                  <span className="text-white">{business.hours.weekdays}</span>
                </li>
                <li className="flex justify-between">
                  <span>Fri - Sat</span>
                  <span className="text-white">{business.hours.weekends}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-500 pt-6 border-t border-gray-800">
            <p>&copy; 2026 {business.name.split(' | ')[0]}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
