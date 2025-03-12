import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/SignUp";
import Products from "../components/Products";
import UploadProduct from "../components/UploadProduct";
import LandingPage from "../components/LandingPage";
import ProductDetails from "../components/ProductDetails";
import Card from "../components/Card";

export const Elements = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/products",
    element: <Card />,
  },

  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/upload/:userId",
    element: <UploadProduct />,
  },
]);
