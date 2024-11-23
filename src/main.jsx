import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./view/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Request from "./view/Request.jsx";
import Reason from "./components/Reason.jsx";
import DaftarRequest from "./view/DaftarRequest.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./components/RequireAuth.jsx";
import OnlyGuest from "./components/OnlyGuest.jsx";
import DetailRequest from "./view/DetailRequest.jsx";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: (
      <OnlyGuest>
        <Login />
      </OnlyGuest>
    ),
  },

  {
    path: "/request",
    element: (
      <RequireAuth>
        <Request />
      </RequireAuth>
    ),
  },
  {
    path: "/daftar-request",
    element: (
      <RequireAuth>
        <DaftarRequest />
      </RequireAuth>
    ),
  },
  {
    path: "/edit-request",
    element: <DetailRequest />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <WrapperApp> */}
      <Toaster position="bottom-right" reverseOrder={false} />
      <RouterProvider router={router} />
      {/* </WrapperApp> */}
    </QueryClientProvider>
  </React.StrictMode>
);
