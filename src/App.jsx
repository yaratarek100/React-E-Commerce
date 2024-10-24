import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import Brands from "./components/Brands/Brands";
import Cart from "./components/Cart/Cart";
import Categories from "./components/Categories/Categories";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";

function App() {
  let x = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { index:true , element: <Home></Home> },
        { path: "/products", element: <Products></Products> },
        { path: "/brands", element: <Brands></Brands> },
        { path: "/categories", element: <Categories></Categories> },
        { path: "/cart", element: <Cart></Cart> },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        { path: "*", element: <Notfound></Notfound> },
      ],
    },
  ]);

  return <RouterProvider router={x}></RouterProvider>;
}

export default App;
