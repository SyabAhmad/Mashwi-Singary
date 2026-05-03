function LocationSection({ business }) {
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.569826234967!2d46.705888315002!3d24.674973984138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03895de16ff5%3A0x1f5e3d4f5e4b7c8a!2sJarir%20St%2C%20Al%20Malaz%2C%20Riyadh!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Find Us Here
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Al Malaz, Riyadh's premier food district
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Container */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-64 md:h-80 lg:h-96">
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mashwi Singary Location"
            ></iframe>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-blue-900 hover:text-white transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="text-blue-900 group-hover:text-amber-400 transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Address</h3>
                  <p className="text-gray-600 group-hover:text-blue-100">
                    {business.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-blue-900 hover:text-white transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="text-blue-900 group-hover:text-amber-400 transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Contact</h3>
                  <p className="text-gray-600 group-hover:text-blue-100">
                    {business.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-blue-900 hover:text-white transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="text-blue-900 group-hover:text-amber-400 transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3">Opening Hours</h3>
                  <div className="space-y-2 text-gray-600 group-hover:text-blue-100">
                    <p className="flex justify-between">
                      <span>Sunday - Thursday</span>
                      <span className="font-medium">{business.hours.weekdays}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Friday - Saturday</span>
                      <span className="font-medium">{business.hours.weekends}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hi, I'd like to reserve a table.\n\nDate:\nTime:\nGuests:")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
            >
              Reserve via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
