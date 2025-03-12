import React, { useEffect, useState } from "react";
import bag from "../assets/bag3.jpg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/counterSlice";

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
  const [products, setProducts] = useState([]);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://serverside-w1cb.onrender.com/products/get-all-product")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        padding: "20px",
        maxWidth: "100%", 
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      {products?.map((product) => (
        <div key={product?._id} style={cardStyles}>
          <div style={imageContainerStyles}>
            <img style={imgStyles} src={product?.productImage} alt="Product" />
          </div>

          <div style={contentStyles}>
            <h3 style={titleStyles}>
              {product?.productTitle}{" "}
              <span style={priceStyles}>${product?.price}</span>{" "}
              <span style={priceStyles}>cart: {count}</span>
            </h3>
            <p style={descStyles}>{product?.productDetails}</p>
            <button
              onClick={() => dispatch(increment())}
              style={buttonStyles}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;


