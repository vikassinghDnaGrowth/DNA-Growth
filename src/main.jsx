import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import React Router components
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define the route for your main App component */}
        <Route path="/" element={<App />} />
        {/* You can define additional routes here */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
