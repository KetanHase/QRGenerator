import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import "../css/StartButton.css";
import { Link } from "react-router-dom";
 

const StartButton = () => {

   const [text, setText] = useState("");
    const [qrImage, setQrImage] = useState("");
    const qrRef = useRef(null);
  
    const generateQR = () => {
      if (!text) return alert("Enter text to generate QR!");
      setQrImage(text);
    };
  
    const downloadQRCode = () => {
      if (qrRef.current) {
        html2canvas(qrRef.current).then((canvas) => {
          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png");
          link.download = "qrcode.png";
          link.click();
        });
      }
    };

    function refreshPage(){ 
      window.location.reload(); 
    }

  return (
    <>
    <section className='start-button-section' 
    data-aos="fade-left"
    data-aos-delay="1200"
    data-aos-duration="2500">
      <h1 >Supercharge Your Sharing with QR Codes!!!</h1>
      <p>Convert your links, text, or numbers to QR Codes</p>
      <div className="input-container" data-aos="fade-right" data-aos-delay="2500">
        <input className="inputtext" type="text" 
        placeholder="Enter links, text, or numbers"
        value={text}
        onChange={(e) => setText(e.target.value)}
         />
        
        <button data-aos="zoom-in"
        data-aos-delay="2200"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        onClick={generateQR}
        >Generate QR Code</button>
      </div>
    </section>
     
    {qrImage && (
    <div className="qr-box" data-aos="zoom-in-up" data-aos-delay="3500">
          <h2>QR Code</h2>
          <div  className="qr" ref={qrRef}>
           <QRCodeCanvas value={qrImage} size={160} style={{ height: "174px", width: "170px" }} />

           </div>
          <button  onClick={downloadQRCode} >Download QR Code</button>
          <Link to='/' onClick={ refreshPage} style={{ textDecoration: "none" }}><button style={{fontSize:15}} >Create new one</button></Link>
    </div>
     )}
    
    </>
  );
};

export default StartButton;