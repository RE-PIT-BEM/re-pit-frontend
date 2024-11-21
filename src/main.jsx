import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./view/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Request from "./view/Request.jsx";
import DaftarRequest from "./view/DaftarRequest.jsx";
import Reason from "./components/Reason.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/request",
    element: <Request />,
  },
  {
    path: "/daftar-request",
    element: <DaftarRequest />,
  },
  {
    path: "/reason",
    element: <Reason />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
