function AboutPage({ business }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-blue-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/id/488/1920/1080)' }}
        ></div>
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            About Mashwi Singary
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {business.tagline}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Story
              </h2>
              <div className="w-20 h-1 bg-amber-400 mb-6"></div>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Established as one of Riyadh's premier seafood destinations, Mashwi Singary has been serving fresh, authentic seafood to families across Al Malaz and beyond.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our name reflects our heritage - "Mashwi" meaning grilled, and "Singary" representing our signature seafood blends that have become a local favorite.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a 4.8-star rating and over 400 happy customers, we continue to uphold our commitment to quality, freshness, and exceptional dining experiences.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/id/312/600/400"
                alt="Restaurant Interior"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What makes Mashwi Singary special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fresh Daily</h3>
              <p className="text-gray-600">
                We source the freshest seafood every morning from local markets, ensuring quality in every bite.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                With a 4.8-star rating and 400+ reviews, quality is at the heart of everything we do.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Located in the heart of Al Malaz, we're proud to serve families and create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">4.8</p>
              <p className="text-blue-200">Star Rating</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">400+</p>
              <p className="text-blue-200">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">6+</p>
              <p className="text-blue-200">Years Serving</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">100%</p>
              <p className="text-blue-200">Fresh Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Experience Mashwi Singary?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of happy customers and discover why we're Riyadh's favorite seafood restaurant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-10 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"
            >
              View Our Menu
            </a>
            <a
              href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hi, I'd like to reserve a table.\n\nDate:\nTime:\nGuests:")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105"
            >
              Reserve via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
