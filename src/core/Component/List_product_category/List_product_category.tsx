import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ConsumedCategorie, useJSONType } from "../../Typescript/types/types";
import {
  createImgInfo,
  extractConsumedData,
} from "../../utils/manageJson/manageJson";
import Sticker_product from "../Sticker_product/Sticker_product";
import S from "./List_product_category.module.scss";
//Best Gear Image all format

export default function List_product_category({ data }: any) {
  const [currentData, setCurrentData] = useState<any>([]);

  //Make only utils data contain id product JSON and get Image sizing with dynamic import

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

  return <div className={S.list_categories}>{buildSticker()}</div>;
}
