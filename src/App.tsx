import React from "react";
import DesignSystem from "./core/Component/Demo/DesignSystem/DesignSystem";
import POC_features from "./core/Component/Demo/POC_features/POC_features";
import Header from "./core/Component/Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./core/pages/Home";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
