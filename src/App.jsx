import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/gallery' element={<Gallery />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App