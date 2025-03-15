import React from "react";
import {Routes, Route} from 'react-router-dom';
import '.././src/css/App.css';
import Home from "./components/Home";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Main from "./components/Main";




function App () {


    return( 
     
     <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/generate" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
         
     </Routes>
     
    );
};
export default App;