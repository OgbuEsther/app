import React, { useState } from "react";

const Holder = () => {
  const [currentPage, setCurrentPage] = useState("signup");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Product A", price: "$10", description: "Description of Product A" },
    { id: 2, name: "Product B", price: "$20", description: "Description of Product B" },
    { id: 3, name: "Product C", price: "$30", description: "Description of Product C" },
  ];

  const navigateTo = (page, product = null) => {
    setCurrentPage(page);
    if (product) setSelectedProduct(product);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <button style={navButtonStyle} onClick={() => navigateTo("signup")}>Sign Up</button>
        <button style={navButtonStyle} onClick={() => navigateTo("landing")}>Landing</button>
        <button style={navButtonStyle} onClick={() => navigateTo("products")}>Products</button>
      </nav>

      {currentPage === "signup" && <SignUp />}
      {currentPage === "landing" && <Landing />}
      {currentPage === "products" && <Products products={products} onProductClick={(p) => navigateTo("details", p)} />}
      {currentPage === "details" && selectedProduct && <ProductDetails product={selectedProduct} />}
    </div>
  );
};

const navButtonStyle = {
  marginRight: "10px",
  padding: "10px 15px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const SignUp = () => (
  <div>
    <h2>Sign Up</h2>
    <form>
      <div style={inputGroupStyle}>
        <label>Name:</label>
        <input type="text" style={inputStyle} />
      </div>
      <div style={inputGroupStyle}>
        <label>Email:</label>
        <input type="email" style={inputStyle} />
      </div>
      <div style={inputGroupStyle}>
        <label>Password:</label>
        <input type="password" style={inputStyle} />
      </div>
      <button style={submitButtonStyle}>Sign Up</button>
    </form>
  </div>
);

const Landing = () => (
  <div>
    <h2>Welcome to Our Store</h2>
    <p>Explore our products and find the best deals for you!</p>
  </div>
);

const Products = ({ products, onProductClick }) => (
  <div>
    <h2>Our Products</h2>
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          style={productCardStyle}
          onClick={() => onProductClick(product)}
        >
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  </div>
);

const ProductDetails = ({ product }) => (
  <div>
    <h2>Product Details</h2>
    <h3>{product.name}</h3>
    <p>Price: {product.price}</p>
    <p>{product.description}</p>
  </div>
);

const inputGroupStyle = { marginBottom: "15px" };
const inputStyle = { padding: "10px", width: "100%", marginTop: "5px" };
const submitButtonStyle = {
  padding: "10px 15px",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
const productCardStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  margin: "10px 0",
  cursor: "pointer",
};

export default Holder;
