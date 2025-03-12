import React from "react";
import "../css/TechStack.css";
import '../css/Navbar.css';
import canvaIcon from "../assets/img/canva.png"; // Add your icons in assets folder
// import figmaIcon from "../assets/figma.png";
 import htmlIcon from "../assets/img/html.png";
// import cssIcon from "../assets/css.png";
// import reactIcon from "../assets/react.png";
// import flaskIcon from "../assets/flask.png";
// import pythonIcon from "../assets/python.png";
// import netlifyIcon from "../assets/netlify.png";
// import renderIcon from "../assets/render.png";
// import githubIcon from "../assets/github.png";

const TechStack = () => {
  return (
    <div className="tech-container">
      {/* Left Side - About & Challenges */}
      <div className="left-section">
        <div className="box">
          <h2>About This Project</h2>
          <p>
            This is a <span className="highlight">QR Code Generator</span> allows users to convert text, numbers, and URLs into QR codes that never expire! Whether you need a QR code for personal, business, or marketing use. Share information effortlessly with scannable QR codes that are easy to use and compatible with all devices.
          </p>
        </div>
        <div className="box">
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
      <div className="box tech-box">
        <h2>Tech Stack Used</h2>
        <div className="categories">
          <div>
            <h3>UI/UX</h3>
             <img src={canvaIcon} alt="Canva" />
             <img src={canvaIcon} alt="Canva" />
             <img src={canvaIcon} alt="Canva" />
             <img src={canvaIcon} alt="Canva" />
             <img src={canvaIcon} alt="Canva" />
              
             
            {/*<img src={figmaIcon} alt="Figma" /> */}
          </div><br />
           
          <div>
            <h3>Frontend</h3>
            <img src={htmlIcon} alt="HTML" />
            <img src={htmlIcon} alt="HTML" />
            <img src={htmlIcon} alt="HTML" />
            <img src={htmlIcon} alt="HTML" />
            <img src={htmlIcon} alt="HTML" />
             
            {/* <img src={cssIcon} alt="CSS" />
            <img src={reactIcon} alt="React" /> */}
          </div><br />
          <div>
            <h3>Backend</h3>
            <img src={htmlIcon} alt="HTML" />
            <img src={htmlIcon} alt="HTML" />
            {/* <img src={flaskIcon} alt="Flask" />
            <img src={pythonIcon} alt="Python" /> */}
          </div>
          <div>
            <h3>Deployment Tools</h3>
            <img src={htmlIcon} alt="HTML" />
            {/* <img src={netlifyIcon} alt="Netlify" />
            <img src={renderIcon} alt="Render" />
            <img src={githubIcon} alt="GitHub" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
