import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import "./index.css";

import { AuthProvider } from "./context/AuthContext.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
              <Route
                path="/Home"
                element={<Home />}
              />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);