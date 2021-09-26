import React, { useState } from 'react'
import About from './components/About'
import Header from './components/Header'
import ParticlesBackground from './components/ParticlesBackground'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes"
import ScrollButton from './components/ScrollButton'

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <div>
    <GlobalStyles/>
      <ScrollButton />
      <Navbar themeToggler={themeToggler} theme={theme} />
      <Header />
      <ParticlesBackground />
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
      <ParticlesBackground />
    </div>
    </ThemeProvider>
  )
}

export default App