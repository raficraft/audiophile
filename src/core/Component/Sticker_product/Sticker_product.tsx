import React, { useState, useEffect } from "react";
import S from "./Sticker_product.module.scss";

interface propsTypes {
  cssName: string;
  title: string;
  multiSrc: {
    src: { x: number; y: number; src: string }[];
    media: number;
    nameStyle: string;
  }[];
}

export default function Sticker_product({
  cssName,
  title,
  multiSrc,
}: propsTypes) {
  console.log(cssName);
  console.log(S);

  function makeImg() {
    return multiSrc.map((image, key) => {
      console.log(image);

      return image.src.map((el, key) => {
        return (
          <div className={S.img_container}>
            <img
              key={key}
              src={el.src}
              width={el.x}
              height={el.y}
              className={image.nameStyle}
            />
          </div>
        );
      });
    });
  }

  return (
    <div className={S[cssName]}>
      {makeImg()}
      <div className={S.sticker_content}>
        <div className={S.sticker_item}>
          <h3>{title}</h3>
          <button type="button" className="btn btn_secondary">
            see product
          </button>
        </div>
      </div>
    </div>
  );
}
