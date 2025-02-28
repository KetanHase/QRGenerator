import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import "./App.css";

const App = () => {
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

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={generateQR} className="generate-btn">
        Generate QR Code
      </button>
       
      {qrImage && (
        <div className="qr-container">
          <div className="qr" ref={qrRef}>
            <QRCodeCanvas value={qrImage} size={160} style={{ height: "174px", width: "170px" }} />
          </div>
           
          <button onClick={downloadQRCode} className="download-btn">
            Download QR Code
          </button>
        </div>
      )}
      <div>dddddddd
        <h1 className=" h1 text-body-secondary">hello from bootstrap</h1>
      </div>
    </div>
  );
};

export default App;