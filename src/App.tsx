import React, { useContext } from "react";
import Header from "./core/Component/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./core/pages/Home";
import Footer from "./core/Component/Footer/Footer";
import Product_categories from "./core/pages/Product_categories/Product_categories";
import Product from "./core/pages/Product/Product";
import Checkout from "./core/pages/Checkout/Checkout";
import { UI_context, UI_context_type } from "./core/context/UI_Provider";
import Notification from "./core/Component/Notification/Notification";

function App() {
  const { UI, callback } = useContext(UI_context) as UI_context_type;
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

      {UI.notification.show && (
        <Notification
          message={UI.notification.message}
          type={UI.notification.type}
        />
      )}
    </>
  );
}

export default App;
