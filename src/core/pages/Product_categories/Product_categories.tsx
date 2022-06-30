import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router";
import Sticker_product from "../../Component/Sticker_product/Sticker_product";

import S from "./Product_categories.module.scss";
import { useFetch } from "../../hooks/useFetch/useFetch";
import List_product_category from "../../Component/List_product_category/List_product_category";
import { useJSONType } from "../../Typescript/types/types";

//Type of used field of JSON files sort by Category

export default function Product_categories() {
  const { category } = useParams();
  const [fetchData] = useFetch();
  const [currentData, setCurrentData] = useState<useJSONType[]>([]);

  function getCategory(data: useJSONType[]) {
    return data.filter((el) => el.category === category);
  }

  useEffect(() => {
    {
      fetchData.loading === true
        ? console.log("waiting please...")
        : setCurrentData(getCategory(fetchData.currentData));
    }
  }, [fetchData, category]);
  return (
    <section className="wrapper_layout">
      <div className="wrapper_inside">
        {fetchData.loading === true ? (
          <h1>loading</h1>
        ) : (
          <List_product_category data={currentData}></List_product_category>
        )}
      </div>
    </section>
  );
}
