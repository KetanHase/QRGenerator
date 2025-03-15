import React, { useState } from 'react';
import Navbar from './Navbar';
import "../css/StartButton.css";
import { Link } from 'react-router-dom';

const Main = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
          };
  return (
    <>

   <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
   <div className={`start-button-section  ${menuOpen ? 'nav-open' : ''}`}  >
   <section className='start-button-section' 
    data-aos="fade-left"
    data-aos-delay="1200"
    data-aos-duration="2500">
      <h1 >Supercharge Your Sharing with QR Codes!!!</h1>
      <Link to='/generate'>
      <button data-aos="zoom-in"
        data-aos-delay="2200"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out">Get Started   &rarr;</button>
        </Link>
      </section></div>

    </>
  )
}

export default Main;