import React, { useLayoutEffect, useState } from "react";
import Navigation_mobil from "../Navigation_mobil/Navigation_mobil";
import S from "./Burger_menu.module.scss";

export default function Burger_menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick(e: React.MouseEvent) {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div
        className={S.burger_menu}
        data-isopen={isOpen}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Navigation_mobil isOpen={isOpen} setter={setIsOpen}></Navigation_mobil>
    </>
  );
}
