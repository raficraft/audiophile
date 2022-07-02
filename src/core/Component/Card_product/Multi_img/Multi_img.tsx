import React from "react";
import { img_JSON_import } from "../../../Typescript/types/types";
import S from "./Multi_img.module.scss";

export default function Multi_img({ galleryImg }: any) {
  function injectImg(multiImg: any[]) {
    return multiImg.map((arrayImg, key) => {
      return arrayImg.map((image: any, idx: string) => {
        return (
          <div
            className={`container_responsive_img 
          container_responsive_img--${image.media} ${
              S[`container_${image.media}`]
            } `}
            key={idx}
          >
            <img
              src={image.src[0].src}
              width={image.src[0].x}
              height={image.src[0].y}
            />
          </div>
        );
      });
    });
  }

  function galleryImage() {
    return (
      <div className={S.gallery_images}>
        <div className={S.gallery_images__left}>
          {injectImg(galleryImg[0])}
          {injectImg(galleryImg[1])}
        </div>
        <div className={S.gallery_images__right}>
          {injectImg(galleryImg[2])}
        </div>
      </div>
    );
  }
  return <>{galleryImage()}</>;
}
