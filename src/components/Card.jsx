import React from "react";
import bag from "../assets/bag3.jpg";

const cardStyles = {
  width: "320px",
  backgroundColor: "white",
  border: "1px solid #ddd",
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  overflow: "hidden",
  margin: "16px",
  transition: "transform 0.3s ease-in-out",
};

const imageContainerStyles = {
  width: "100%",
  height: "200px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imgStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const contentStyles = {
  padding: "16px",
  textAlign: "center",
};

const titleStyles = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
};

const priceStyles = {
  color: "#007bff",
  fontWeight: "bold",
  marginLeft: "8px",
};

const descStyles = {
  fontSize: "14px",
  color: "#666",
  margin: "8px 0",
};

const buttonStyles = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px",
  transition: "background 0.3s ease",
};

const Card = () => {
  return (
    <div style={cardStyles}>
      <div style={imageContainerStyles}>
        <img style={imgStyles} src={bag} alt="Product" />
      </div>
      <div style={contentStyles}>
        <h3 style={titleStyles}>
          Product Title <span style={priceStyles}>$99</span>
        </h3>
        <p style={descStyles}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button style={buttonStyles}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
