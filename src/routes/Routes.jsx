import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/SignUp";
import Products from "../components/Products";
import UploadProduct from "../components/UploadProduct";
import LandingPage from "../components/LandingPage";
import ProductDetails from "../components/ProductDetails";

export const Elements = createBrowserRouter([
    {
        path: "/",
        element: 
     
          <LandingPage />
    
      },
  
    {
      path: "/products",
      element: 
   
        <Products />
  
    },
    // {
    //   path: "/products/:id",
    //   element: 
   
    //     < ProductDetails/>
  
    // },

      {
        path:"/sign-up",
        element: <SignUp/>
      },
      {
        path:"/upload",
        element: <UploadProduct/>
      },

    ])