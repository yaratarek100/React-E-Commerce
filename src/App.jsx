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
import '@fortawesome/fontawesome-free/css/all.min.css';
import UserContextProvider from "./context/UserContext";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";




function App() {
  let x = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        
        { index:true , element: <Home></Home> },
        { path: "/products", element: <ProtectedRoute><Products></Products></ProtectedRoute> },
        { path: "/brands", element: <ProtectedRoute><Brands></Brands></ProtectedRoute> },
        { path: "/categories", element: <ProtectedRoute><Categories></Categories></ProtectedRoute> },
        { path: "/cart", element: <ProtectedRoute><Cart></Cart></ProtectedRoute> },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        { path: "*", element: <Notfound></Notfound> },
      ],
    },
  ]);

  return (
    <UserContextProvider>
      <RouterProvider router={x}></RouterProvider>
    </UserContextProvider>
  )
}

export default App;
