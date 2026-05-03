function WhyChooseUs({ business }) {
  const features = [
    {
      image:
        "https://tse3.mm.bing.net/th/id/OIP.VKsJs6VBsk_6hSex5sIWhwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Fresh Daily",
      description: "Seafood sourced fresh every morning from local markets",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.9z9GnBcY__99-xDLlVgoUgHaEJ?w=308&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      title: "4.8 Star Rated",
      description: `${business.googleMapsReviews}+ happy customers trust our quality`,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.GIDE7BWPS-KkL6uOHUc8mAHaEJ?w=328&h=184&c=7&r=0&o=7&pid=1.7&rm=3",
      title: "Prime Location",
      description: "Located in the heart of Al Malaz, Riyadh's food district",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.x9mhDiygPVCa8_wUIpG2PwHaFj?w=211&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      title: "Fair Pricing",
      description: "Mid-range pricing with premium quality - exceptional value",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Why Choose Mashwi Singary?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don't just serve seafood - we craft experiences that keep
            families coming back
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:bg-blue-900 hover:text-white"
            >
              <div className="h-40 overflow-hidden bg-gray-100">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 transition-colors text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-blue-900 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                4.8
              </p>
              <p className="text-blue-200">Star Rating</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                400+
              </p>
              <p className="text-blue-200">Reviews</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                6+
              </p>
              <p className="text-blue-200">Years Serving</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                100%
              </p>
              <p className="text-blue-200">Fresh Daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
