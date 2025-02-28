import React  from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes  } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ toggleMenu, menuOpen }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle('dark-mode');
//   };

  return (<>
    <nav className={`nav`}>

      <div className="nav-logo"> <Link style={{ textDecoration: 'none' }} to="/">ScanMe.</Link> 
      </div>
      {/* Hamburger Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/"  >Home</Link>
        <Link to="/about"  >About</Link>
        <Link href="#feedback"  >Feedback</Link>
         
      </div>

      {/* Dark Mode Toggle */}
      {/* <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button> */}
      {/* <ThemeToggle /> */}
    </nav>
    <div >
    <ThemeToggle />
    </div>
    </>
  );
};

export default Navbar;
