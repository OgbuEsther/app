import React from "react";
import { useNavigate } from "react-router-dom";

const containerStyles = {
  textAlign: "center",
  backgroundColor: "#f4f6f9",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "10px",
  paddingLeft :"10px",
  backgroundColor: "#007bff",
  color: "white",
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  height: "70px",
};

const buttonStyles = {
  padding: "10px 15px",
  margin: "0 10px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "13px",
  
};

const signupButtonStyles = {
  ...buttonStyles,
  backgroundColor: "white",
  color: "#007bff",
};

const uploadButtonStyles = {
  ...buttonStyles,
  backgroundColor: "#ff9900",
  color: "white",
};

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <header style={headerStyles}>
        <h3 style={{ marginLeft : "5px" }}>Our Store</h3>
        <div style={{ marginRight : "20px" }}>
          <button style={signupButtonStyles} onClick={() => navigate("/sign-up")}>
            Sign Up
          </button>
          <button style={uploadButtonStyles} onClick={() => navigate("/upload")}>
            Upload Product
          </button>
        </div>
      </header>
      <div style={containerStyles}>
        <h2>Welcome to Our Store</h2>
        <p>Explore our products and find the best deals for you!</p>
        <button style={uploadButtonStyles} onClick={() => navigate("/products")}>Explore</button>
      </div>
    </div>
  );
};

export default LandingPage;
