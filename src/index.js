import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="main-container">
      <Home />
    </div>
  </React.StrictMode>
);
