import { current } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import GradientLoader from "../../Component/Loader/Gradient_loader";
import { useFetch } from "../../hooks/useFetch/useFetch";
import { useJSONType } from "../../Typescript/types/types";

export default function Product() {
  const { slug } = useParams();
  const [fetchData] = useFetch(slug);
  const [currentData, setCurrentData] = useState<useJSONType[]>([]);

  function getProduct(data: useJSONType[]) {
    return data.filter((el) => el.slug === slug);
  }

  useEffect(() => {
    setCurrentData(getProduct(fetchData.currentData));
  }, [fetchData.loading, slug]);

  return (
    <section className="wrapper_layout">
      <div className="wrapper_inside flexCenter">
        {fetchData.loading === false && currentData.length ? (
          <h1>{currentData[0].name}</h1>
        ) : (
          <GradientLoader></GradientLoader>
        )}
      </div>
    </section>
  );
}
