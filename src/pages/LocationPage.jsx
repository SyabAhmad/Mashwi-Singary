import LocationSection from '../components/LocationSection'

function LocationPage({ business }) {
  return (
    <div className="pt-20">
      <LocationSection business={business} />
    </div>
  )
}

export default LocationPage
