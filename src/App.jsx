import React from 'react'
import Navbar from "./components/Navbar"
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
function App() {
  return (
    <div style={{display:"flex;"}}>
      <Navbar/>
      <div style={{display:"flex", flexDirection:"column", gap:"150px"}}>
        <Aboutme />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
