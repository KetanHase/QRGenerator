import React, { useState } from "react";
import Navbar from "./Navbar";
import StartButton from "./StartButton";
import '../css/Navbar.css';
import '../css/StartButton.css';
 
 
 
 
const Home =() =>{
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
     
     


    return(
    <>
     <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
     <div className={`start-button-section  ${menuOpen ? 'nav-open' : ''}`}  >
        <StartButton />
     </div>  
    
     
    </>
    );
};
export default Home;