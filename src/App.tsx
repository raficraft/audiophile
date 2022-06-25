import React from "react";
import DesignSystem from "./core/Component/Demo/DesignSystem/DesignSystem";
import POC_features from "./core/Component/Demo/POC_features/POC_features";
import Header from "./core/Component/Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./core/pages/Home";
import Footer from "./core/Component/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
