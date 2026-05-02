function Hero({ business }) {
  const whatsappMessage = encodeURIComponent("Hi, I'd like to ask about your seafood menu / availability.")
  const nameParts = business.name.split(' | ')

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Seaside Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/1920/1080)' }}
      ></div>
      <div className="absolute inset-0 bg-blue-900/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white animate-fadeIn">
            {/* Arabic Name */}
            {nameParts[1] && (
              <p className="text-lg md:text-xl text-amber-300 mb-3 font-light tracking-wide">
                {nameParts[1]}
              </p>
            )}

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              {nameParts[0]}
            </h1>

            {/* Tagline */}
            <div className="w-20 h-1 bg-amber-400 mb-6"></div>
            <p className="text-xl md:text-2xl mb-6 text-white font-light">
              {business.tagline}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg mb-8 text-blue-100 leading-relaxed">
              {business.heroDescription}
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 mb-10 text-blue-200">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-white">{business.googleMapsRating}</span>
              <span>({business.googleMapsReviews}+ reviews)</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/menu"
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-xl transition-all transform hover:scale-105 text-center"
              >
                View Our Menu
              </a>

              <a
                href={`https://wa.me/${business.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg shadow-xl transition-all transform hover:scale-105 border-2 border-white/30 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.152 3.337.091.098.16.177.16.264 0 .174-.139.299-.308.299h-.107c-.114 0-.231.009-.347.017a3.73 3.73 0 0 1-.851.074c-.173 0-.375-.033-.543-.033-.242 0-.47.076-.666.141-.916.338-1.513 1.063-1.513 2.021 0 .395.176.777.441 1.076.387.396.936.713 1.569.713.986 0 1.857-.693 2.342-1.704.91 0 1.805-.414 2.547-1.074.426-.373.754-.856.974-1.396a5.696 5.696 0 0 1 .589-1.016c.273-.44.399-.916.399-1.406 0-1.187-.767-1.897-1.752-1.897z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Side - Fish/Kitchen Image */}
          <div className="relative animate-fadeIn">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://picsum.photos/800/1000"
                alt="Fresh Seafood"
                className="w-full h-[500px] md:h-[600px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <p className="text-blue-900 font-bold text-lg">Fresh Daily</p>
                <p className="text-gray-600 text-sm">Premium Seafood</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
