import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Review from './pages/Review'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/contact" element={<Contact />} />        
        <Route path="/review" element={<Review />} />        
      </Routes>
      <Footer />
    </>
  )
}

export default App