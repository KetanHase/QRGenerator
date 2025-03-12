import React, { useState } from "react";
import Navbar from "./Navbar";
import StartButton from "./StartButton";
import '../css/Navbar.css';
 
 
 
const Home =() =>{
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
     
    return(
    <>
     <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
     <div className={`container ${menuOpen ? 'nav-open' : ''}`}  >
        <StartButton />
     </div>  
    
     <StartButton /><StartButton /><StartButton /><StartButton /><StartButton /><StartButton />
    </>
    );
};
export default Home;