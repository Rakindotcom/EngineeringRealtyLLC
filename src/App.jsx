import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Review from './pages/Review'
import About from './pages/About'
import Listing from './pages/Listing'
import FAQ from './pages/FAQ'
import NotFound from './pages/Notfound'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/review" element={<Review />} />
        <Route path="*" element={<NotFound />} />   
      </Routes>
      <Footer />
    </>
  )
}

export default App