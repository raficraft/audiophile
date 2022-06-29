import { current } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router";
import Sticker_product from "../../Component/Sticker_product/Sticker_product";

import S from "./Product_categories.module.scss";

//Type of used field of JSON files sort by Category
type usedType = {
  image: string[];
  category: string;
  name: string;
  description: string;
};

type imageType = {
  src: { x: number; y: number; src: string }[];
  media: string;
  nameStyle: string;
};
export default function Product_categories() {
  const [state, setState] = useState<{
    error: boolean;
    resultApi: usedType[];
    loading: boolean;
    currentImg: {}[];
  }>({
    loading: true,
    error: false,
    resultApi: [],
    currentImg: [],
  });

  const { category } = useParams();

  function getCategory(data: usedType[]) {
    return data.filter((el) => el.category === category);
  }

  async function importImage(folder: string) {
    try {
      const i = await import(`../../../${folder.substring(1)}`);
      return i.default;
    } catch (error) {
      console.log("zob du cul", error);
    }
  }

  async function getImgInfo(folder: string) {
    const imageImport = await importImage(folder);
    let img = new Image();
    img.src = imageImport;

    let info = {
      x: 0,
      y: 0,
      src: imageImport,
    };

    try {
      img.onload = function () {
        info.x = img.width;
        info.y = img.height;
      };
    } catch (error) {
      console.log(error);
    }

    return [info];
  }

  async function createImgInfo(data: usedType[]) {
    const res = [];

    for (const idx in data) {
      if (Object.prototype.hasOwnProperty.call(data, idx)) {
        const product = data[idx];
        const tmp = [];
        for (const key in product.image) {
          if (Object.prototype.hasOwnProperty.call(product.image, key)) {
            const folder: string = product.image[key].substring(1);

            const test = await getImgInfo(folder);

            const imgInfo: { src: {}; media: string; nameStyle: string } = {
              src: test,
              media: key,
              nameStyle: `size_${key} responsiveImg`,
            };
            tmp.push(imgInfo);
          }
        }
        res.push(tmp);
      }
    }
    return res;
  }

  async function fetchData(): Promise<any> {
    try {
      const res = await fetch("/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        const currentData: usedType[] = getCategory(data);
        const currentImg = await createImgInfo(currentData);

        setState((S) => ({
          ...S,
          loading: false,
          error: false,
          resultApi: currentData,
          currentImg: currentImg,
        }));
      } else {
        setState((S) => ({
          ...S,
          error: data.error,
          loading: true,
        }));
      }
    } catch (error) {
      console.log("Error parsing JSON:", error);
    }
  }

  function buildSticker() {
    const comp = [];

    for (const key in state.resultApi) {
      if (Object.prototype.hasOwnProperty.call(state.resultApi, key)) {
        const details: usedType = state.resultApi[key];
        const title = details.name;
        const text = details.description;
        const multiSrc: any = state.currentImg[key];

        comp.push(
          <Sticker_product
            cssName="product_details"
            title={<h3>{title}</h3>}
            text={text}
            multiSrc={multiSrc}
          ></Sticker_product>
        );
      }
    }
    return comp;
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="wrapper_layout">
      <div className="wrapper_inside">
        <div className={S.product_details}>{buildSticker()}</div>
      </div>
    </section>
  );
}
