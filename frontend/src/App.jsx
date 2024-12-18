import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin.jsx";
import Signup from "./Components/Signup.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Shortit from "./Components/Shortit.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/shorturl" element={<Shortit />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
};

export default App;
