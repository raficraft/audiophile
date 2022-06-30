import React, { useEffect } from "react";
import Header from "./core/Component/Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./core/pages/Home";
import Footer from "./core/Component/Footer/Footer";
import Product_categories from "./core/pages/Product_categories/Product_categories";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<Product_categories />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
