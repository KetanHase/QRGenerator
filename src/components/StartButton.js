import React from "react";
import "../css/StartButton.css";

const StartButton = () => {
  return (
    <section className={`start-button-section`}>
      <h1>Supercharge Your Sharing with QR Codes!!!</h1>
      <p>Convert your links, text, or numbers to QR Codes</p>
      <div className="input-container">
        <input type="text" placeholder="Enter links, text, or numbers" />
        <button>Generate QR Code</button>
      </div>
    </section>
  );
};

export default StartButton;