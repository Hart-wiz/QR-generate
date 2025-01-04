import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Sidebar from "./Sidebar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    {/* <Sidebar /> */}
    <App />
    <Footer />
  </StrictMode>
);
