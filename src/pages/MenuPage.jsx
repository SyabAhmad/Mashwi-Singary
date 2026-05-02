import Menu from '../components/Menu'

function MenuPage({ products, business }) {
  return (
    <div className="pt-20">
      <Menu products={products} business={business} />
    </div>
  )
}

export default MenuPage
