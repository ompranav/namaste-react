import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import { RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
const jsxHeading = <h1 id="heading"> Namaste React using JSX </h1>;

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter ([
  {
    path: "/" ,
    element :<AppLayout /> ,
    children :[
      {
        path: "/",
        element: <Body />
      }, 
      {
        path: "/about",
        element: <About />
      }, 
      {
        path:"/contact",
        element:<Contact/> 
      }, 
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/> 
      }



    ],
    errorElement:<Error />
  },
  

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
