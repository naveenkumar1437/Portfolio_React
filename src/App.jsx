import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About'
import Contact from './Contacts'
import Projects from './Projects'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header'
import SkillsSection from './Skills'
import Footer from './Footer'


function App() {

  return (
    <>
      <Router>
        <header>
          <h1>MATTHURTHI NAVEEN KUMAR</h1>
          <nav>
            <Link to='/header'>Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/header' element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
