import React from 'react'
import './education.css'

const Education = () => {
    return (
        <div id = "Education" className = "education_section">
            <div className = "education-title">
                <h1>Education</h1>
            </div>
            <div className="education-containers">
                <div className="education-container">
                    <img src="./public/sfu.png" alt="SFU Logo" className="education-logo1" />
                    <div className="education-school">Simon Fraser University</div>
                    <div className="education-type">Bachelor's of Computer Science</div>
                    <div className="education-time">September 2022 - Present</div>
                </div>

                <div className="education-container">
                    <img src="./public/pa.png" alt="Pacific Academy Logo" className="education-logo2" />
                    <div className="education-school">Pacific Academy</div>
                    <div className="education-type">High School Diploma</div>
                    <div className="education-time">September 2018 - June 2022</div>
                </div>
            </div>
        </div>
    )
}
export default Education
