import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/hero';
import About from './Components/About/about';
import Project from './Components/Projects/projects';
import Experience from './Components/Experience/experience';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Experience/>
    </div>
  )
}

export default App
