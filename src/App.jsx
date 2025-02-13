import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/hero';
import About from './Components/About/about';
import Project from './Components/Projects/projects';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
    </div>
  )
}

export default App
