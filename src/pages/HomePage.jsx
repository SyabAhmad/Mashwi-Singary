import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import FishCollection from '../components/FishCollection'
import TrustSection from '../components/TrustSection'

function HomePage({ business, products }) {
  return (
    <>
      <Hero business={business} />
      <WhyChooseUs business={business} />
      <FishCollection products={products} business={business} />
      <TrustSection business={business} />
    </>
  )
}

export default HomePage
