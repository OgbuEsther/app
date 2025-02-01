// import React from "react";

// const Products = ({ products, onProductClick }) => (
//   <div>
//     <h2>Our Products</h2>
//     <div>
//       {products.map((product) => (
//         <div
//           key={product.id}
//           style={productCardStyle}
//           onClick={() => onProductClick(product)}
//         >
//           <h3>{product.name}</h3>
//           <p>{product.price}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const productCardStyle = {
//   border: "1px solid #ccc",
//   padding: "15px",
//   margin: "10px 0",
//   cursor: "pointer",
// };

// export default Products;

import React from 'react'
import Card from './Card'

const Products = () => {
  return (
    <div style={{display: "flex" , justifyContent: "space-around" , alignItems :"center" , flexWrap: "wrap" , width:"100%" , height : "100vh" , }}>
      <Card />
    
    </div>
  )
}

export default Products
