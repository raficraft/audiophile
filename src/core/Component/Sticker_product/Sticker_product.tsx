import React, { useState, useEffect } from "react";
import S from "./Sticker_product.module.scss";

interface propsTypes {
  cssName: string;
  title: JSX.Element;
  button?: JSX.Element;
  text?: string;
  multiSrc: {
    src: { x: number; y: number; src: string }[];
    media: string;
    nameStyle: string;
  }[];
}

export default function Sticker_product({
  cssName,
  title,
  text,
  button,
  multiSrc,
}: propsTypes) {
  function makeImg() {
    console.log(multiSrc);
    return multiSrc.map((image, key) => {
      return image.src.map((el, key) => {
        console.log(image);
        return (
          <div
            className={`container_responsive_img 
            container_responsive_img--${image.media} ${
              S[`container_${image.media}`]
            } `}
            key={key}
          >
            <img
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
      {cssName === "big_one" && <div className={S.circle_container}></div>}
      {makeImg()}
      <div className={S.sticker_content}>
        <div className={S.sticker_item}>
          {title}
          {text && <p className="text text_white">{text}</p>}
          {button && button}
        </div>
      </div>
    </div>
  );
}
