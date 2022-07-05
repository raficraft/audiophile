import React from "react";
import Header from "./core/Component/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./core/pages/Home";
import Footer from "./core/Component/Footer/Footer";
import Product_categories from "./core/pages/Product_categories/Product_categories";
import Product from "./core/pages/Product/Product";
import Checkout from "./core/pages/Checkout/Checkout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<Product_categories />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
