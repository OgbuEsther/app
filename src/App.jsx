import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Products from "./components/Products";
import UploadProduct from "./components/UploadProduct";
import { Elements } from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import Counter from "./components/Counter"
const App = () => {
 
 

  return (
   
    <div>
  {/* <Counter /> */}
  <RouterProvider router={Elements} />
  
    </div>
  );
};



export default App;
