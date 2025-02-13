import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/hero';
import About from './Components/About/about';
import Project from './Components/Projects/projects';
import Experience from './Components/Experience/experience';
import Education from './Components/Education/education';
import Footer from './Components/Footer/footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Experience/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default App
