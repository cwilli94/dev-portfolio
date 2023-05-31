import React from "react";

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <div className="resume-section">
        <h3>Education</h3>
        <p>Bachelor of Science in Computer Science - ABC University (2012)</p>
      </div>
      <div className="resume-section">
        <h3>Experience</h3>
        <p>Software Developer - XYZ Company (2013 - Present)</p>
        <ul>
          <li>Developed web applications using React, HTML, and CSS</li>
          <li>Collaborated with cross-functional teams to deliver projects</li>
          <li>Implemented responsive designs for mobile-friendly experiences</li>
        </ul>
      </div>
      <div className="resume-section">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
