import React, { useState } from "react";
import "./App.css";
import AboutMe from "./components/aboutme";
import ContactMe from "./components/contactme";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const handleNavButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="navbar">
            <div className="navbar-brand">Conner Williams</div>
            <div className="navbar-links">
              <button
                onClick={() => handleNavButtonClick("about")}
                className={`navbar-button ${
                  currentPage === "about" ? "active" : ""
                }`}
              >
                About Me
              </button>
              <button
                onClick={() => handleNavButtonClick("portfolio")}
                className={`navbar-button ${
                  currentPage === "portfolio" ? "active" : ""
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => handleNavButtonClick("contact")}
                className={`navbar-button ${
                  currentPage === "contact" ? "active" : ""
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => handleNavButtonClick("resume")}
                className={`navbar-button ${
                  currentPage === "resume" ? "active" : ""
                }`}
              >
                Resume
              </button>
            </div>
          </div>
        </nav>
        <div className="content">
          {currentPage === "about" && <AboutMe />}
          {currentPage === "portfolio" && <Portfolio />}
          {currentPage === "contact" && <ContactMe />}
          {currentPage === "resume" && <Resume />}
        </div>
      </header>
      <footer>
        <div className="footer">
          <div className="footer-links">
            <a href="https://github.com/cwilli94" className="footer-link">
              GitHub
            </a>
            <a href="https://linkedin.com" className="footer-link">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
