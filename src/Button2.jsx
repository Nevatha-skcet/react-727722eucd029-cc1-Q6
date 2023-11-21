import React, { useState } from 'react';
import Button from './Button.css';
const FontSizeAdjuster = ({ defaultSize }) => {
  const [fontSize, setFontSize] = useState(defaultSize);

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };

  return (
    <div>
      <div style={{ fontSize: `${fontSize}px` }}>
        
      </div>
      <button onClick={increaseFontSize}> Increase </button><b></b>
      <button onClick={decreaseFontSize}> Decrease </button>
      <p>Text with adjustable size</p>
    </div>
  );
};

export default FontSizeAdjuster;