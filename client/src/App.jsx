import React, { useContext } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import style from "./css/app.module.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Resturant from "./pages/Resturant";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Store>
      <Router>
        <div className={style.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resturant/:id" element={<Resturant />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </div>
      </Router>
    </Store>
  );
}

export default App;
