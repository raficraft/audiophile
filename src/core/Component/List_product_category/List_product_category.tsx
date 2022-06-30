import React, { useState, useEffect } from "react";
import { ConsumedCategorie, useJSONType } from "../../Typescript/types/types";
import {
  createImgInfo,
  extractConsumedData,
} from "../../utils/manageJson/manageJson";

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
    console.log("buildSticker", currentData);
    return [];
  }

  useEffect(() => {
    buildData(data);
  }, []);

  return (
    <div>
      <h1>Listing</h1>
      {buildSticker()}
    </div>
  );
}
