import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import About from './pages/About';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import Gallery from './pages/Gallery';
import EventsPage from './pages/EventsPage';



function App() {
 

  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/events' element={<EventsPage />} />
      </Routes>
     
    </ Router>
  
  )
}

export default App
