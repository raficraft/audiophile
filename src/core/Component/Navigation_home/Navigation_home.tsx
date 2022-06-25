import React from "react";
import Navigation_mobil_item from "../Navigation_mobil/Navigation_mobil_item/Navigation_mobil_item";
import S from "./Navigation_home.module.scss";

import img_earphones from "../../../assets/nav_mobil/image-category-thumbnail-earphones.png";
import img_headphones from "../../../assets/nav_mobil/image-category-thumbnail-headphones.png";
import img_speakers from "../../../assets/nav_mobil/image-category-thumbnail-speakers.png";

export default function Navigation_home() {
  return (
    <div className={S.navigation_home}>
      <div className={S.item_container}>
        <Navigation_mobil_item
          src={img_earphones}
          title="earphones"
        ></Navigation_mobil_item>
      </div>
      <div className={S.item_container}>
        <Navigation_mobil_item
          src={img_headphones}
          title="headphones"
        ></Navigation_mobil_item>
      </div>
      <div className={S.item_container}>
        <Navigation_mobil_item
          src={img_speakers}
          title="speakers"
        ></Navigation_mobil_item>
      </div>
    </div>
  );
}
