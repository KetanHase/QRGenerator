import React from "react";
import "../css/TechStack.css";
import '../css/Navbar.css';
import canvaIcon from "../assets/img/canva.png"; // Add your icons in assets folder
import htmlIcon from "../assets/img/html.png"; 

const TechStack = () => {
  return (
    <div className="tech-container">
      {/* Left Side - About & Challenges */}
      <div className="left-section">
        <div className="box" data-aos="zoom-in" data-aos-delay="2000">
          <h2>About This Project</h2>
          <p>
            This is a <span className="highlight">QR Code Generator</span> that allows users to convert text, numbers, and URLs into QR codes that never expire! Whether you need a QR code for personal, business, or marketing use. Share information effortlessly with scannable QR codes that are easy to use and compatible with all devices.
          </p>
        </div>
        <div className="box" data-aos="zoom-in" data-aos-delay="2500">
          <h2>Big Challenges Faced</h2>
          <ul>
            <li>
              <span className="highlight">Connecting Multiple Technologies:</span> Integrating Flask and React for data sharing.
            </li>
            <li>
              <span className="highlight">While Deployment:</span> Deploying React on Netlify and Flask on Render, ensuring smooth connectivity.
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side - Tech Stack */}
      <div className="box tech-box" data-aos="zoom-in" data-aos-delay="3000">
        <h2>Tech Stack Used</h2>
        <div className="categories">

          {/* UI/UX Section */}
          <div>
            <h3>UI/UX</h3>
            <div className="category-row">
              <img src={canvaIcon} alt="Canva" />
              <img src={canvaIcon} alt="Canva" />
              <img src={canvaIcon} alt="Canva" />
              <img src={canvaIcon} alt="Canva" />
              <img src={canvaIcon} alt="Canva" />
            </div>
          </div>

          {/* Frontend Section */}
          <div>
            <h3>Frontend</h3>
            <div className="category-row">
              <img src={htmlIcon} alt="HTML" />
              <img src={htmlIcon} alt="HTML" />
              <img src={htmlIcon} alt="HTML" />
              <img src={htmlIcon} alt="HTML" />
              <img src={htmlIcon} alt="HTML" />
            </div>
          </div>

          {/* Backend Section */}
          <div style={{display:'flex',flexDirection:'row'}}>
          <div>
            <h3>Backend</h3>
             
              <img src={htmlIcon} alt="HTML" />
              <img src={htmlIcon} alt="HTML" />
             
              </div>

          {/* Deployment Tools Section */}
          <div>
            <h3>Deployment Tools</h3>
             
              <img src={htmlIcon} alt="HTML" />
             
          </div></div>

        </div>
      </div>
    </div>
  );
};

export default TechStack;
