import React from "react";
import "../css/StartButton.css";

const StartButton = () => {
  return (
    <section className='start-button-section' 
    data-aos="fade-left"
    data-aos-delay="1200"
    data-aos-duration="2500">
      <h1 >Supercharge Your Sharing with QR Codes!!!</h1>
      <p>Convert your links, text, or numbers to QR Codes</p>
      <div className="input-container" data-aos="fade-right" data-aos-delay="2500">
        <input type="text" placeholder="Enter links, text, or numbers" />
        
        <button data-aos="zoom-in"
        data-aos-delay="2200"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out">Generate QR Code</button>
      </div>
    </section>
  );
};

export default StartButton;