
import React from 'react'

import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Component/Navbar/Navber';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import News from './Component/News/News';
import Eventes from './Component/Eventes/Event';
import About from './Component/About/About';
import Ali from './Component/Ali';

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Navbar/>

     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/News" element={<News/>} />
      <Route path="/Events" element={<Eventes/>} />
      <Route path="/Contact" element={<Contact/>} />

    </Routes> 
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App