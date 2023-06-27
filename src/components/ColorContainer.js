import React from "react";

const ColorContainer = ({ colorval, hexvalue, toggle }) => {
  return (
    <div
      className="colorContain"
      style={{ 
        backgroundColor: colorval, 
      }}
    >
      <p style={{ 
        color: toggle ? "white" : "black"
      }}className="colorName">{colorval} {hexvalue}</p>
    </div>
  );
};

export default ColorContainer;
