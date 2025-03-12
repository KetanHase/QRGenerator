import React, { useState } from 'react'
import Navbar from './Navbar'
import FeedbackForm from './FeedbackForm'

const Feedback = () => {

   const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (<>
  <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
  <div className={`container1 ${menuOpen ? "nav-open" : ""}`}> 
    <FeedbackForm />
    </div>

    </>
  )
}

export default Feedback;