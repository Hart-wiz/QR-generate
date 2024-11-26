import React from "react";
import ReactDOM from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import QRpage from "./QRpage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Footer.jsx";
import Contact from "./Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/QRpage",
    element: <QRpage />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
