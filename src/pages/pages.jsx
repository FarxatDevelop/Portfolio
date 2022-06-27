import React from "react";
import "./pages.css";
import { Routes, Route} from "react-router-dom";
import About from "./about/about";
import Home from "./home/home";
import Gallery from "./gallery/gallery";
import Services from "./services/services";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
function Pages() {
  return (
    <section className="pages">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </section>
  )
};

export default Pages;