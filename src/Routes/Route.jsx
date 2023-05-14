import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/checkout/CheckOut";
import BooKService from "../Pages/BookService/BooKService";
import Bookings from "../Pages/Bookings/Bookings";
import About from "../Pages/About/About";
import PrivetRout from "./PrivetRout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'about',
          element:<About></About>

        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/checkout/:id',
          element:<PrivetRout><CheckOut></CheckOut></PrivetRout>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<Bookings></Bookings>
        }

      ]
    },
  ]);
export default router