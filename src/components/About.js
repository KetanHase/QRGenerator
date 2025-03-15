import React, { useState } from 'react';
import Navbar from './Navbar';
import TechStack from './TechStack';
import '../css/Navbar.css';
import '../css/TechStack.css';
 

const About = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
  <>
     <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <div className={`tech-container ${menuOpen ? "nav-open" : ""}`}>
        <TechStack />
      </div>

    </>
  )
}

export default About