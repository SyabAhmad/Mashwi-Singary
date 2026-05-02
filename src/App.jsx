import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import businessData from './data/businessData.json'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import LocationPage from './pages/LocationPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-['Inter']">
        <Header business={businessData.business} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage business={businessData.business} products={businessData.products} />} />
            <Route path="/menu" element={<MenuPage products={businessData.products} business={businessData.business} />} />
            <Route path="/location" element={<LocationPage business={businessData.business} />} />
          </Routes>
        </main>
        <Footer business={businessData.business} />
      </div>
    </Router>
  )
}

export default App
