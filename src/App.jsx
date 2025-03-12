import React, { useState } from "react";
import Products from "./components/Products";
import UploadProduct from "./components/UploadProduct";
import { Elements } from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import Counter from "./components/Counter";
import GetAllUsers from "./api/GetAllUsers";
import SignUp from "./api/Sign-Up";
const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <RouterProvider router={Elements} />
      {/* <Counter /> */}
      {/* <GetAllUsers />
      <SignUp />
      hello world */}
    </div>
  );
};

export default App;
