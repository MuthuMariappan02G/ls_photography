import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavbarTop from './components/NavbarTop'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarTop />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
