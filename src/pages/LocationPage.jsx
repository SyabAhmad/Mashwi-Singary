import LocationSection from '../components/LocationSection'

function LocationPage({ business }) {
  return (
    <div>
      {/* Location Hero */}
      <section className="relative py-24 md:py-32 bg-blue-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/id/292/1920/1080)' }}
        ></div>
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Visit Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            {business.location}
          </p>
        </div>
      </section>

      <div className="pt-12">
        {/* @ts-ignore */}
        {/* @ts-nocheck */}
        {/* @ts-ignore-next-line */}
        {/* @ts-expect-error */}
        {/* @ts-nocheck-next-line */}
        <LocationSection business={business} />
      </div>
    </div>
  )
}

export default LocationPage
