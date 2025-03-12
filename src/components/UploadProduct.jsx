import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width : "100vw",
  backgroundColor: "#f4f6f9",
};

const formContainerStyles = {
  width: "400px",
  padding: "24px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const inputStyles = {
  width: "85%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

const buttonStyles = {
  width: "90%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "10px",
};

const UploadProduct = () => {
  const { userId } = useParams(); //it allows you get the id from the url 

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productTitle", title);
    formData.append("price", price);
    formData.append("productDetails", details);
    formData.append("productImage", image);

    axios.post(`https://serverside-w1cb.onrender.com/products/upload-product/${userId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(response => {
      console.log(response.data);
      alert("product added")
      navigate("/products");
    })
    .catch(error => console.error(error));
  };

  return (
    <div style={containerStyles}>
      <div style={formContainerStyles}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Upload Product</h2>
        <form onSubmit={handleSubmit}>
          <input style={inputStyles} type="text" placeholder="Product Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input style={inputStyles} type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <textarea style={inputStyles} placeholder="Product Details" value={details} onChange={(e) => setDetails(e.target.value)} />
          <input style={inputStyles} type="file" accept="image/*" onChange={handleImageChange} />
          <button style={buttonStyles} type="submit">Upload Product</button>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
