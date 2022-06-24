import React, { useState } from "react";
import Navigation_mobil from "../Navigation_mobil/Navigation_mobil";
import S from "./Burger_menu.module.scss";

export default function Burger_menu() {
  const [isopen, setIsOpen] = useState(false);
  return (
    <>
      <div className={S.burger_menu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Navigation_mobil></Navigation_mobil>
    </>
  );
}
