import React from "react";

const ProductDetails = ({ product }) => (
  <div>
    <h2>Product Details</h2>
    <h3>{product.name}</h3>
    <p>Price: {product.price}</p>
    <p>{product.description}</p>
  </div>
);

export default ProductDetails;
