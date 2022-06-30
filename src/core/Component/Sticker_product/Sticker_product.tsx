import React, { useState, useEffect } from "react";
import { Sticker_product_type } from "../../Typescript/types/types";
import S from "./Sticker_product.module.scss";

export default function Sticker_product({
  cssName,
  title,
  text,
  button,
  subTitle = "",
  multiSrc,
}: Sticker_product_type) {
  function makeImg() {
    // console.log(multiSrc);
    return multiSrc.map((image, key) => {
      return image.src.map((el, key) => {
        // console.log(image);
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
          {subTitle && (
            <p className={`text_overline ${S.subtitle}`}>{subTitle}</p>
          )}
          {title && title}
          {text && text}
          {button && button}
        </div>
      </div>
    </div>
  );
}
