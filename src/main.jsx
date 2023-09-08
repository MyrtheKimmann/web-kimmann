import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
// pages
import { Projecten } from "./pages/Projecten";
import { ProjectDetails } from "./pages/ProjectDetails";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Over } from "./pages/Over";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projecten",
        element: <Projecten />,
      },
      {
        path: "/project/:projectId",
        element: <ProjectDetails />,
      },
      {
        path: "/over",
        element: <Over />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
