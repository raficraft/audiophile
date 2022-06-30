import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ConsumedCategorie, useJSONType } from "../../Typescript/types/types";
import {
  createImgInfo,
  extractConsumedData,
} from "../../utils/manageJson/manageJson";
import Navigation_home from "../Navigation_home/Navigation_home";
import Sticker_product from "../Sticker_product/Sticker_product";
import useLoadImage from "../../hooks/useLoadImage";
import S from "./List_product_category.module.scss";
//Best Gear Image all format

import image_best_gear_desktop from "../../../assets/shared/desktop/image-best-gear.jpg";
import image_best_gear_tablet from "../../../assets/shared/desktop/image-best-gear.jpg";
import image_best_gear_mobil from "../../../assets/shared/desktop/image-best-gear.jpg";

export default function List_product_category({ data }: any) {
  const { category } = useParams();
  const [currentData, setCurrentData] = useState<any>([]);

  //Make only utils data contain id product JSON and get Image sizing with dynamic import

  const best_gear_images_array = [
    {
      src: useLoadImage(image_best_gear_desktop),
      media: "desktop",
      nameStyle: "size_desktop responsive_img",
    },
    {
      src: useLoadImage(image_best_gear_mobil),
      media: "tablet",
      nameStyle: "size_tablet responsive_img",
    },
    {
      src: useLoadImage(image_best_gear_tablet),
      media: "mobile",
      nameStyle: "size_mobile responsive_img",
    },
  ];

  async function buildData(data: any[]) {
    const currentImage = await createImgInfo(data, "categoryImage");
    const consumedData: ConsumedCategorie[] = extractConsumedData(data, [
      "id",
      "slug",
      "name",
      "description",
      "new",
      "currentImg",
    ]);
    if (currentImage.length === consumedData.length) {
      for (let i = 0; i < consumedData.length; i++) {
        consumedData[i].currentImg = currentImage[i];
      }
      setCurrentData(consumedData);
    }

    return false;
  }

  function buildSticker() {
    const comp = [];

    for (const key in currentData) {
      if (Object.prototype.hasOwnProperty.call(currentData, key)) {
        const details: ConsumedCategorie = currentData[key];
        const title = details.name;
        const text = details.description;
        const subtitle = details.new ? "new product" : "";
        const multiSrc: any = currentData[key].currentImg;

        const cssName =
          Number(key) === 0 || Number(key) % 2 === 0
            ? "product_details"
            : "product_details_reverse";

        comp.push(
          <Sticker_product
            subTitle={subtitle}
            key={key}
            cssName={cssName}
            title={<h3>{title}</h3>}
            text={<p className="text text_dark__smooth">{text}</p>}
            multiSrc={multiSrc}
            button={
              <button type="button" className="btn btn_primary">
                see product
              </button>
            }
          ></Sticker_product>
        );
      }
    }
    return comp;
  }

  useEffect(() => {
    buildData(data);
  }, [data]);

  return (
    <div className={S.list_categories}>
      {buildSticker()}
      <Navigation_home></Navigation_home>
      <Sticker_product
        cssName="best_product"
        title={
          <h3>
            Bringing you the <span className="text_orange">best</span> audio
            gear
          </h3>
        }
        text={
          <p className="text text_white">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        }
        multiSrc={best_gear_images_array}
      ></Sticker_product>
    </div>
  );
}
