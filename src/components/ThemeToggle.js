import React, { useState } from 'react';
import {  FaSun, FaMoon } from 'react-icons/fa';


const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    
    <button className="theme-toggle" onClick={toggleDarkMode}>
    {darkMode ? <FaSun /> : <FaMoon />}
  </button>
  );
};

export default ThemeToggle;
