function FishCollection({ products, business }) {
  const whatsappMessage = (itemName) =>
    encodeURIComponent(`Hi, I'm interested in ${itemName}. Please provide more details.`)

  const allItems = products.categories.flatMap(category =>
    category.items.map(item => ({ ...item, category: category.name }))
  ).slice(0, 6)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Fresh Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked seafood delivered fresh to your plate every day
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                <img
                  src={item.image || 'https://images.unsplash.com/photo-1534766555764-ce878a4e947d?w=600&h=400&fit=crop'}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                  {item.price} SAR
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                <a
                  href={`https://wa.me/${business.whatsapp}?text=${whatsappMessage(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-blue-900 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg transition-colors"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/menu"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-10 py-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}

export default FishCollection
