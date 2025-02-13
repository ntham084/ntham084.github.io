import React from 'react'
import './about.css'


const About = () => {
    return (
        <div id = "Aboutme" className = "about_section">
            <div className = "about-title">
                <h1>About Me</h1>
            </div>
            <div className = "about-sections">
                <div className = "about-left">
                    <img src = "./public/IMG_3848.JPG" alt = "Fun Picture of Nathan" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm currently 20 years old from Langley, British Columbia. My hobbies are playing basketball, watching football, and snowboarding.</p>
                        <p>My favorite music genre is K-Pop, and my favorite groups are Twice, Seventeen, Enhypen, and Aespa.</p>
                        <p>I first started coding in the fall of 2022 and have learned lots since then. I've continued to work hard to further my skills and knowledge, and will do so in any work environment I'm in.</p>
                    </div>
                    <div className = "about-skills">
                        <h1>My Skills: Click the languages you would like to learn too</h1>
                        <div className = "about-skill">
                            <a href="https://www.w3schools.com/html/" target="_blank" className="skill-link"><p>HTML & CSS</p></a>
                            <hr style={{width:"50%"}} />
                        </div>
                        <div className = "about-skill">
                            <a href="https://www.w3schools.com/python/" target="_blank" className="skill-link"><p>Python</p></a>
                            <hr style={{width:"50%"}} />
                        </div>
                        <div className = "about-skill">
                            <a href="https://www.w3schools.com/sql/default.asp" target="_blank" className="skill-link"><p>SQL</p></a>
                            <hr style={{width:"50%"}} />
                        </div>
                        <div className = "about-skill">
                            <a href="https://www.w3schools.com/js/default.asp" target="_blank" className="skill-link"><p>JavaScript</p></a>
                            <hr style={{width:"50%"}} />
                        </div>
                        <div className = "about-skill">
                            <a href="https://www.w3schools.com/cpp/default.asp" target="_blank" className="skill-link"><p>C & C++</p></a>
                            <hr style={{width:"50%"}} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About