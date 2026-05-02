function WhyChooseUs({ business }) {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fresh Daily",
      description: "Seafood sourced fresh every morning from local markets"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "4.8 Star Rated",
      description: `${business.googleMapsReviews}+ happy customers trust our quality`
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Prime Location",
      description: "Located in the heart of Al Malaz, Riyadh's food district"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fair Pricing",
      description: "Mid-range pricing with premium quality - exceptional value"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Why Choose Mashwi Singary?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don't just serve seafood - we craft experiences that keep families coming back
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-blue-900 hover:text-white transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-blue-900 group-hover:text-amber-400 mb-4 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-blue-100 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-blue-900 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">4.8</p>
              <p className="text-blue-200">Star Rating</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">400+</p>
              <p className="text-blue-200">Reviews</p>
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
      </div>
    </section>
  )
}

export default WhyChooseUs
