import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./counter";
import "./task.css";
import App from "./App";
import Home from "./home";
import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Link } from "react-router-dom";

export default function Alltask() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Alltask />
  </React.StrictMode>
);

reportWebVitals();
