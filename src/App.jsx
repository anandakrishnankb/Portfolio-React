import { useState } from 'react'
import Nav from './Nav'
import Home from './Home'
import './App.css'
import './Mobile.css'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  

  return (
    <>
      <Nav />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
