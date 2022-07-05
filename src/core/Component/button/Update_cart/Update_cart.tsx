import React, { useRef, useEffect, useState, Dispatch } from "react";
import {
  addProduct,
  MockProduct,
  removeProduct,
  updateQty,
} from "../../../redux/slice/caddySlice";
import { controlCaddy } from "../../../utils/controlCaddy/controlCaddy";
import { useAppDispatch, useAppSelector } from "../../hooks/toolkit";
import S from "./Update_cart.module.scss";

export interface update_product {
  id: number;
  name: string;
  slug?: string;
  price: number;
  qty: number;
  img?: any;
  setter: Dispatch<boolean>;
}

export default function Update_cart({
  id,
  name,
  price,
  qty,
  slug,
  setter,
}: update_product) {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  function decrement(event: React.MouseEvent<HTMLButtonElement>) {
    if (inputRef && inputRef.current) {
      if (Number(inputRef.current.value) >= 1) {
        const newVal = String(parseInt(inputRef.current.value) - 1);
        inputRef.current.value = newVal;
        const qtyUpdate = parseInt(inputRef.current.value);
        if (qtyUpdate > 0) {
          dispatch(updateQty({ id, qty: qtyUpdate }));
        } else {
          setter(true);
          inputRef.current.value = "1";
        }
      }
    }
  }

  function increment(event: React.MouseEvent<HTMLButtonElement>) {
    if (inputRef && inputRef.current) {
      const maxQty = inputRef.current.getAttribute("max")!;
      if (Number(inputRef.current.value) >= 0) {
        const addOneItem = String(parseInt(inputRef.current.value) + 1);

        if (Number(addOneItem) <= Number(maxQty)) {
          inputRef.current.value = addOneItem;
          const qtyUpdate = parseInt(inputRef.current.value);
          dispatch(updateQty({ id, qty: qtyUpdate }));
        }
      }
    }
  }

  function deleteProduct(
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) {
    dispatch(removeProduct(id));
  }

  function addInstorage() {
    const oldItems = JSON.parse(localStorage.getItem("caddy") || "[]")
      ? JSON.parse(localStorage.getItem("caddy") || "[]")
      : [];

    console.log("yolo", products);

    const newItems: MockProduct[] = { ...oldItems, ...products };

    localStorage.setItem("caddy", JSON.stringify(newItems));
  }

  useEffect(() => {
    addInstorage();
  }, [products]);

  return (
    <>
      <div className={S.update_cart}>
        <div className={S.input_number}>
          <button
            type="button"
            onClick={(event) => {
              decrement(event);
            }}
          >
            -
          </button>
          <input
            type="number"
            defaultValue={qty}
            ref={inputRef}
            min="1"
            max="20"
          />
          <button
            type="button"
            onClick={(event) => {
              increment(event);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
