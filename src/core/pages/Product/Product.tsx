import { current } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card_product from "../../Component/Card_product/Card_product";
import GradientLoader from "../../Component/Loader/Gradient_loader";
import { useFetch } from "../../hooks/useFetch/useFetch";
import { ConsumedProduct } from "../../Typescript/types/types";

export default function Product() {
  const { slug } = useParams();
  const [fetchData] = useFetch(slug);
  const [currentData, setCurrentData] = useState<ConsumedProduct[]>([]);

  function getProduct(data: ConsumedProduct[]) {
    return data.filter((el) => el.slug === slug);
  }

  useEffect(() => {
    setCurrentData(getProduct(fetchData.currentData));
  }, [fetchData.loading, slug]);

  return (
    <section className="wrapper_layout">
      <div className="wrapper_inside flexCenter">
        {fetchData.loading === false && currentData.length ? (
          <Card_product data={currentData} />
        ) : (
          <GradientLoader />
        )}
      </div>
    </section>
  );
}
