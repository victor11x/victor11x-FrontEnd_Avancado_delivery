import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Cafe } from "./pages/Cafe";
import { Donuts } from "./pages/Donuts";
import { Sobre } from "./pages/Sobre";
import { Success } from "./pages/Success";
import { App } from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donuts",
        element: <Donuts />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/cafe",
        element: <Cafe />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/order/:orderId/success",
        element: <Success />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
