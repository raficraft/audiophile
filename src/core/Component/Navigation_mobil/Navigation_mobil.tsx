import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import S from "./Navigation_mobil.module.scss";
import Navigation_mobil_item from "./Navigation_mobil_item/Navigation_mobil_item";

import img_earphones from "../../../assets/nav_mobil/image-category-thumbnail-earphones.png";
import img_headphones from "../../../assets/nav_mobil/image-category-thumbnail-headphones.png";
import img_speakers from "../../../assets/nav_mobil/image-category-thumbnail-speakers.png";

console.log(img_earphones);

interface img_items {
  isOpen: boolean;
  setter: Function;
}

export default function Navigation_mobil({ isOpen, setter }: img_items) {
  const [topPosition, setTopPosition] = useState("0px");

  useLayoutEffect(() => {
    const header: HTMLElement | null = document.getElementById("header_layout");
    if (header) {
      const styles_header = window.getComputedStyle(header);
      setTopPosition(styles_header.height);
    }
  }, []);

  return createPortal(
    <div
      className={S.navigation_mobil}
      style={{ top: topPosition }}
      data-isopen={isOpen}
      onClick={() => {
        setter(!isOpen);
      }}
    >
      <nav
        className={S.navigation_content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Navigation_mobil_item
          src={img_headphones}
          title={"headphones"}
        ></Navigation_mobil_item>
        <Navigation_mobil_item
          src={img_speakers}
          title={"speakers"}
        ></Navigation_mobil_item>
        <Navigation_mobil_item
          src={img_earphones}
          title={"earphones"}
        ></Navigation_mobil_item>
      </nav>
    </div>,
    document.body
  );
}
