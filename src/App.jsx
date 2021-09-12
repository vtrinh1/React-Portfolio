import React from 'react'
import About from './components/About'
import Header from './components/Header'
import ParticlesBackground from './components/ParticlesBackground'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <ParticlesBackground />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <ParticlesBackground />
      <Footer />
    </div>
  )
}

export default App