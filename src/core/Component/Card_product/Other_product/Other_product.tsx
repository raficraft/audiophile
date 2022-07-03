import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { img_JSON_import } from "../../../Typescript/types/types";
import { createImgInfo } from "../../../utils/manageJson/manageJson";
import S from "./Other_product.module.scss";

export default function Other_product({ data }: any) {
  const [currentImg, setCurrentImg] = useState<img_JSON_import[]>([]);
  const [loading, setLoading] = useState(true);

  async function cleanDataImg() {
    const multiSrc = await createImgInfo(data, "image");
    return multiSrc;
  }

  async function setImg() {
    const multiSrc: any = await cleanDataImg();
    setCurrentImg(multiSrc);
    setLoading(false);
  }

  function makeImg(idx: number) {
    const multiSrc = currentImg[idx];
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

  function makeCard() {
    return Object.keys(data).map((el, key) => {
      const product = data[el];

      return (
        <div key={key} className={S.item}>
          {!loading && makeImg(key)}
          <h5>{product.name}</h5>

          <NavLink to={`/product/${product.slug}`}>
            <a className="btn btn_primary">see product</a>
          </NavLink>
        </div>
      );

      return [];
    });
  }

  useEffect(() => {
    setImg();
  }, []);

  return (
    <div className={S.container}>
      <header>
        <h3>You may also like</h3>
      </header>
      <div className={S.content}>{makeCard()}</div>
    </div>
  );
}
