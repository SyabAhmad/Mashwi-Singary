import { useState } from 'react'

function Menu({ products, business }) {
  const [activeCategory, setActiveCategory] = useState(0)

  const whatsappMessage = (itemName) =>
    encodeURIComponent(`Hi, I'd like to ask about ${itemName} from your menu.`)

  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh seafood prepared with passion and expertise
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {products.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === index
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.categories[activeCategory].items.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={item.image || 'https://images.unsplash.com/photo-1534766555764-ce878a4e947d?w=600&h=400&fit=crop'}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full font-bold">
                  {item.price} SAR
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <a
                  href={`https://wa.me/${business.whatsapp}?text=${whatsappMessage(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 rounded-lg transition-colors"
                >
                  Ask About This
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
