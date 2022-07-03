import React, { useEffect, useState } from "react";
import { ConsumedProduct } from "../../Typescript/types/types";
import {
  createImgInfo,
  extractConsumedData,
} from "../../utils/manageJson/manageJson";
import Card_buy from "./Card_buy/Card_buy";

export default function Card_product({ data }: any) {
  const [currentData, setCurrenData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  async function buildData(data: any[]) {
    const currentImage = await createImgInfo(data, "image");
    const galleryImage = await createImgInfo(data, "gallery");
    const consumedData: ConsumedProduct[] = extractConsumedData(data, [
      "id",
      "name",
      "price",
      "features",
      "includes",
      "description",
      "new",
      "others",
    ]);

    consumedData[0]["galleryImg"] = galleryImage;
    consumedData[0]["currentImg"] = currentImage;

    setCurrenData(consumedData[0]);
    setLoading(false);
  }

  useEffect(() => {
    buildData(data);
  }, [data]);

  return (
    <div className="product_content">
      {!loading && <Card_buy data={currentData}></Card_buy>}
    </div>
  );
}
