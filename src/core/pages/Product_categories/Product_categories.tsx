import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch/useFetch";
import List_product_category from "../../Component/List_product_category/List_product_category";
import { useJSONType } from "../../Typescript/types/types";

//Type of used field of JSON files sort by Category

export default function Product_categories() {
  console.log("toto");
  const { category } = useParams();
  const [fetchData] = useFetch(category);
  const [currentData, setCurrentData] = useState<useJSONType[]>([]);

  function getCategory(data: useJSONType[]) {
    return data.filter((el) => el.category === category);
  }

  useEffect(() => {
    console.log(typeof category);
    console.log("render cat");
    setCurrentData(getCategory(fetchData.currentData));
  }, [fetchData.loading, category]);
  return (
    <>
      <section id="header_categories" className="wrapper_layout">
        <div className="wrapper_inside flexCenter">
          <h1 className="text_white">{category}</h1>
        </div>
      </section>
      <section className="wrapper_layout">
        <div className="wrapper_inside">
          {fetchData.loading === true ? (
            <h1>loading</h1>
          ) : (
            <List_product_category data={currentData}></List_product_category>
          )}
        </div>
      </section>
    </>
  );
}
