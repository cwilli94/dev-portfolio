import React from "react";
import project1Image from "../assets/Picture1.png";
import project2Image from "../assets/Picture2.png";
import project3Image from "../assets/Picture3.png";
import project4Image from "../assets/Picture4.png";
import project5Image from "../assets/Picture5.png";
import project6Image from "../assets/Picture6.png";

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio-images">
        <a href="https://cwilli94.github.io/module-4-hw/" target="_blank" rel="noopener noreferrer">
          <img src={project1Image} alt="Project 1" />
        </a>
        <a href="https://cwilli94.github.io/mdl-5-hw/" target="_blank" rel="noopener noreferrer">
          <img src={project2Image} alt="Project 2" />
        </a>
        <a href="https://cwilli94.github.io/module-6-hw/" target="_blank" rel="noopener noreferrer">
          <img src={project3Image} alt="Project 3" />
        </a>
        <a href="https://calm-calendar-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <img src={project4Image} alt="Project 4" />
        </a>
        <a href="https://acarter867.github.io/Entertained/" target="_blank" rel="noopener noreferrer">
          <img src={project5Image} alt="Project 5" />
        </a>
        <a href="https://cwilli94.github.io/Meticulous-Marsuspials/" target="_blank" rel="noopener noreferrer">
          <img src={project6Image} alt="Project 6" />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
