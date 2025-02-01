import React from "react";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width : "100vw",
  backgroundColor: "#f4f6f9",
};

const formContainerStyles = {
  width: "300px",
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const inputStyles = {
  width: "80%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

const buttonStyles = {
  width: "85%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "10px",
};

const SignUp = () => {
  return (
    <div style={containerStyles}>
      <div style={formContainerStyles}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up</h2>
        <form>
          <input style={inputStyles} type="text" placeholder="Enter your name" />
          <input style={inputStyles} type="email" placeholder="Enter your email" />
          <input style={inputStyles} type="password" placeholder="Enter your password" />
          <button style={buttonStyles} type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
