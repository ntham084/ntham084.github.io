import React from 'react'
import './experience.css'

const Experience = () => {
    return (
        <div id = "Experience" className = "experience_section">
            <div className = "experience-title">
                <h1>Experiences</h1>
            </div>
            <div className="experience-containers">
                <div className="experience-container">
                    <img src="./public/supersave.png" alt="Supersave Logo" className="experience-logo" />
                    <div className="experience-work">Supersave Fence</div>
                    <div className="experience-description">
                        <p>- Organize and paint fence in yard</p>
                        <p>- Set up and take down fence at job sites</p>
                    </div>

                    <div className="experience-time">May 2023 - Present</div>
                </div>
                
                <div className="experience-container">
                    <img src="./public/pantherhoops.png" alt="Panther Hoops Logo" className="experience-logo" />
                    <div className="experience-work">Panther Hoops Basketball</div>
                    <div className="experience-description">
                        <p>- Organize different basketball camps</p>
                        <p>- Coach different age levels in games and practices</p>
                    </div>
                    <div className="experience-time">June 2021 - September 2021</div>
                </div>

                <div className="experience-container">
                    <img src="./public/italian.jpg" alt="The Italian Logo" className="experience-logo" />
                    <div className="experience-work">The Italian Osteria and Cheesebar</div>
                    <div className="experience-description">
                        <p>- Expeditor for the front of the house staff</p>
                        <p>- Line cook</p>
                    </div>
                    <div className="experience-time">June 2020 - September 2022</div>
                </div>
            </div>
        </div>
    )
}
export default Experience