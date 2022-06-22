import React from "react";
import { MockProduct } from "../../../redux/slice/caddySlice";
import Caddy from "./Caddy/Caddy";
import ProductCard from "./ProductCard/ProductCard";
import S from "./POC_features.module.scss";

import img_headphones from "./assets/headphones.jpg";
import img_speakers from "./assets/speakers.jpg";

const fakeProducts_1: MockProduct = {
  id: 1,
  name: "headphones",
  price: 1000,
  qty: 1,
  img: img_headphones,
};

const fakeProducts_2: MockProduct = {
  id: 2,
  name: "speakers",
  price: 550,
  qty: 1,
  img: img_speakers,
};

export default function POC_features() {
  return (
    <div className={S.wrapper}>
      <h1>POC customer basket management</h1>

      <section className={S.listProduct}>
        <ProductCard {...fakeProducts_1}></ProductCard>
        <ProductCard {...fakeProducts_2}></ProductCard>
      </section>
      <section className={S.wrapper_caddy}>
        <Caddy></Caddy>
      </section>
    </div>
  );
}
