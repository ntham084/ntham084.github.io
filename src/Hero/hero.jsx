import React from 'react'
import './hero.css'
import profile_img from '../assets/ProfilePic.svg'


const Hero = () => {
    return (
        <div id = "Home" className = 'hero'>
            <img src= {profile_img} alt="Profile Picture of Nathan" />
        </div>
    )

}

export default Hero