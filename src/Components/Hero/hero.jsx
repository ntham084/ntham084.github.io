import React from 'react'
import './hero.css'
import profile_img from '../../assets/ProfilePic.svg'


const Hero = () => {
    return (
        <div id = "Home" className = 'hero'>
            <img src= {profile_img} alt="Profile Picture of Nathan" />
            <h1><span>I'm Nathan Thamtoro,</span> Computer Science Student from Simon Fraser University</h1>
            <p>I am a aspiring software engineer ready to make the best of any oppurtunity given</p>
            <div className = "hero-action">
                <a href="https://github.com/ntham084" target="_blank" rel="noopener noreferrer" className="hero_github">
                    Github
                </a>
                <a href="https://www.linkedin.com/in/nathan-thamtoro-312156348" target="_blank" rel="noopener noreferrer" className="hero_Linkdin">
                    Linkedin
                </a>
                <a href="https://www.instagram.com/nathan_thamtoro/?hl=en" target="_blank" rel="noopener noreferrer" className="hero_Instagram">
                    Instagram
                </a>
                <a href="./public/Nathan-Thamtoro-Resume.pdf" target="_blank" rel="noopener noreferrer" className="hero_Resume">
                    Resume
                </a>
            </div>
        </div>
    )

}

export default Hero