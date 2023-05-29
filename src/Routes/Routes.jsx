import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Signup from "../pages/Home/signup/Signup";
import PrivetRouter from "./PrivetRouter";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/AdminPage/AllUsers";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'menu', 
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <PrivetRouter><Order></Order></PrivetRouter>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        }
      ]
    },
    {
      path: 'dashboard',
      element : <PrivetRouter><Dashboard></Dashboard></PrivetRouter> ,
      children : [
        {
          path : 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path : 'allUsers',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);