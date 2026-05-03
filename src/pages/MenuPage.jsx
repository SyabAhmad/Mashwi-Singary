import Menu from '../components/Menu'

function MenuPage({ products, business }) {
  return (
    <div>
      {/* Menu Hero */}
      <section className="relative py-24 md:py-32 bg-blue-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/id/312/1920/1080)' }}
        ></div>
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Full Menu
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            {business.heroDescription}
          </p>
        </div>
      </section>

      <div className="pt-12">
        <Menu products={products} business={business} />
      </div>
    </div>
  )
}

export default MenuPage
