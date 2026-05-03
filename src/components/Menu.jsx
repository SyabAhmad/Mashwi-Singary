import { useState } from 'react'

function Menu({ products, business }) {
  const [activeCategory, setActiveCategory] = useState(0)

  const whatsappMessage = (itemName) =>
    encodeURIComponent(`Hi, I'd like to ask about ${itemName} from your menu.`)

  return (
    <section id="menu" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Full Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked fresh seafood, grilled to perfection
          </p>
        </div>

        {/* Premium Filter Bar - Sticky */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-2 mb-12 max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-1">
            {products.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-blue-900 text-white shadow-md scale-105'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.categories[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image || 'https://picsum.photos/600/400'}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  {item.price} SAR
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-blue-900 px-3 py-1 rounded-full text-xs font-semibold">
                  {products.categories[activeCategory].name}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/${business.whatsapp}?text=${whatsappMessage(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.152 3.337.091.098.16.177.16.264 0 .174-.139.299-.308.299h-.107c-.114 0-.231.009-.347.017a3.73 3.73 0 0 1-.851.074c-.173 0-.375-.033-.543-.033-.242 0-.47.076-.666.141-.916.338-1.513 1.063-1.513 2.021 0 .395.176.777.441 1.076.387.396.936.713 1.569.713.986 0 1.857-.693 2.342-1.704.91 0 1.805-.414 2.547-1.074.426-.373.754-.856.974-1.396a5.696 5.696 0 0 1 .589-1.016c.273-.44.399-.916.399-1.406 0-1.187-.767-1.897-1.752-1.897z"/>
                  </svg>
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <a
            href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hi, I'd like to ask about your full seafood menu.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contact Us Directly
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu
