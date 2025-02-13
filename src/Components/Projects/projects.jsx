import React from 'react';
import './projects.css'; 

const Project = () => {
    return (
        <div id="Projects" className="projects">
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            <div className="myproject-containers">      
                <a href="https://github.com/connorchurcott/Stormhacks-2024" target="_blank" rel="noopener noreferrer" className="myproject-container">
                    <img src="./public/animepicture.jpg" alt="Manga Search, One Piece Picture Logo" className="project-logo" />
                    <div className="project-info">
                        <h2>Manga Search</h2>
                        <p>Manga Search is a project I worked on during a hackathon. A more detailed and better looking manga search service.</p>
                    </div>
                </a>
                <a href="https://github.com/CMPT-276-SPRING-2025/final-project-02-peaks" target="_blank" rel="noopener noreferrer" className="myproject-container">
                    <img src="./public/1-05b1b4dd.jpg" alt="Miso Hungry, Miso Soup Picture Logo" className="project-logo" />
                    <div className="project-info">
                        <h2>Miso Hungry</h2>
                        <p>A unfinished project for our 276 final. A website designed to help anyone cook meals.</p>
                    </div>
                </a>
                <a href="https://github.com/connorchurcott/Order-and-Chaos" target="_blank" rel="noopener noreferrer" className="myproject-container">
                    <img src="./public/orderandchaos.jpg" alt="Order and Chaos Picture Logo" className="project-logo" />
                    <div className="project-info">
                        <h2>Order and Chaos</h2>
                        <p>A project me and my friend worked on, implementation of Order and Chaos using C++.</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Project;
