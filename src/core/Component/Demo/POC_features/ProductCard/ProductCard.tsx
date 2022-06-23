import React, { useState } from "react";
import { useEffect } from "react";
import { addProduct, MockProduct } from "../../../../redux/slice/caddySlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/toolkit";
import S from "./Product.module.scss";

export default function Products({ id, name, price, qty, img }: MockProduct) {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [quantity] = useState(1);
  const [imgInfo, setImgInfo] = useState(loadImage(img));

  function loadImage(src: any) {
    img = new Image();
    img.src = src;
    const imgData = {
      x: 0,
      y: 0,
      src: src,
    };
    img.onload = function () {
      imgData.x = this.width;
      imgData.y = this.height;
    };
    img.onload();
    return imgData;
  }

  loadImage(img);

  function decrement(event: React.MouseEvent<HTMLButtonElement>) {
    if (inputRef && inputRef.current) {
      if (Number(inputRef.current.value) >= 1) {
        const newVal = String(parseInt(inputRef.current.value) - 1);
        inputRef.current.value = newVal === "0" ? "1" : newVal;
      }
    }
  }

  function increment(event: React.MouseEvent<HTMLButtonElement>) {
    if (inputRef && inputRef.current) {
      if (Number(inputRef.current.value) >= 1) {
        inputRef.current.value = String(parseInt(inputRef.current.value) + 1);
      }
    }
  }

  function addToCart(event: React.MouseEvent<HTMLButtonElement>) {
    if (inputRef && inputRef.current) {
      qty = Number(inputRef.current.value);
    }

    if (inputRef && inputRef.current) {
      inputRef.current.value = "1";
    }

    dispatch(
      addProduct({
        id,
        name,
        price,
        qty: qty,
        img: imgInfo,
      })
    );
  }

  useEffect(() => {
    const oldItems = JSON.parse(localStorage.getItem("caddy") || "[]")
      ? JSON.parse(localStorage.getItem("caddy") || "[]")
      : [];

    const newItems: MockProduct[] = { ...oldItems, ...products };

    localStorage.setItem("caddy", JSON.stringify(newItems));
  });

  return (
    <div className={S.productCard}>
      <label>{`${name.toUpperCase()} / ${price} €`}</label>
      <div className={S.img_container}>
        <img src={imgInfo.src} width={imgInfo.x} height={imgInfo.y}></img>
      </div>
      <div className={S.bloc_input}>
        <input type="text" hidden defaultValue="product_1" />
        <button
          type="button"
          onClick={(event) => {
            decrement(event);
          }}
        >
          -
        </button>
        <input type="number" defaultValue={quantity} ref={inputRef} min="1" />
        <button
          type="button"
          onClick={(event) => {
            increment(event);
          }}
        >
          +
        </button>
      </div>
      <button
        className={S.buy}
        type="button"
        onClick={(event) => {
          addToCart(event);
        }}
      >
        Ajouter au panier
      </button>
    </div>
  );
}
